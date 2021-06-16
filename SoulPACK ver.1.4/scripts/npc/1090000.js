/* Kyrin
	Pirate Job Advancement
	Victoria Road : Nautilus Harbor (120000000)
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
				if (cm.getLevel() >= 30 && cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {
					status = 10;
					cm.sendNext("���󺸰��Ǳ���! �ʿ��Ը´� ���ο������� �����ؾ߰ڴ�.");
				} else if (cm.getLevel() >= 70 && (cm.getJob().equals(net.sf.odinms.client.MapleJob.INFIGHTER) || cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER))) {
					cm.sendOk("#b������#k���� �����Ŷ�. �װ� �ʿ��� ���ο������� ������ٰԴ�. �״� #b������#k�� ����ִ�. ");
					cm.dispose();
				} else if (cm.getLevel() < 30 && cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {
					cm.sendOk("���� �������Ŀ� �ٽ�ã�ƿ��Ŷ�.");
					cm.dispose();
				} else if (cm.getLevel() >= 120 && (cm.getJob().equals(net.sf.odinms.client.MapleJob.BUCCANEER) || cm.getJob().equals(net.sf.odinms.client.MapleJob.VALKYRIE))) {
					cm.sendOk("#b������.#k���� �����Ŷ�. �װ� �ʿ��� ���ο������� ������ٰԴ�. �״� #b������#k�� ����ִ�.");
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
				cm.changeJob(net.sf.odinms.client.MapleJob.PIRATE);
			}
			cm.sendOk("�ڳ״� ���� ������ �����̵Ǿ��ٳ�.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("2���������� #r�ǽ�����#k, #b��������#k�� �ִٳ�. �ǽ����Ŵ� �������� ���� ��� �����̸�, �������ʹ� ��Ŭ�������Ͽ� �����̿��� �����ϴ� �����̳�.");
		} else if (status == 12) {
			cm.sendSimple("��������� ���ڴ���?#b\r\n#L1#�ǽ�����#l\r\n#L2#��������#l");
		} else if (status == 13) {
			var jobName;
			if (selection == 1) {
				jobName = "�ǽ�����";
				job = net.sf.odinms.client.MapleJob.GUNSLINGER;
			} else if (selection == 2) {
				jobName = "��������";
				job = net.sf.odinms.client.MapleJob.BRAWLER;
			}
			cm.sendYesNo("�ڳ״� #r" + jobName + "#k �� �����Ͽ���. ������ ���������� �ϰڳ�?");
		} else if (status == 14) {
			cm.changeJob(job);
			cm.sendOk("�ڳ״� ���� ������ ��簡�Ǿ��ٳ�. �����ü��踦 �̲����ֽðԳ�.");
			cm.dispose();
		}
	}
}	
