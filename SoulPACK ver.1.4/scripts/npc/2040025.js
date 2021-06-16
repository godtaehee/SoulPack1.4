/*
	MADE BY ���� (jantnic)
	NPC Name: 		Second Eos Rock
	Map(s): 		Ludibrium : Eos Tower 71st Floor (221022900)
	Description: 		Brings you to 100th Floor or 71st Floor
*/
var status = 0;
var map;

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
			cm.sendSimple("#b������ž �ֹ���#k�� �������ó׿�.#b\r\n#L0#ù��° ������ž���ִ°����� �̵��ϱ�(100��)#l\r\n#L1#����° ������ž���ִ°����� �̵��ϱ�(41��)#l");
		} else {
			cm.sendOk("#b������ž �ֹ���#k�� ���������� �����ó׿�. #b������ž �ֹ���#k�� �������������ø� �̿��� �Ұ����մϴ�.");
			cm.dispose();
		}
	} else if (status == 1) {
		if (selection == 0) {
			cm.sendYesNo("#b������ž �ֹ���#k�� ����Ͽ� #ù��° ������ž#k���ִ� 100������ �̵��Ͻðڽ��ϱ�?");
			map = 221024400;
		} else {
			cm.sendYesNo("#b������ž �ֹ���#k�� ����Ͽ� #����° ������ž#k���ִ� 41������ �̵��Ͻðڽ��ϱ�?");
			map = 221021700;
		}
	} else if (status == 2) {
		cm.gainItem(4001020, -1);
		cm.warp(map, 3);
		cm.dispose();
		}
	}
}