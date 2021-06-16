/* Rene
	Bowman 3rd job advancement
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
			cm.sendOk("진정한 메이플에 용사가되려면 어떠한역경도 이겨내야하노라.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (!(cm.getJob().equals(MapleJob.HUNTER) ||
				cm.getJob().equals(MapleJob.CROSSBOWMAN))) {
				cm.sendOk("2차전직을한 궁수만 가능합니다.");
				cm.dispose();
				return;
			}
			if ((cm.getJob().equals(MapleJob.HUNTER) ||
				cm.getJob().equals(MapleJob.CROSSBOWMAN)) &&
				cm.getLevel() >= 70 && 
				cm.getChar().getRemainingSp() <= (cm.getLevel() - 70) * 3) {
				cm.sendNext("이제 자네는 3차전직을 할수있다네. 3차직업은 2차직업보다 훨신더 강력하고화려한 스킬을 사용할수있지.");
			} else {
				cm.sendOk("3차전직을 하기위해서는 레벨이 70이상이어야하며, 스킬포인트가 1개라도있으면 불가능하네.");
				cm.dispose();
			}
		} else if (status == 1) {
				if (cm.getJob().equals(MapleJob.HUNTER)) {
					cm.changeJob(MapleJob.RANGER);
					cm.getChar().gainAp(5);
					cm.sendOk("자넨 #b레인저#k가 되었다네. 3차직업을 가진만큼 가치있는생활을하시게나.");
					cm.dispose();
				} else if (cm.getJob().equals(MapleJob.CROSSBOWMAN)) {
					cm.changeJob(MapleJob.SNIPER);
					cm.getChar().gainAp(5);
					cm.sendOk("자넨 #b스나이퍼#k이 되었다네. 3차직업을 가진만큼 가치있는생활을하시게나.");
					cm.dispose();
				}  else {
				cm.sendAcceptDecline("But I can make you even stronger. Although you will have to prove not only your strength but your knowledge. Are you ready for the challenge?");
			}
		} 
	}
}	