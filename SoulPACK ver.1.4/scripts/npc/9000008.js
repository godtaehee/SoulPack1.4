/*
�������ڹ���
������ : rlaehdwns4
	EDIT BY ���� (jantnic)
*/
function start() {
	cm.sendSimple ("�ȳ��ϽŰ� ��������� �ϳ� ���� �������� ����ְ����� �״�� �ѹ��ᱸ�� ����� Ǯ�� ���Ѵٳ�\r\n#L2##b������ �ڹ��� �����ϱ�#k#l\r\n#L0##b������ �ᱸ�� (������ �ڹ��� �ʿ�)#k#l\r\n#L3##b������ ��������ϱ� (�ڹ��� �ʿ����)#k#l\r\n#L1##b�������� ������� �������� ������?#k#l");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		if (!cm.haveItem(5060001,1)) {
			cm.sendOk("�������ڹ��谡 �־�� ��׵����� !");
			cm.dispose();
		} else {
			cm.openNpc(2003);
		}
	} else if (selection == 1) {
			cm.sendOk("�������� ��׸� ��������� ������ �������� ����Ҽ����⶧���� ��ŷ�� ���ظ� ���ϼ��ִٳ�\r\n�׸��� �� �Ȱ��� ���� �Ǵ���� �ƴ϶��");
			cm.dispose();
	} else if (selection == 2) {
			cm.openShop(981);
	} else if (selection == 3) {
			cm.openNpc(22000);
	}
}