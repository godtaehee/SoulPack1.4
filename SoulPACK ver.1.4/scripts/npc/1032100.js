/*
	MADE BY ����(jantnic) ������ �ҿﾾ(xoeh15)
	TRADE NPC
*/
function start() {
	cm.sendSimple ("���� #b���� �Ƹ���#k�̶�� �մϴ� #rNPC ��������#k�� �������� �����Ͼƿ��� �Դ�ϴ� ������ ���͵帱���?\r\n����: NPC ���������̶� ��� �ʿ� NPC�� �������� NPC�� �Ѹ��Ѹ� ������������� ���մϴ�\r\n#L0#���񼭹��� �Ұ��մϴ�~ [Ŭ��� �ӽ�]#l\r\n#L1#������Ż �������� [����]\r\n#L2#���ο� ��ų���� [����]\r\n#L3#������ ����� [������]\r\n#L4#���⸸��� [����]\r\n#L5#�������� ����Ͱ���\r\n#L6#������� [�ϱذ� �η�]\r\n#L7#�������� NPC [�� ���� ��]\r\n#L8#ĳ������ NPC [����]\r\n#L9#��ͻ��� [�ǾƳ�]")
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.openNpc(9201067);
	} else if (selection == 1) {
		cm.openNpc(1012101);
	} else if (selection == 2) {
		cm.openNpc(9090000);
	} else if (selection == 3) {
		cm.openNpc(2120001);
	} else if (selection == 4) {
		cm.openNpc(9220004);
	} else if (selection == 5) {
		cm.openNpc(1052006);
	} else if (selection == 6) {
		cm.openNpc(9001001);
	} else if (selection == 7) {
		cm.openNpc(1052012);
	} else if (selection == 7) {
		cm.openNpc(9120009);
	} else if (selection == 8) {
		cm.openNpc (9120009);
	} else if (selection == 9) {
		cm.openNpc (2121005);
	} else {
		cm.dispose();
	}
}