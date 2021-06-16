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
var maps = Array(910000001, 910000002, 910000003, 910000004, 910000005, 910000006, 910000007, 910000008, 910000009, 910000010, 910000011, 910000012, 910000013, 910000014, 910000015, 910000016, 910000017);
var names = Array("#g[�� �����]#k ��������1 [ŷ������]", "#g[�� �����]#k ��������2 [�˸�����]", "#g[�� �����]#k ��������3 [�����Ƚ�]", "#g[�� �����]#k ��������4 [�ִϾ� �߷�]", "#g[�� �����]#k ��������5 [����Ƽ�� ����]", "#g[�� �����]#k ��������6 [��� �ӽ���]", "#g[�� �����]#k ��������7 [���� �� ����]", "#g[�� �����]#k ��������8 [�������]", "#g[�� �����]#k ��������9 [��ũ �����]", "#g[�� �����]#k ��������10 [���������� ���۸�]", "#g[�� �����]#k ��������11 [���ܸ�]", "#g[�� �����]#k ��������12 [�Ҿƹ���<<������]", "#g[�� �����]#k ��������13 [������]", "#g[�� �����]#k ��������14 [���帶��]", "#g[�� �����]#k ��������15 [�ӽ���]", "#g[�� �����]#k �������� 16 [ũ���� �߷�]", "#g[�� �����]#k �������� 17 [��ŰŸ�� ��Ƽ]")
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
			cm.sendNext("#b#h ##k�� �ȳ��ϼ���? �������� ���� NPC ����ũ �Դϴ�");
		} else if (status == 1) {
			cm.sendNextPrev("�������� ����ʹ� �� 17���� ������ 1~17���� ���������� ������ �پ��� �������� �غ�Ǿ��ֽ��ϴ� �������� Ź���� ������̸� �������� ������ŭ ���輺�� ����ġ �ʽ��ϴ� �ε� ������ �����ϼż� ���� �Ͻñ� �ٶ��ϴ�")
		} else if (status == 2) {
			var selStr = "� �������忡 ���ǲ��ϱ�? �������ּ���#b";
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