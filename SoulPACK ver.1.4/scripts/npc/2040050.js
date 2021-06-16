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
		cm.sendOk("안녕하세요? 저는 메이플 월드 이곳저곳을 여행하는 떠돌이 연금술사 입니다. 잠시 쉬려고 이곳에 머무르고 있지요.");
		cm.dispose();
	}
}