function start() {
	cm.sendSimple ("#r#h ##k님, 안녕하세요, 저는 메이플의 일부아이템만을 판매하고 있습니다.#k수정자는 크러쉬의 #r팬세홍#k님과 #r소울씨#k 입니다. #k\r\n\r\n#L50#스네가 , 가챠폰, 변신아이템, 소환의돌 , 마법의 돌\r\n#L51#버프 아이템\r\n#L52#보스몬스터의 조각\r\n#L53#몬스터라이딩");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
	  } else if (selection == 50) {
		cm.openShop (10048);
	  } else if (selection == 51) {
		cm.openShop (10049);
	  } else if (selection == 52) {
		cm.openShop (10050);
	  } else if (selection == 53) {
		cm.openShop (10052);
	} else {
		cm.dispose();
	}
}