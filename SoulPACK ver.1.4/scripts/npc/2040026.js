/* 
	MADE BY 소희 (jantnic)
	NPC Name: 		Third Eos Rock
	Map(s): 		Ludibrium : Eos Tower 41st Floor (221021700)
	Description: 		Brings you to 71st Floor or 1st Floor
*/
var status = 0;
var map;
var portal;

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
			cm.sendSimple("#b에오스탑 주문서#k를 가지고계시네요.#b\r\n#L0#두번째 에오스탑이있는곳으로 이동하기(71층)#l\r\n#L1#네번째 에오스탑이있는곳으로 이동하기(1층)#l");
		} else {
			cm.sendOk("#b에오스탑 주문서#k를 가지고계시지 않으시네요. #b에오스탑 주문서#k를 소유하지않으시면 이용이 불가능합니다.");
			cm.dispose();
		}
	} else if (status == 1) {
		if (selection == 0) {
			cm.sendYesNo("#b에오스탑 주문서#k를 사용하여 #두번째 에오스탑#k이있는 71층으로 이동하시겠습니까?");
			map = 221022900;
			portal = 3;
		} else {
			cm.sendYesNo("#b에오스탑 주문서#k를 사용하여 #네번째 에오스탑#k이있는 1층으로 이동하시겠습니까?");
			map = 221020000;
			portal = 4;
		}
	} else if (status == 2) {
		cm.gainItem(4001020, -1);
		cm.warp(map, portal);
		cm.dispose();
		}
	}
}