/*
	KC - SGP
	MADE BY ���� (jantnic0
*/

var cost = 12000;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || (mode == 0 && status == 0)) {
		cm.dispose();
		return;
	}
	if (mode == 1) {
		status++;
	}
	if (mode == 0 && menu == 0) {
		cm.sendNext("�̰����� ���÷��� �������� �����ɾ��ּ���!");
		cm.dispose();
	}
	if (mode == 0 && menu == 1) {
		cm.dispose();
	}
	if (status == 0) {
		cm.sendSimple("�ȳ��ϼ��� �̰����� ���������̿���! �ް����ǰŸ� �̰����� ��õ�ص帮�� ���⿣ ���� 30�̻� ���͵��� ��ۿ�۴������\r\n#L0##b�̰�����#k ����� Ƽ�� �����ϱ�#l\r\n#L1##b������#k���� �̵��ϱ�#l");
	} else if (status == 1) {
		menu = selection;
		if (menu == 0) {
			cm.sendYesNo("�̰����� Ƽ���� 12,000 �޼��Դϴ�. �����Ͻǰǰ���?");
		} else if (menu == 1) {
			cm.sendYesNo("���������� �̵��Ͻðڽ��ϱ�?");
		}
	} else if (status == 2) {
		if (menu == 0) {
			if (!cm.canHold(4031731) || cm.getMeso() < cost) {
				cm.sendOk("�˼�������, 12,000 �޼Ұ������ø� �̰�����Ƽ���� �����ϽǼ� �����ϴ�.");
			} else {
				cm.gainMeso(-cost);
				cm.gainItem(4031731, 1);
			}
			cm.dispose();
		} else if(menu == 1) {
			if (!cm.haveItem(4031731)) {
				cm.sendNext("�˼�������, �̰����� Ƽ���̾����ø� �̰����� ���Ǽ������ϴ�.");
			} else {
				cm.gainItem(4031731, -1);
				cm.warp(540010100);
			}
			cm.dispose();
		}
	}
}