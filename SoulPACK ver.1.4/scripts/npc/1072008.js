function start() {
	cm.sendSimple ("#r#h ##k��, �ȳ��ϼ���, ���� �������� ���� �������� �Ǹ��ϰ� �ֽ��ϴ�.#k By���̾�.�밡���ǰ��� #k\r\n#L0##r��������#k\r\n#L1##r���� �ѹ���#k\r\n#L2##r �����尩 #k\r\n#L3##r �����Ź� #k\r\n#L4##r ������Ŭ #k\r\n#L5##r ������ #k\r\n#L6##r �Ҹ�#k\r\n#L7##r �����ֹ���");
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