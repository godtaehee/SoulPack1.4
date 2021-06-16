/*
봉인의자물쇠
지레프 : rlaehdwns4
	EDIT BY 소희 (jantnic)
*/
function start() {
	cm.sendSimple ("안녕하신가 몽땅따라고 하네 나는 아이템을 잠궈주고있지 그대신 한번잠구면 절대로 풀지 못한다네\r\n#L2##b봉인의 자물쇠 구입하기#k#l\r\n#L0##b아이템 잠구기 (봉인의 자물쇠 필요)#k#l\r\n#L3##b아이템 잠금헤제하기 (자물쇠 필요없음)#k#l\r\n#L1##b아이템을 잠궜을때 좋은점이 뭔가요?#k#l");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		if (!cm.haveItem(5060001,1)) {
			cm.sendOk("봉인의자물쇠가 있어야 잠그든하지 !");
			cm.dispose();
		} else {
			cm.openNpc(2003);
		}
	} else if (selection == 1) {
			cm.sendOk("아이템을 잠그면 무슨방법을 쓰더라도 아이템을 드랍할수없기때문에 해킹의 피해를 줄일수있다네\r\n그리고 이 안경은 절대 뽀대용이 아니라네");
			cm.dispose();
	} else if (selection == 2) {
			cm.openShop(981);
	} else if (selection == 3) {
			cm.openNpc(22000);
	}
}