importPackage(net.sf.odinms.client); // // ���� ī�Ϲ߿��� ������ �������Դϴ�. [�����Ѱ����� �׷���... ����:�۱�]
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	status++;
	if (status == 0) {
		cm.sendSimple("�ȳ�, � ���͸� ��ȯ�ҷ�? ������ ���� ���̾�\r\n���� ���߼�ȯ�� #r�� 2��#k�� ������\r\n�Ѳ����� �����ϸ� ���� �����ϰ� �ñ�ٱ�\r\n���� ���߼�ȯ�ϴ� �ɸ��� ������ ����������~\r\n������ �ߴٴ� �ΰ赵 �ȸ����� ���غ���~\r\n�׸��� ������ ������ 3������ ��ӵȴٱ�~  ����, �׸��� ������ �ð�ǥǥ�� �� ��Ŀ��̴ϱ� �Ű澲����~ \r \r #b�Ķ��� : #k�ϱ� ���� \r #r������ : #k�߱� ���� \r #g�ʷϻ� : #k��� ���� \r\n#L1##b[Lv.6]#k ������#l\r\n#L2##b[Lv.12]#k �����۽�#l\r\n#L3##b[Lv.20]#k �Ķ�����#l\r\n#L4##b[Lv.32]#k ���̾� ����#l\r\n#L5##b[Lv.40]#k �ݵ� ����#l\r\n#L7##b[Lv.50]#k �巹��ũ#l\r\n#L8##r[Lv.52]#k ���� #g(�̰͸� ���� �����)#l\r\n#L9##r[Lv.53]#k ��ȭ�� ���̾� ���� #g(�̰͸� ���� �����)#l\r\n#L10##r[Lv.55]#k �̽��� ���� #g(�̰͸� ���� �����)#l\r\n#L11##r[Lv.70]#k ĸƾ#l\r\n#L12##r[Lv.75]#k �������#l\r\n#L14##g[Lv.83]#k ���̷�#l\r\n#L18##g[Lv.108]#k ����Ʈ Ű��#l\r\n#L19##g[Lv.113]#k ���̷���#l");
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
