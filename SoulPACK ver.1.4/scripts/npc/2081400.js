/*
	Thief 4th job advancement
	Somewhere in Leafre (240010501)
	MADE BY 소희 (jantnic)
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
			cm.sendOk("진정한 메이플에 용사가되려면 어떠한역경도 이겨내야하노라.");
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
				cm.sendOk("3차전직을한 도적만 가능합니다.");
				cm.dispose();
				return;
			}
			if ((cm.getJob().equals(MapleJob.HERMIT) ||
				cm.getJob().equals(MapleJob.CHIEFBANDIT)) &&
				cm.getLevel() >= 120 && 
				cm.getChar().getRemainingSp() <= (cm.getLevel() - 120) * 3) {
				cm.sendNext("이제 자네는 4차전직을 할수있다네. 4차직업은 2,3차직업보다 훨신더 강력하고화려한 스킬을 사용할수있지. 그러나 마스터리북과 스킬북이라는걸로 스킬과마스터레벨을 올릴수있네. 스킬북은 보스몬스터를 잡으면 뜨니 너무걱정은 하지마시게나.");
			} else {
				cm.sendOk("4차전직을 하기위해서는 레벨이 120이상이어야하며, 스킬포인트가 1개라도 가지고있으면 전직이 불가능하네.");
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
					cm.sendOk("자넨 #b나이트로드#k가 되었다네. 4차직업을 가진만큼 가치있는생활을하시게나.");
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
					cm.sendOk("자넨 #b섀도어#k이 되었다네. 4차직업을 가진만큼 가치있는생활을하시게나.");
					cm.dispose();
				}  else {
				cm.sendAcceptDecline("But I can make you even stronger. Although you will have to prove not only your strength but your knowledge. Are you ready for the challenge?");
			}
		} 
	}
}	