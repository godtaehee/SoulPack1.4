var status = 0; // ���� ī�Ϲ߿��� ������ �������Դϴ�. [�����Ѱ����� �׷���... ����:�۱�]
var maps = new Array(980010100,980010200,980010300);
var mapNames = new Array("#r������ �ʵ�1#k ","#b������ �ʵ�2#k ","#g������ �ʵ�3#k ");
var selectedMap = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		var where = "� ���� �����Ͻðڽ��ϱ�?";
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
					cm.sendNext ("�̿� ���ּż� �����մϴ�.");
					selectedMap = selection;
					status++
			} else if (status == 2) {
					cm.warp(maps[selectedMap], 0);
					cm.dispose();
			}
		}
	}
}