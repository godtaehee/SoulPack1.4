function start() {
	cm.sendSimple ("#r#h ##k��, �ȳ��ϼ���, ���� �������� �Ϻξ����۸��� �Ǹ��ϰ� �ֽ��ϴ�.#k�����ڴ� ũ������ #r�Ҽ�ȫ#k�԰� #r�ҿﾾ#k �Դϴ�. #k\r\n\r\n#L50#���װ� , ��í��, ���ž�����, ��ȯ�ǵ� , ������ ��\r\n#L51#���� ������\r\n#L52#���������� ����\r\n#L53#���Ͷ��̵�");
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