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
    �� ������ �� ���۱����� ��� ���� �������� �ּ����� �� ������ �� ���
    ������ ���� ó������ �� �ֽ��ϴ�.
	���۱� �� �������� <http://likms.assembly.go.kr/law/jsp/main.jsp>
*/

importPackage(net.sf.odinms.client);

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status == 4 && mode == 0) {
			cm.sendNext("�̷��� �ŷ����� ���� �ź��ϴٴ�, ���� �� ����!");
			cm.dispose();
			return;
		} else if (status == 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getQuestStatus(991021).equals(MapleQuestStatus.Status.NOT_STARTED)) {
				cm.sendSimple("������ ���� ����?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##d ������ ���#k#l");
			} else if (cm.getQuestStatus(991021).equals(MapleQuestStatus.Status.STARTED) && (!cm.haveItem(2010007, 1))) {
				cm.sendSimple("������ ���� ����?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list0#\r\n#L0##d ������ ��� (�Ϸᰡ��)#k#l");
			} else if (cm.getQuestStatus(991021).equals(MapleQuestStatus.Status.STARTED)) {
				cm.sendSimple("������ ���� ����?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list0#\r\n#L0##d ������ ��� (������)#k#l");
			} else {
				cm.sendOk("���� ������ �Ǿ���? �׷� �� ��~");
				cm.dispose();
			}
		} else if (status == 1) {
			if (cm.getQuestStatus(991021).equals(MapleQuestStatus.Status.NOT_STARTED)) {
				status = 2;
				cm.sendNext("����, ��~ ���� ��� ����? ����! ���� ���ο� �����ڵ鿡�� ���� ������ �˷��ִ� ����, ������.");
			} else if (cm.getQuestStatus(991021).equals(MapleQuestStatus.Status.STARTED) && (!cm.haveItem(2010007, 1))) {
				if (cm.getPlayer().getHp() == cm.getPlayer().getMaxHp()) {
//				if (cm.getHp() == cm.getMaxHp()) {
					status = 9;
					cm.sendNext("�������� �Դ� ��... �? ��������? ������ �ϴ� ���Կ� #b���� ������#k���� ������ ���� �ִٱ�. ������? ����~ ������ �������� ������ ������ �־ �˾Ƽ� ȸ���Ǳ⵵ ��. �����ٴ� ������ ������ �ʺ� ������ �̷� ȸ���� ������ ���� ����̾�.");
				} else {
					cm.sendNext("���� ü���� ������ ȸ������ �ʾҴ� ��? ���� �� ������ ����� �� �����ž�? Ȯ����?");
					cm.dispose();
				}
			} else if (cm.getQuestStatus(991021).equals(MapleQuestStatus.Status.STARTED)) {
				cm.sendOk("���� �� #r������ ���#k�� ���� ������ϱ� �׷���~ ������ â�� ��� #b�Һ� ��#k�� Ŭ���غ�. ������ ����� �����״� ���� Ŭ���ؼ� ������ ��.");
				cm.dispose();
			}
		} else if (status == 2) {
			cm.sendNext("����, ��~ ���� ��� ����? ����! ���� ���ο� �����ڵ鿡�� ���� ������ �˷��ִ� ����, ������.");
		} else if (status == 3) {
			cm.sendNextPrev("�׷��� ���� �϶�� ���׳ı�? ������! �ʴ� ȣ����� ����! ���� ����~ �̰� ���� �����ؼ� �ϴ� ���̾�.");
		} else if (status == 4) {
			cm.sendAcceptDecline("��... �׷� �峭 �� �ĺ���? ����!");
		} else if (status == 5) {
			status = 6;
			cm.startQuest(991021);
			cm.getPlayer().setHp(25);
			cm.getPlayer().updateSingleStat(MapleStat.HP, 25);
			cm.gainItem(2010007, 1);
			cm.sendNext("�����? HP �� 0�� �Ǹ� ū�ϳ��ٱ�. ��, #r������ ���#k�� �� �״� �Ծ��. ���� ���ž�. ������ â�� ��� ����Ŭ���غ�. ������â�� #bIŰ#k�� ������ ������ �����ٱ�.");
		} else if (status == 6) {
			cm.sendNext("�����? HP �� 0�� �Ǹ� ū�ϳ��ٱ�. ��, #r������ ���#k�� �� �״� �Ծ��. ���� ���ž�. ������ â�� ��� ����Ŭ���غ�. ������â�� #bIŰ#k�� ������ ������ �����ٱ�.");
		} else if (status == 7) {
			cm.sendPrev("���� �� ������ ���, ���� �Ծ�� ��. ������ �ٷ� HP�� ȸ���Ǵ� ���� ���� �ž�. HP�� ���� ȸ���� �� �ٽ� ���� �ɾ���.");
		} else if (status == 8) {
			cm.dispose();
		} else if (status == 9) {
			cm.sendNext("�������� �Դ� ��... �? ��������? ������ �ϴ� ���Կ� #b���� ������#k���� ������ ���� �ִٱ�. ������? ����~ ������ �������� ������ ������ �־ �˾Ƽ� ȸ���Ǳ⵵ ��. �����ٴ� ������ ������ �ʺ� ������ �̷� ȸ���� ������ ���� ����̾�.");
		} else if (status == 10) {
			cm.sendNextPrev("���Ҿ�! ���� �� ������� ������ ����. ������ �Ϸ��� �� ����־� �ϴ� �Ŵϱ� ������ ���� �϶�! ������ �� �����.");
		} else if (status == 11) {
			cm.sendNextPrev("���� ������ �� �� �ִ°� ���������. �ƽ����� ���� ������� �� �ð��̷α�. �ƹ��ɷ� ������ �϶�. �׷� �߰�~!!!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i2010000# ��� 3��\r\n#i2010009# �ʷϻ�� 3��\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#   10 exp");
		} else if (status == 12) {
			cm.completeQuest(991021);
			cm.gainExp(10);
			cm.gainItem(2010000, 3);
			cm.gainItem(2010009, 3);
			cm.dispose();
		}
	}
}
