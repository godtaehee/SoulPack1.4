/*
	Warrior 4th job advancement
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
			if (!(cm.getJob().equals(MapleJob.CRUSADER) ||
				cm.getJob().equals(MapleJob.WHITEKNIGHT) ||
				cm.getJob().equals(MapleJob.DRAGONKNIGHT))) {
				cm.sendOk("3���������� ���縸 �����մϴ�.");
				cm.dispose();
				return;
			}
			if ((cm.getJob().equals(MapleJob.CRUSADER) ||
				cm.getJob().equals(MapleJob.WHITEKNIGHT) ||
				cm.getJob().equals(MapleJob.DRAGONKNIGHT)) &&
				cm.getLevel() >= 120 && 
				cm.getChar().getRemainingSp() <= (cm.getLevel() - 120) * 3) {
				cm.sendNext("���� �ڳ״� 4�������� �Ҽ��ִٳ�. 4�������� 2,3���������� �νŴ� �����ϰ�ȭ���� ��ų�� ����Ҽ�����. �׷��� �����͸��ϰ� ��ų���̶�°ɷ� ��ų�������ͷ����� �ø����ֳ�. ��ų���� �������͸� ������ �ߴ� �ʹ������� �������ðԳ�.");
			} else {
				cm.sendOk("4�������� �ϱ����ؼ��� ������ 120�̻��̾���ϸ�, ��ų����Ʈ�� 1���� ������������ ������ �Ұ����ϳ�.");
				cm.dispose();
			}
		} else if (status == 1) {
				if (cm.getJob().equals(MapleJob.CRUSADER)) {
					cm.changeJob(MapleJob.HERO);
					cm.getChar().gainAp(5);
					cm.gainItem(2280003,1);
					cm.teachSkill(1120004, 1, 5);
					cm.teachSkill(1120003, 1, 5);
					cm.teachSkill(1120005, 1, 5);
					cm.teachSkill(1121011, 1, 5);
					cm.teachSkill(1121008, 1, 5);
					cm.teachSkill(1121010, 1, 5);
					cm.teachSkill(1121000, 1, 5);
					cm.teachSkill(1121001, 1, 5);
					cm.teachSkill(1121006, 1, 5);
					cm.teachSkill(1121002, 1, 5);
					cm.sendOk("�ڳ� #b�����#k�� �Ǿ��ٳ�. 4�������� ������ŭ ��ġ�ִ»�Ȱ���ϽðԳ�.");
					cm.dispose();
				} else if (cm.getJob().equals(MapleJob.DRAGONKNIGHT)) {
					cm.changeJob(MapleJob.DARKKNIGHT);
					cm.getChar().gainAp(5);
					cm.gainItem(2280003,1);
					cm.teachSkill(1320005, 1, 5);
					cm.teachSkill(1321010, 1, 5);
					cm.teachSkill(1321007, 1, 5);
					cm.teachSkill(1320009, 1, 5);
					cm.teachSkill(1320008, 1, 5);
					cm.teachSkill(1320006, 1, 5);
					cm.teachSkill(1321000, 1, 5);
					cm.teachSkill(1321001, 1, 5);
					cm.teachSkill(1321003, 1, 5);
					cm.teachSkill(1321002, 1, 5);
					cm.sendOk("�ڳ� #b��ũ����Ʈ#k�� �Ǿ��ٳ�. 4�������� ������ŭ ��ġ�ִ»�Ȱ���ϽðԳ�.");
					cm.dispose();
				} else if (cm.getJob().equals(MapleJob.WHITEKNIGHT)) {
					cm.changeJob(MapleJob.PALADIN);
					cm.getChar().gainAp(5);
					cm.gainItem(2280003,1);
					cm.teachSkill(1220005, 1, 5);
					cm.teachSkill(1220010, 1, 5);
					cm.teachSkill(1221012, 1, 5);
					cm.teachSkill(1221009, 1, 5);
					cm.teachSkill(1220006, 1, 5);
					cm.teachSkill(1221004, 1, 5);
					cm.teachSkill(1221003, 1, 5);
					cm.teachSkill(1221000, 1, 5);
					cm.teachSkill(1221001, 1, 5);
					cm.teachSkill(1221007, 1, 5);
					cm.teachSkill(1221011, 1, 5);
					cm.teachSkill(1221002, 1, 5);
					cm.sendOk("�ڳ� #b�ȶ��#k�� �Ǿ��ٳ�. 4�������� ������ŭ ��ġ�ִ»�Ȱ���ϽðԳ�.");
					cm.dispose();
			} else {
				cm.sendAcceptDecline("But I can make you even stronger. Although you will have to prove not only your strength but your knowledge. Are you ready for the challenge?");
			}
		} 
	}
}	