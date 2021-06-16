/*
	MADE BY ���� (jantnic)
	NPC Name: 		First Eos Rock
	Map(s): 		Ludibrium : Eos Tower 100th Floor (221024400)
	Description: 		Brings you to 71st Floor
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
			cm.sendYesNo("#b������ž �ֹ���#k�� �������ó׿�. #b�ι�° ������ž#k���ִ� 71������ �̵��Ͻðڽ��ϱ�?");
		} else {
			cm.sendOk("#b������ž �ֹ���#k�� ���������� �����ó׿�. #b������ž �ֹ���#k�� �������������ø� �̿��� �Ұ����մϴ�.");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.gainItem(4001020, -1);
		cm.warp(221022900, 3);
		cm.dispose();
		}
	}
}