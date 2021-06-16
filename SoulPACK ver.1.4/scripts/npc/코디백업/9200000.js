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

/*
 Agatha - Orbis Platform Usher
 Warp NPC
*/

var status = 0;
var maps = new Array(200080101,220020600, 104000000, 102000000, 100000000, 103000000,101000000, 105040300,200000000, 211000000,110000000, 220000000,  230000000, 260000000, 250000000, 251000000,221000000,600000000,801040000);
var mapNames = new Array("#r�̷ι̷� ��Ƽ����Ʈ(������)#k ��������:30~100 ","��ǳ�� �����","�����ױ�", "�丮��", "��׽ý�", "Ŀ�׽�Ƽ","�����Ͼ�","�����ǿ��","������", "������","�÷θ�����ġ", "���긮��", "����Ƹ���", "�Ƹ���Ʈ", "��������", "���Ÿ��","������������","����������Ƽ","���̵� �ƿ�");
var selectedMap = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		var where = "���� �̵��Ͻðڽ��ϱ�?\r\n�ѹ� �̵��Ͻôµ� ��� ����� #r5,000#k�޼��Դϴ�.\r\n����������������������������������������������";
		for (var i = 0; i < maps.length; i++) {
			where += "\r\n#L" + i + "# " + mapNames[i] + "#l";
		}
		cm.sendSimple(where);
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
					cm.sendNext ("����,����������.������!");
					selectedMap = selection;
					status++
			} else if (status == 2) {
					cm.warp(maps[selectedMap], 0);
					cm.gainMeso ("-5000");
					cm.dispose();
			}
		}
	}
}