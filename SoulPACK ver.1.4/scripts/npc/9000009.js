/*
������:�� ����
�� ������ ���ܹ����� �㰡�����ʽ��ϴ�.
�׸���, �������� �̸��� ��������������.
*/
importPackage(net.sf.odinms.client);
var status = 0;



function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("��������!�� ������ ����ŷ! �ƹ��� �� ��������! ������������������!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("���� ~ ����~ ! ���� ���̾�, �� �ٴٸ� ������ #r����ŷ#k���̽ö� ! ������.. ���� �Ѵ�����... ��! ����� �׸��α������. #b���� ���� ��ô �ʿ��Ѱ͵��� �ִµ�, �װ��� ���ش��ټ��ְڳ� ? #r�翬�� ��¥�� ���ش޶�°� �ƴϾ�!#b ���� ������ �ϴ� �߰��� #r������ ���,ġ��#b�� �ֵ�������!\r\n���� �ʿ��Ѱ͵��� ��Ͽ� ����״ٳ�.������!\r\n#r��#b����������� �����ɸ��� �ʰ���?#k\r\n\r\n#b[���]#k\r\n\r\n#b#v2022176##k #d�Ŀ�������#k 100��\r\n#b#v4001006##k #d�Ҳɱ���#k 30��\r\n#b#v4003002##k #d��������#k 10��\r\n#b#v4001000##k #d�Ƹ����� ��������#k 1��\r\n\r\n#b[��]#k\r\n#b#v4001006##k#d�Ҳɱ���#k�� #r������Ÿ��ν�#k���������ִٴ¸��� �����!\r\n#b#v4003002##k#d��������#k�� #b�����񽺰���#k�� �ִ� #dneveNPC#k�� ����������!\r\n#b#v4001000##k#d�Ƹ����� ��������#k�� #b����������#k�� �ִ� #r����ҹ�#k�� ������ ��������!#r����ҹ�#k���� ����~ !");
			}
		else if (status == 1) {
			if ((cm.haveItem(2022176, 100)) && (cm.haveItem(4001006, 30)) && (cm.haveItem(4003002, 10)) && (cm.haveItem (4001000, 1))) {
			cm.sendYesNo("ȣ��! ����ϱ�, �����!! ���п� ������ ���� �ǁپ�!!\r\n��Ӵ�� #b#v2022179##k��#b#v2022273##k�� #r20��#k�� �ְڳ�!��������!");
   }
   else if (!cm.haveItem(2022176, 100)) {
   cm.sendOk("���� ��������#b#v2022176##k�� ������ !");
   cm.dispose();
   }
   else if (!cm.haveItem(4001006, 30)) {
   cm.sendOk("���� ��������#b#v4001006##k�� ������ !");
   cm.dispose();
   }
   else if (!cm.haveItem(4003002, 10)) {
   cm.sendOk("���� ��������#b#v4003002##k�� ������ !");
   cm.dispose();
   }
   else if (!cm.haveItem(4001000, 1)) {
   cm.sendOk("���� ��������#b#v4001000##k�� ������ !");
   cm.dispose();
   }
   		}
		else if (status == 2) {
   cm.gainItem(2022176, -100);
   cm.gainItem(4001006, -30);
   cm.gainItem(4003002, -10);
   cm.gainItem(4001000, -1);
   cm.gainItem(2022179, 20);
   cm.gainItem(2022273, 20);
   cm.gainExp(10000000);
			cm.dispose();
}
}
}