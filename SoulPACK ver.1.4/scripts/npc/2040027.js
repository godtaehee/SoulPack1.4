/*
	MADE BY ���� (jantnic)
	NPC Name: 		Fourth Eos Rock
	Map(s): 		Ludibrium : Eos Tower 1st Floor (221020000)
	Description: 		Brings you to 41st Floor
*/
var status = 0;

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
			cm.sendYesNo("#b������ž �ֹ���#k�� �������ó׿�. #b����° ������ž#k���ִ� 41������ �̵��Ͻðڽ��ϱ�?");
		} else {
			cm.sendOk("#b������ž �ֹ���#k�� ���������� �����ó׿�. #b������ž �ֹ���#k�� �������������ø� �̿��� �Ұ����մϴ�.");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.gainItem(4001020, -1);
		cm.warp(221021700, 3);
		cm.dispose();
		}
	}
}