/* ������ : ö�۴�
*/


importPackage(net.sf.odinms.client);

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	status++;
		if (status == 0) {
			cm.sendYesNo ("�ȳ�! ó�����¾ֱ��� ����..\r\n�̰��� ���� 1�������� �����ִ� #r����#k�������� ���������?\r\n");
			} else if (status == 1) {

			if(cm.haveItem(4031003,1) == false) {         //       �������̸� ����
				cm.sendOk("�׷� �̰����� ������ ���͵��� ��� ���� �Ҿ���� �ſ��� �������ٷ�?�ٷ� �̷��� ����ž� #v4031003#");
				cm.dispose();
			} else if(cm.haveItem(4031003, 1) == true) { //       �������̸� ����
 				cm.sendOk("�׷� �̰����� ������ ���͵��� ��� ���� �Ҿ���� �ſ��� �������ٷ�?�ٷ� �̷��� ����ž� #v4031003#");
				cm.gainMeso(25000); //������
				cm.gainItem(4031003, -1);   //���̴���
				cm.gainItem(5072000, 40);   //���̴���
				cm.warp(3);
				cm.dispose();
			}
		} else {
			cm.dispose();
		}
	}