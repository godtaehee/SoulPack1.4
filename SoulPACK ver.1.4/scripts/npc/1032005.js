/*
	ELLINIA VIP CAP	
	ELLINIA : ELLINIA
	MADE BY ���� (jantnic)
	HELP : ���� (w3aries)
*/

var status = -1;
var cost;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 1 && mode == 0) {
			cm.sendNext("�� �������� ���Ÿ��� �����ϴ�ϴ�. ���̱� �������� �̵��ϰ� �;����� �������� ���� �ýø� �̿��� �ּ���~");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("�ȳ��ϼ���~! ����ý��Դϴ�. ���� ������ ��Ŵ� �帮�� ������ �ýÿʹ� �޸� ����� ����ȭ�� ���񽺸� ������ �帮�� �ֽ��ϴ�. ����ýö� ������ ���� ��α� ������... �ܵ� 10000 �޼ҿ� �մ��� �����ϰ� ������ #b���̱� ����#k���� ��Ŵ� �帳�ϴ�.");
		} else if (status == 1) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendYesNo("Ư���� �ʺ��ڴ� 90% ���ϵ� �������� ��ð� ������ �� �� �̿��� ������. ���̱� ������ ���丮�� ���Ϸ��� �߾ӿ� �ִ� ���� ����� 24�ð� ���帶���� �ڸ���� �ִ� ���Դϴ�. #b1,000 �޼�#k�� ���̱� ������� �����ðڽ��ϱ�?");
				cost = 1000;
			} else {
				cm.sendYesNo("�ʺ��ڰ� �ƴ� �е鲲�� ������ ����� ��� �ް� �ֽ��ϴ�. ���̱� ������ ���丮�� ���Ϸ����� �߾ӿ� �ִ� ���� ������ 24�ð� ���帶���� �ڸ���� �ִ� ���Դϴ�. #b10,000 �޼�#k�� ���̱� ������� �����ðڽ��ϱ�?");
				cost = 10000;
			}
		} else if (status == 2) {
			if (cm.getMeso() < cost) {
				cm.sendNext("�޼Ұ� �����Ͻñ���. �˼������� ����� �������� ������ ���� ����ýø� �̿��Ͻ� �� �����ϴ�.")
				cm.dispose();
			} else {
				cm.gainMeso(-cost);
				cm.warp(105070001, 0);
				cm.dispose();
			}
		}
	}
}
