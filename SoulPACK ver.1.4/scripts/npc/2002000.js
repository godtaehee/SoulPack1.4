/*
		NPC : Rupi (2002000)
		HappyVill (209000000)
		MADE BY ����(jantnic)
*/
importPackage(net.sf.odinms.server.maps);

var status = 0;
var cost;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if ((status <= 2 && mode == 0) || (status == 4 && mode == 1)){
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (cm.getChar().getMapId() != 209000000) {
		if (status == 0) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendNext("�����Ͼƿ� ����� ���� ������ ���� ������ �ִٴ� �ҹ� �����̳���?");
				cost = 200;
			} else {
				cm.sendNext("�����Ͼƿ� ����� ���� ������ ���� ������ �ִٴ� �ҹ� �����̳���?");
				cost = 2000;
			}
		} else if (status == 1) {
			cm.sendNext("�����Ͼƿ� ����� ���� ��ʳ�° ���� �������ִٴ� ������ �ִٴ� �ҹ� �����˳���?");
		} else if (status == 2) {
			cm.sendYesNo("���Ͼ� ������ ������ ������ ������ ���� ��������?");
		} else if (status == 3) {
			cm.sendNext("���� �����帮��. ������ �ڵ��� ���ϾḶ������ ��ſ�ð��Ǽ���.");
		} else if (status == 4) {
			if (cm.getMeso() < cost) {
				cm.sendPrev("�˼�������, ���� �����Ͻó׿�.");
			} else {
				cm.gainMeso(-cost);
				cm.warp(209000000, 0);
				cm.dispose();
			}	
		}
	} else if (cm.getChar().getMapId() == 209000000) {
		if (status == 0) {
			cm.sendSimple ("#L0##b�����Ͼ�#k�� ���� �ھ��.#l\r\n#L1##b�� ��#k���� ���� ���ְ� �;��.#l");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendOk("���� �����帮��. ��ȸ�� ��ø� �̸����� �ǳ������.");
			} else if (selection == 1) {
				cm.sendOk("������ ������. �����ϾƷ� ����ٵ帮��.");
				cm.dispose();
			} 
		} else if (status == 2) {
			cm.warp(101000000, 0);
			cm.dispose();
			}
		}
	}
}