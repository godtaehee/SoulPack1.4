function start() { // ������ �۱� : ���� �������ּ��� ~
	cm.sendSimple ("�ȳ��ϼ���. ���� #b������Ż ������#k �Ǹ��ϰ� �ֽ��ϴ�.  #k\r\n#L0##b������Ż ������[����]#k\r\n#L1##b������Ż ������[������]#k\r\n#L2##b������Ż ������[�ü�]#k\r\n#L3##b������Ż ������[����]");
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
