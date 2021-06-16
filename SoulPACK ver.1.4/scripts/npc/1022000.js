/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)
*/

var status = 0;
var job;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.sendOk("������ �����ÿ� ��簡�Ƿ��� ��ѿ��浵 �̰ܳ����ϳ��.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getLevel() >= 10 && cm.getChar().getStr() >= 35)
					cm.sendNext("#r����#k�� �Ǳ����ؼ� ã�ƿԴ���?");
				else {
					cm.sendOk("#r����#k�� �Ǳ����ؼ��� ����10�̻� ��35�̻� �̾���մϴ�.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 && cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
					status = 10;
					cm.sendNext("���󺸰��Ǳ���! �ʿ��Ը´� ���ο������� �����ؾ߰ڴ�.");
				} else if (cm.getLevel() >= 70 && (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE) || cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER) || cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN))) {
					cm.sendOk("#bTylus#k���� �����Ŷ�. �װ� �ʿ��� ���ο������� ������ٰԴ�. �״� #b������#k�� ����ִ�. ");
					cm.dispose();
				} else if (cm.getLevel() < 30 && cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
					cm.sendOk("���� �������Ŀ� �ٽ�ã�ƿ��Ŷ�.");
					cm.dispose();
				} else if (cm.getLevel() >= 120 && (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER) || cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT) || cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT))) {
					cm.sendOk("#bHarmonia#k���� �����Ŷ�. �װ� �ʿ��� ���ο������� ������ٰԴ�. �׳�� #b������#k�� ����ִ�.");
					cm.dispose();
				} else {
					cm.sendOk("������ �����ÿ� ��簡�Ƿ��� ��ѿ��浵 �̰ܳ����ϳ��.");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("�ѹ������� ������ �ٽô¹ٲܼ����ٳ�. ����Ͻð�.");
		} else if (status == 2) {
			cm.sendYesNo("���� #r����#k�� �Ǳ⸦ ���ϴ°�?");
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.changeJob(net.sf.odinms.client.MapleJob.WARRIOR);
			}
			cm.sendOk("�ڳ״� ���� ������ ���簡�Ǿ��ٳ�.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("2���������� #r������#k, #b������#k, #r���Ǿ��#k�� �ִٳ�. �������� �Ѽհ˰����� �Ǵµμհ���,�����ʹ� �μյ��� �Ǵµμհ���, ���Ǿ���� â���ַξ��� ��������.");
		} else if (status == 12) {
			cm.sendSimple("��������� ���ڴ���?#b\r\n#L0#������#l\r\n#L1#������#l\r\n#L2#���Ǿ��#l#k");
		} else if (status == 13) {
			var jobName;
			if (selection == 0) {
				jobName = "������";
				job = net.sf.odinms.client.MapleJob.PAGE;
			} else if (selection == 1) {
				jobName = "������";
				job = net.sf.odinms.client.MapleJob.FIGHTER;
			} else {
				jobName = "���Ǿ��";
				job = net.sf.odinms.client.MapleJob.SPEARMAN;
			}
			cm.sendYesNo("�ڳ״� #r" + jobName + "#k �� �����Ͽ���. ������ ���������� �ϰڳ�?");
		} else if (status == 14) {
			cm.changeJob(job);
			cm.sendOk("�ڳ״� ���� ������ ��簡�Ǿ��ٳ�. �����ü��踦 �̲����ֽðԳ�.");
			cm.dispose();
		}
	}
}	
