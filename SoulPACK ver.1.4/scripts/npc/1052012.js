/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
					   Matthias Butz <matze@odinms.de>
					   Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* Mia Warp
	So people aren't stuck in Nath.
*/

var status = 0;
var maps = Array(104000400, 101010100, 100000005, 105070002, 800010100, 200080000, 211040600, 105040320, 200010300, 105090900, 240020401, 240020101, 230040420, 220080001, 280030000, 240060200, 922010900, 221040400);
var names = Array("#g[�� ����]#k ����", "ŷ������", "�ӽ���", "����ӽ���", "�Ķ��ӽ���", "������ ��������", "��ŰŸ�� ��Ƽ", "����Ƽ�� ����", "���������", "�ִϾ� �߷�", "����", "�׸���", "�Ǿƴ���", "����������", "����", "ȥ����", "#g[�� ����]#k �˸�����", "#g[�� ����]#k ���帶��")
// var cost = Array(1000, 1000, 1000, 1000);
var selectedMap = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("������ �� �̿����ּ���~");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("#b#h ##k�� �ȳ��ϼ���?");
		} else if (status == 1) {
			cm.sendNextPrev("���� ���� NPC �� ���� �� �Դϴ�")
		} else if (status == 2) {
			var selStr = "� ������ �����Ƕ��ϱ�?#b";
			for (var i = 0; i < maps.length; i++) {
				selStr += "\r\n#L" + i + "#" + names[i] + "#l";
			}
			cm.sendSimple(selStr);
		} else if (status == 3) {
// 			   if (cm.getMeso() < cost[selection]) {
			   if (cm.getMeso() < 0) {
				cm.sendOk("�޼Ұ� �����մϴ�")
				cm.dispose();
			} else {
				cm.sendYesNo("#b" + names[selection] + "#k (��)�� ���ðڽ��ϱ�?");
				selectedMap = selection;
			}
		} else if (status == 4) {
// 			cm.gainMeso(-cost[selectedMap]);
			cm.warp(maps[selectedMap], 0);
			cm.dispose();
		}
	}
}	