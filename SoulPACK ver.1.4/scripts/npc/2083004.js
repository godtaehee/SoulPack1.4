var status = 0;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		cm.sendYesNo("#bȥ������ ����#k�� ���ðڽ��ϱ�?");
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
					cm.sendOk ("�ε� #rȥ����#k�� �������ֽʽÿ�.");
					status++
			} else if (status == 2) {
					cm.warp(240060200, 0);
					cm.dispose();
			}
		}
	}
}