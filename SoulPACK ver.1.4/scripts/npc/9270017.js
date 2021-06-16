/* 	
	MADE BY 소희 (jantnic)
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
			cm.sendSimple("안녕하신가 난 파일럿 Xinga 라고하네. 뭘하러왔나?\r\n#L0##b비행기에 태워주세요.#k#l");
		} else if (status == 1) {
			if (selection == 0) {
				cm.warp(540010101, 0);
				cm.dispose();
			}
		}
	}	
}