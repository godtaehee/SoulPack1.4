/*
	Rudibrium
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
		cm.sendOk("����Ƹ��� �������� ���� ���� ȯ���մϴ�. ���� ������ ���û� ��Ÿ��� �ؿ�. �츮 ���� �����鿡�� �Ժη� ���̸� �ֽø� �ȵſ�.");
		cm.dispose();
	}
}