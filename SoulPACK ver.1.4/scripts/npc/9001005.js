/*
	
	ö�۴� ���� 

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
			cm.sendOk("���߿� ���ĺ��� ��� ���������� �ٽ� ã�ƿ��ּ���")
			cm.dispose();
		}
		if (mode == 1)
			status++;
		else
			status--;
		
		if(status == 0) {
		var tmp_str = "������.. ����� �ܿ������ ���ۉ籸��..�� �츮���� �ܿ���� �̺�Ʈ�� ����캸�带 ��ƿ��� ���۽���캸��� �ٲ��شܴ�\r\n";

		tmp_str += "#L1# #b����캸�带 �ٸ�ƿԽ��ϴ�!#k\r\n"
;
		
		cm.sendSimple(tmp_str);
		
		} else if(status == 1) {
			if(selection == 0) {
			cm.sendOk("�� ���߿� �ٽ� ã���ּ���..");        //����
			cm.dispose();
		
		} else if(selection == 1) {
		cm.sendYesNo("6���� ����캸��\r\n#v1442012# #v1442013# #v1442014# #v1442015# #v1442016# #v1442017#\r\n�� ��� ��ƿԴ�??\r\n���� ���� ��׽ý� ������ ���ǽð� ��� ���߸� ����캸�带 �شٴ� �ҹ��� ����µ�...."); //����
			status = 9;
		
		} else if(selection == 2) {
		cm.sendYesNo("#rNEXON#k ���ĺ��� ��� ��ƿ��̳���??\r\n");  //����
			status = 11;
		
		} else if(selection == 3) {
		cm.sendYesNo("#rWIZET#k ���ĺ��� ��� ��ƿ��̳���?\r\n");  //����
			status = 13;
			}

		} if(status == 2) {
			cm.sendOk("���߿� ���ĺ��� ��� ��ƿ��ø� �ٽ� ã�ƿ��ּ���\r\n");
			cm.dispose();
			}


		} if(status == 10) {
			if ((cm.haveItem(1442012, 1)) && (cm.haveItem(1442013, 1)) && (cm.haveItem(1442014, 1)) && (cm.haveItem(1442015, 1)) && (cm.haveItem(1442016, 1)) && (cm.haveItem(1442017, 1))) {
			cm.gainItem(1442012,-1);
			cm.gainItem(1442013,-1);
			cm.gainItem(1442014,-1);
			cm.gainItem(1442015,-1);
			cm.gainItem(1442016,-1);
			cm.gainItem(1442017,-1);
			cm.gainItem(1442046, 1);  //���� �Ǹ��ǹ���
			cm.sendOk("��.. ���� 6���� ����캸�带 ��� ��ƿԱ���! �� ���� #v1442046#�޾�!\r\n");
			
			cm.dispose();

		} else {
			cm.sendOk("�� 6���� ����캸�带 ��� ������ ���� �ʾ�...\r\n");
			cm.dispose();
			}
		} if(status == 12) {
			if ((cm.haveItem(3994004, 1)) && (cm.haveItem(3994001, 1)) && (cm.haveItem(3994009, 1)) && (cm.haveItem(3994005, 1)) && (cm.haveItem(3994004, 1)))   {
			cm.gainItem(3994004,-1);
			cm.gainItem(3994001,-1);
			cm.gainItem(3994009,-1);
			cm.gainItem(3994005,-1);
			cm.gainItem(3994004,-1);
			cm.gainItem(4031019, 1);  //���� �Ǹ��ǹ���
			cm.sendOk("���ϵ帳�ϴ�!! �Ǹ��� ������ ���޵Ǿ����ϴ�. �Ǹ��� ������ Ŀ�׽�Ƽ �������� 'õ��'�� ã�ư��� �ص��� �����մϴ�.�ص��ϸ� �����ڽ��� ����µ� Ŀ�׽�Ƽ ������ ���������� ���� ���� �� �� �ֽ��ϴ�. �� �ȿ��� � ���� ���� ���� �ƹ��� �𸥴�ϴ�. ����� ���ϴ�.\r\n");
			cm.dispose();

		} else {
			cm.sendOk("���ĺ��� �����մϴ�.\r\n");
			cm.dispose();
			}
		} if(status == 14) {
			if ((cm.haveItem(3994014, 1)) && (cm.haveItem(3994002, 1)) && (cm.haveItem(3994011, 1)) && (cm.haveItem(3994001, 1))   && (cm.haveItem(3994008, 1)))   {
			cm.gainItem(3994014,-1);
			cm.gainItem(3994002,-1);
			cm.gainItem(3994011,-1);
			cm.gainItem(3994001,-1);
			cm.gainItem(3994008,-1);
			cm.gainItem(4031019, 1);  //���� �Ǹ��ǹ���
			cm.sendOk("���ϵ帳�ϴ�!! �Ǹ��� ������ ���޵Ǿ����ϴ�. �Ǹ��� ������ Ŀ�׽�Ƽ �������� 'õ��'�� ã�ư��� �ص��� �����մϴ�.�ص��ϸ� �����ڽ��� ����µ� Ŀ�׽�Ƽ ������ ���������� ���� ���� �� �� �ֽ��ϴ�. �� �ȿ��� � ���� ���� ���� �ƹ��� �𸥴�ϴ�. ����� ���ϴ�.\r\n");
			cm.dispose();

		} else {
			cm.sendOk("���ĺ��� �����մϴ�.\r\n");
			cm.dispose();
			}
		} if(status == 16) {
			if(cm.getChar().getFame() > 1) {
			cm.gainFame(-2);
			cm.gainItem(2000003, 200);
			cm.sendOk("���ϵ帳�ϴ�!! �Ǹ��� ������ ���޵Ǿ����ϴ�. �Ǹ��� ������ Ŀ�׽�Ƽ �������� 'õ��'�� ã�ư��� �ص��� �����մϴ�.�ص��ϸ� �����ڽ��� ����µ� Ŀ�׽�Ƽ ������ ���������� ���� ���� �� �� �ֽ��ϴ�. �� �ȿ��� � ���� ���� ���� �ƹ��� �𸥴�ϴ�. ����� ���ϴ�.\r\n");
			cm.dispose();

		} else {
			cm.sendOk("���ĺ��� �����մϴ�.\r\n");
			cm.dispose();
			}
			cm.dispose();
			}
		}