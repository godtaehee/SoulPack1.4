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
				cm.sendNext("이 숲에는 약초가 많이 있지. 좋은 약초를 발견했을 때가 가장 기쁘다네.#fUI/UIWindow.img/QuestIcon/4/0#");
			} else {
                                                                        cm.sendNext("이 숲에는 약초가 많이 있지. 좋은 약초를 발견했을 때가 가\r\n장 기쁘다네.\r\n\r\n #fUI/UIWindow.img/QuestIcon/4/0# \r\n        #b사비트라마의 살 빼는 약 만들기#k");
			}
		} else if (status == 1) {
				cm.sendNext("잠깐... 기다려주게. 나는 전 세계를 돌아다니면서 약초를 수\r\n집하고 있는 수집가라네. 이 근방에서 쓸만한 약초를 찾아보\r\n 고 있었지. 최근에는 약초를 발견하기 힘들어서 큰일이라네.\r\n자네... 혹시 약초들이 많은 곳을 발견하지는 못했는가?");
			} else {
				cm.gainItem(4031035, -1);
				cm.gainCloseness(2 * cm.getC().getChannelServer().getPetExpRate(), 0);
				cm.sendNextPrev("어! 편지가있구나? 친밀도 200을올려줄게.펫과 재밌게놀아.");
			}
			cm.dispose();
		}
	}
}