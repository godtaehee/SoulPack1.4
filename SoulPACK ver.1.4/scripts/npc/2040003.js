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
		cm.sendOk("�峭�� ������ ��ǰ�� ������� ����� �߻��ϰ� �־ ū���̶��. ����ü � ������ �༮�� ���������� ���� �𸣰ڱ� �׷�. �̷��� ��ǰ�� ��������� ������ ����� ������ ���� ���µ�...");
		cm.dispose();
	}
}