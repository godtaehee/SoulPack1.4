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
		cm.sendSimple("안녕하세요 싱가폴에서 즐거운시간되셧나요? 우훗 무엇을 하실건가요?\r\n#L0##b커닝시티행#k 비행기 티켓 구입하기#l\r\n#L1##b커닝시티#k행 비행장으로 이동하기#l");
	} else if (status == 1) {
		menu = selection;
		if (menu == 0) {
			cm.sendYesNo("커닝시티행 티켓은 12,000 메소입니다. 구입하실건가요?");
		} else if (menu == 1) {
			cm.sendYesNo("커닝시티행 비행장으로 이동하시겠습니까?");
		}
	} else if (status == 2) {
		if (menu == 0) {
			if (!cm.canHold(4031732) || cm.getMeso() < cost) {
				cm.sendOk("죄송하지만, 12,000 메소가없으시면 커닝시티행티켓을 구입하실수 없습니다.");
			} else {
				cm.gainMeso(-cost);
				cm.gainItem(4031732, 1);
			}
			cm.dispose();
		} else if(menu == 1) {
			if (!cm.haveItem(4031732)) {
				cm.sendNext("죄송하지만, 커닝시티행 티켓이없으시면 커닝시티에 가실수없습니다.");
			} else {
				cm.gainItem(4031732, -1);
				cm.warp(540010001);
			}
			cm.dispose();
		}
	}
}