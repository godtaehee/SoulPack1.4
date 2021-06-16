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

import net.sf.odinms.client.MapleBuffStat;
import net.sf.odinms.client.MapleCharacter;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.net.AbstractMaplePacketHandler;
import net.sf.odinms.net.MaplePacketHandler;
import net.sf.odinms.server.maps.MapleSummon;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.tools.data.input.SeekableLittleEndianAccessor;
import java.util.Iterator;

/**
 *
 * @author Jan
 */

public class DamageSummonHandler extends AbstractMaplePacketHandler implements MaplePacketHandler {
	public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
		// Ramon 93 00 69 00 00 00 FF 32 02 00 00 98 40 7C 00 01 -> 562 dmg
		// Ramon 93 00 8E 00 00 00 FF 00 00 00 00 05 87 01 00 00 -> miss
		int skillid = slea.readInt(); //Bugged? might not be skillid. Any hints are welcome -> Ramon
		int unkByte = slea.readByte();
		int damage = slea.readInt();
		int monsterIdFrom = slea.readInt();
		//theres another byte here. hmm


		MapleCharacter player = c.getPlayer();
		Iterator<MapleSummon> iter = c.getPlayer().getSummons().values().iterator();
		while(iter.hasNext()) {
			MapleSummon summon = iter.next();
			if (summon.isPuppet() && summon.getOwner() == player) { //We can only have one puppet(AFAIK O.O) so this check is safe.
				summon.addHP(-damage);
					if (summon.getHP() <= 0) {
						player.cancelEffectFromBuffStat(MapleBuffStat.PUPPET);
					}
				player.getMap().broadcastMessage(player, MaplePacketCreator.damageSummon(player.getId(), summon.getSkill(), damage, unkByte, monsterIdFrom), summon.getPosition());
				break;
			}
		}
	}
}
