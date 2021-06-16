importPackage(net.sf.odinms.client); // // 원래 카니발에서 응용한 투기장입니다. [간단한거지만 그래도... 수정:글귀]
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	status++;
	if (status == 0) {
		cm.sendSimple("안녕, 어떤 몬스터를 소환할래? 투기장 전용 몹이야\r\n몬스터 다중소환은 #r딱 2번#k만 가능해\r\n한꺼번에 많이하면 렉을 유발하고 팅긴다구\r\n만약 다중소환하다 걸리면 경고없이 영구정지라구~\r\n동생이 했다는 핑계도 안먹히니 잘해보라구~\r\n그리고 코인은 뮤테종 3마리만 드롭된다구~  아참, 그리고 저위에 시간표표시 는 장식용이니까 신경쓰지마~ \r \r #b파랑색 : #k하급 몬스터 \r #r빨강색 : #k중급 몬스터 \r #g초록색 : #k상급 몬스터 \r\n#L1##b[Lv.6]#k 슬라임#l\r\n#L2##b[Lv.12]#k 옥토퍼스#l\r\n#L3##b[Lv.20]#k 파란버섯#l\r\n#L4##b[Lv.32]#k 파이어 보어#l\r\n#L5##b[Lv.40]#k 콜드 아이#l\r\n#L7##b[Lv.50]#k 드레이크#l\r\n#L8##r[Lv.52]#k 뮤테 #g(이것만 코인 드롭함)#l\r\n#L9##r[Lv.53]#k 강화된 아이언 뮤테 #g(이것만 코인 드롭함)#l\r\n#L10##r[Lv.55]#k 미스릴 뮤테 #g(이것만 코인 드롭함)#l\r\n#L11##r[Lv.70]#k 캡틴#l\r\n#L12##r[Lv.75]#k 웨어울프#l\r\n#L14##g[Lv.83]#k 파이렛#l\r\n#L18##g[Lv.108]#k 게이트 키퍼#l\r\n#L19##g[Lv.113]#k 스켈레곤#l");
	} else if(status == 1) {
		if(selection == 1) {
			var mob0 = MapleLifeFactory.getMonster(210100);
			var mob1 = MapleLifeFactory.getMonster(210100);
			var mob2 = MapleLifeFactory.getMonster(210100);
			var mob3 = MapleLifeFactory.getMonster(210100);
			var mob40 = MapleLifeFactory.getMonster(210100);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if (selection == 2) {
			var mob0 = MapleLifeFactory.getMonster(1120100);
			var mob1 = MapleLifeFactory.getMonster(1120100);
			var mob2 = MapleLifeFactory.getMonster(1120100);
			var mob3 = MapleLifeFactory.getMonster(1120100);
			var mob4 = MapleLifeFactory.getMonster(1120100);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 3) {
			var mob0 = MapleLifeFactory.getMonster(2220100);
			var mob1 = MapleLifeFactory.getMonster(2220100);
			var mob2 = MapleLifeFactory.getMonster(2220100);
			var mob3 = MapleLifeFactory.getMonster(2220100);
			var mob4 = MapleLifeFactory.getMonster(2220100);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 4) {
			var mob0 = MapleLifeFactory.getMonster(3210100);
			var mob1 = MapleLifeFactory.getMonster(3210100);
			var mob2 = MapleLifeFactory.getMonster(3210100);
			var mob3 = MapleLifeFactory.getMonster(3210100);
			var mob4 = MapleLifeFactory.getMonster(3210100);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));

			cm.dispose();
		} else if(selection == 5) {
			var mob0 = MapleLifeFactory.getMonster(4230100);
			var mob1 = MapleLifeFactory.getMonster(4230100);
			var mob2 = MapleLifeFactory.getMonster(4230100);
			var mob3 = MapleLifeFactory.getMonster(4230100);
			var mob4 = MapleLifeFactory.getMonster(4230100);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 6) {
			var mob0 = MapleLifeFactory.getMonster(9300017);
			var mob1 = MapleLifeFactory.getMonster(9300017);
			var mob2 = MapleLifeFactory.getMonster(9300017);
			var mob3 = MapleLifeFactory.getMonster(9300017);
			var mob4 = MapleLifeFactory.getMonster(9300017);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 7) {
			var mob0 = MapleLifeFactory.getMonster(5130100);
			var mob1 = MapleLifeFactory.getMonster(5130100);
			var mob2 = MapleLifeFactory.getMonster(5130100);
			var mob3 = MapleLifeFactory.getMonster(5130100);
			var mob4 = MapleLifeFactory.getMonster(5130100);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 8) {
			var mob0 = MapleLifeFactory.getMonster(4110300);
			var mob1 = MapleLifeFactory.getMonster(4110300);
			var mob2 = MapleLifeFactory.getMonster(4110300);
			var mob3 = MapleLifeFactory.getMonster(4110300);
			var mob4 = MapleLifeFactory.getMonster(4110300);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 9) {
			var mob0 = MapleLifeFactory.getMonster(4110301);
			var mob1 = MapleLifeFactory.getMonster(4110301);
			var mob2 = MapleLifeFactory.getMonster(4110301);
			var mob3 = MapleLifeFactory.getMonster(4110301);
			var mob4 = MapleLifeFactory.getMonster(4110301);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 10) {
			var mob0 = MapleLifeFactory.getMonster(4110302);
			var mob1 = MapleLifeFactory.getMonster(4110302);
			var mob2 = MapleLifeFactory.getMonster(4110302);
			var mob3 = MapleLifeFactory.getMonster(4110302);
			var mob4 = MapleLifeFactory.getMonster(4110302);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 11) {
			var mob0 = MapleLifeFactory.getMonster(7130104);
			var mob1 = MapleLifeFactory.getMonster(7130104);
			var mob2 = MapleLifeFactory.getMonster(7130104);
			var mob3 = MapleLifeFactory.getMonster(7130104);
			var mob4 = MapleLifeFactory.getMonster(7130104);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 12) {
			var mob0 = MapleLifeFactory.getMonster(7130200);
			var mob1 = MapleLifeFactory.getMonster(7130200);
			var mob2 = MapleLifeFactory.getMonster(7130200);
			var mob3 = MapleLifeFactory.getMonster(7130200);
			var mob4 = MapleLifeFactory.getMonster(7130200);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 13) {
			var mob0 = MapleLifeFactory.getMonster(9500161);
			var mob1 = MapleLifeFactory.getMonster(9500161);
			var mob2 = MapleLifeFactory.getMonster(9500161);
			var mob3 = MapleLifeFactory.getMonster(9500161);
			var mob4 = MapleLifeFactory.getMonster(9500161);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 14) {
			var mob0 = MapleLifeFactory.getMonster(7140000);
			var mob1 = MapleLifeFactory.getMonster(7140000);
			var mob2 = MapleLifeFactory.getMonster(7140000);
			var mob3 = MapleLifeFactory.getMonster(7140000);
			var mob4 = MapleLifeFactory.getMonster(7140000);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 15) {
			var mob0 = MapleLifeFactory.getMonster(8140700);
			var mob1 = MapleLifeFactory.getMonster(8140700);
			var mob2 = MapleLifeFactory.getMonster(8140700);
			var mob3 = MapleLifeFactory.getMonster(8140700);
			var mob4 = MapleLifeFactory.getMonster(8140700);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 16) {
			var mob0 = MapleLifeFactory.getMonster(9500137);
			var mob1 = MapleLifeFactory.getMonster(9500137);
			var mob2 = MapleLifeFactory.getMonster(9500137);
			var mob3 = MapleLifeFactory.getMonster(9500137);
			var mob4 = MapleLifeFactory.getMonster(9500137);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 17) {
			var mob0 = MapleLifeFactory.getMonster(8150100);
			var mob1 = MapleLifeFactory.getMonster(8150100);
			var mob2 = MapleLifeFactory.getMonster(8150100);
			var mob3 = MapleLifeFactory.getMonster(8150100);
			var mob4 = MapleLifeFactory.getMonster(8150100);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 18) {
			var mob0 = MapleLifeFactory.getMonster(8160000);
			var mob1 = MapleLifeFactory.getMonster(8160000);
			var mob2 = MapleLifeFactory.getMonster(8160000);
			var mob3 = MapleLifeFactory.getMonster(8160000);
			var mob4 = MapleLifeFactory.getMonster(8160000);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else if(selection == 19) {
			var mob0 = MapleLifeFactory.getMonster(8190004);
			var mob1 = MapleLifeFactory.getMonster(8190004);
			var mob2 = MapleLifeFactory.getMonster(8190004);
			var mob3 = MapleLifeFactory.getMonster(8190004);
			var mob4 = MapleLifeFactory.getMonster(8190004);
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, Point(20,20));
			cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, Point(20,20));
			cm.dispose();
		} else {
			cm.dispose();
		}
	} else {
		cm.dispose();
	}
}
