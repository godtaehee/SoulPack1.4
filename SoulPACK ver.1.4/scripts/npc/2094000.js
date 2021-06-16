var status = 0;
var maps = new Array(120000000,260000000,801000000,682000000,104000000,102000000, 101000000, 100000000, 103000000,105040300,200000000,211000000,220000000,221000000,222000000,240000000,250000000,230000000,110000000,209000000);
var mapNames = new Array("#g[W]#k노틸러스","#g[W]#k 아리안트","#r[W]#k 쇼와 타운(일본)","#r[K]#k 할로윈 축제","#r[V]#k 리스항구","#r[V]#k 페리온","#r[V]#k 엘리니아","#r[V]#k 헤네시스","#r[V]#k 커닝시티","#r[V]#k 슬리피우드","#b[O]#k 오르비스","#b[O]#k 엘나스","#b[O]#k 루디브리엄","#b[O]#k 지구방위대","#b[O]#k 아랫마을","#b[O]#k 리프레","#b[O]#k 무릉","#g[W]#k 아쿠아리움","#g[W]#k 플로리나 해안가","#g[W]#k행복한마을");
var selectedMap = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		var where = "어디로 가시겠습니까. \r \r #r빨강색 :#k 빅토리아 아일랜드 \r #b파랑색 :#k 오시리아 대륙 \r #g초록색 :#k 대도시";
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