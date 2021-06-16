/*
쿠로씨(shoe64) 제작
*/

/*
수정자: 웃 자 
*/
function start() {
	cm.sendSimple ("용의 소굴로 가고싶으십니까?#e\r\n[가서 죽어서 나올수도있소이다]#n#b\r\n#L0#예#l\r\n#L1#아니요#l");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.warp(103000800)
	} else if (selection == 1) {
	cm.sendSimple ("다음에 또뵙죠. 몸조심하시길 바랍니다.");
	cm.dispose();
	}
}