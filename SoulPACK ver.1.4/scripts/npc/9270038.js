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
		cm.sendSimple("�ȳ��ϼ��� �̰������� ��ſ�ð��Ǽ˳���? ���� ������ �Ͻǰǰ���?\r\n#L0##bĿ�׽�Ƽ��#k ����� Ƽ�� �����ϱ�#l\r\n#L1##bĿ�׽�Ƽ#k�� ���������� �̵��ϱ�#l");
	} else if (status == 1) {
		menu = selection;
		if (menu == 0) {
			cm.sendYesNo("Ŀ�׽�Ƽ�� Ƽ���� 12,000 �޼��Դϴ�. �����Ͻǰǰ���?");
		} else if (menu == 1) {
			cm.sendYesNo("Ŀ�׽�Ƽ�� ���������� �̵��Ͻðڽ��ϱ�?");
		}
	} else if (status == 2) {
		if (menu == 0) {
			if (!cm.canHold(4031732) || cm.getMeso() < cost) {
				cm.sendOk("�˼�������, 12,000 �޼Ұ������ø� Ŀ�׽�Ƽ��Ƽ���� �����ϽǼ� �����ϴ�.");
			} else {
				cm.gainMeso(-cost);
				cm.gainItem(4031732, 1);
			}
			cm.dispose();
		} else if(menu == 1) {
			if (!cm.haveItem(4031732)) {
				cm.sendNext("�˼�������, Ŀ�׽�Ƽ�� Ƽ���̾����ø� Ŀ�׽�Ƽ�� ���Ǽ������ϴ�.");
			} else {
				cm.gainItem(4031732, -1);
				cm.warp(540010001);
			}
			cm.dispose();
		}
	}
}