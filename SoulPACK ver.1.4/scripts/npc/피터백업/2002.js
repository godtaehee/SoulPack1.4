/*
	�� ������ �븮���� �Ϻ� �����Դϴ�.
    Copyright (C) 2008 �븮 <dulely@naver.com>
                       ���� <w3aries@naver.com>
                       Ű�� <blac2002@naver.com>
                       ���� <gudjsgh6@naver.com>
                       ������ <rlaehdwns4@naver.com>
                       ������ <rlaeorjsrltk@naver.com>
                       ��ü <vkdnjel23@naver.com>
                       �ʽ� <aaaa9454@naver.com>
                       ȣ���� <hodong_sea@naver.com>
                       ���;� <ab1239@naver.com>
                       ������ <wkdtlguszoq@naver.com>

    �� ������ ���Ѿ��� ����� ������ �����̸� ����� �����մϴ�.
    �� ������ �ּ��� ���� �� ������ �� �� �����ڵ��� ���ǰ� �ʿ��մϴ�.
    �� ������ ���۱��� �� �����ڵ鿡�� ������ �� �����ڵ��� ���Ǿ���
    ���ܼ��� �� �ǿ��� �� ���۱ǹ� �������� ó�� ������ �� �ֽ��ϴ�.
	���۱� �� �������� <http://likms.assembly.go.kr/law/jsp/main.jsp>
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
			cm.sendNext("� �����°� �����ٵ�?");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("���񼭹��� ���Ű��� ȯ���մϴ�.\r\n�����ڴ� 1�������� �ϰ����? �׷� �ణ�� ����Ʈ�� �����Ͽ����մϴ�.\r\n�׷� ����غ��ðڽ��ϱ�?");
		} else if (status == 1) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
	
cm.sendYesNo("���� �̵��� �����ָ� �ʺ��� ķ������ 1�� �̵��� �ϰԵ˴ϴ�.\r\n�̵��� �ϰԵǸ� ������ ���߰��ż� �ʺ��� ķ������ 2�� �����ñ� �ٶ��ϴ�.");

				cost = 0;
			} else {
				cm.sendYesNo("���� �̵��� �����ָ� �ʺ��� ķ������ 1�� �̵��� �ϰԵ˴ϴ�.\r\n�̵��� �ϰԵǸ� ������ ���߰��ż� �ʺ��� ķ������ 2�� �����ñ� �ٶ��ϴ�..");
				cost = 0;
			}
		} else if (status == 2) {
			if (cm.getMeso() < cost) {
				cm.sendNext("�޼Ұ� �����Ͻñ���. �˼������� ����� �������� ������ ���� ����ýø� �̿��Ͻ� �� �����ϴ�.")
				cm.dispose();
			} else {
				cm.gainMeso(-cost);
				cm.warp(1, 0);

				cm.dispose();
			}
		}
	}
}
