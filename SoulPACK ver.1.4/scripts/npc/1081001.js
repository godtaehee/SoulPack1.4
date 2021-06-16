/*
	Pison 
	Florina Beach
	MADE BY 소희 (jantnic)
*/

importPackage(net.sf.odinms.server.maps);
var status = 0;
var returnmap;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendNext("리스항구로 돌아가고싶으면 언제든지 말하라고!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			returnmap = cm.getChar().getSavedLocation(SavedLocationType.FLORINA);
			if (returnmap == -1) {
				returnmap = 104000000;
			}
			cm.sendNext("플로리나비치에서 즐거운 휴가보냈나? 그래그래 재밌었겠지...");
		} else if (status == 1) {
			cm.sendYesNo("#b#m"+returnmap+"##k 으로 돌아가고싶은게냐?")
		} else if (status == 2) {
			cm.warp(returnmap);
			cm.dispose();
		}
	}
}
