/*

	������������ ����������NPC  (8/8)

*/


importPackage(net.sf.odinms.client);




var randomA = 1 + Math.floor(Math.random() * 100 - 1);
var randomB = 1 + Math.floor(Math.random() * 100 - 1);
var randomC = 1 + Math.floor(Math.random() * 100 - 1); 


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
		} else {
		if (mode == 0) {
			cm.sendOk("�߰�~ ");
			cm.dispose();
		}
		if (mode == 1)
			status++;
		else
			status--;

		if(status == 0) {
		var tmp_str = "�ȳ��ϼ���. ���������� ������ �Ͻ÷����ŰŰ�����...\r\n";
		tmp_str += "������� 10,000�޼Ұ��. �̱�� 3��� �����޽��ϴ�. �����ǰǰ���?\r\n";
		tmp_str += "#L1##r����#k\r\n";
		tmp_str += "#L2##b����#k\r\n";
		tmp_str += "#L3##d���ڱ�#k\r\n";

		cm.sendSimple(tmp_str);

		} else if(selection == 1) {
			if(cm.getMeso() < 10000) {
			cm.sendOk("���� �����鼭 ���Ѵٰ�\r\n");
			cm.dispose();

		} else if(randomA > 64) {
			cm.gainMeso(30000);
			cm.sendOk("#r�ϰ� �̰�� ���������� ���ϴµ�? ���� ��#k\r\n");
			cm.dispose();

		} else {
			cm.gainMeso(-10000);
			cm.sendOk("#r���� �̰�� ������#k\r\n");
			cm.dispose();
			}

		} else if(selection == 2) {
			if(cm.getMeso() < 10000) {
			cm.sendOk("���� �����鼭 ���Ѵٰ�\r\n");
			cm.dispose();

		} else if(randomA > 64) {
			cm.gainMeso(30000);
			cm.sendOk("#r�ϰ� �̰�� ���������� ���ϴµ�? ���� ��#k\r\n");
			cm.dispose();

		} else {
			cm.gainMeso(-10000);
			cm.sendOk("#r���� �̰�� ������#k\r\n");
			cm.dispose();
			}

		} else if(selection == 3) {
			if(cm.getMeso() < 10000) {
			cm.sendOk("���� �����鼭 ���Ѵٰ�\r\n");
			cm.dispose();

		} else if(randomA > 64) {
			cm.gainMeso(30000);
			cm.sendOk("#r�ϰ� �̰�� ���������� ���ϴµ�? ���� ��#k\r\n");
			cm.dispose();

		} else {
			cm.gainMeso(-10000);
			cm.sendOk("#r���� �̰�� ������#k\r\n");
			cm.dispose();
			}
			cm.dispose();
			}
	    }
}