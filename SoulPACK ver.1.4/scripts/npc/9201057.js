/*
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
		cm.sendOk("안녕하세요? 몬스터들에 습격에 주의하세요. 방심했다간 큰일나요!");
		cm.dispose();
	}
}