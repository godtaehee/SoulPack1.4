/*
	! �� ��ũ��Ʈ�� ��ũ��Ʈ ����Ŀ ����(w3aries)�� �����Ͽ����ϴ�.
	! �� ��ũ��Ʈ�� ���ѹ��� �Ǿ����� ������� �����մϴ�.
	! �� �ּ��� �������� ���ǰ� ������ ������ �����մϴ�.
      Copyright (C) 2008 Script Maker ���� <w3aries@naver.com>
*/

var status = -1;
var skin = Array(0, 1, 2, 3, 4);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status == 1 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("�������! ���� ��׽ý� �Ǻΰ����ǿ� ���Ű� ȯ���ؿ�. Ȥ�� ��ó�� �����ϰ� �ǰ��ϰ� �Ƹ��ٿ� �Ǻθ� ���Ͻó���? #b��׽ý� �Ǻΰ��� ����#k�� �ִٸ� ���Ͻô� ��� �Ǻθ� �� �� �帰��ϴ�. �� �� �ϰ� ������ �ð� ���ô°� �����?");
		} else if (status == 1) {
			cm.sendStyle("���� ������ Ư�� ������ ���� �Ǻΰ��� ���� ����� �� �� �ִ�ϴ�. � �Ǻθ� ���Ͻó���? ��� ������~", skin);
		} else if (status == 2) {
			cm.dispose();
			if (cm.haveItem(5153000)) {
				cm.gainItem(5153000, -1);
				cm.setSkin(skin[selection]);
//				cm.sendOk("");
			} else {
				cm.sendNext("��... ���� ���� �Ǻΰ��� ������ ������ ���� ������ ������. �˼������� ������ ���ٸ� �Ǻ� ������ �� �帱���� ����ϴ�.");
			}
		}
	}
}