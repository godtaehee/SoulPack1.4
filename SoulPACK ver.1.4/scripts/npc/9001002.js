function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		status++;
		if(status == 0) {
			cm.sendSimple("ĳ�������Ϸ� �Ա���~ ���� �����Ͻ� �ݾ��� ����ּ���~ \r \r\n#b#L1#500,000 �޼� �� 1,000 ĳ��#l\r\n#L2#5,000,000 �޼� �� 9,000 ĳ��#l\r\n#L3#50,000,000 �޼� �� 84,000 ĳ��#l");
		} else if(status == 1) {
			if(selection == 1) {
				if(cm.getMeso() >= 500000) {
					cm.gainMeso(-500000);
					cm.gainnxCash(1000) 
				} else {
					cm.sendOk("�˼�������, �ּ��� 500,000 �޼��̻� �������ž��մϴ�.")
					cm.dispose();
				}
				cm.dispose();
			} else if(selection == 2) {
				if(cm.getMeso() >= 5000000) {
					cm.gainMeso(-5000000);
					cm.gainnxCash(9000);
				} else {
					cm.sendOk("�˼�������, �ּ��� 5,000,000 �޼��̻� �������ž��մϴ�.")
					cm.dispose();
				}
				cm.dispose();
			} else if(selection == 3) {
				if(cm.getMeso() >= 50000000) {
					cm.gainMeso(-50000000);
					cm.gainnxCash(84000);
				} else {
					cm.sendOk("�˼�������, �ּ��� 50,000,000 �޼��̻� �������ž��մϴ�.")
					cm.dispose();
				}
				cm.dispose();
			} else {
				cm.dispose();
			}				
		} else {
			cm.dispose();
		}
	}
}