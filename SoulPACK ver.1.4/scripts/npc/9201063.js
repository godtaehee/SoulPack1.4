/*
	Ari
	NLC Random Hair/Hair Color Change
	MADE BY ���� (jantnic)
*/
var status = 0;
var beauty = 0;
var hairprice = 1000000;
var haircolorprice = 1000000;
var mhair = Array(30250, 30110, 30230, 30050, 30280, 30410, 30730, 30160, 30200, 30440, 30360, 30740, 30400);
var fhair = Array(31150, 31310, 31220, 31300, 31260, 31160, 31730, 31410, 31410, 31720, 31560, 31450);
var hairnew = Array();

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
			cm.sendSimple("���� �Ϲ����Դϴ�. ������ �Ͻðڽ��ϱ�?\r\n#L0#������ �췡��#l\r\n#L1#�Ӹ���Ÿ���� �ٲٰ� �;��#l\r\n#L2#�Ӹ������� �ٲٰ� �;��#l");						
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("��� ������ ��ðڽ��ϱ�?\r\n#L0#�Ӹ���Ÿ�� �Ϲ����� " + hairprice + " �޼�#l\r\n#L1#�Ӹ����� �Ϲ����� " + haircolorprice + " �޼�#l");
			} else if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mhair.length; i++) {
						hairnew.push(mhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				} 
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fhair.length; i++) {
						hairnew.push(fhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				}
				cm.sendYesNo("������ �Ӹ���Ÿ���� �ٲٽǰǰ���?");
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendYesNo("������ �Ӹ������� �ٲٽǰǰ���?");
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150030) == true){
					cm.gainItem(5150030, -1);
					cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
					cm.sendOk("�Ӹ���Ÿ���� �ٲ�����ϴ�. ���� �ſ��� Ȯ���ϼ���.");
				} else {
					cm.sendOk("�˼�������, ������ ������ �Ӹ���Ÿ���� �ٲܼ� �����ϴ�.");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151025) == true){
					cm.gainItem(5151025, -1);
					cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
					cm.sendOk("�Ӹ������� �ٲ�����ϴ�. ���� �ſ��� Ȯ���ϼ���.");
				} else {
					cm.sendOk("�˼�������, ������ ������ �Ӹ������� �ٲܼ� �����ϴ�.");
				}
			}
			if (beauty == 0){
				if (selection == 0 && cm.getMeso() >= hairprice) {
					cm.gainMeso(-hairprice);
					cm.gainItem(5150030, 1);
					cm.sendOk("�����մϴ�. ������ �� �̿��� �ּ���.");					
				} else if (selection == 1 && cm.getMeso() >= haircolorprice) {
					cm.gainMeso(-haircolorprice);
					cm.gainItem(5151025, 1);
					cm.sendOk("�����մϴ�. ������ �� �̿��� �ּ���.");
				} else {
					cm.sendOk("�˼�������, ������ �Ѱ��� 1,000,000 �޼��Դϴ�.");
				}
			}
		}
	}
}
