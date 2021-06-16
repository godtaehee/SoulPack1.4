/*
	Magician 4th job advancement
	Somewhere in Leafre (240010501)
	MADE BY ���� (jantnic)
*/

importPackage(net.sf.odinms.client);

var status = 0;
var job;

function start() {
	status = -1;
	action(1, 1, 0);
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
			if (!(cm.getJob().equals(MapleJob.FP_MAGE) ||
				cm.getJob().equals(MapleJob.IL_MAGE) ||
				cm.getJob().equals(MapleJob.PRIEST))) {
				cm.sendOk("3���������� �����縸 �����մϴ�.");
				cm.dispose();
				return;
			}
			if ((cm.getJob().equals(MapleJob.FP_MAGE) ||
				cm.getJob().equals(MapleJob.IL_MAGE) ||
				cm.getJob().equals(MapleJob.PRIEST)) &&
				cm.getLevel() >= 120 && 
				cm.getChar().getRemainingSp() <= (cm.getLevel() - 120) * 3) {
				cm.sendNext("���� �ڳ״� 4�������� �Ҽ��ִٳ�. 4�������� 2,3���������� �νŴ� �����ϰ�ȭ���� ��ų�� ����Ҽ�����. �׷��� �����͸��ϰ� ��ų���̶�°ɷ� ��ų�������ͷ����� �ø����ֳ�. ��ų���� �������͸� ������ �ߴ� �ʹ������� �������ðԳ�.");
			} else {
				cm.sendOk("4�������� �ϱ����ؼ��� ������ 120�̻��̾���ϸ�, ��ų����Ʈ�� 1���� ������������ ������ �Ұ����ϳ�.");
				cm.dispose();
			}
		} else if (status == 1) {
				if (cm.getJob().equals(MapleJob.FP_MAGE)) {
					cm.changeJob(MapleJob.FP_ARCHMAGE);
					cm.getChar().gainAp(5);
					cm.gainItem(2280003,1);
					cm.teachSkill(2121008, 1, 5);
					cm.teachSkill(2121001, 1, 5);
					cm.teachSkill(2121005, 1, 5);
					cm.teachSkill(2121003, 1, 5);
					cm.teachSkill(2121004, 1, 5);
					cm.teachSkill(2121002, 1, 5);
					cm.teachSkill(2121000, 1, 5);
					cm.teachSkill(2121007, 1, 5);
					cm.teachSkill(2121006, 1, 5);
					cm.sendOk("�ڳ� #b��/�� ��ũ������#k�� �Ǿ��ٳ�. 4�������� ������ŭ ��ġ�ִ»�Ȱ���ϽðԳ�.");
					cm.dispose();
				} else if (cm.getJob().equals(MapleJob.IL_MAGE)) {
					cm.changeJob(MapleJob.IL_ARCHMAGE);
					cm.getChar().gainAp(5);
					cm.gainItem(2280003,1);
					cm.teachSkill(2221008, 1, 5);
					cm.teachSkill(2221001, 1, 5);
					cm.teachSkill(2221007, 1, 5);
					cm.teachSkill(2221006, 1, 5);
					cm.teachSkill(2221003, 1, 5);
					cm.teachSkill(2221005, 1, 5);
					cm.teachSkill(2221004, 1, 5);
					cm.teachSkill(2221002, 1, 5);
					cm.teachSkill(2221000, 1, 5);
					cm.sendOk("�ڳ� #b���/�ݵ� ��ũ������#k�� �Ǿ��ٳ�. 4�������� ������ŭ ��ġ�ִ»�Ȱ���ϽðԳ�.");
					cm.dispose();
				} else if (cm.getJob().equals(MapleJob.PRIEST)) {
					cm.changeJob(MapleJob.BISHOP);
					cm.getChar().gainAp(5);
					cm.gainItem(2280003,1);
					cm.teachSkill(2321007, 1, 5);
					cm.teachSkill(2321009, 1, 5);
					cm.teachSkill(2321003, 1, 5);
					cm.teachSkill(2321001, 1, 5);
					cm.teachSkill(2321008, 1, 5);
					cm.teachSkill(2321005, 1, 5);
					cm.teachSkill(2321004, 1, 5);
					cm.teachSkill(2321002, 1, 5);
					cm.teachSkill(2321000, 1, 5);
					cm.teachSkill(2321006, 1, 5);
					cm.sendOk("�ڳ� #b���#k�� �Ǿ��ٳ�. 4�������� ������ŭ ��ġ�ִ»�Ȱ���ϽðԳ�.");
					cm.dispose();
			} else {
				cm.sendAcceptDecline("But I can make you even stronger. Although you will have to prove not only your strength but your knowledge. Are you ready for the challenge?");
			}
		} 
	}
}	