/*
��ξ�(shoe64) ����
*/

/*
������: �� �� 
*/
function start() {
	cm.sendSimple ("���� �ұ��� ��������ʴϱ�?#e\r\n[���� �׾ ���ü����ּ��̴�]#n#b\r\n#L0#��#l\r\n#L1#�ƴϿ�#l");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.warp(103000800)
	} else if (selection == 1) {
	cm.sendSimple ("������ �Ǻ���. �������Ͻñ� �ٶ��ϴ�.");
	cm.dispose();
	}
}