/*
	KERNING CITY
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
		cm.sendOk("만지형은 나에게 미치지 못한다...");
		cm.dispose();
	}
}