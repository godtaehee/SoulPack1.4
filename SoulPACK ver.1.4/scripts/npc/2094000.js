var status = 0;
var maps = new Array(120000000,260000000,801000000,682000000,104000000,102000000, 101000000, 100000000, 103000000,105040300,200000000,211000000,220000000,221000000,222000000,240000000,250000000,230000000,110000000,209000000);
var mapNames = new Array("#g[W]#k��ƿ����","#g[W]#k �Ƹ���Ʈ","#r[W]#k ��� Ÿ��(�Ϻ�)","#r[K]#k �ҷ��� ����","#r[V]#k �����ױ�","#r[V]#k �丮��","#r[V]#k �����Ͼ�","#r[V]#k ��׽ý�","#r[V]#k Ŀ�׽�Ƽ","#r[V]#k �����ǿ��","#b[O]#k ������","#b[O]#k ������","#b[O]#k ���긮��","#b[O]#k ����������","#b[O]#k �Ʒ�����","#b[O]#k ������","#b[O]#k ����","#g[W]#k ����Ƹ���","#g[W]#k �÷θ��� �ؾȰ�","#g[W]#k�ູ�Ѹ���");
var selectedMap = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		var where = "���� ���ðڽ��ϱ�. \r \r #r������ :#k ���丮�� ���Ϸ��� \r #b�Ķ��� :#k ���ø��� ��� \r #g�ʷϻ� :#k �뵵��";
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