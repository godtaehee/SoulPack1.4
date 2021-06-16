/*
	MADE BY 소희 (jantnic)
	NPC Name: 		Second Eos Rock
	Map(s): 		Ludibrium : Eos Tower 71st Floor (221022900)
	Description: 		Brings you to 100th Floor or 71st Floor
*/
var status = 0;
var map;

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
		if (cm.haveItem(4001020)) {
			cm.sendSimple("#b에오스탑 주문서#k를 가지고계시네요.#b\r\n#L0#첫번째 에오스탑이있는곳으로 이동하기(100층)#l\r\n#L1#세번째 에오스탑이있는곳으로 이동하기(41층)#l");
		} else {
			cm.sendOk("#b에오스탑 주문서#k를 가지고계시지 않으시네요. #b에오스탑 주문서#k를 소유하지않으시면 이용이 불가능합니다.");
			cm.dispose();
		}
	} else if (status == 1) {
		if (selection == 0) {
			cm.sendYesNo("#b에오스탑 주문서#k를 사용하여 #첫번째 에오스탑#k이있는 100층으로 이동하시겠습니까?");
			map = 221024400;
		} else {
			cm.sendYesNo("#b에오스탑 주문서#k를 사용하여 #세번째 에오스탑#k이있는 41층으로 이동하시겠습니까?");
			map = 221021700;
		}
	} else if (status == 2) {
		cm.gainItem(4001020, -1);
		cm.warp(map, 3);
		cm.dispose();
		}
	}
}