/*
	Pirate 4th job advancement
	Somewhere in Leafre (240010501)
	MADE BY 소희 (jantnic)
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
			cm.sendOk("진정한 메이플에 용사가되려면 어떠한역경도 이겨내야하노라.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (!(cm.getJob().equals(MapleJob.OUTLAW) ||
				cm.getJob().equals(MapleJob.MARAUDER))) {
				cm.sendOk("3차전직을한 해적만 가능합니다.");
				cm.dispose();
				return;
			}
			if ((cm.getJob().equals(MapleJob.OUTLAW) ||
				cm.getJob().equals(MapleJob.MARAUDER)) &&
				cm.getLevel() >= 120 && 
				cm.getChar().getRemainingSp() <= (cm.getLevel() - 120) * 3) {
				cm.sendNext("이제 자네는 4차전직을 할수있다네. 4차직업은 2,3차직업보다 훨신더 강력하고화려한 스킬을 사용할수있지. 그러나 마스터리북과 스킬북이라는걸로 스킬과마스터레벨을 올릴수있네. 스킬북은 보스몬스터를 잡으면 뜨니 너무걱정은 하지마시게나.");
			} else {
				cm.sendOk("4차전직을 하기위해서는 레벨이 120이상이어야하며, 스킬포인트가 1개라도 가지고있으면 전직이 불가능하네.");
				cm.dispose();
			}
		} else if (status == 1) {
				if (cm.getJob().equals(MapleJob.MARAUDER)) {
					cm.changeJob(MapleJob.BUCCANEER);
					cm.getChar().gainAp(5);
					cm.gainItem(2280003,1);
					cm.teachSkill(5121002, 1, 5);
					cm.teachSkill(5121003, 1, 5);
					cm.teachSkill(5121004, 1, 5);
					cm.teachSkill(5121005, 1, 5);
					cm.teachSkill(5121007, 1, 5);
					cm.teachSkill(5121010, 1, 5);
					cm.teachSkill(5121000, 1, 5);
					cm.teachSkill(5121001, 1, 5);
					cm.teachSkill(5121009, 1, 5);
					cm.teachSkill(5121008, 1, 5);
					cm.sendOk("자넨 #b바이퍼#k가 되었다네. 4차직업을 가진만큼 가치있는생활을하시게나.");
					cm.dispose();
				} else if (cm.getJob().equals(MapleJob.OUTLAW)) {
					cm.changeJob(MapleJob.CORSAIR);
					cm.getChar().gainAp(5);
					cm.gainItem(2280003,1);
					cm.teachSkill(5220001, 1, 5);
					cm.teachSkill(5220002, 1, 5);
					cm.teachSkill(5221003, 1, 5);
					cm.teachSkill(5221004, 1, 5);
					cm.teachSkill(5221006, 1, 5);
					cm.teachSkill(5221007, 1, 5);
					cm.teachSkill(5221008, 1, 5);
					cm.teachSkill(5221009, 1, 5);
					cm.teachSkill(5221010, 1, 5);
					cm.teachSkill(5220011, 1, 5);
					cm.sendOk("자넨 #b발키리#k가 되었다네. 4차직업을 가진만큼 가치있는생활을하시게나.");
					cm.dispose();
				}  else {
				cm.sendAcceptDecline("But I can make you even stronger. Although you will have to prove not only your strength but your knowledge. Are you ready for the challenge?");
			}
		} 
	}
}	