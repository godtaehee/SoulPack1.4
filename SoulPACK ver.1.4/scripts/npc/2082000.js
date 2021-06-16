/*
	MADE BY 소희 (jantnic)
*/

var cost = 5000;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
	} else {
		if(mode == 1) {
			status++;
		}
		if(mode == 0) {
			cm.sendNext("You must have some business to take care of here, right?");
			cm.dispose();
			return;
		}
		if(status == 0) {
			cm.sendYesNo("안녕하세요. 리프레 매표소에 뮤라고 합니다. 저는 오르비스행 배티켓을 팔고있습니다. 오르비스로가는 티켓은 5,000메소 입니다. #b#t4031045##k 오르비스행 티켓을 사실건가요?");
		} else if(status == 1) {
			if(cm.getMeso() >= cost && cm.canHold(4031045)) {
				cm.gainItem(4031045,1);
				cm.gainMeso(-cost);
				cm.dispose();
			} else {
				cm.sendOk("죄송하지만 티켓은 #b"+cost+" 메소#k 입니다.");
				cm.dispose();
			}
		}
	}
}
