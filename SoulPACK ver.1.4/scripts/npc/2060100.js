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
		cm.sendOk("겁도 없이 심해로 내려온 어리석은 자여...나에게 무슨 볼일이라도 있나?");
		cm.dispose();
	}
}