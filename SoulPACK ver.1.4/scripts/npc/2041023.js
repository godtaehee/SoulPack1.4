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
		cm.sendOk("�� �ð��� ��θ� ��Ű�� �÷ζ�� �ؿ�. �� ���� ���Ƿ���?");
		cm.dispose();
	}
}