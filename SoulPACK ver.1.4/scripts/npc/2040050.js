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
		cm.sendOk("�ȳ��ϼ���? ���� ������ ���� �̰������� �����ϴ� ������ ���ݼ��� �Դϴ�. ��� ������ �̰��� �ӹ����� ������.");
		cm.dispose();
	}
}