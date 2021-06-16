/*
 made by gkskehls
 2008.06.08
 	렙 30으로 돌려주는 환생추가
 	환생은 렙만 30으로 낮춘다
 2008.06.08
 	렙 1로 돌려주는 변생추가
 	변생은 비기너로 시작 다른 직업이 가능하다
 2008.06.20
  변생 환생시에 전체공지
 2008.06.23
  200렙에 환생시 보너스 AP 150추가지급
*/

/* 1052016
	이것은 환생, 변생 시스템입니다.
	
	환생
		렙 120이상 누구나 할수있습니다.
		환생후엔 렙에따라 차등 AP를 추가로 얻고 렙 30이 될것입니다.
		환생을 많이 할수록 보너스 AP는 점점 늘어갈것입니다.
		그 보너스 AP를 저는 환생수치라 칭할것입니다.
		이 환생수치는 인기도(Fame) 에 저장이 될것입니다.
		이것으로 웹 랭크페이지에 표시할수 있습니다.
		귀차나서 렙따만 하고 4차직업을 유지시킬것입니다.
		하고나면 반드시 체널이동이나 게임을 나갔다 와야합니다.
		(HP,MP 차등지급 미구현)
	
	변생
		렙 200에 환생수치가 1000이 넘으면 누구나 할수있습니다.
		변생시엔 환생수치 1000이 줄어들게 됩니다
		변생후엔 렙1 무직으로 바뀌게 됩니다
		따라서 다른직업으로 전향하는것이 가능합니다
		(HP,MP 변환 미구현)
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
		if(status == 0) { //1번 메세지 :  스텟 선택
			var w_msg = "";
			w_msg += "환생은 렙 120이상부터 할수있으며 할때마다 ";
			w_msg += "환생수치가 누적되면 환생수치만큼 AP를 부여받습니다\r\n";
			w_msg += "#b#L1#환생 (렙제한 120)#l#k\r\n\r\n\r\n";
			w_msg += "변생은 환생수치 1000이상 렙 200에 할수있으며 ";
			w_msg += "변생후에는 렙1 초보자로 되어 새로운 직업 선택이 가능합니다.\r\n";
			w_msg += "#b#L2#변생 (렙제 200)#l#k"
			cm.sendSimple(w_msg);
		} else if(status == 1) { //2번 메세지  
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
					if(level == 200) { //200환생보너스 150AP
						w_ap_give += 150;
						bo_msg = "  [200환생 보너스 150AP 지급]" ;
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

					var test_msg = "[환생공지] "+cm.c.getPlayer().getName();
					test_msg += " 님께서 환생하셧습니다 (환생수치 : "+w_ap_temp+" -> "+w_ap_give+") "+bo_msg;
					cm.sendNotice(test_msg);
					cm.reloadChar();
					cm.dispose();
				} else {
					cm.sendSimple("렙 120이 안되자나!!");
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

						var test_msg = "[변생공지] "+cm.c.getPlayer().getName();
						var w_ap_give_go = w_ap_give - 1000;
						test_msg += " 님께서 변생하셧습니다 (환생수치 : "+w_ap_temp+" -> "+w_ap_give+" -> "+w_ap_give_go+")";
						cm.sendNotice(test_msg);
						cm.reloadChar();
						cm.dispose();
					} else {
						cm.sendSimple("환생수치 1000이 안되자나!!");
						cm.dispose();
					}
				} else {
					cm.sendSimple("렙 200이 안되자나!!");
					cm.dispose();
				}
			} else {
				cm.dispose();
			}
		} else if(status == 2) { //3번 메세지 : 그냥 끗!
			cm.dispose();
		} else {
			cm.dispose();
		}
	}
}	



