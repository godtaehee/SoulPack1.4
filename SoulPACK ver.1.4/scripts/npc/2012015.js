/*
	ORBIS STONE 20TH fLOOR
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
			cm.sendYesNo("������ž �ֹ����� �������ó׿�... 1������ �ö󰡽ðٽ��ϱ�?");
		} else {
			cm.sendOk("������ž �ֹ����� ������ 1������ �̵��ϽǼ� �����ϴ�.");
			cm.dispose();
		}
	}
	if (status == 1) {
			cm.gainItem(4001019, -1);
			cm.warp(200080200);
			cm.dispose();
	}
}
