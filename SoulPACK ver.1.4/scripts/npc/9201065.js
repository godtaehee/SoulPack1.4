/*
	Miranda
	NLC Skin Change
	MADE BY ���� (jantnic)
*/
var status = 0;
var price = 1000000;
var skin = Array(0, 1, 2, 3, 4);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("���� ��Ų�ɿ����Դϴ�. ������ �Ͻðڽ��ϱ�?\r\n#L1#��Ų�ɾ�������" + price + " �޼ҿ� �췡��#l\r\n\#L2#�̹� ������ ������ �ֽ��ϴ�.#l");
			} else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= price) {
					cm.gainMeso(-price);
					cm.gainItem(5153009, 1);
					cm.sendOk("�����մϴ�. ������ �� �̿����ּ���.");
				} else {
					cm.sendOk("�˼�������, ������ �Ѱ��� 1,000,000 �޼��Դϴ�.");
				}
				cm.dispose();
			} else if (selection == 2) {
				cm.sendStyle("���ϴ� �������� ����ּ���.", skin);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (cm.haveItem(5153009) == true){
				cm.gainItem(5153009, -1);
				cm.setSkin(skin[selection]);
				cm.sendOk("�� ���ϴ� ������� �ٲ�����ϴ�, ���� �ſ��� �ѹ� ������.");
			} else {
				cm.sendOk("�˼�������, ��Ų�ɾ������� ������ �������� �ٲܼ� �����ϴ�.");
			}
		}
	}
}
