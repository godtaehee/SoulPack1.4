/*
	AGATHA , ������ ��ǥ�� Ƽ���Ǹſ�
	MAP : ������ ��ǥ��
	MADE BY ���� (jantnic)
*/


var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("�ȳ��ϼ���. ���� ���� ����ּ���.\r\n#L0#������#l\r\n#L1#�����Ͼ�#l\r\n#L2#���긮��#l\r\n#L3#�Ƹ���Ʈ#l\r\n#L4#����#l");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendSimple("���Ͻô� Ƽ���� ����ּ���.\r\n#L0##r�������� Ƽ��(�⺻)#k\r\n#L1##r�������� Ƽ��(�Ϲ�)#k");
			} else if (selection == 1) {
				cm.sendSimple("���Ͻô� Ƽ���� ����ּ���.\r\n#L2##r�����Ͼ��� Ƽ��(�⺻)#k\r\n#L3##r�����Ͼ��� Ƽ��(�Ϲ�)#k");
			} else if (selection == 2) {
				cm.sendSimple("���Ͻô� Ƽ���� ����ּ���.\r\n#L4##r���긮���� Ƽ��(�⺻)#k\r\n#L5##r���긮���� Ƽ��(�Ϲ�)#k");
			} else if (selection == 3) {
				cm.sendSimple("���Ͻô� Ƽ���� ����ּ���.\r\n#L6##r�Ƹ���Ʈ�� Ƽ��(�⺻)#k\r\n#L7##r�Ƹ���Ʈ�� Ƽ��(�Ϲ�)#k");
			} else if (selection == 4) {
				cm.sendSimple("#L8##r�������� ���¹��� �������ּ���!#k");
		}
		} if (status == 2) {
			if (selection == 0) {
					if (cm.getMeso() >= 3000) {
					cm.sendOk("�������� Ƽ��(�⺻)�� �����ϼ˽��ϴ�. �������� �̿����ּ���.");
					cm.gainMeso(-3000);
					cm.gainItem(4031330,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� Ƽ���� ��˰ų� �޼Ұ� �����մϴ�.");
    					cm.dispose();
				}
			} else if (selection == 1) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�������� Ƽ��(�Ϲ�)�� �����ϼ˽��ϴ�. �������� �̿����ּ���.");
					cm.gainMeso(-5000);
					cm.gainItem(4031331,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� Ƽ���� ��˰ų� �޼Ұ� �����մϴ�.");
    					cm.dispose();
				}
			} else if (selection == 2) {
					if (cm.getMeso() >= 3000) {
					cm.sendOk("�����Ͼ��� Ƽ��(�⺻)�� �����ϼ˽��ϴ�. �������� �̿����ּ���.");
					cm.gainMeso(-3000);
					cm.gainItem(4031046,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� Ƽ���� ��˰ų� �޼Ұ� �����մϴ�.");
    					cm.dispose();
				}
			} else if (selection == 3) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�����Ͼ��� Ƽ��(�Ϲ�)�� �����ϼ˽��ϴ�. �������� �̿����ּ���.");
					cm.gainMeso(-5000);
					cm.gainItem(4031047,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� Ƽ���� ��˰ų� �޼Ұ� �����մϴ�.");
    					cm.dispose();
				}
			} else if (selection == 4) {
					if (cm.getMeso() >= 3000) {
					cm.sendOk("���긮���� Ƽ��(�⺻)�� �����ϼ˽��ϴ�. �������� �̿����ּ���.");
					cm.gainMeso(-3000);
					cm.gainItem(4031073,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� Ƽ���� ��˰ų� �޼Ұ� �����մϴ�.");
    					cm.dispose();
				}
   			} else if (selection == 5) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("���긮���� Ƽ��(�Ϲ�)�� �����ϼ˽��ϴ�. �������� �̿����ּ���.");
					cm.gainMeso(-5000);
     					cm.gainItem(4031074,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� Ƽ���� ��˰ų� �޼Ұ� �����մϴ�.");
     					cm.dispose();
    				}
   			} else if (selection == 6) {
					if (cm.getMeso() >= 3000) {
					cm.sendOk("�Ƹ���Ʈ�� Ƽ��(�⺻)�� �����ϼ˽��ϴ�. �������� �̿����ּ���.");
					cm.gainMeso(-3000);
          					cm.gainItem(4031575,1);
          					cm.dispose();
   				 } else {
     					cm.sendOk("�̹� Ƽ���� ��˰ų� �޼Ұ� �����մϴ�.");
          					cm.dispose();
    				}
        					} else if (selection == 7) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�Ƹ���Ʈ�� Ƽ��(�Ϲ�)�� �����ϼ˽��ϴ�. �������� �̿����ּ���.");
					cm.gainMeso(-5000);
          					cm.gainItem(4031576,1);
          					cm.dispose();
        				} else {
     					cm.sendOk("�̹� Ƽ���� ��˰ų� �޼Ұ� �����մϴ�.");
          					cm.dispose();
				}
       					} else if (selection == 8) {
					if (cm.getMeso() >= 1) {
					cm.sendOk("�������� Ƽ�Ͼ��̵� ���Ǽ��ִ�ϴ�. Ƽ���� �����ʰ� �п��� �������� �̵��̰����մϴ�. ���ݴ��� ������ ���������� ���ż� �п��� �������ø� �������� �ٷ��̵��� �����ϴ�ϴ�.");
					cm.gainMeso(0);
          					cm.dispose();
        				} else {
     					cm.sendOk("�̹� Ƽ���� ��˰ų� �޼Ұ� �����մϴ�.");
          					cm.dispose();
				}
			}
		}
	}
}