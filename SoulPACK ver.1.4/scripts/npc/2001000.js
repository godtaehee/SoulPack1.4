//	Clif
//	HappyVill NPC
//	Made : ���� (jantnic)

importPackage(net.sf.odinms.client);



var status = 0;
var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*50+1);


function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("61�⼼������ ������������.. �ູ�Ѹ������� ���� ��ġ�°� ���������ٳ�.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("�ڳ�. ��Ź�� ����ְ�. �� ���ڿ��� ������ ����ϴµ� �����⸣�� �����̵��� �������̴� ���������ڸ� �� ���ƸԾ������ �����������Ⱦ�! ��Ź�̴� �� ���������� ���ش��ְԳ�.\r\n�������ڴ� #b�Ķ�������,����������#k�� ������ �����������Ծ�.\r\n���� �������� 25���� ��ƿ��ְԳ�...");
			}
		else if (status == 1) {
			if (cm.getLevel() >= 10 && cm.haveItem(4031427, 25)) {
			cm.sendOk("����� ��ƿ����İ� �����߳�.. �츮���ڰ� �⻵�ϰڱ���..");
			} else {
			cm.sendOk("������ 10�̸��̰ų�, �������ڰ� ���ڶ��... ������ 10�̸��̸� �絹������ �����Ŷ�. �絹���Ǻ�Ź�� ����ָ� �絹���� �ڶ�� �ű��� �������� �شٴ���...");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(4031427, -25);
			cm.gainMeso(3000);
			cm.gainExp(1200);
			if ((itemchance >= 1) && (itemchance <= 20)) {
			cm.gainItem(2022178, itemamount);
			}
			else if ((itemchance >= 21) && (itemchance <= 40)) {
			cm.gainItem(2030000, itemamount);
			}
			else if ((itemchance >= 41) && (itemchance <= 50)) {
			cm.gainItem(2000006, itemamount);
			}
			else if ((itemchance >= 51) && (itemchance <= 60)) {
			cm.gainItem(2000002, itemamount);
			}
			else if ((itemchance >= 61) && (itemchance <= 70)) {
			cm.gainItem(2000000, itemamount);
			}
			else if (itemchance == 71) {
			cm.gainItem(2041005, 1);
			}
			else if (itemchance == 72) {
			cm.gainItem(2041002, 1);
			}
			else if (itemchance == 73) {
			cm.gainItem(2040310, 1);
			}
			else if (itemchance == 74) {
			cm.gainItem(2040511, 1);
			}
			else if (itemchance == 75) {
			cm.gainItem(2040402, 1);
			}
			else if (itemchance == 76) {
			cm.gainItem(2040902, 1);
			}
			else if (itemchance == 77) {
			cm.gainItem(2040603, 1);
			}
			else if (itemchance == 78) {
			cm.gainItem(2041011, 1);
			}
			else if (itemchance == 79) {
			cm.gainItem(2040002, 1);
			}	
			else if (itemchance == 80) {
			cm.gainItem(2044202, 1);
			}	
			else if (itemchance == 81) {
			cm.gainItem(2044402, 1);
			}
			else if (itemchance == 82) {
			cm.gainItem(2043802, 1);
			}
			else if (itemchance == 83) {
			cm.gainItem(2043102, 1);
			}	
			else if (itemchance == 84) {
			cm.gainItem(2043702, 1);
			}
			else if (itemchance == 85) {
			cm.gainItem(2044502, 1);
			}
			else if (itemchance == 86) {
			cm.gainItem(2044602, 1);
			}
			else if (itemchance == 87) {
			cm.gainItem(2043202, 1);
			}
			else if (itemchance == 88) {
			cm.gainItem(2043302, 1);
			}
			else if (itemchance == 89) {
			cm.gainItem(2044702, 1);
			}
			else if (itemchance == 90) {
			cm.gainItem(2043008, 1);
			}
			else if (itemchance == 91) {
			cm.gainItem(2044002, 1);
			}
			else if (itemchance == 92) {
			cm.gainItem(2044302, 1);
			}
			else if (itemchance == 93) {
			cm.gainItem(2044102, 1);
			}
			else if (itemchance == 94) {
			cm.gainItem(2043002, 1);
			}

			cm.dispose();
		}
	}
}
