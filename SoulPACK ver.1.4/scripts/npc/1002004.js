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
