/*
	Nerbit
	NLC Random Eye Change
	MADE BY ���� (jantnic)
*/
var status = 0;
var beauty = 0;
var price = 1000000;
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012);
var fface = Array(21001, 21002, 21003, 21004, 21005, 21006, 21008, 21012, 21014, 21016);
var facenew = Array();

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
			cm.sendSimple("���� �����ܰ� �Դϴ�. ������ �Ͻðڽ��ϱ�?\r\n#L1#���������� " + price + " �޼ҿ� �첲��#l\r\n\#L2#�̹� ������ ������ �ֽ��ϴ�#l");
			} else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= price) {
					cm.gainMeso(-price);
					cm.gainItem(5152033, 1);
					cm.sendOk("�����մϴ�. ������ �� �̿��� �ּ���.");
				} else {
					cm.sendOk("�˼�������, ������ �Ѱ��� 1,000,000 �޼��Դϴ�.");
				}
				cm.dispose();
			} else if (selection == 2) {
				facenew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mface.length; i++) {
						facenew.push(mface[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
					}
				}
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fface.length; i++) {
						facenew.push(fface[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
					}
				}
				cm.sendYesNo("������ ����Ÿ���� �ٲٽǰǰ���?");
			}
		}
		else if (status == 2){	
			cm.dispose();
			if (cm.haveItem(5152033) == true){
				cm.gainItem(5152033, -1);
				cm.setFace(facenew[Math.floor(Math.random() * facenew.length)]);
				cm.sendOk("�� ����Ÿ���� �ٲ�����ϴ�. ���� �ſ��� Ȯ���ϼ���.");
			} else {
				cm.sendOk("�˼�������, ������ ������ ����Ÿ���� �ٲܼ� �����ϴ�.");
			}
		}
	}
}
