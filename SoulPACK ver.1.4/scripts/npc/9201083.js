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
		cm.sendOk("업데이트 예정 NPC 입니다. 아이디어 제공은 소희 (jantnic) 님에게 문의해주세요. 소희님은 @USFM - 하늘에서내려온영웅들에서 활동합니다.");
		cm.dispose();
	}
}