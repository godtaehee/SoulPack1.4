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
		cm.sendOk("이런 책들이 모두 뒤죽박죽 섞여버렸군요.");
		cm.dispose();
	}
}