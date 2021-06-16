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
		cm.sendOk("아쿠아리움 동물원에 오신 것을 환영합니다. 저는 동물원 조련사 켄타라고 해요. 우리 안의 동물들에게 함부로 먹이를 주시면 안돼요.");
		cm.dispose();
	}
}