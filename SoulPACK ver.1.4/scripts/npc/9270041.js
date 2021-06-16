/*
	KC - SGP
	MADE BY 소희 (jantnic0
*/

var cost = 12000;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || (mode == 0 && status == 0)) {
		cm.dispose();
		return;
	}
	if (mode == 1) {
		status++;
	}
	if (mode == 0 && menu == 0) {
		cm.sendNext("싱가폴에 가시려면 언제든지 말만걸어주세요!");
		cm.dispose();
	}
	if (mode == 0 && menu == 1) {
		cm.dispose();
	}
	if (status == 0) {
		cm.sendSimple("안녕하세요 싱가폴은 참멋진곳이에요! 휴가가실거면 싱가폴을 추천해드리죠 여기엔 레벨 30이상 몬스터들이 우글우글대고있죠\r\n#L0##b싱가폴행#k 비행기 티켓 구입하기#l\r\n#L1##b비행장#k으로 이동하기#l");
	} else if (status == 1) {
		menu = selection;
		if (menu == 0) {
			cm.sendYesNo("싱가폴행 티켓은 12,000 메소입니다. 구입하실건가요?");
		} else if (menu == 1) {
			cm.sendYesNo("비행장으로 이동하시겠습니까?");
		}
	} else if (status == 2) {
		if (menu == 0) {
			if (!cm.canHold(4031731) || cm.getMeso() < cost) {
				cm.sendOk("죄송하지만, 12,000 메소가없으시면 싱가폴행티켓을 구입하실수 없습니다.");
			} else {
				cm.gainMeso(-cost);
				cm.gainItem(4031731, 1);
			}
			cm.dispose();
		} else if(menu == 1) {
			if (!cm.haveItem(4031731)) {
				cm.sendNext("죄송하지만, 싱가폴행 티켓이없으시면 싱가폴에 가실수없습니다.");
			} else {
				cm.gainItem(4031731, -1);
				cm.warp(540010100);
			}
			cm.dispose();
		}
	}
}