/*
	ORBIS STONE 1TH FLOOR
	MADE BY ���� (jantnic)
*/

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.dispose();
		return;
	}
	status++;
	if (status == 0) {
		if(cm.haveItem(4001019)) {
			cm.sendYesNo("������ž �ֹ����� �������ó׿�... 20������ ���ðڽ��ϱ�?");
		} else {
			cm.sendOk("������ž �ֹ����� ������ 20������ �̵��ϽǼ� �����ϴ�.");
			cm.dispose();
		}
	}
	if (status == 1) {
			cm.gainItem(4001019, -1);
			cm.warp(200082100);
			cm.dispose();
	}
}
