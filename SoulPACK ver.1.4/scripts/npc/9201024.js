/*
 made by gkskehls
 2008.06.08
 	�� 30���� �����ִ� ȯ���߰�
 	ȯ���� ���� 30���� �����
 2008.06.08
 	�� 1�� �����ִ� �����߰�
 	������ ���ʷ� ���� �ٸ� ������ �����ϴ�
 2008.06.20
  ���� ȯ���ÿ� ��ü����
 2008.06.23
  200���� ȯ���� ���ʽ� AP 150�߰�����
*/

/* 1052016
	�̰��� ȯ��, ���� �ý����Դϴ�.
	
	ȯ��
		�� 120�̻� ������ �Ҽ��ֽ��ϴ�.
		ȯ���Ŀ� �������� ���� AP�� �߰��� ��� �� 30�� �ɰ��Դϴ�.
		ȯ���� ���� �Ҽ��� ���ʽ� AP�� ���� �þ���Դϴ�.
		�� ���ʽ� AP�� ���� ȯ����ġ�� Ī�Ұ��Դϴ�.
		�� ȯ����ġ�� �α⵵(Fame) �� ������ �ɰ��Դϴ�.
		�̰����� �� ��ũ�������� ǥ���Ҽ� �ֽ��ϴ�.
		�������� ������ �ϰ� 4�������� ������ų���Դϴ�.
		�ϰ��� �ݵ�� ü���̵��̳� ������ ������ �;��մϴ�.
		(HP,MP �������� �̱���)
	
	����
		�� 200�� ȯ����ġ�� 1000�� ������ ������ �Ҽ��ֽ��ϴ�.
		�����ÿ� ȯ����ġ 1000�� �پ��� �˴ϴ�
		�����Ŀ� ��1 �������� �ٲ�� �˴ϴ�
		���� �ٸ��������� �����ϴ°��� �����մϴ�
		(HP,MP ��ȯ �̱���)
*/

importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.tools);

var status = 0;


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		status++;
		if(status == 0) { //1�� �޼��� :  ���� ����
			var w_msg = "";
			w_msg += "ȯ���� �� 120�̻���� �Ҽ������� �Ҷ����� ";
			w_msg += "ȯ����ġ�� �����Ǹ� ȯ����ġ��ŭ AP�� �ο��޽��ϴ�\r\n";
			w_msg += "#b#L1#ȯ�� (������ 120)#l#k\r\n\r\n\r\n";
			w_msg += "������ ȯ����ġ 1000�̻� �� 200�� �Ҽ������� ";
			w_msg += "�����Ŀ��� ��1 �ʺ��ڷ� �Ǿ� ���ο� ���� ������ �����մϴ�.\r\n";
			w_msg += "#b#L2#���� (���� 200)#l#k"
			cm.sendSimple(w_msg);
		} else if(status == 1) { //2�� �޼���  
			var statup = new java.util.ArrayList();
			var p = cm.c.getPlayer();
			var level = cm.getLevel();
			var my_Str = p.getStr();
			var my_Dex = p.getDex();
			var my_Int = p.getInt();
			var my_Luk = p.getLuk();
			var my_Ap  = p.getRemainingAp();
			var w_ap_hap = my_Str + my_Dex + my_Int + my_Luk + my_Ap;
			var w_ap_temp = w_ap_hap - ((level-30) * 5) - 16;
			var w_ap_give = w_ap_hap - (level * 5) + (level - 114) +150;
			var w_fame_give = w_ap_give - p.getFame();
			var bo_msg = "";
//			var w_hmp_give = w_ap_give * 5;
//			if(w_hmp_give > 20000){w_hmp_give = 20000;}
//			if(w_fame_give > 30000){w_fame_give = 30000;}


			if(selection == 1) { //Go to Lv30
				if(level >= 120) {
					if(level == 200) { //200ȯ�����ʽ� 150AP
						w_ap_give += 150;
						bo_msg = "  [200ȯ�� ���ʽ� 150AP ����]" ;
					} 
					p.gainExp(-p.getExp(),false,true);
					p.setLevel(31);
					p.setStr (4);
					p.setDex (4);
					p.setInt (4);
					p.setLuk (4);
					p.addFame (w_fame_give);
//					p.setHp (w_hmp_give);
//					p.setMaxHp (w_hmp_give);
					p.setRemainingAp (w_ap_give);
					p.gainExp(-p.getExp(),false,true);
					statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(30)));
					statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
					statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
					statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
					statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
//					statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.HP, java.lang.Integer.valueOf(w_hmp_give)));
//					statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.MAXHP, java.lang.Integer.valueOf(w_hmp_give)));
					statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(w_ap_give)));
					statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.FAME, java.lang.Integer.valueOf(w_fame_give)));
					p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));

					var test_msg = "[ȯ������] "+cm.c.getPlayer().getName();
					test_msg += " �Բ��� ȯ���ϼ˽��ϴ� (ȯ����ġ : "+w_ap_temp+" -> "+w_ap_give+") "+bo_msg;
					cm.sendNotice(test_msg);
					cm.reloadChar();
					cm.dispose();
				} else {
					cm.sendSimple("�� 120�� �ȵ��ڳ�!!");
					cm.dispose();
				}
			} else if(selection == 2) { //Go to Lv1
				if(level >= 200) {
					if(p.getFame() >= 1000) {
						p.gainExp(-p.getExp(),false,true);
						p.setLevel(1);
						p.setStr (4);
						p.setDex (4);
						p.setInt (4);
						p.setLuk (4);
						p.addFame (w_fame_give-1000);
	//					p.setHp (w_hmp_give);
	//					p.setMaxHp (w_hmp_give);
						p.setRemainingAp (w_ap_give-1000);
						p.gainExp(-p.getExp(),false,true);
						statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
						statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
						statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
						statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
						statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
	//					statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.HP, java.lang.Integer.valueOf(w_hmp_give)));
	//					statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.MAXHP, java.lang.Integer.valueOf(w_hmp_give)));
						statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(w_ap_give-1000)));
						statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.FAME, java.lang.Integer.valueOf(w_fame_give-1000)));
						p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
						cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);

						var test_msg = "[��������] "+cm.c.getPlayer().getName();
						var w_ap_give_go = w_ap_give - 1000;
						test_msg += " �Բ��� �����ϼ˽��ϴ� (ȯ����ġ : "+w_ap_temp+" -> "+w_ap_give+" -> "+w_ap_give_go+")";
						cm.sendNotice(test_msg);
						cm.reloadChar();
						cm.dispose();
					} else {
						cm.sendSimple("ȯ����ġ 1000�� �ȵ��ڳ�!!");
						cm.dispose();
					}
				} else {
					cm.sendSimple("�� 200�� �ȵ��ڳ�!!");
					cm.dispose();
				}
			} else {
				cm.dispose();
			}
		} else if(status == 2) { //3�� �޼��� : �׳� ��!
			cm.dispose();
		} else {
			cm.dispose();
		}
	}
}	



