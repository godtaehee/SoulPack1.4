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
		cm.sendOk("�ֱ� ���� �ð��� �տ��� ���� �ٸ� ������ ���Ͱ� ħ���Ͽ� �߿��� ������ ���� �� �� ������ ������Ƚ��ϴ�. �༮���� � ���� �ִ��� ���� ������ �ȿ� ���� �ϰ� ���� ������. ����... ���� �༮�� ã�Ƴ��� ��ġ�ϰ� �߿��� ������ ��ã�ƾ� �ϴµ� ū���̱���");
		cm.dispose();
	}
}