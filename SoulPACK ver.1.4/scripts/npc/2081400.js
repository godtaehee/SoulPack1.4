/*
	Thief 4th job advancement
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
			if (!(cm.getJob().equals(MapleJob.HERMIT) ||
				cm.getJob().equals(MapleJob.CHIEFBANDIT))) {
				cm.sendOk("3���������� ������ �����մϴ�.");
				cm.dispose();
				return;
			}
			if ((cm.getJob().equals(MapleJob.HERMIT) ||
				cm.getJob().equals(MapleJob.CHIEFBANDIT)) &&
				cm.getLevel() >= 120 && 
				cm.getChar().getRemainingSp() <= (cm.getLevel() - 120) * 3) {
				cm.sendNext("���� �ڳ״� 4�������� �Ҽ��ִٳ�. 4�������� 2,3���������� �νŴ� �����ϰ�ȭ���� ��ų�� ����Ҽ�����. �׷��� �����͸��ϰ� ��ų���̶�°ɷ� ��ų�������ͷ����� �ø����ֳ�. ��ų���� �������͸� ������ �ߴ� �ʹ������� �������ðԳ�.");
			} else {
				cm.sendOk("4�������� �ϱ����ؼ��� ������ 120�̻��̾���ϸ�, ��ų����Ʈ�� 1���� ������������ ������ �Ұ����ϳ�.");
				cm.dispose();
			}
		} else if (status == 1) {
				if (cm.getJob().equals(MapleJob.HERMIT)) {
					cm.changeJob(MapleJob.NIGHTLORD);
					cm.getChar().gainAp(5);
					cm.gainItem(2280003,1);
					cm.teachSkill(4121009, 1, 5);
					cm.teachSkill(4120002, 1, 5);
					cm.teachSkill(4121000, 1, 5);
					cm.teachSkill(4121004, 1, 5);
					cm.teachSkill(4121008, 1, 5);
					cm.teachSkill(4121003, 1, 5);
					cm.teachSkill(4121006, 1, 5);
					cm.teachSkill(4121007, 1, 5);
					cm.teachSkill(4120005, 1, 5);
					cm.sendOk("�ڳ� #b����Ʈ�ε�#k�� �Ǿ��ٳ�. 4�������� ������ŭ ��ġ�ִ»�Ȱ���ϽðԳ�.");
					cm.dispose();
				} else if (cm.getJob().equals(MapleJob.CHIEFBANDIT)) {
					cm.changeJob(MapleJob.SHADOWER);
					cm.getChar().gainAp(5);
					cm.gainItem(2280003,1);
					cm.teachSkill(4221001, 1, 5);
					cm.teachSkill(4221008, 1, 5);
					cm.teachSkill(4221007, 1, 5);
					cm.teachSkill(4220002, 1, 5);
					cm.teachSkill(4221000, 1, 5);
					cm.teachSkill(4221004, 1, 5);
					cm.teachSkill(4221003, 1, 5);
					cm.teachSkill(4221006, 1, 5);
					cm.teachSkill(4220005, 1, 5);
					cm.sendOk("�ڳ� #b������#k�� �Ǿ��ٳ�. 4�������� ������ŭ ��ġ�ִ»�Ȱ���ϽðԳ�.");
					cm.dispose();
				}  else {
				cm.sendAcceptDecline("But I can make you even stronger. Although you will have to prove not only your strength but your knowledge. Are you ready for the challenge?");
			}
		} 
	}
}	