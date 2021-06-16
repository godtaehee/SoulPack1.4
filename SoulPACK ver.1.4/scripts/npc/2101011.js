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
		cm.sendOk("쉿! 조용히 해. 왕비의 경비병이 나타나면 어떻게 하려고 그래?");
		cm.dispose();
	}
}