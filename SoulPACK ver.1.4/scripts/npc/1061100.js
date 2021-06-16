/*
	Sleepiwood Hotel NPC
	MADE BY ���� (jantnic)
*/

var status = 0;
var maps = Array(105040401, 105040402);
var mapNames = Array("�Ϲ� ��쳪", "VIP ��쳪");
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
			cm.sendNext("�����ǿ��ȣ������ ��쳪�� ���÷��� �������� ������ �����ɾ��ּ���~");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("�ȳ��ϼ���~! �����ǿ�� ȣ�ھȳ����Դϴ�. ����ȣ�ڿ����� �ο���� ����Ͻô� �����е��� �����Ͽ� ��쳪�� ������ ���ҽ��ϴ�. ����ȣ������ ��쳪������ �Ϲݸʺ��� HP,MP ȸ������ ��������, ��쳪�ȿ��� ���ε��־, �����Ÿ��� �����ϰ��ֽ��ϴ�.");
		} else if (status == 1) {
			var selStr = "��� ��쳪�� ���ð�����ʴϱ�?";
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				for (var i = 0; i < maps.length; i++) {
					selStr += "\r\n#L" + i + "#" + mapNames[i] + "(" + costBeginner[i] + " �޼�)#l";
				}
			} else {
				for (var i = 0; i < maps.length; i++) {
					selStr += "\r\n#L" + i + "#" + mapNames[i] + "(" + cost[i] + " �޼�)#l";
				}
			}
			cm.sendSimple(selStr);
		} else if (status == 2) {
			selectedMap = selection;
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendYesNo("#b" + mapNames[selection] + "#k ��쳪�� �����ϼ˽��ϴ�. ������ #b" + costBeginner[selection] + " �޼�#k�Դϴ�.");
			} else {
				cm.sendYesNo("#b" + mapNames[selection] + "#k ��쳪�� �����ϼ˽��ϴ�. ������ #b" + cost[selection] + " �޼�#k�Դϴ�.");
			}
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getMeso() < costBeginner[selectedMap]) {
					cm.sendNext("�޼Ұ� �����Ͻñ���. �˼������� ����� �������� ������ ���� ��쳪�� �̿��Ͻ� �� �����ϴ�.");
					cm.dispose();
				} else {
					cm.gainMeso(-costBeginner[selectedMap]);
					cm.warp(maps[selectedMap], 0);
					cm.dispose();
				}
			} else {
				if (cm.getMeso() < cost[selectedMap]) {
					cm.sendNext("�޼Ұ� �����Ͻñ���. �˼������� ����� �������� ������ ���� ��쳪�� �̿��Ͻ� �� �����ϴ�.");
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