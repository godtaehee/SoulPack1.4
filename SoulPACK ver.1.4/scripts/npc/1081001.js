/*
	Pison 
	Florina Beach
	MADE BY ���� (jantnic)
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
			cm.sendNext("�����ױ��� ���ư�������� �������� ���϶��!");
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
			cm.sendNext("�÷θ�����ġ���� ��ſ� �ް����³�? �׷��׷� ��վ�����...");
		} else if (status == 1) {
			cm.sendYesNo("#b#m"+returnmap+"##k ���� ���ư�������Գ�?")
		} else if (status == 2) {
			cm.warp(returnmap);
			cm.dispose();
		}
	}
}
