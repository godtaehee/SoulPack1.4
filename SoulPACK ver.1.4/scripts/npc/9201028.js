/*
��ξ�(shoe64) ����
*/

/*
USFM ���ѹα��� ������ USFM http://cafe.naver.com/koreausfm
*/
function start() {
	cm.sendSimple ("������ �ұ��� �����������?#b\r\n#L0#��#l\r\n#L1#�ƴϿ�#l");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.warp(103000805)
	} else if (selection == 1) {
	cm.sendSimple ("������ �Ǻ���. �������Ͻñ� �ٶ��ϴ�.");
	cm.dispose();
	}
}