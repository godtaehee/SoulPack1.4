/* 
	Thomas Swift
	Amoria warper
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
		if (status >= 0 && mode == 0) {
			cm.sendOk("�Ƹ𸮾ƿ����� ��ȥ�� �Ҽ�����~! ��ȥ�� �����ž�!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getChar().getMapId() == 100000000) {
				cm.sendYesNo("�Ƹ𸮾ƿ� ��������Ű���?");
			}
			else {
				cm.sendYesNo("��׽ý��� ���ư�������Ű���?");
			}
		} else if (status == 1) {
			if (cm.getChar().getMapId() == 100000000) {
				cm.warp(680000000, 0);
			}
			else {
				cm.warp(100000000, 5);
			}
			cm.dispose();
		}
	}
}