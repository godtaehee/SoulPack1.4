/*
This file is part of the OdinMS Maple Story Server
Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
Matthias Butz <matze@odinms.de>
Jan Christian Meyer <vimes@odinms.de>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License version 3
as published by the Free Software Foundation. You may not use, modify
or distribute this program under any other version of the
GNU Affero General Public License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package net.sf.odinms.net.channel.handler;

import java.awt.Point;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import net.sf.odinms.client.ISkill;
import net.sf.odinms.client.MapleBuffStat;
import net.sf.odinms.client.MapleCharacter;
import net.sf.odinms.client.MapleJob;
import net.sf.odinms.client.SkillFactory;
import net.sf.odinms.client.anticheat.CheatingOffense;
import net.sf.odinms.client.status.MonsterStatus;
import net.sf.odinms.client.status.MonsterStatusEffect;
import net.sf.odinms.net.AbstractMaplePacketHandler;
import net.sf.odinms.server.AutobanManager;
import net.sf.odinms.server.MapleStatEffect;
import net.sf.odinms.server.TimerManager;
import net.sf.odinms.server.life.Element;
import net.sf.odinms.server.life.ElementalEffectiveness;
import net.sf.odinms.server.life.MapleMonster;
import net.sf.odinms.server.maps.MapleMap;
import net.sf.odinms.server.maps.MapleMapItem;
import net.sf.odinms.server.maps.MapleMapObject;
import net.sf.odinms.server.maps.MapleMapObjectType;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.tools.Pair;
import net.sf.odinms.tools.data.input.LittleEndianAccessor;

public abstract class AbstractDealDamageHandler extends AbstractMaplePacketHandler {
        // private static Logger log = LoggerFactory.getLogger(AbstractDealDamageHandler.class);

        protected class AttackInfo {

                public int numAttacked,  numDamage,  numAttackedAndDamage;
                public int skill,  stance,  direction,  charge;
                public List<Pair<Integer, List<Integer>>> allDamage;
                public boolean isHH = false;
                public int speed = 4;

                private MapleStatEffect getAttackEffect(MapleCharacter chr, ISkill theSkill) {
                        ISkill mySkill = theSkill;
                        if (mySkill == null) {
                                mySkill = SkillFactory.getSkill(skill);
                        }
                        int skillLevel = chr.getSkillLevel(mySkill);
                        if (skillLevel == 0) {
                                return null;
                        }
                        return mySkill.getEffect(skillLevel);
                }

                public MapleStatEffect getAttackEffect(MapleCharacter chr) {
                        return getAttackEffect(chr, null);
                }
        }

        protected synchronized void applyAttack(AttackInfo attack, MapleCharacter player, int maxDamagePerMonster, int attackCount) {
                player.getCheatTracker().resetHPRegen();
                player.getCheatTracker().checkAttack(attack.skill);

                ISkill theSkill = null;
                MapleStatEffect attackEffect = null;
                if (attack.skill != 0) {
                        theSkill = SkillFactory.getSkill(attack.skill);
                        attackEffect = attack.getAttackEffect(player, theSkill);
                        if (attackEffect == null) {
                                player.getClient().getSession().write(MaplePacketCreator.enableActions());
                                return;
                        }
                        if (attack.skill != 2301002) {
                                // heal is both an attack and a special move (healing)
                                // so we'll let the whole applying magic live in the special move part
                                if (player.isAlive()) {
                                        attackEffect.applyTo(player);
                                } else {
                                        player.getClient().getSession().write(MaplePacketCreator.enableActions());
                                }
                        }
                }
                if (!player.isAlive()) {
                        player.getCheatTracker().registerOffense(CheatingOffense.ATTACKING_WHILE_DEAD);
                        return;
                }
                // meso explosion has a variable bullet count
                if (attackCount != attack.numDamage && attack.skill != 4211006) {
                        player.getCheatTracker().registerOffense(CheatingOffense.MISMATCHING_BULLETCOUNT, attack.numDamage + "/" + attackCount);
                        return;
                }
                int totDamage = 0;
                final MapleMap map = player.getMap();

                if (attack.skill == 4211006) { // meso explosion
                        int delay = 0;
                        for (Pair<Integer, List<Integer>> oned : attack.allDamage) {
                                MapleMapObject mapobject = map.getMapObject(oned.getLeft().intValue());
                                if (mapobject != null && mapobject.getType() == MapleMapObjectType.ITEM) {
                                        final MapleMapItem mapitem = (MapleMapItem) mapobject;
                                        if (mapitem.getMeso() > 0) {
                                                synchronized (mapitem) {
                                                        if (mapitem.isPickedUp()) {
                                                                return;
                                                        }
                                                        TimerManager.getInstance().schedule(new Runnable() {

                                                                public void run() {
                                                                        map.removeMapObject(mapitem);
                                                                        map.broadcastMessage(MaplePacketCreator.removeItemFromMap(mapitem.getObjectId(), 4, 0), mapitem.getPosition());
                                                                        mapitem.setPickedUp(true);
                                                                }
                                                        }, delay);
                                                        delay += 100;
                                                }
                                        } else if (mapitem.getMeso() == 0) {
                                                player.getCheatTracker().registerOffense(CheatingOffense.ETC_EXPLOSION);
                                                return;
                                        }
                                } else if (mapobject != null && mapobject.getType() != MapleMapObjectType.MONSTER) {
                                        player.getCheatTracker().registerOffense(CheatingOffense.EXPLODING_NONEXISTANT);
                                        return; // etc explosion, exploding nonexistant things, etc.
                                }
                        }
                }

                for (Pair<Integer, List<Integer>> oned : attack.allDamage) {
                        MapleMonster monster = map.getMonsterByOid(oned.getLeft().intValue());

                        if (monster != null) {
                                int totDamageToOneMonster = 0;
                                for (Integer eachd : oned.getRight()) {
                                        totDamageToOneMonster += eachd.intValue();
                                }
                                totDamage += totDamageToOneMonster;

                                player.checkMonsterAggro(monster);

                                // anti-hack
                                if (totDamageToOneMonster > attack.numDamage + 1) {
                                        int dmgCheck = player.getCheatTracker().checkDamage(totDamageToOneMonster);
                                        if (dmgCheck > 5 && totDamageToOneMonster < 99999) {
                                                player.getCheatTracker().registerOffense(CheatingOffense.SAME_DAMAGE, dmgCheck + " times: " + totDamageToOneMonster);
                                        }
                                }

                                checkHighDamage(player, monster, attack, theSkill, attackEffect, totDamageToOneMonster, maxDamagePerMonster);

                                double distance = player.getPosition().distanceSq(monster.getPosition());
                                if (distance > 400000.0) { // 600^2, 550 is approximatly the range of ultis
                                        player.getCheatTracker().registerOffense(CheatingOffense.ATTACK_FARAWAY_MONSTER, Double.toString(Math.sqrt(distance)));
                                }

                                if (attack.skill == 2301002 && !monster.getUndead()) {
                                        player.getCheatTracker().registerOffense(CheatingOffense.HEAL_ATTACKING_UNDEAD);
                                        return;
                                }

                                // pickpocket
                                if (player.getBuffedValue(MapleBuffStat.PICKPOCKET) != null) {
                                        switch (attack.skill) {
                                                case 0:
                                                case 4001334:
                                                case 4201005:
                                                case 4211002:
                                                case 4211004:
                                                case 4211001:
                                                case 4221003:
                                                case 4221007:
                                                        handlePickPocket(player, monster, oned);
                                                        break;
                                                default:
                                                        break;
                                        }
                                }

                                // effects
                                switch (attack.skill) {
                                        case 1221011: //sanctuary
                                                if (attack.isHH) {
                                                        // TODO min damage still needs calculated.. using -20% as mindamage in the meantime.. seems to work
                                                        int HHDmg = (int) (player.calculateMaxBaseDamage(player.getTotalWatk()) * (theSkill.getEffect(player.getSkillLevel(theSkill)).getDamage() / 100));
                                                        HHDmg = (int) (Math.floor(Math.random() * (HHDmg - HHDmg * .80) + HHDmg * .80));
                                                        map.damageMonster(player, monster, HHDmg);
                                                }
                                                break;
                                        case 2121006: //paralyze
                                                if (theSkill.getEffect(player.getSkillLevel(theSkill)).makeChanceResult()) {
                                                        if (totDamageToOneMonster > 0 && monster.isAlive()) {
                                                                MonsterStatusEffect monsterStatusEffect = new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.FREEZE, 1), theSkill, false);
                                                                monster.applyStatus(player, monsterStatusEffect, false, theSkill.getEffect(player.getSkillLevel(theSkill)).getDuration() * 1000);
                                                        }
                                                }
                                                break;
                                        case 3221007: //snipe
                                                totDamageToOneMonster = 95000 + (int) Math.random() * 4999;
                                                break;
                                        case 4101005: //drain
                                                int gainhp = (int) ((double) totDamageToOneMonster * (double) SkillFactory.getSkill(4101005).getEffect(player.getSkillLevel(SkillFactory.getSkill(4101005))).getX() / 100.0);
                                                gainhp = Math.min(monster.getMaxHp(), Math.min(gainhp, player.getMaxHp() / 2));
                                                player.addHP(gainhp);
                                                break;
                                        case 5201004: //blank shot
                                                if (theSkill.getEffect(player.getSkillLevel(theSkill)).makeChanceResult()) {
                                                        MonsterStatusEffect monsterStatusEffect = new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.STUN, 1), theSkill, false);
                                                        monster.applyStatus(player, monsterStatusEffect, false, theSkill.getEffect(player.getSkillLevel(theSkill)).getDuration() * 1000);
                                                }
                                                break;
                                        default:
                                                //passives attack bonuses
                                                if (totDamageToOneMonster > 0 && monster.isAlive()) {
                                                        if (player.getBuffedValue(MapleBuffStat.BLIND) != null) {
                                                                if (SkillFactory.getSkill(3221006).getEffect(player.getSkillLevel(SkillFactory.getSkill(3221006))).makeChanceResult()) {
                                                                        MonsterStatusEffect monsterStatusEffect = new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.ACC, SkillFactory.getSkill(3221006).getEffect(player.getSkillLevel(SkillFactory.getSkill(3221006))).getX()), SkillFactory.getSkill(3221006), false);
                                                                        monster.applyStatus(player, monsterStatusEffect, false, SkillFactory.getSkill(3221006).getEffect(player.getSkillLevel(SkillFactory.getSkill(3221006))).getY() * 1000);

                                                                }
                                                        }
                                                        if (player.getBuffedValue(MapleBuffStat.HAMSTRING) != null) {
                                                                if (SkillFactory.getSkill(3121007).getEffect(player.getSkillLevel(SkillFactory.getSkill(3121007))).makeChanceResult()) {
                                                                        MonsterStatusEffect monsterStatusEffect = new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.SPEED, SkillFactory.getSkill(3121007).getEffect(player.getSkillLevel(SkillFactory.getSkill(3121007))).getX()), SkillFactory.getSkill(3121007), false);
                                                                        monster.applyStatus(player, monsterStatusEffect, false, SkillFactory.getSkill(3121007).getEffect(player.getSkillLevel(SkillFactory.getSkill(3121007))).getY() * 1000);
                                                                }
                                                        }
                                                        if (player.getJob().isA(MapleJob.WHITEKNIGHT)) {
                                                                int[] charges = {1211005, 1211006};
                                                                for (int charge : charges) {
                                                                        if (player.isBuffFrom(MapleBuffStat.WK_CHARGE, SkillFactory.getSkill(charge))) {
                                                                                final ElementalEffectiveness iceEffectiveness = monster.getEffectiveness(Element.ICE);
                                                                                if (iceEffectiveness == ElementalEffectiveness.NORMAL || iceEffectiveness == ElementalEffectiveness.WEAK) {
                                                                                        MonsterStatusEffect monsterStatusEffect = new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.FREEZE, 1), SkillFactory.getSkill(charge), false);
                                                                                        monster.applyStatus(player, monsterStatusEffect, false, SkillFactory.getSkill(charge).getEffect(player.getSkillLevel(SkillFactory.getSkill(charge))).getY() * 2000);
                                                                                }
                                                                                break;
                                                                        }
                                                                }
                                                        }
                                                }
                                                break;
                                }

                                //venom
                                if (player.getSkillLevel(SkillFactory.getSkill(4120005)) > 0) {
                                        MapleStatEffect venomEffect = SkillFactory.getSkill(4120005).getEffect(player.getSkillLevel(SkillFactory.getSkill(4120005)));
                                        for (int i = 0; i < attackCount; i++) {
                                                if (venomEffect.makeChanceResult()) {
                                                        if (monster.getVenomMulti() < 3) {
                                                                monster.setVenomMulti((monster.getVenomMulti() + 1));
                                                                MonsterStatusEffect monsterStatusEffect = new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.POISON, 1), SkillFactory.getSkill(4120005), false);
                                                                monster.applyStatus(player, monsterStatusEffect, false, venomEffect.getDuration(), true);
                                                        }
                                                }
                                        }
                                } else if (player.getSkillLevel(SkillFactory.getSkill(4220005)) > 0) {
                                        MapleStatEffect venomEffect = SkillFactory.getSkill(4220005).getEffect(player.getSkillLevel(SkillFactory.getSkill(4220005)));
                                        for (int i = 0; i < attackCount; i++) {
                                                if (venomEffect.makeChanceResult()) {
                                                        if (monster.getVenomMulti() < 3) {
                                                                monster.setVenomMulti((monster.getVenomMulti() + 1));
                                                                MonsterStatusEffect monsterStatusEffect = new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.POISON, 1), SkillFactory.getSkill(4220005), false);
                                                                monster.applyStatus(player, monsterStatusEffect, false, venomEffect.getDuration(), true);
                                                        }
                                                }
                                        }
                                }
                                if (totDamageToOneMonster > 0 && attackEffect != null && attackEffect.getMonsterStati().size() > 0) {
                                        if (attackEffect.makeChanceResult()) {
                                                MonsterStatusEffect monsterStatusEffect = new MonsterStatusEffect(attackEffect.getMonsterStati(), theSkill, false);
                                                monster.applyStatus(player, monsterStatusEffect, attackEffect.isPoison(), attackEffect.getDuration());
                                        }
                                }

                                //apply attack
                                if (!attack.isHH) {
                                        map.damageMonster(player, monster, totDamageToOneMonster);
                                }
                        }
                }
                if (totDamage > 1) {
                        player.getCheatTracker().setAttacksWithoutHit(player.getCheatTracker().getAttacksWithoutHit() + 1);
                        final int offenseLimit;
                        switch (attack.skill) {
                                case 3121004:
                                case 5221004:
                                        offenseLimit = 100;
                                        break;
                                default:
                                        offenseLimit = 500;
                                        break;
                        }
                        if (player.getCheatTracker().getAttacksWithoutHit() > offenseLimit) {
                                player.getCheatTracker().registerOffense(CheatingOffense.ATTACK_WITHOUT_GETTING_HIT,
                                        Integer.toString(player.getCheatTracker().getAttacksWithoutHit()));
                        }
                }
        }

        private void handlePickPocket(MapleCharacter player, MapleMonster monster, Pair<Integer, List<Integer>> oned) {
                int delay = 0;
                int maxmeso = player.getBuffedValue(MapleBuffStat.PICKPOCKET).intValue();
                int reqdamage = 20000;
                Point monsterPosition = monster.getPosition();

                for (Integer eachd : oned.getRight()) {
                        if (SkillFactory.getSkill(4211003).getEffect(player.getSkillLevel(SkillFactory.getSkill(4211003))).makeChanceResult()) {
                                double perc = (double) eachd / (double) reqdamage;

                                final int todrop = Math.min((int) Math.max(perc * (double) maxmeso, (double) 1), maxmeso);
                                final MapleMap tdmap = player.getMap();
                                final Point tdpos = new Point((int) (monsterPosition.getX() + (Math.random() * 100) - 50), (int) (monsterPosition.getY()));
                                final MapleMonster tdmob = monster;
                                final MapleCharacter tdchar = player;

                                TimerManager.getInstance().schedule(new Runnable() {

                                        public void run() {
                                                tdmap.spawnMesoDrop(todrop, todrop, tdpos, tdmob, tdchar, false);
                                        }
                                }, delay);

                                delay += 100;
                        }
                }
        }

        private void checkHighDamage(MapleCharacter player, MapleMonster monster, AttackInfo attack, ISkill theSkill, MapleStatEffect attackEffect, int damageToMonster, int maximumDamageToMonster) {
                if (!player.isGM()) {
                        int elementalMaxDamagePerMonster;
                        Element element = Element.NEUTRAL;
                        if (theSkill != null) {
                                element = theSkill.getElement();
                                int skillId = theSkill.getId();
                                switch (skillId) {
                                        case 3221007:
                                                maximumDamageToMonster = 99999;
                                                break;
                                        case 4211006:
                                                maximumDamageToMonster = 750000;
                                                break;
                                        case 4221001:
                                                maximumDamageToMonster = 400000;
                                                break;
                                }
                        }
                        if (player.getBuffedValue(MapleBuffStat.WK_CHARGE) != null) {
                                int chargeSkillId = player.getBuffSource(MapleBuffStat.WK_CHARGE);
                                switch (chargeSkillId) {
                                        case 1211003:
                                        case 1211004:
                                                element = Element.FIRE;
                                                break;
                                        case 1211005:
                                        case 1211006:
                                                element = Element.ICE;
                                                break;
                                        case 1211007:
                                        case 1211008:
                                                element = Element.LIGHTING;
                                                break;
                                        case 1221003:
                                        case 1221004:
                                                element = Element.HOLY;
                                                break;
                                        default:
                                                throw new RuntimeException("Unknown enum constant");
                                }
                                maximumDamageToMonster *= SkillFactory.getSkill(chargeSkillId).getEffect(player.getSkillLevel(SkillFactory.getSkill(chargeSkillId))).getDamage() / 100.0;
                        }
                        if (element != Element.NEUTRAL) {
                                double elementalEffect;
                                if (attack.skill == 3211003 || attack.skill == 3111003) { // inferno and blizzard
                                        elementalEffect = attackEffect.getX() / 200.0;
                                } else {
                                        elementalEffect = 0.5;
                                }
                                switch (monster.getEffectiveness(element)) {
                                        case IMMUNE:
                                                elementalMaxDamagePerMonster = 1;
                                                break;
                                        case NORMAL:
                                                elementalMaxDamagePerMonster = maximumDamageToMonster;
                                                break;
                                        case WEAK:
                                                elementalMaxDamagePerMonster = (int) (maximumDamageToMonster * (1.0 + elementalEffect));
                                                break;
                                        case STRONG:
                                                elementalMaxDamagePerMonster = (int) (maximumDamageToMonster * (1.0 - elementalEffect));
                                                break;
                                        default:
                                                throw new RuntimeException("Unknown enum constant");
                                }
                        } else {
                                elementalMaxDamagePerMonster = maximumDamageToMonster;
                        }
                        if (damageToMonster > elementalMaxDamagePerMonster) {
                                player.getCheatTracker().registerOffense(CheatingOffense.HIGH_DAMAGE);
                                // log.info("[h4x] Player {} is doing high damage to one monster: {} (maxdamage: {}, skill:
                                // {})",
                                // new Object[] { player.getName(), Integer.valueOf(totDamageToOneMonster),
                                // Integer.valueOf(maxDamagePerMonster), Integer.valueOf(attack.skill) });
                                if (damageToMonster > elementalMaxDamagePerMonster * 3) { // * 3 until implementation of lagsafe pingchecks for buff expiration
                                        AutobanManager.getInstance().autoban(player.getClient(), damageToMonster +
                                                " damage (level: " + player.getLevel() + " watk: " + player.getTotalWatk() +
                                                " skill: " + attack.skill + ", monster: " + monster.getId() + " assumed max damage: " +
                                                elementalMaxDamagePerMonster + ")");
                                }
                        }
                }
        }

        public AttackInfo parseDamage(LittleEndianAccessor lea, boolean ranged) {
                // TODO we need information if an attack was a crit or not but it does not seem to be in this packet - find out
                // if it is o.o
                // noncrit strafe
                // 24 00
                // 01
                // 14
                // FE FE 30 00
                // 00
                // 97
                // 04 06 99 2F EE 00 04 00 00 00 41
                // 6B 00 00 00
                // 06 81 00 01 00 00 5F 00 00 00 5F 00 D2 02
                // A3 19 00 00 43 0C 00 00 AD 0B 00 00 DB 12 00 00 64 00 5F 00
                //
                // fullcrit strafe:
                // 24 00
                // 01
                // 14
                // FE FE 30 00
                // 00
                // 97
                // 04 06 F5 C3 EE 00 04 00 00 00 41
                // 6B 00 00 00
                // 06 81 00 01 00 00 5F 00 00 00 5F 00 D2 02
                // 6E 0F 00 00 EA 12 00 00 58 15 00 00 56 11 00 00 64 00 5F 00
                AttackInfo ret = new AttackInfo();

                lea.readByte();
                ret.numAttackedAndDamage = lea.readByte();
                ret.numAttacked = (ret.numAttackedAndDamage >>> 4) & 0xF; // guess why there are no skills damaging more than 15 monsters...
                ret.numDamage = ret.numAttackedAndDamage & 0xF; // how often each single monster was attacked o.o
                ret.allDamage = new ArrayList<Pair<Integer, List<Integer>>>();
                ret.skill = lea.readInt();

                switch (ret.skill) {
                        case 2121001:
                        case 2221001:
                        case 2321001:
                        case 5101004:
                        case 5201002:
                                ret.charge = lea.readInt();
                                break;
                        default:
                                ret.charge = 0;
                                break;
                }

                if (ret.skill == 1221011) {
                        ret.isHH = true;
                }
                lea.readByte(); // always 0 (?)
                ret.stance = lea.readByte();

                if (ret.skill == 4211006) {
                        return parseMesoExplosion(lea, ret);
                }

                if (ranged) {
                        lea.readByte();
                        ret.speed = lea.readByte();
                        lea.readByte();
                        ret.direction = lea.readByte(); // contains direction on some 4th job skills
                        lea.skip(7);
                        // hurricane and pierce have extra 4 bytes :/
                        switch (ret.skill) {
                                case 3121004:
                                case 3221001:
                                case 5221004:
                                        lea.skip(4);
                                        break;
                                default:
                                        break;
                        }
                } else {
                        lea.readByte();
                        ret.speed = lea.readByte();
                        lea.skip(4);
                        if (ret.skill == 5201002) {
                                lea.skip(4);
                        }
                }

                for (int i = 0; i < ret.numAttacked; i++) {
                        int oid = lea.readInt();
                        // System.out.println("Unk2: " + HexTool.toString(lea.read(14)));
                        lea.skip(14); // seems to contain some position info o.o

                        List<Integer> allDamageNumbers = new ArrayList<Integer>();
                        for (int j = 0; j < ret.numDamage; j++) {
                                int damage = lea.readInt();
                                // System.out.println("Damage: " + damage);
                                if (ret.skill == 3221007) {
                                        damage += 0x80000000; // Critical damage = 0x80000000 + damage
                                }
                                allDamageNumbers.add(Integer.valueOf(damage));
                        }
                        if (ret.skill != 5221004) {
                                lea.skip(4);
                        }
                        ret.allDamage.add(new Pair<Integer, List<Integer>>(Integer.valueOf(oid), allDamageNumbers));
                }

                // System.out.println("Unk3: " + HexTool.toString(lea.read(4)));
                return ret;
        }

        public AttackInfo parseMesoExplosion(LittleEndianAccessor lea, AttackInfo ret) {

                if (ret.numAttackedAndDamage == 0) {
                        lea.skip(10);

                        int bullets = lea.readByte();
                        for (int j = 0; j < bullets; j++) {
                                int mesoid = lea.readInt();
                                lea.skip(1);
                                ret.allDamage.add(new Pair<Integer, List<Integer>>(Integer.valueOf(mesoid), null));
                        }
                        return ret;

                } else {
                        lea.skip(6);
                }

                for (int i = 0; i < ret.numAttacked + 1; i++) {

                        int oid = lea.readInt();

                        if (i < ret.numAttacked) {
                                lea.skip(12);
                                int bullets = lea.readByte();

                                List<Integer> allDamageNumbers = new ArrayList<Integer>();
                                for (int j = 0; j < bullets; j++) {
                                        int damage = lea.readInt();
                                        // System.out.println("Damage: " + damage);
                                        allDamageNumbers.add(Integer.valueOf(damage));
                                }
                                ret.allDamage.add(new Pair<Integer, List<Integer>>(Integer.valueOf(oid), allDamageNumbers));
                                lea.skip(4);

                        } else {

                                int bullets = lea.readByte();
                                for (int j = 0; j < bullets; j++) {
                                        int mesoid = lea.readInt();
                                        lea.skip(1);
                                        ret.allDamage.add(new Pair<Integer, List<Integer>>(Integer.valueOf(mesoid), null));
                                }
                        }
                }

                return ret;
        }
}