var status = 0;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		cm.sendYesNo("#b혼테일의 동굴#k로 들어가시겠습니까?");
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
					cm.sendOk ("부디 #r혼테일#k을 물리쳐주십시오.");
					status++
			} else if (status == 2) {
					cm.warp(240060200, 0);
					cm.dispose();
			}
		}
	}
}