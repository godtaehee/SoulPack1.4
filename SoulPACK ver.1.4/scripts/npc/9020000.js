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

/* Lakelis
 * 
 * Victoria Road: Kerning City (103000000)
 * 
 * Kerning City Party Quest NPC 
*/

var status = 0;
var minLevel = 10;
var maxLevel = 30;
var minPlayers = 4;
var maxPlayers = 4;

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
			// Lakelis has no preamble, directly checks if you're in a party
			if (cm.getParty() == null) { // no party
				cm.sendOk("��Ƽ������ ��Ƽ�����Բ� ��Ƽ����Ʈ�� �غ��°� ���? �� ��Ƽ����Ʈ�� ����ũ�� �ſ� �߿�����! ��Ƽ����Ʈ�� �ϰ�ʹٸ� ��Ƽ���� ������ ���� �ɾ��ּ���.");
				cm.dispose();
                                return;
			}
			if (!cm.isLeader()) { // not party leader
				cm.sendSimple("��Ƽ���� ���� �����Ը��� �ɾ��ּ���.");
				cm.dispose();
                        }
			else {
				// check if all party members are within 21-30 range, etc.
				var party = cm.getParty().getMembers();
				var mapId = cm.getChar().getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				// Temp removal for testing
				if (party.size() < minPlayers || party.size() > maxPlayers) 
					next = false;
				else {
					for (var i = 0; i < party.size() && next; i++) {
						if ((party.get(i).getLevel() >= minLevel) && (party.get(i).getLevel() <= maxLevel))
							levelValid += 1;
						if (party.get(i).getMapid() == mapId)
							inMap += 1;
					}
					if (levelValid < minPlayers || inMap < minPlayers)
						next = false;
				}
				if (next) {
					// Kick it into action.  Lakelis says nothing here, just warps you in.
					var em = cm.getEventManager("KerningPQ");
					if (em == null) {
						cm.sendOk("Event�����ȿ� KerningPQ.js������ �����ϴ�.");
					}
					else {
						// Begin the PQ.
						em.startInstance(cm.getParty(),cm.getChar().getMap());
						// Remove pass/coupons
						party = cm.getChar().getEventInstance().getPlayers();
						cm.removeFromParty(4001008, party);
						cm.removeFromParty(4001007, party);
					}
					cm.dispose();
				}
				else {
					cm.sendOk("��Ƽ�ο��� 4���� �ʰ��ϰų� 4��̸��̾�� �ȵ˴ϴ�. �� ��Ƽ����Ʈ�� ���� 4���̼��� �����մϴ�. ��Ƽ�ο��� 4������ ���߽��Ŀ� �ٽ� �����ɾ��ּ���.");
					cm.dispose();
				}
			}
		}
		else {
			cm.sendOk("�峭�ϼ���.");
			cm.dispose();
		}
	}
}