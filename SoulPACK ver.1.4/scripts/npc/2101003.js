/*
	Rudibrium
	MADE BY 소희 (jantnic)
*/

function start() {
	status = -1;
	action(1);
}

function action(mode) {
	if (mode == -1) {
		cm.dispose();
	} else {
		cm.sendOk("너하고 떠들어줄 시간 없어. 한가해 보여도, 사실은 그렇지 않단 말이지.");
		cm.dispose();
	}
}