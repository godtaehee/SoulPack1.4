/*
	MADE BY ���� (jantnic)
*/

var cost = 5000;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
	} else {
		if(mode == 1) {
			status++;
		}
		if(mode == 0) {
			cm.sendNext("You must have some business to take care of here, right?");
			cm.dispose();
			return;
		}
		if(status == 0) {
			cm.sendYesNo("�ȳ��ϼ���. ������ ��ǥ�ҿ� �¶�� �մϴ�. ���� �������� ��Ƽ���� �Ȱ��ֽ��ϴ�. �����񽺷ΰ��� Ƽ���� 5,000�޼� �Դϴ�. #b#t4031045##k �������� Ƽ���� ��ǰǰ���?");
		} else if(status == 1) {
			if(cm.getMeso() >= cost && cm.canHold(4031045)) {
				cm.gainItem(4031045,1);
				cm.gainMeso(-cost);
				cm.dispose();
			} else {
				cm.sendOk("�˼������� Ƽ���� #b"+cost+" �޼�#k �Դϴ�.");
				cm.dispose();
			}
		}
	}
}
