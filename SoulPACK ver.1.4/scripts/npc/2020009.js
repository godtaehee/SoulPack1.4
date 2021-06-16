/* Robeira
	Magician 3rd job advancement
	El Nath: Chief's Residence (211000001)
*/

importPackage(net.sf.odinms.client);

var status = 0;
var job;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 1) {
			cm.sendOk("������ �����ÿ� ��簡�Ƿ��� ��ѿ��浵 �̰ܳ����ϳ��.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (!(cm.getJob().equals(MapleJob.FP_WIZARD) ||
				cm.getJob().equals(MapleJob.IL_WIZARD) ||
				cm.getJob().equals(MapleJob.CLERIC))) {
				cm.sendOk("2���������� �����縸 �����մϴ�.");
				cm.dispose();
				return;
			}
			if ((cm.getJob().equals(MapleJob.FP_WIZARD) ||
				cm.getJob().equals(MapleJob.IL_WIZARD) ||
				cm.getJob().equals(MapleJob.CLERIC)) &&
				cm.getLevel() >= 70 && 
				cm.getChar().getRemainingSp() <= (cm.getLevel() - 70) * 3) {
				cm.sendNext("���� �ڳ״� 3�������� �Ҽ��ִٳ�. 3�������� 2���������� �νŴ� �����ϰ�ȭ���� ��ų�� ����Ҽ�����.");
			} else {
				cm.sendOk("3�������� �ϱ����ؼ��� ������ 70�̻��̾���ϸ�, ��ų����Ʈ�� 1���������� �Ұ����ϳ�.");
				cm.dispose();
			}
		} else if (status == 1) {
				if (cm.getJob().equals(MapleJob.FP_WIZARD)) {
					cm.changeJob(MapleJob.FP_MAGE);
					cm.getChar().gainAp(5);
					cm.sendOk("�ڳ� #b��/�� ������#k�� �Ǿ��ٳ�. 3�������� ������ŭ ��ġ�ִ»�Ȱ���ϽðԳ�.");
					cm.dispose();
				} else if (cm.getJob().equals(MapleJob.IL_WIZARD)) {
					cm.changeJob(MapleJob.IL_MAGE);
					cm.getChar().gainAp(5);
					cm.sendOk("�ڳ� #b���/�ݵ� ������#k�� �Ǿ��ٳ�. 3�������� ������ŭ ��ġ�ִ»�Ȱ���ϽðԳ�.");
					cm.dispose();
				} else if (cm.getJob().equals(MapleJob.CLERIC)) {
					cm.changeJob(MapleJob.PRIEST);
					cm.getChar().gainAp(5);
					cm.sendOk("�ڳ� #b������Ʈ#k�� �Ǿ��ٳ�. 3�������� ������ŭ ��ġ�ִ»�Ȱ���ϽðԳ�.");
					cm.dispose();
			} else {
				cm.sendAcceptDecline("But I can make you even stronger. Although you will have to prove not only your strength but your knowledge. Are you ready for the challenge?");
			}
		} 
	}
}	