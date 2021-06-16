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
		cm.sendOk("이상하게 항상 피곤하군... 눈을 뜨고 있기도 귀찮아. 언제부터 이랬더라...");
		cm.dispose();
	}
}