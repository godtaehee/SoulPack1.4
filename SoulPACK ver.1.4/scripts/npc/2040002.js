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
		cm.sendOk("최근 생긴 시간의 균열을 통해 다른 세계의 몬스터가 침입하여 중요한 물건을 훔쳐 이 방 안으로 숨어버렸습니다. 녀석에게 어떤 힘이 있는지 몰라 누구도 안에 들어가려 하고 있지 않지요. 흐음... 빨리 녀석을 찾아내어 퇴치하고 중요한 물건을 되찾아야 하는데 큰일이군요");
		cm.dispose();
	}
}