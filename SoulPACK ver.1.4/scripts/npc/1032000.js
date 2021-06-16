/*
	! �� ��ũ��Ʈ�� ��ũ��Ʈ ����Ŀ ����(w3aries)�� �����Ͽ����ϴ�.
	! �� ��ũ��Ʈ�� ���ѹ��� �Ǿ����� ������� �Ұ����մϴ�.
	! �� �ּ��� �������� ���ǰ� ������ ������ �����մϴ�.
      Copyright (C) 2008 Script Maker ���� <w3aries@naver.com>
*/

var status = 0;
var maps = Array(104000000, 102000000, 100000000, 103000000);
var mapNames = Array("�����ױ�", "�丮��", "��׽ý�", "Ŀ�׽�Ƽ");
var cost = Array(1200, 1000, 1000, 1200);
var costBeginner = Array(120, 100, 100, 120);
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
			cm.sendNext("�� �������� ���Ÿ��� �����ϴ�ϴ�. �ٸ� ������ �̵��ϰ� �;����� �������� ���� �ýø� �̿��� �ּ���~");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("�ȳ��ϼ���~! �����Ͼ� �����ý��Դϴ�. �ٸ� ������ �����ϰ� ������ �̵��ϰ� �����Ű���? �׷��ٸ� ���� �ýø� �̿��� ������. �� �������� ���Ͻô� ������ ģ���ϰ� ��Ŵ� �帮�� �ֽ��ϴ�.");
		} else if (status == 1) {
			var selStr = "�������� ������ �ּ���. �������� ����� �ٸ��ϴ�.#b";
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
				cm.sendYesNo("�̰����� �� �̻� ������ ������ ����̷α���. ������ #b" + mapNames[selection] + "#k ������ �̵��Ͻðڽ��ϱ�? ������ #b" + costBeginner[selection] + " �޼�#k�Դϴ�.");
			} else {
				cm.sendYesNo("�̰����� �� �̻� ������ ������ ����̷α���. ������ #b" + mapNames[selection] + "#k ������ �̵��Ͻðڽ��ϱ�? ������ #b" + cost[selection] + " �޼�#k�Դϴ�.");
			}
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getMeso() < costBeginner[selectedMap]) {
					cm.sendNext("�޼Ұ� �����Ͻñ���. �˼������� ����� �������� ������ ���� �ýø� �̿��Ͻ� �� �����ϴ�.");
					cm.dispose();
				} else {
					cm.gainMeso(-costBeginner[selectedMap]);
					cm.warp(maps[selectedMap], 0);
					cm.dispose();
				}
			} else {
				if (cm.getMeso() < cost[selectedMap]) {
					cm.sendNext("�޼Ұ� �����Ͻñ���. �˼������� ����� �������� ������ ���� �ýø� �̿��Ͻ� �� �����ϴ�.");
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