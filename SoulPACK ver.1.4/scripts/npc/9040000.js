/* 
 * This file is part of the OdinMS Maple Story Server
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

/* 
 * @Author Lerk
 * 
 * Shuang, Victoria Road: Excavation Site<Camp> (101030104)
 * 
 * Guild Quest start
 */

var status;
var GQItems = new Array(1032033, 4001024, 4001025, 4001026, 4001027, 4001028, 4001031, 4001032, 4001033, 4001034, 4001035, 4001037);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("�� �ٱ����������� ���� ������ �����ְ� �־�! �������� �ҷ�? #b\r\n#L0#��� ������� ����#l\r\n#L1#�̹� �ִ� ���������� �����Ѵ�#l");						
		}
		else if (status == 1) {
			if (selection == 0) { //Start
				if (cm.getPlayer().getGuildId() == 0 || cm.getPlayer().getGuildRank() >= 3) { //�ƴϿ� ���� ����� ��帶����/�θ�����
					cm.sendNext("�Ұ� ��� ������ �Ǵ� �θ������� �ν��Ͻ��� ���� �����Ҽ��ֽ��ϴ�");
					cm.dispose();
				}
				else {
                                        //no true requirements, make an instance and start it up
                                        //cm.startPQ("ZakumPQ");
                                        var em = cm.getEventManager("GuildQuest");
                                        if (em == null) {
                                                cm.sendOk("�� ������ ���� �������Դϴ�.");
                                        } else {
                                                if (getEimForGuild(em, cm.getPlayer().getGuildId()) != null) {
                                                        cm.sendOk("���� ���� �̹� �������̾� ��... ���߿� �ٽ� �õ���")
                                                }
                                                else {
                                                        //start GQ
                                                        var guildId = cm.getPlayer().getGuildId();
                                                        var eim = em.newInstance(guildId);
                                                        em.startInstance(eim, cm.getPlayer().getName());
                                                        
                                                        //force the two scripts on portals in the map
                                                        var map = eim.getMapInstance(990000000);
                                                        
                                                        map.getPortal(5).setScriptName("guildwaitingenter");
                                                        map.getPortal(4).setScriptName("guildwaitingexit");
                                                        
                                                        eim.registerPlayer(cm.getPlayer());
                                                        cm.guildMessage("The guild has been entered into the Guild Quest. Please report to Shuang at the Excavation Camp on channel " + cm.getC().getChannel() + ".");

                                                        //remove all GQ items from player entering
                                                        for (var i = 0; i < GQItems.length; i++) {
                                                                cm.removeAll(GQItems[i]);
                                                        }
                                                }
                                        }
                                        cm.dispose();
				}
			}
			else if (selection == 1) { //entering existing GQ
				if (cm.getPlayer().getGuildId() == 0) { //�ƴϿ� ���� ����Ǳ渶/�θ�
					cm.sendNext("��带 �����ؾ� �ν��Ͻ��� �Ҽ��־�.");
					cm.dispose();
				}
				else {
                                        var em = cm.getEventManager("GuildQuest");
                                        if (em == null) {
                                                cm.sendOk("This trial is currently under construction.");
                                        } else {
                                                var eim = getEimForGuild(em, cm.getPlayer().getGuildId());
                                                if (eim == null) {
                                                        cm.sendOk("���� ���� ���� �ν��Ͻ��� ��� ���� �ʾҾ�.");
                                                }
                                                else {
                                                        if ("true".equals(eim.getProperty("canEnter"))) {
                                                                eim.registerPlayer(cm.getPlayer());
                                                                
                                                                //remove all GQ items from player entering
                                                                for (var i = 0; i < GQItems.length; i++) {
                                                                        cm.removeAll(GQItems[i]);
                                                                }
                                                        }
                                                        else {
                                                                cm.sendOk("�˼������� ��ž��� ��尡 �ν��Ͻ����� ������ϴ�.  ���߿� �ٽýõ��غ��ʽÿ�.");
                                                        }
                                                }
                                        }
                                        cm.dispose();
                                }
			}
		}
	}
}

function getEimForGuild(em, id) {
        var stringId = "" + id;
        return em.getInstance(stringId);
}
