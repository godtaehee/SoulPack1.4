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
var maps = Array(100000000, 101000000, 102000000, 103000000, 120000000, 104000000, 105040300, 200000000, 211000000, 230000000, 220000000, 221000000, 222000000, 240000000, 250000000, 251000000, 800000000, 801000000, 260000000, 600000000, 280030000, 220080001, 240060200, 230040420, 980000000, 980010000);
var names = Array("��׽ý�", "�����Ͼ�", "�丮��", "Ŀ�׽�Ƽ","��ƿ���� ������","�����ױ�", "�����ǿ��", "������", "������", "����Ʒε�", "���긮��", "������������", "�Ʒ�����", "������", "����", "��긶��", "�����Ż�", "��͸���", "�Ƹ���Ʈ", "��������Ƽ","#r����", "#r��Ǯ", "#rȥ����", "#r�Ǿƴ���", "#r���� ī�Ϲ�", "#r������[���డ��,ī�Ϲ�����]);
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
			cm.sendNextPrev("�ٸ����� �����ϰ� ��������?")
		} else if (status == 2) {
			var selStr = "���� ��ŵ帱���?#b";
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