/* Dark Lord
	Thief Job Advancement
	Victoria Road : Thieves' Hideout (103000003)
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
				if (cm.getLevel() >= 10 && cm.getChar().getDex() >= 25)
					cm.sendNext("#r����#k�� �Ǳ����ؼ� ã�ƿԴ���?");
				else {
					cm.sendOk("#r����#k�� �Ǳ����ؼ��� ����10�̻� ����25�̻� �̾���մϴ�.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 && cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
					status = 10;
					cm.sendNext("���󺸰��Ǳ���! �ʿ��Ը´� ���ο������� �����ؾ߰ڴ�.");
				} else if (cm.getLevel() >= 70 && (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN) || cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT))) {
					cm.sendOk("#bArec#k���� �����Ŷ�. �װ� �ʿ��� ���ο������� ������ٰԴ�. �״� #b������#k�� ����ִ�. ");
					cm.dispose();
				} else if (cm.getLevel() < 30 && cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
					cm.sendOk("���� �������Ŀ� �ٽ�ã�ƿ��Ŷ�.");
					cm.dispose();
				} else if (cm.getLevel() >= 120 && (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT) || cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT))) {
					cm.sendOk("#bHellin#k���� �����Ŷ�. �װ� �ʿ��� ���ο������� ������ٰԴ�. �״� #b������#k�� ����ִ�.");
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
				cm.changeJob(net.sf.odinms.client.MapleJob.THIEF);
			}
			cm.sendOk("�ڳ״� ���� ������ �����̵Ǿ��ٳ�.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("2���������� #r��ؽ�#k, #b����#k�� �ִٳ�. ��ؽ��� �ƴ븦���� ǥâ�������� �����̸�, ������ �ܰ��������Ͽ� �����̿��� �����ϴ� �����̳�.");
		} else if (status == 12) {
			cm.sendSimple("��������� ���ڴ���?#b\r\n#L0#��ؽ�#l\r\n#L1#����#l");
		} else if (status == 13) {
			var jobName;
			if (selection == 0) {
				jobName = "��ؽ�";
				job = net.sf.odinms.client.MapleJob.ASSASSIN;
			} else if (selection == 1) {
				jobName = "����";
				job = net.sf.odinms.client.MapleJob.BANDIT;
			}
			cm.sendYesNo("�ڳ״� #r" + jobName + "#k �� �����Ͽ���. ������ ���������� �ϰڳ�?");
		} else if (status == 14) {
			cm.changeJob(job);
			cm.sendOk("�ڳ״� ���� ������ ��簡�Ǿ��ٳ�. �����ü��踦 �̲����ֽðԳ�.");
			cm.dispose();
		}
	}
}	
