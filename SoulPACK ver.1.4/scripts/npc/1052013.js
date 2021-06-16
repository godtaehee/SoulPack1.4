/*
	MADE BY 소희(jantnic)
	TRADE NPC
*/
function start() {
	cm.sendSimple ("안녕하세요 저는 컴퓨터 입니다 간편하게 할일을 할수있게 해주는 NPC예요\r\n#L0#헤네시스로 가기")
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.warp (100000000,0);
	} else {
		cm.dispose();
	}
}