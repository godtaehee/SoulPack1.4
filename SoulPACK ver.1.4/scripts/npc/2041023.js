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
		cm.sendOk("전 시간의 통로를 지키는 플로라고 해요. 제 마법 보실래요?");
		cm.dispose();
	}
}