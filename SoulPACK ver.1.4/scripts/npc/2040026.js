/* 
	MADE BY ���� (jantnic)
	NPC Name: 		Third Eos Rock
	Map(s): 		Ludibrium : Eos Tower 41st Floor (221021700)
	Description: 		Brings you to 71st Floor or 1st Floor
*/
var status = 0;
var map;
var portal;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		if (cm.haveItem(4001020)) {
			cm.sendSimple("#b������ž �ֹ���#k�� �������ó׿�.#b\r\n#L0#�ι�° ������ž���ִ°����� �̵��ϱ�(71��)#l\r\n#L1#�׹�° ������ž���ִ°����� �̵��ϱ�(1��)#l");
		} else {
			cm.sendOk("#b������ž �ֹ���#k�� ���������� �����ó׿�. #b������ž �ֹ���#k�� �������������ø� �̿��� �Ұ����մϴ�.");
			cm.dispose();
		}
	} else if (status == 1) {
		if (selection == 0) {
			cm.sendYesNo("#b������ž �ֹ���#k�� ����Ͽ� #�ι�° ������ž#k���ִ� 71������ �̵��Ͻðڽ��ϱ�?");
			map = 221022900;
			portal = 3;
		} else {
			cm.sendYesNo("#b������ž �ֹ���#k�� ����Ͽ� #�׹�° ������ž#k���ִ� 1������ �̵��Ͻðڽ��ϱ�?");
			map = 221020000;
			portal = 4;
		}
	} else if (status == 2) {
		cm.gainItem(4001020, -1);
		cm.warp(map, portal);
		cm.dispose();
		}
	}
}