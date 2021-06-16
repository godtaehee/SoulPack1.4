/* 한글화:휴나
＊이주석까지지우려고?
*/
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.haveItem(4031035)) {
				cm.sendNext("안녕? 힘들게올라온걸보니 고생좀했구나?");
			} else {
				cm.sendOk("우리형의 편지를갖고왔긴하니? 편지가없는걸?");
				cm.dispose();
			}
		} else if (status == 1) {
			if (cm.getPlayer().getNoPets() == 0) {
				cm.sendNextPrev("이봐, 펫도없으면서 친밀도를어떻게올리려고해!");
			} else {
				cm.gainItem(4031035, -1);
				cm.gainCloseness(2 * cm.getC().getChannelServer().getPetExpRate(), 0);
				cm.sendNextPrev("어! 편지가있구나? 친밀도 200을올려줄게.펫과 재밌게놀아.");
			}
			cm.dispose();
		}
	}
}