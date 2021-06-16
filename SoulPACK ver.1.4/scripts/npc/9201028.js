/*
쿠로씨(shoe64) 제작
*/

/*
USFM 대한민국의 자존심 USFM http://cafe.naver.com/koreausfm
*/
function start() {
	cm.sendSimple ("보스의 소굴로 가고싶으세요?#b\r\n#L0#예#l\r\n#L1#아니요#l");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.warp(103000805)
	} else if (selection == 1) {
	cm.sendSimple ("다음에 또뵙죠. 몸조심하시길 바랍니다.");
	cm.dispose();
	}
}