/*
	Sleepiwood Hotel NPC
	MADE BY 소희 (jantnic)
*/

var status = 0;
var maps = Array(105040401, 105040402);
var mapNames = Array("일반 사우나", "VIP 사우나");
var cost = Array(499, 999);
var costBeginner = Array(499, 999);
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
			cm.sendNext("슬리피우드호텔전용 사우나에 들어가시려면 언제든지 저에게 말을걸어주세요~");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("안녕하세요~! 슬리피우드 호텔안내자입니다. 저희호텔에서는 싸우느냐 고생하시는 여러분들을 생각하여 사우나를 마련해 놓았습니다. 저희호텔전용 사우나에서는 일반맵보다 HP,MP 회복량이 더빠르며, 사우나안에는 상인도있어서, 먹을거리도 제공하고있습니다.");
		} else if (status == 1) {
			var selStr = "어느 사우나에 가시고싶으십니까?";
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
				cm.sendYesNo("#b" + mapNames[selection] + "#k 사우나를 선택하셧습니다. 가격은 #b" + costBeginner[selection] + " 메소#k입니다.");
			} else {
				cm.sendYesNo("#b" + mapNames[selection] + "#k 사우나를 선택하셧습니다. 가격은 #b" + cost[selection] + " 메소#k입니다.");
			}
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getMeso() < costBeginner[selectedMap]) {
					cm.sendNext("메소가 부족하시군요. 죄송하지만 요금을 지불하지 않으면 저희 사우나를 이용하실 수 없습니다.");
					cm.dispose();
				} else {
					cm.gainMeso(-costBeginner[selectedMap]);
					cm.warp(maps[selectedMap], 0);
					cm.dispose();
				}
			} else {
				if (cm.getMeso() < cost[selectedMap]) {
					cm.sendNext("메소가 부족하시군요. 죄송하지만 요금을 지불하지 않으면 저희 사우나를 이용하실 수 없습니다.");
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