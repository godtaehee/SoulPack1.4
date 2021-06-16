/* 
	Thomas Swift
	Amoria warper
	MADE BY 소희 (jantnic)
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
			cm.sendOk("아모리아에가면 결혼을 할수있지~! 결혼은 멋진거야!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getChar().getMapId() == 100000000) {
				cm.sendYesNo("아모리아에 가고싶으신가요?");
			}
			else {
				cm.sendYesNo("헤네시스로 돌아가고싶으신가요?");
			}
		} else if (status == 1) {
			if (cm.getChar().getMapId() == 100000000) {
				cm.warp(680000000, 0);
			}
			else {
				cm.warp(100000000, 5);
			}
			cm.dispose();
		}
	}
}