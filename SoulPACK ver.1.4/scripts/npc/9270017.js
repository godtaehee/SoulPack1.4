/* 	
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
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("�ȳ��ϽŰ� �� ���Ϸ� Xinga ����ϳ�. ���Ϸ��Գ�?\r\n#L0##b����⿡ �¿��ּ���.#k#l");
		} else if (status == 1) {
			if (selection == 0) {
				cm.warp(540010101, 0);
				cm.dispose();
			}
		}
	}	
}