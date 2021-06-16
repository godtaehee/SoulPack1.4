/*
	MADE BY 소희(jantnic)
*/
function start() {
	cm.sendSimple ("#L0#루디브리엄행 배 타기#l")
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.warp (200090100, 0);
	} else {
		cm.dispose();
	}
}