importPackage(net.sf.odinms.client);

var status = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (status == 3 && mode == 0) {
			cm.sendOk("����Ʈ�� ���� ������ #b�ʱ��ڱ�#k�� ���� �� ����.");
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
			if (cm.getQuestStatus(771021).equals(MapleQuestStatus.Status.NOT_STARTED)) {
				cm.sendSimple("�� ���ڿ��� ���� �ź��� ���� ��������...\r\n\r\n#L0##d�ʱ��ڱ� ����Ʈ#k#l");
		} else if (cm.getQuestStatus(771021).equals(MapleQuestStatus.Status.STARTED) && (cm.haveItem(4000019, 20))) {
				cm.sendSimple("�� ���ڿ��� ���� �ź��� ���� ��������...\r\n\r\n#L0##d�ʱ��ڱ� ����Ʈ(�Ϸᰡ��)#k#l");
		} else if (cm.getQuestStatus(771021).equals(MapleQuestStatus.Status.STARTED)) {
				cm.sendSimple("�� ���ڿ��� ���� �ź��� ���� ��������...\r\n\r\n#L0##d�ʱ��ڱ� ����Ʈ(������)#k#l");
			} else {
				cm.sendOk("����� �����ִ�.\r\n(�ʱ��ڱ� ����Ʈ�� �ѹ��� �����ϴ�.)");
				cm.dispose();
				}
	} else if (status == 1) {
			if (cm.getQuestStatus(771021).equals(MapleQuestStatus.Status.NOT_STARTED)) {
				status = 2;
				cm.sendNext("(�ȿ� ����� ���ִ�...)\r\n�� ���ڿ� �������� ������ 20�� ������ �ָ� �ʱ��ڱ��� �����...");
		} else if (cm.getQuestStatus(771021).equals(MapleQuestStatus.Status.STARTED) && (cm.haveItem(4000019, 20))) {
				status = 7;
				cm.sendNext("���ڱ� ���ڿ��� ���� ���� �����ϸ� ���ڰ� ������...");
		} else if (cm.getQuestStatus(771021).equals(MapleQuestStatus.Status.STARTED)) {
				cm.sendOk("���� ������ ������ ���°� ����.");
				cm.dispose();
			}	
	} else if (status == 2) {
				cm.sendNext("(�ȿ� ����� ���ִ�...)\r\n�� ���ڿ� �������� ������ 20�� ������ �ָ� �ʱ��ڱ��� �����...");
	} else if (status == 3) {
				cm.sendAcceptDecline("����Ʈ�� �Ϸ��� #b����(Accept)#k ���� �ʴ´ٸ� #b����(Decline)#k�� �����ÿ�.");
	} else if (status == 4) {
				status = 5;
				cm.startQuest(771021);
				cm.sendOk("#rTIP.�������� ������ �ʷϴ����̸� ������ ���´�ϴ�.#k")			
	} else if (status == 5) {
				cm.sendOk("#rTIP.�������� ������ �ʷϴ����̸� ������ ���´�ϴ�.#k")
	} else if (status == 6) {
				cm.dispose();			
	} else if (status == 7) {
				cm.sendNext("���ڱ� ���ڿ��� ���� ���� �����ϸ� ���ڰ� ������...");
	} else if (status == 8) {
				cm.sendOk("�� ���� ���� ���� �ʱ��ڱ� 50000000�޼Ұ� �ִ�.");
				cm.completeQuest(771021);
				cm.gainItem(4000019, -20);
				cm.gainMeso(50000000);
				cm.dispose();
				}
			}
		}
				 		