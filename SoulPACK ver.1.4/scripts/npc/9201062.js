/* 
	J.J.
	NLC VIP EYE COLOR CHANGE
	MADE BY ���� (jantnic)
*/
var status = 0;
var price = 2000000;
var colors = Array();

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
			cm.sendSimple("���� �����ܰ� �Դϴ�. ������ �Ͻðڽ��ϱ�?\r\n#L1#������ " + price + "�޼ҿ� �췡��#l\r\n\#L2#�̹� �������־��#l");						
		} else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= price) {
					cm.gainMeso(-price);
					cm.gainItem(5152036, 1);
					cm.sendOk("�����մϴ�. ������ �� �̿��� �ּ���.");
				} else {
					cm.sendOk("�˼�������, ���� �Ѱ��� " + price + " �޼��Դϴ�.");
				}
				cm.dispose();
			} else if (selection == 2) {
				if (cm.getChar().getGender() == 0) {
					var current = cm.getChar().getFace()
 % 100 + 20000;
				}
				if (cm.getChar().getGender() == 1) {
					var current = cm.getChar().getFace()
 % 100 + 21000;
				}
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
				cm.sendStyle("���Ͻô� ���� ������ ����ּ���. ������ ��°ɷ� �������ּ���.", colors);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (cm.haveItem(5152036) == true){
				cm.gainItem(5152036, -1);
				cm.setFace(colors[selection]);
				cm.sendOk("�� �������� �ٲ�����ϴ�. ���� �ſ��� Ȯ���ϼ���.");
			} else {
				cm.sendOk("�˼�������, ������ ������ �������� �ٲپ� �帱�� �����ϴ�.");			
			}
		}
	}
}
