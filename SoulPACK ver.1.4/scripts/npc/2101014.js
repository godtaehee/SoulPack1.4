var status = 0; // 원래 카니발에서 응용한 투기장입니다. [간단한거지만 그래도... 수정:글귀]
var maps = new Array(980010100,980010200,980010300);
var mapNames = new Array("#r투기장 필드1#k ","#b투기장 필드2#k ","#g투기장 필드3#k ");
var selectedMap = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		var where = "어떤 방을 선택하시겠습니까?";
		for (var i = 0; i < maps.length; i++) {
			where += "\r\n#L" + i + "# " + mapNames[i] + "#l";
		}
		cm.sendSimple(where);
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
					cm.sendNext ("이용 해주셔서 감사합니다.");
					selectedMap = selection;
					status++
			} else if (status == 2) {
					cm.warp(maps[selectedMap], 0);
					cm.dispose();
			}
		}
	}
}