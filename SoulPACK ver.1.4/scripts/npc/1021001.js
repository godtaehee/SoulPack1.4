/*
	
	EnCia ���� (�����)

*/

/*

	�α⵵�� ���������� ��ȯ����

*/

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
		} else {
		if (mode == 0) {
			cm.sendOk("�� ���߿� ã���ּ���..")
			cm.dispose();
		}
		if (mode == 1)
			status++;
		else
			status--;
		
		if(status == 0) {
		var tmp_str = "�α⵵�� ���������� �ٲپ��ִ� ���Դϴ�.\r\n�α⵵�� ��ŷ���� ���ԵǴ� �κ��̴�\r\n������ �����Ͻð� ��ȯ���ּ���..\r\n";
		tmp_str += "#L1##b#v2000000#���� ���� 200��(�α⵵1�ʿ�)#k\r\n"
		tmp_str += "#L2##b#v2000001#��Ȳ ���� 200��(�α⵵2�ʿ�)#k\r\n"
		tmp_str += "#L3##b#v2000002#�Ͼ� ���� 200��(�α⵵3�ʿ�)#k\r\n"
		tmp_str += "#L4##b#v2000003#�Ķ� ���� 200��(�α⵵2�ʿ�)#k\r\n"
		tmp_str += "#L5##b#v2000006#���� ������ 200��(�α⵵4�ʿ�)#k\r\n"
		tmp_str += "#L6##b#v2000007#���� ���� �˾� 200��(�α⵵2�ʿ�)#k\r\n"
		tmp_str += "#L7##b#v2000008#��Ȳ ���� �˾� 200��(�α⵵3�ʿ�)#k\r\n"
		tmp_str += "#L8##b#v2000009#�Ͼ� ���� �˾� 200��(�α⵵4�ʿ�)#k\r\n"
		tmp_str += "#L9##b#v2000010#�Ķ� ���� �˾� 200��(�α⵵3�ʿ�)#k\r\n"
		tmp_str += "#L10##b#v2000011#���� ������ �˾�(�α⵵5�ʿ�)#k\r\n"
		tmp_str += "#L11##b#v2022003#���� 200��(�α⵵8�ʿ�)#k\r\n"
		tmp_str += "#L12##b#v2001001#���޹� 200��(�α⵵15�ʿ�)#k\r\n"
		tmp_str += "#L13##b#v2001002#�Ϻ��� 200��(�α⵵20�ʿ�)#k\r\n"
		tmp_str += "#L14##b#v2020014#������ �̽� 200��(�α⵵30�ʿ�)#k\r\n"
		tmp_str += "#L15##b#v2020015#Ȳȥ�� �̽� 200��(�α⵵35�ʿ�)#k\r\n"
		tmp_str += "#L0##b��ȯ ���Ѵ�..#k#r#n";
		
		cm.sendSimple(tmp_str);
		
		} else if(status == 1) {
			if(selection == 0) {
			cm.sendOk("�� ���߿� ã���ּ���..");
			cm.dispose();
		
		} else if(selection == 1) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 1�� �￩��..#k\r\n");
			status = 9;
		
		} else if(selection == 2) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 2�� �￩��..#k\r\n");
			status = 11;
		
		} else if(selection == 3) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 3�� �￩��..#k\r\n");
			status = 13;
		
		} else if(selection == 4) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 2�� �￩��..#k\r\n");
			status = 15;
		
		} else if(selection == 5) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 4�� �￩��..#k\r\n");
			status = 17;
		
		} else if(selection == 6) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 2�� �￩��..#k\r\n");
			status = 19;
		
		} else if(selection == 7) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 3�� �￩��..#k\r\n");
			status = 21;
		
		} else if(selection == 8) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 4�� �￩��..#k\r\n");
			status = 23;
		
		} else if(selection == 9) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 3�� �￩��..#k\r\n");
			status = 25;
		
		} else if(selection == 10) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 5�� �￩��..#k\r\n");
			status = 27;
		
		} else if(selection == 11) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 8�� �￩��..#k\r\n");
			status = 29;
		
		} else if(selection == 12) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 15�� �￩��..#k\r\n");
			status = 31;
		
		} else if(selection == 13) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 20�� �￩��..#k\r\n");
			status = 33;
		
		} else if(selection == 14) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 30�� �￩��..#k\r\n");
			status = 35;
		
		} else if(selection == 15) {
		cm.sendYesNo("���� ��ȯ�Ͻǲ���?? #r������ �α⵵ 35�� �￩��..#k\r\n");
			status = 37;
			}
		} if(status == 2) {
			cm.sendOk("�� �ٽ� ã���ּ���..\r\n");
			cm.dispose();
			}
		} if(status == 10) {
			if(cm.getChar().getFame() > 0) {
			cm.gainFame(-1);
			cm.gainItem(2000000, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 12) {
			if(cm.getChar().getFame() > 1) {
			cm.gainFame(-2);
			cm.gainItem(2000001, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 14) {
			if(cm.getChar().getFame() > 2) {
			cm.gainFame(-3);
			cm.gainItem(2000002, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 16) {
			if(cm.getChar().getFame() > 1) {
			cm.gainFame(-2);
			cm.gainItem(2000003, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 18) {
			if(cm.getChar().getFame() > 3) {
			cm.gainFame(-4);
			cm.gainItem(2000006, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 20) {
			if(cm.getChar().getFame() > 1) {
			cm.gainFame(-2);
			cm.gainItem(2000007, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 22) {
			if(cm.getChar().getFame() > 2) {
			cm.gainFame(-3);
			cm.gainItem(2000008, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 24) {
			if(cm.getChar().getFame() > 3) {
			cm.gainFame(-4);
			cm.gainItem(2000009, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 26) {
			if(cm.getChar().getFame() > 2) {
			cm.gainFame(-3);
			cm.gainItem(2000010, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 28) {
			if(cm.getChar().getFame() > 4) {
			cm.gainFame(-5);
			cm.gainItem(2000011, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 30) {
			if(cm.getChar().getFame() > 7) {
			cm.gainFame(-8);
			cm.gainItem(2022003, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 32) {
			if(cm.getChar().getFame() > 14) {
			cm.gainFame(-15);
			cm.gainItem(2001001, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 34) {
			if(cm.getChar().getFame() > 19) {
			cm.gainFame(-20);
			cm.gainItem(2001002, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 36) {
			if(cm.getChar().getFame() > 29) {
			cm.gainFame(-30);
			cm.gainItem(2020014, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
		} if(status == 38) {
			if(cm.getChar().getFame() > 34) {
			cm.gainFame(-35);
			cm.gainItem(2020015, 200);
			cm.reloadChar();
			cm.sendOk("�� ������ �ް�..�α⵵�� ���� ���� ����...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("�α⵵�� �����ؿ�... �ٸ�������� �α⵵�� ����� ��Ƽ� ������...\r\n");
			cm.dispose();
			}
			cm.dispose();
			}
		}