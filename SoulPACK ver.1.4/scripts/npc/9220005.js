//	Roonolph
//	HappyVill NPC
//	Made : ���� (jantnic)

importPackage(net.sf.odinms.client);



var status = 0;
var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*50+1);


function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("�丣���� ���� ����������ٵ�... ���̳ʹ����̿���...");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("�丣�༮ ���õ� ���� �Ҿ���ȱ���... ���õ��� ������ #b�丣�� ��#k�� �������ʳ�... ��, ���� �����ڴ� ��Ź�� ������ɱ��? �丣�� ĳ�ü����� ���ƿ��±濡 ���� �Ҿ������ ���Ҿ��. �丣�� �����Ҿ������ ������ ��⸸�ؼ� ����ã���ְ��ְŵ��... �ٵ� �ƹ���ã�Ƶ� �������� �ʳ׿�... ����� ĳ�ü��� ���ż� #b�丣�� ��#k�� ã���ֽðھ��? #b�丣�� ��#k�� �������ֽø� #b�絹���� ��#k�� �帱����!");
			}
		else if (status == 1) {
			if (cm.getLevel() >= 1 && cm.haveItem(4031063, 1)) {
			cm.sendOk("ã�ƿ��˳׿�! �����ϴ�. ��ʸ� ����߰���? #b�絹���� ��#k��� �������ε���. ������ǥ�ô� ����������!");
			} else {
			cm.sendOk("#b�丣�� ��#k�� �����ּ���.. ĳ�ü��� ���ø� ã���Ǽ� �־��!");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(4031063, -1);
			cm.gainMeso(1000);
			cm.gainExp(1000);
			if ((itemchance >= 1) && (itemchance <= 2)) {
			cm.gainItem(1012011, 1);
			}
			else if ((itemchance >= 3) && (itemchance <= 4)) {
			cm.gainItem(1012012, 1);
			}
			else if ((itemchance >= 5) && (itemchance <= 6)) {
			cm.gainItem(1012013, 1);
			}
			else if ((itemchance >= 7) && (itemchance <= 8)) {
			cm.gainItem(1012014, 1);
			}
			else if ((itemchance >= 9) && (itemchance <= 10)) {
			cm.gainItem(1012015, 1);
			}
			else if ((itemchance >= 11) && (itemchance <= 12)) {
			cm.gainItem(1012016, 1);
			}
			else if ((itemchance >= 13) && (itemchance <= 14)) {
			cm.gainItem(1012017, 1);
			}
			else if ((itemchance >= 15) && (itemchance <= 16)) {
			cm.gainItem(1012018, 1);
			}
			else if ((itemchance >= 17) && (itemchance <= 18)) {
			cm.gainItem(1012019, 1);
			}
			else if ((itemchance >= 19) && (itemchance <= 20)) {
			cm.gainItem(1012020, 1);
			}

			cm.dispose();
		}
	}
}
