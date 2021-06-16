function start() { // 제작자 글귀 : 출저 꼭남겨주세요 ~
	cm.sendSimple ("안녕하세요. 저는 #b엘리멘탈 아이템#k 판매하고 있습니다.  #k\r\n#L0##b엘리멘탈 아이템[전사]#k\r\n#L1##b엘리멘탈 아이템[마법사]#k\r\n#L2##b엘리멘탈 아이템[궁수]#k\r\n#L3##b엘리멘탈 아이템[도적]");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.openShop (1093006);
	  } else if (selection == 1) {
		cm.openShop (1093007);
	  } else if (selection == 2) {
		cm.openShop (1093008);
	  } else if (selection == 3) {
		cm.openShop (1093009);
		cm.dispose();
	}
}
