/*
   ※ 배포 및 소스수정만 가능합니다.
   제작자 : 리프(w3aries@naver.com)
   수정자 : 리프(w3aries@naver.com)

	NPC Name : Sera 세라
	NPC Code : 2100
	Map(Code) : Maple Road : Entrance - Mushroom Town Training Camp (0)
	            Maple Road : Upper level of the Training Camp (1)
*/
/*
   팩제작자 : 지레프(rlaehdwns4@naver.com)
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
			cm.sendNext("#b#h ##k님 안녕하세요?\r\n#b소울서버#k에 오신것을 환영합니다 !! 저희서버 카페 주소는http://cafe.naver.com/poksoul 입니다 ");
		} else if (status == 1) {
			var selStr = "직업을 선택해주세요\r\n#b#b";
			var jobNames = new Array("전사", "마법사", "궁수", "도적","해적","초보자");
			for (var i = 0; i < jobNames.length; i++) {
				selStr += "\r\n#L" + i + "#" + jobNames[i] + "#l";
			}
			cm.sendSimple(selStr);
		} else if (status == 2) {
			selectedJob = selection;
			var selStr = "이동하실 마을을 선택해주세요.\r\n장비,무기들은 각마을에서 구입해주세요.#b";
			var mapNames = new Array("리스항구", "페리온", "엘리니아", "헤네시스", "커닝시티","노틸러스선착장");
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

			//1차전직
			if (selectedJob == 0) {  //전사
				cm.gainItem(2000001, 50); //주황포션 50개
				cm.gainItem(2000003, 50); //파란포션 50개
				cm.gainItem(1302007, 1);
				cm.gainExp(5062);
				cm.changeJob(net.sf.odinms.client.MapleJob.WARRIOR); //전사 전직
			} else if (selectedJob == 1) { //마법사
				cm.gainItem(1372005, 1);
				cm.gainItem(2000001, 50); //주황포션 50개
				cm.gainItem(2000003, 50); //파란포션 50개
				cm.gainExp(2104);
				cm.changeJob(net.sf.odinms.client.MapleJob.MAGICIAN); //마법사 전직
			} else if (selectedJob == 2) { //궁수
				cm.gainItem(1452002, 1);
				cm.gainItem(2060000, 1000);
				cm.gainItem(2060000, 1000);
				cm.gainItem(2000001, 50); //주황포션 50개
				cm.gainItem(2000003, 50); //파란포션 50개
				cm.gainExp(5062);
				cm.changeJob(net.sf.odinms.client.MapleJob.BOWMAN); //궁수 전직
			} else if (selectedJob == 3) { //도적
				cm.gainItem(1472000, 1);
				cm.gainItem(2070004, 1000);
				cm.gainItem(2070004, 1000);
				cm.gainItem(2070004, 1000);
				cm.gainItem(2000001, 50); //주황포션 50개
				cm.gainItem(2000003, 50); //파란포션 50개
				cm.gainExp(5062);
				cm.changeJob(net.sf.odinms.client.MapleJob.THIEF); //도적 전직
			} else if (selectedJob == 4) { //해적
				cm.gainItem(1482000, 1);
				cm.gainItem(1492000, 1);
				cm.gainItem(2330000, 500);
				cm.gainItem(2330000, 500);
				cm.gainItem(2330000, 500);
				cm.gainItem(2000001, 50); //주황포션 50개
				cm.gainItem(2000003, 50); //파란포션 50개
				cm.gainExp(5062);
				cm.changeJob(net.sf.odinms.client.MapleJob.PIRATE); //해적 전직
			} else if (selectedJob == 5) { //초보자
				cm.gainItem(2000001, 50); //주황포션 50개
				cm.gainItem(2000003, 50); //파란포션 50개
				cm.gainExp(5062);
			}

			//마을이동
			if (selectedMap == 0) { //리스항구
				cm.warp(104000000, 0); //리스항구 이동
				cm.dispose();
			} else if (selectedMap == 1) { //페리온
				cm.warp(102000000, 0); //페리온 이동
				cm.dispose();
			} else if (selectedMap == 2) { //엘리니아
				cm.warp(101000000, 0); //엘리니아 이동
				cm.dispose();
			} else if (selectedMap == 3) { //헤네시스
				cm.warp(100000000, 0); //헤네시스 이동
				cm.dispose();
			} else if (selectedMap == 4) { //커닝시티
				cm.warp(103000000, 0); //커닝시티 이동
				cm.dispose();
			} else if (selectedMap == 5) { //노틸러스
				cm.warp(120000000, 0); //노틸러스 이동
				cm.dispose();
			}

			//아이템지급
			cm.gainItem(5072000, 100); //고확 10개 지급
			cm.gainMeso(30000000); //메소지급
		}
	}
}