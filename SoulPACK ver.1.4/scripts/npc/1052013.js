/*
	MADE BY ����(jantnic)
	TRADE NPC
*/
function start() {
	cm.sendSimple ("�ȳ��ϼ��� ���� ��ǻ�� �Դϴ� �����ϰ� ������ �Ҽ��ְ� ���ִ� NPC����\r\n#L0#��׽ý��� ����")
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.warp (100000000,0);
	} else {
		cm.dispose();
	}
}