function start() {
	cm.sendSimple ("#r#h ##k님, 안녕하세요, 저는 메이플의 해적 아이템을 판매하고 있습니다.#k By소이씨.노가다의걸작 #k\r\n#L0##r해적모자#k\r\n#L1##r해적 한벌옷#k\r\n#L2##r 해적장갑 #k\r\n#L3##r 해적신발 #k\r\n#L4##r 해적너클 #k\r\n#L5##r 해적총 #k\r\n#L6##r 불릿#k\r\n#L7##r 해적주문서");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.openShop (20000);
	  } else if (selection == 1) {
		cm.openShop (20001);
	  } else if (selection == 2) {
		cm.openShop (20002);
	  } else if (selection == 3) {
		cm.openShop (20003);
	  } else if (selection == 4) {
		cm.openShop (20004);
	  } else if (selection == 5) {
		cm.openShop (20005);
	  } else if (selection == 6) {
		cm.openShop (20006);
	  } else if (selection == 7) {
		cm.openShop (20007);
	} else {
		cm.dispose();
	}
}