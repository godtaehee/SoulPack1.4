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
		cm.sendOk("거래 때문에 아리안트 주변에 자주 오게 되었답니다. 지금도 거래를 하러 왔지요. 그러고보니... 왕비님의 경비병이 올 때가 되었는데?");
		cm.dispose();
	}
}