/*
by.��Ű�����������߽��ϴ�,
���ܹ���,���ѹ��� ����
*/
function start() {
	cm.sendSimple ("�ҿ�����Դϴ�~!\r\n���� �ֱ��۸��Ⱦƿ�~^^\r\n#L0##b�ֱ͹���#k#l\r\n#L1##g�ֱ͹�#k#l\r\n#L2##r�ֱ�ĳ����");
}

function action(mode, type, selection) {
	cm.dispose();
if (selection == 0) {
		cm.openShop (70);
	} else if (selection == 1) {
		cm.openShop (71);
	} else if (selection == 2) {
		cm.openShop (72);
	} else if (selection == 3) {


	} else {
		cm.dispose();
	}
}