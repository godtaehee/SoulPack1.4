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

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status == 0 && mode == 0) {
			cm.sendNext("�̺�, �ڳ�! ģ�� ����� ������ �� �ƴѰ�? ģ�� ����� �����ϴٸ� ���� �ŷ��� ���°� ���? ����~");
			cm.dispose();
			return;
		} else if (status >= 1 && mode == 0) {
			cm.sendNext("�̺�, �ڳ�! ģ�� ����� ������ �� �ƴѰ�? ģ�� ����� �����ϴٸ� ���� �ŷ��� ���°� ���? ����~");
			cm.dispose();
			return;
		}	
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendYesNo("���õ� �մ��� ���ƾ� ���ٵ�... ��! ���! �ڳ� ģ�� ����� �ø��� ������ ������? �ڳ� ���� ���� �� ���� ģ���� ������ ������ ���ٴ� ������ ����ٳ�. ���... �޼Ҹ� ���� �شٸ� �ڳ��� ģ�� ����� �÷��ְڳ�. ��� ���� ������ �ٸ� ĳ���Ϳ��Դ� ������� �����ϱ� ������ �϶�. �غ��ٰ�?");
		} else if (status == 1) {
			cm.sendYesNo("���Ҿ�! �߻����߳�. ������ �״��� ����� �ʾ�. ���� ū �� �԰� #r��������#k�� �����߱� ��������. #bģ�� ��� 5���� �߰� �ϴ� �� 5�� �޼�#k���. ���� �����δ� ���� �ʴ´ٳ�. �� �� ��α⸸ �ϸ� ������ ����� �þ�� ���̴ϱ� ģ�� ����� ������ ����̶�� �غ��� �͵� ������ �ʾ�. �? 5�� �޼� ���ڳ�?");
		} else if (status == 2) {
			var capacity = cm.getPlayer().getBuddylist().getCapacity();
			if (capacity >= 100 || cm.getMeso() < 50000) {
				cm.sendNext("�ڳ�... #b5�� �޼�#k�� Ȯ���� ������ �ִ� �ǰ�? ���� �׷��ٸ� ģ�� ����� �ִ�� �þ �ִ°� �ƴ��� Ȯ���� �ְ�. �ƹ��� ���� ���� �ϴ��� ģ�� ����� �⺻ ������ �����ؼ� #b100�� �̻�#k �þ �� ���ٳ�.");
				cm.dispose();
			} else {
				var newcapacity = capacity + 5;
				cm.gainMeso(-50000);
				cm.updateBuddyCapacity(newcapacity);
				cm.sendOk("���Ҿ�! �ڳ��� ģ�� ����� 5�� �þ ���� ���ϼ�. �� �� Ȯ���� ���Գ�. �׸��� ���� �׷��� ģ�� ����� �����ϴٸ� �������� �� ã�ƿ� �ְ�. �� ���̶� �÷����״ϱ� ����. ���� ��¥�δ� �ȵ�����... �׷� �߰���~");
				cm.dispose();
			}
		}
	}
}
