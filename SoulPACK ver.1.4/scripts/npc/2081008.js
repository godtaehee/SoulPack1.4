/*
   �� ���� �� �ҽ������� �����մϴ�.
   ������ : ����(w3aries@naver.com)
   ������ : ����(w3aries@naver.com)

	NPC Name : Sera ����
	NPC Code : 2100
	Map(Code) : Maple Road : Entrance - Mushroom Town Training Camp (0)
	            Maple Road : Upper level of the Training Camp (1)
*/
/*
   �������� : ������(rlaehdwns4@naver.com)
*/

importPackage(net.sf.odinms.client);

var status = 0;
var selectedJob = -1;
var selectedMap = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			cm.dispose();
		if (status == 0) {
			cm.sendNext("#b#h ##k�� �ȳ��ϼ���?\r\n#b�ҿＭ��#k�� ���Ű��� ȯ���մϴ� !! ���񼭹� ī�� �ּҴ�http://cafe.naver.com/poksoul �Դϴ� ");
		} else if (status == 1) {
			var selStr = "������ �������ּ���\r\n#b#b";
			var jobNames = new Array("����", "������", "�ü�", "����","����","�ʺ���");
			for (var i = 0; i < jobNames.length; i++) {
				selStr += "\r\n#L" + i + "#" + jobNames[i] + "#l";
			}
			cm.sendSimple(selStr);
		} else if (status == 2) {
			selectedJob = selection;
			var selStr = "�̵��Ͻ� ������ �������ּ���.\r\n���,������� ���������� �������ּ���.#b";
			var mapNames = new Array("�����ױ�", "�丮��", "�����Ͼ�", "��׽ý�", "Ŀ�׽�Ƽ","��ƿ����������");
			for (var i = 0; i < mapNames.length; i++) {
				selStr += "\r\n#L" + i + "#" + mapNames[i] + "#l";
			}
			cm.sendSimple(selStr);
		} else if (status == 3) {
			selectedMap = selection;
			var statup = new java.util.ArrayList();
			var p = cm.c.getPlayer();
			var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();
			p.setStr(4);
			p.setDex(4);
			p.setInt(4);
			p.setLuk(4);
			p.setRemainingAp (totAp - 16);
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
			p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));

			//1������
			if (selectedJob == 0) {  //����
				cm.gainItem(2000001, 50); //��Ȳ���� 50��
				cm.gainItem(2000003, 50); //�Ķ����� 50��
				cm.gainItem(1302007, 1);
				cm.gainExp(5062);
				cm.changeJob(net.sf.odinms.client.MapleJob.WARRIOR); //���� ����
			} else if (selectedJob == 1) { //������
				cm.gainItem(1372005, 1);
				cm.gainItem(2000001, 50); //��Ȳ���� 50��
				cm.gainItem(2000003, 50); //�Ķ����� 50��
				cm.gainExp(2104);
				cm.changeJob(net.sf.odinms.client.MapleJob.MAGICIAN); //������ ����
			} else if (selectedJob == 2) { //�ü�
				cm.gainItem(1452002, 1);
				cm.gainItem(2060000, 1000);
				cm.gainItem(2060000, 1000);
				cm.gainItem(2000001, 50); //��Ȳ���� 50��
				cm.gainItem(2000003, 50); //�Ķ����� 50��
				cm.gainExp(5062);
				cm.changeJob(net.sf.odinms.client.MapleJob.BOWMAN); //�ü� ����
			} else if (selectedJob == 3) { //����
				cm.gainItem(1472000, 1);
				cm.gainItem(2070004, 1000);
				cm.gainItem(2070004, 1000);
				cm.gainItem(2070004, 1000);
				cm.gainItem(2000001, 50); //��Ȳ���� 50��
				cm.gainItem(2000003, 50); //�Ķ����� 50��
				cm.gainExp(5062);
				cm.changeJob(net.sf.odinms.client.MapleJob.THIEF); //���� ����
			} else if (selectedJob == 4) { //����
				cm.gainItem(1482000, 1);
				cm.gainItem(1492000, 1);
				cm.gainItem(2330000, 500);
				cm.gainItem(2330000, 500);
				cm.gainItem(2330000, 500);
				cm.gainItem(2000001, 50); //��Ȳ���� 50��
				cm.gainItem(2000003, 50); //�Ķ����� 50��
				cm.gainExp(5062);
				cm.changeJob(net.sf.odinms.client.MapleJob.PIRATE); //���� ����
			} else if (selectedJob == 5) { //�ʺ���
				cm.gainItem(2000001, 50); //��Ȳ���� 50��
				cm.gainItem(2000003, 50); //�Ķ����� 50��
				cm.gainExp(5062);
			}

			//�����̵�
			if (selectedMap == 0) { //�����ױ�
				cm.warp(104000000, 0); //�����ױ� �̵�
				cm.dispose();
			} else if (selectedMap == 1) { //�丮��
				cm.warp(102000000, 0); //�丮�� �̵�
				cm.dispose();
			} else if (selectedMap == 2) { //�����Ͼ�
				cm.warp(101000000, 0); //�����Ͼ� �̵�
				cm.dispose();
			} else if (selectedMap == 3) { //��׽ý�
				cm.warp(100000000, 0); //��׽ý� �̵�
				cm.dispose();
			} else if (selectedMap == 4) { //Ŀ�׽�Ƽ
				cm.warp(103000000, 0); //Ŀ�׽�Ƽ �̵�
				cm.dispose();
			} else if (selectedMap == 5) { //��ƿ����
				cm.warp(120000000, 0); //��ƿ���� �̵�
				cm.dispose();
			}

			//����������
			cm.gainItem(5072000, 100); //��Ȯ 10�� ����
			cm.gainMeso(30000000); //�޼�����
		}
	}
}