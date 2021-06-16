/*
	ORBIS STONE 1TH FLOOR
	MADE BY 소희 (jantnic)
*/

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.dispose();
		return;
	}
	status++;
	if (status == 0) {
		if(cm.haveItem(4001019)) {
			cm.sendYesNo("오르비스탑 주문서를 가지고계시네요... 20층으로 가시겠습니까?");
		} else {
			cm.sendOk("오르비스탑 주문서가 없으면 20층으로 이동하실수 없습니다.");
			cm.dispose();
		}
	}
	if (status == 1) {
			cm.gainItem(4001019, -1);
			cm.warp(200082100);
			cm.dispose();
	}
}
