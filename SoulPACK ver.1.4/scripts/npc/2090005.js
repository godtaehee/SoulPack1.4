/*
�� ��ũ��Ʈ�� ���۱���
�о�[maple0025]���� �ֽ��ϴ�.
���ܹ����� ���ѹ����� ��������ϴ�.
�����ڸ� ������ ���ñ� �ٶ��ϴ�.
*/
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (cm.getPlayer().getMapId() == 251000000 ) {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.sendNext("������ �ٲ�� �ٽ� ���� �ɾ� �ְ�.");
		cm.dispose();
			return;
		}	
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendYesNo("�ȳ��ϽŰ�? ���谡 ���. ������ ��ſ�Ű�? ��� ������ ���� ������� #b����#k���� �̵����� �ְ� �ִµ�, ���� �ִ°�? ��ó�� ���������� �ʾƼ� ������ Ÿ�� �־�� �ϱ� ������, �躸�� �ξ� ������ �̵��� �����ϴٳ�. #b500 �޼�#k�� ���ٸ� ������ �Ű� �ֵ��� ����.");
		} else if (status == 1) {
			if (cm.getPlayer().getMeso() < 1500) {
				cm.sendOk("�ڳ�, �޼Ҵ� ����� ������ �ִ°հ�?")
				cm.dispose();
			} else {
				cm.gainMeso(-1500);
				cm.warp(250000100, 0);
				cm.dispose();
				}
			}
		}	
	}
		if (cm.getPlayer().getMapId() == 250000100 ) {
		if (mode == -1) {
			cm.dispose();
		} else {		
		if (status == 0 && mode == 0) {
			cm.dispose();
		} else {
		if (status >= 1 && mode == 0) {
			cm.sendNext("������ �ٲ�� �ٽ� ���� �ɾ� �ְ�.");
			cm.dispose();
			return;
		}	
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("�ȳ��ϽŰ�? ���谡 ���. ������ ��ſ�Ű�? �ڳ״� ��ó�� ������ ���� ������ ��ó���� ������ �����ϰڱ�. ��� ������ ���� ������� �ٸ� �������� �̵����� �ְ� �ִµ�, ���� �ִ°�? �׷� �ڳװ� ���� ���� ���� ������ ����.\r\n\r\n#L0##b������(1500 �޼�)#k#l\r\n#L1##b���ʸ���(500 �޼�)#k#l");
		} else if (status == 1) {
			if (selection == 0) {
			if (cm.getPlayer().getMeso() < 6000) {
				cm.sendOk("�ڳ�, �޼Ҵ� ����� ������ �ִ°հ�?")
				cm.dispose();
			} else {
				cm.gainMeso(-6000);
				cm.warp(200000141, 0);
				cm.dispose();	
			}				
		} else if (selection == 1) {
			cm.sendYesNo("���� #b���ʸ���#k�� �̵��ϰڳ�? ž�� �߿� ������ �ൿ�� �ؼ� ���������� �ʴ´ٸ� �ݹ� ���� �Ѵٳ�. #b500 �޼�#k�� ���� �ٷ� ��������.")
				} 
			} else if (status == 2) {
			if (cm.getPlayer().getMeso() < 1500) {
				cm.sendOk("�ڳ�, �޼Ҵ� ����� ������ �ִ°հ�?")
				cm.dispose();
			} else {
				cm.gainMeso(-1500);
				cm.warp(251000000, 0);
				cm.dispose();
					}
				}
			}
		}
	}	
		if (cm.getPlayer().getMapId() == 200000141 ) {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.sendNext("������ �ٲ�� �ٽ� ���� �ɾ� �ְ�.");
		cm.dispose();
			return;
		}	
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("�ȳ��ϽŰ�? ���谡 ���. ������ ��ſ�Ű�? ��� ������ ���� ������� �ٸ� �������� �̵����� �ְ� �ִµ�, �����ִ°�? ������ �ൿ�� �ؼ� ���������� �ʴ´ٸ� �����ϰ� �̵����� �شٳ�. �׷� �ڳװ� ���� ���� ���� ������ ����.\r\n#L1##b����(1500 �޼�)#k#l");
		} else if (status == 1) {
			if (cm.getPlayer().getMeso() < 1500) {
				cm.sendOk("�ڳ�, �޼Ҵ� ����� ������ �ִ°հ�?")
				cm.dispose();
			} else {
				cm.gainMeso(-1500);
				cm.warp(250000100, 0);
				cm.dispose();
				}
			}
		}	
	}
}