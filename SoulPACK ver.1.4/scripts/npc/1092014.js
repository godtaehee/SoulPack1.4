/*
	Nautllus Regural Cap
	MAP : NAUTILLUS HARBOR
	MADE BY 소희 (jantnic)
	HELP : 리프 (w3aries) [말, 기타]
*/

var status = 0;
var maps = Array(104000000, 102000000, 100000000, 103000000, 101000000);
var mapNames = Array("리스항구", "페리온", "헤네시스", "커닝시티", "엘리니아");
var cost = Array(1000, 1200, 800, 1200, 800);
var costBeginner = Array(100, 120, 80, 120, 80);
var selectedMap = -1;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status == 1 && mode == 0) {
			cm.dispose();
			return;
		} else if (status == 2 && mode == 0) {
			cm.sendNext("이 마을에도 볼거리가 가득하답니다. 다른 마을로 이동하고 싶어지면 언제든지 저희 택시를 이용해 주세요~");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("안녕하세요~! 엘리니아 중형택시입니다. 다른 마을로 안전하고 빠르게 이동하고 싶으신가요? 그렇다면 저희 택시를 이용해 보세요. 싼 가격으로 원하시는 곳까지 친절하게 모셔다 드리고 있습니다.");
		} else if (status == 1) {
			var selStr = "목적지를 선택해 주세요. 마을마다 요금이 다릅니다.#b";
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				for (var i = 0; i < maps.length; i++) {
					selStr += "\r\n#L" + i + "#" + mapNames[i] + "(" + costBeginner[i] + " 메소)#l";
				}
			} else {
				for (var i = 0; i < maps.length; i++) {
					selStr += "\r\n#L" + i + "#" + mapNames[i] + "(" + cost[i] + " 메소)#l";
				}
			}
			cm.sendSimple(selStr);
		} else if (status == 2) {
			selectedMap = selection;
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendYesNo("이곳에서 더 이상 볼일이 없으신 모양이로군요. 정말로 #b" + mapNames[selection] + "#k 마을로 이동하시겠습니까? 가격은 #b" + costBeginner[selection] + " 메소#k입니다.");
			} else {
				cm.sendYesNo("이곳에서 더 이상 볼일이 없으신 모양이로군요. 정말로 #b" + mapNames[selection] + "#k 마을로 이동하시겠습니까? 가격은 #b" + cost[selection] + " 메소#k입니다.");
			}
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getMeso() < costBeginner[selectedMap]) {
					cm.sendNext("메소가 부족하시군요. 죄송하지만 요금을 지불하지 않으면 저희 택시를 이용하실 수 없습니다.");
					cm.dispose();
				} else {
					cm.gainMeso(-costBeginner[selectedMap]);
					cm.warp(maps[selectedMap], 0);
					cm.dispose();
				}
			} else {
				if (cm.getMeso() < cost[selectedMap]) {
					cm.sendNext("메소가 부족하시군요. 죄송하지만 요금을 지불하지 않으면 저희 택시를 이용하실 수 없습니다.");
					cm.dispose();
				} else {
					cm.gainMeso(-cost[selectedMap]);
					cm.warp(maps[selectedMap], 0);
					cm.dispose();
				}
			}
		}
	}
}