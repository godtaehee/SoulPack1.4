/*
	Mani
	NLC VIP HAIR/HAIR COLOR CHANGE
	MADE BY ���� (jantnic)
*/
var status = 0;
var beauty = 0;
var hairprice = 2000000;
var haircolorprice = 2000000;
var mhair = Array(30250, 30110, 30230, 30050, 30280, 30410, 30730, 30160, 30200);
var fhair = Array(31150, 31310, 31220, 31300, 31260, 31160, 31730, 31410, 31410);
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
			cm.sendSimple("���� ����� �Դϴ�. ������ �Ͻðڽ��ϱ�?\r\n#L0#������ �췡��#l\r\n#L1#�Ӹ���Ÿ���� �ٲٰ� �;��#l\r\n#L2#�Ӹ������� �ٲٰ� �;��#l");						
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("��� ������ ��ǰǰ���?\r\n#L0#�Ӹ��ٲٱ� ������ " + hairprice + " �޼ҿ� �첲��\r\n#L1#�Ӹ����ٲٱ� ������" + haircolorprice + " �޼ҿ� �첲��");
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
				cm.sendStyle("���ϴ� �Ӹ���Ÿ���� ����ּ���.", hairnew);
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("���ϴ� �Ӹ������� ����ּ���.", haircolor);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150031) == true){
					cm.gainItem(5150031, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("�� ���ϴ� �Ӹ���Ÿ�Ϸ� �ٲ�����ϴ�, ���� �ſ��� �ѹ� ������.");
				} else {
					cm.sendOk("�˼�������, ������ ������ ���ϴ� �Ӹ��� �ٲپ� �帱�� �����ϴ�.");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151026) == true){
					cm.gainItem(5151026, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("�� ���ϴ� �Ӹ������ �ٲ�����ϴ�, ���� �ſ��� �ѹ� ������.");
				} else {
					cm.sendOk("�˼�������, ������ ������ ���ϴ� �Ӹ������ �ٲپ� �帱�� �����ϴ�.");
				}
			}
			if (beauty == 0){
				if (selection == 0 && cm.getMeso() >= hairprice) {
					cm.gainMeso(-hairprice);
					cm.gainItem(5150031, 1);
					cm.sendOk("������ �� �̿��� �ּ���.");
				} else if (selection == 1 && cm.getMeso() >= haircolorprice) {
					cm.gainMeso(-haircolorprice);
					cm.gainItem(5151026, 1);
					cm.sendOk("������ �� �̿��� �ּ���.");
				} else {
					cm.sendOk("�˼�������, ������ �Ѱ��� 2,000,000 �޼��Դϴ�.");
				}
			}
		}
	}
}
