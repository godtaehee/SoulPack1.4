/*
	MADE BY ���� (jantnic)
*/

function start() {
	status = -1;
	action(1);
}

function action(mode) {
	if (mode == -1) {
		cm.dispose();
	} else {
		cm.sendOk("������Ʈ ���� NPC �Դϴ�. ���̵�� ������ ���� (jantnic) �Կ��� �������ּ���. ������� @USFM - �ϴÿ��������¿����鿡�� Ȱ���մϴ�.");
		cm.dispose();
	}
}