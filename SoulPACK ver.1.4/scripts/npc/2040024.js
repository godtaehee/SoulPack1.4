/*
	MADE BY 소희 (jantnic)
	NPC Name: 		First Eos Rock
	Map(s): 		Ludibrium : Eos Tower 100th Floor (221024400)
	Description: 		Brings you to 71st Floor
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
		if (cm.haveItem(4001020)) {
			cm.sendYesNo("#b에오스탑 주문서#k를 가지고계시네요. #b두번째 에오스탑#k이있는 71층으로 이동하시겠습니까?");
		} else {
			cm.sendOk("#b에오스탑 주문서#k를 가지고계시지 않으시네요. #b에오스탑 주문서#k를 소유하지않으시면 이용이 불가능합니다.");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.gainItem(4001020, -1);
		cm.warp(221022900, 3);
		cm.dispose();
		}
	}
}