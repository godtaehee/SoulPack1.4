/*

	Aesir Team
	���� : ����
	���� : ������ <rlaehdwns4@naver.com>

*/

importPackage(net.sf.odinms.client);

var status = 0;
var selectedType = -1;
var selectedType2 = -1;
var selectedType3 = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
	} else {
		status++;
		if (status == 0) {
			var selStr = "���� �ϰڳ�? ���� �������� �غ����� ���ٸ� �� ������ ��� �ϴ°� ����.#b";
			var options = new Array("������ �ʵ�� �̵��Ѵ�.", "�����忡 ���� ������ ��´�.", "������ ������ ��ȯ�Ѵ�.");
			for (var i = 0; i < options.length; i++) {
				selStr += "\r\n#L" + i + "#" + options[i] + "#l";
			}
			cm.sendSimple(selStr);
		} else if (status == 1) {
			selectedType = selection;
			if (selectedType == 0) {
				cm.warp(980010000, 3);
				cm.SavedLocationCarnival();
				cm.dispose();
			} else if (selectedType == 1) {
				var selStr = "���� �ϰڳ�?#b";
				var options = new Array("�������̶�?", "�⺻ ���� ���", "���� ���� ���", "�ƹ��͵� ���� �ʴ´�.");
				for (var i = 0; i < options.length; i++) {
					selStr += "\r\n#L" + i + "#" + options[i] + "#l";
				}
				cm.sendSimple(selStr);
			} else if (selectedType == 2) {
				var selStr = "��ȯ�ϰ� ���� �������� �����ϰԳ�.#b";
				var options = new Array("���ǰָ��� �����(���� 50��)", "���ǰָ��� ����(���� 40��)", "����� ����", "������� ����", "�ü��� ����", "������ ����", "������ ����");
				for (var i = 0; i < options.length; i++) {
					selStr += "\r\n#L" + i + "#" + options[i] + "#l";
				}
				cm.sendSimple(selStr);
			}
		} else if (status == 2) {
			selectedType2 = selection;
			if (selectedType == 1) {
				if (selectedType2 == 0) {
					cm.sendNext("ũũũ.. ���� ������ �뺴�� ���ڸ� ��. �̹��� �� 1ȸ #b������#k�� �����Ͽ� �ڳװ��� ���谡���� ��ð� ����.");
				} else if (selectedType2 == 1) {
					cm.sendNext("#b������#k�� ���͸� ��ȯ�ؼ� ������ ����Ҽ� �ִ� �ý�������~");
				} else if (selectedType2 == 2) {
					cm.sendNext("�����忡 �����ϸ�, ���ָ��� NPC? �� �������� �׺��� ������ �������ʵ忡 �����ϰ�, ���͸� ��ȯ�ؼ� ����ϸ�ȴٳ�, �������� �پ��� ���͵��� ���⶧���� ����͸� �Űܴٴ� �ʿ䵵����, �׸��� ��������� �޸� ������ ������ �����ִٱ�!");
				} else if (selectedType2 == 3) {
					cm.dispose();
				}
			} else if (selectedType == 2) {
				if (selectedType2 == 0) {
					if (cm.haveItem(4001129, 50)) {
						cm.gainItem(4001129, -50);
						cm.gainItem(1122007, 1);
						cm.dispose();
					} else {
						cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
						cm.dispose();
					}
				} else if (selectedType2 == 1) {
					if (cm.haveItem(4001129, 40)) {
						cm.gainItem(4001129, -40);
						cm.gainItem(2041211, 1);
						cm.dispose();
					} else {
						cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
						cm.dispose();
					}
				} else if (selectedType2 == 2) {
					var selStr = "��ȯ�ϰ� ���� ���⸦ �����غ���. ���� �ִ� ����� �⺻���� ���� ��찡 ����.#b";
					var weaponNames = new Array("ĿƲ����", "���̷���", "Ʈ��콺", "���", "��� ��ƴٶ�", "ȣ��", "��Ŀ", "�Ͼ�", "��� ī����", "�����", "��", "����¡", "ȣũ����", "���ظ�", "��Ŀ", "Ÿ��ź", "��Ŭ���̽�", "��� ���", "��ī��Ű", "���� ����", "����", "ũ����Ʈ", "���浵", "���Ȼ��");
					var coin = new Array(7, 7, 10, 10, 20, 20, 7, 7, 10, 10, 20, 20, 7, 7, 10, 10, 20, 20, 7, 7, 10, 10, 20, 20);
					for (var i = 0; i < weaponNames.length; i++) {
						selStr += "\r\n#L" + i + "#" + weaponNames[i] + "(���� " + coin[i] + "��)#l"
					}
					cm.sendSimple(selStr);
				} else if (selectedType2 == 3) {
					var selStr = "��ȯ�ϰ� ���� ���⸦ �����غ���. ���� �ִ� ����� �⺻���� ���� ��찡 ����.#b";
					var weaponNames = new Array("������ �ϵ�", "��Ż ������", "ũ����Ż �ϵ�", "Ȧ ������", "��ũ ������", "ũ�ι�");
					var coin = new Array(7, 7, 10, 10, 20, 20);
					for (var i = 0; i < weaponNames.length; i++) {
						selStr += "\r\n#L" + i + "#" + weaponNames[i] + "(���� " + coin[i] + "��)#l"
					}
					cm.sendSimple(selStr);
				} else if (selectedType2 == 4) {
					var selStr = "��ȯ�ϰ� ���� ���⸦ �����غ���. ���� �ִ� ����� �⺻���� ���� ��찡 ����.#b";
					var weaponNames = new Array("���� ������", "����2000", "�ø�Ǫ��", "��Ŭ��", "�ǹ� ũ�ο�", "�ο��");
					var coin = new Array(7, 10, 20, 7, 10, 20);
					for (var i = 0; i < weaponNames.length; i++) {
						selStr += "\r\n#L" + i + "#" + weaponNames[i] + "(���� " + coin[i] + "��)#l"
					}
					cm.sendSimple(selStr);
				} else if (selectedType2 == 5) {
					var selStr = "��ȯ�ϰ� ���� ���⸦ �����غ���. ���� �ִ� ����� �⺻���� ���� ��찡 ����.#b";
					var weaponNames = new Array("��ũ �����", "��ũ ����", "��ũ ������", "����Ʈ", "�巡�� �����", "���񷯵�", "��", "�ű�Ÿ");
					var coin = new Array(7, 10, 20, 7, 10, 10, 20, 20);
					for (var i = 0; i < weaponNames.length; i++) {
						selStr += "\r\n#L" + i + "#" + weaponNames[i] + "(���� " + coin[i] + "��)#l"
					}
					cm.sendSimple(selStr);
				} else if (selectedType2 == 6) {
					var selStr = "��ȯ�ϰ� ���� ���⸦ �����غ���. ���� �ִ� ����� �⺻���� ���� ��찡 ����.#b";
					var weaponNames = new Array("�ǹ� ���̵�", "�׿��ڵ�", "����Ŭ��", "���� ��Ÿ", "�糪 ����", "����Ʈ��");
					var coin = new Array(7, 10, 20, 7, 10, 20);
					for (var i = 0; i < weaponNames.length; i++) {
						selStr += "\r\n#L" + i + "#" + weaponNames[i] + "(���� " + coin[i] + "��)#l"
					}
					cm.sendSimple(selStr);
				}
			}
		} else if (status == 3) {
			selectedType3 = selection;
			if (selectedType == 1) {
				if (selectedType2 == 0) {
					cm.sendNextPrev("#b������#k�� ���İ�? ũũũ... ���� �ڳװ� �����ϴ� �ͺ��� �ν� ����� ���̶�� ���ص���. �ٷ� #b��� ���͵���� ���#k�̴ϱ� ���̾�!");
				} else if (selectedType2 == 1) {
					cm.sendNextPrev("������ �ʵ忡 �����ϸ� #b���ָ���NPC?#k�� ���� ������ ������ �ʵ忡 �����ؼ�, ���͸� ��ȯ�ؼ� �پ��� ������ ���͸� ����Ҽ�����!");
				} else if (selectedType2 == 2) {
					cm.sendNextPrev("������, �������ʵ忡 �����ϸ� ����(����)�� �����ִٳ�");
				}
			} else if (selectedType == 2) { 
				if (selectedType2 == 2) {
					if (selectedType3 == 0) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1302004, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 1) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1402006, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 2) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1302009, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 3) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1402007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 4) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1302051, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 5) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1402003, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 6) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1312006, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 7) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1412004, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 8) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1312007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 9) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1412005, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 10) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1312022, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 11) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1412003, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 12) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1322015, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 13) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1422008, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 14) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1322016, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 15) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1322007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 16) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1322041, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 17) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1322005, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 18) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1432003, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 19) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1442003, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 20) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1432005, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 21) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1442009, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 22) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1442031, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 23) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1432032, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					}
				} else if (selectedType2 == 3) {
					if (selectedType3 == 0) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1372022, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 1) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1382018, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 2) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1372012, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 3) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1382019, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 4) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1382020, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 5) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1372023, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					}
				} else if (selectedType2 == 4) {
					if (selectedType3 == 0) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1452006, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 1) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1452007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 2) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1452008, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 3) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1462005, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 4) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1462006, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 5) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1462007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					}
				} else if (selectedType2 == 5) {
					if (selectedType3 == 0) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1472013, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 1) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1472017, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 2) {
					if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1472021, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 3) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1332014, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 4) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1332031, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 5) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1332011, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 6) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1332016, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 7) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1332034, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					}
				} else if (selectedType2 == 6) {
					if (selectedType3 == 0) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1482005, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 1) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1482006, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 2) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1482007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 3) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1492005, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
							}
					} else if (selectedType3 == 4) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1492006, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					} else if (selectedType3 == 5) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1492007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b������ ����#k�� �����ϰų�, ���â�� �� ĭ�� ���°� �ƴѰ�?");
							cm.dispose();
						}
					}
				}
			}
		} else if (status == 5) {
			if (selectedType == 1) {
				if (selectedType2 == 0) {
					cm.sendNextPrev("���� �̰����� ���Ͱ� ���� �����µ�\r\n������ �ִ� ����\r\n �� ���� ������ ������ �����Ͻð�.");
				} else if (selectedType2 == 1) {
					cm.sendNextPrev("���͸� ��ȯ�ϴ¹���� ���� ���ǰָ��Բ� ���� �Ǵ���\r\n���ϴ� ���͸� ��ȯ�ϸ�ȴٳ�.");
				} else if (selectedType2 == 2) {
					cm.sendNextPrev("����! �ʹ����� ���͸� ��ȯ�ϸ� ���� �����ϰ� �ñ�ϱ� �����ϱ�..");
				}
			}
		} else if (status == 6) {
			if (selectedType == 1) {
				if (selectedType2 == 0) {
					cm.sendNextPrev("�̰������� ����,�ü����� �ټ������� ���ξ��� ������ �����ʾ�\r\n����,������ ���� �ټ����� ������ ��������");
					cm.dispose();
				} else if (selectedType2 == 1) {
					cm.sendNextPrev("�׸��� ������ #r MOM and DAD(�ڵ�)NPC #k�� ������ �ȴٳ�");
				} else if (selectedType2 == 2) {
					cm.sendNextPrev("�˰���?");
				}
			}
		} else if (status == 7) {
			if (selectedType == 1) {
				if (selectedType2 == 1) {
					cm.sendNextPrev("�̰����� �׾ ����ġ�� �������ʴ´ٳ�.");
					cm.dispose();
				} else if (selectedType2 == 2) {
					cm.sendNextPrev("�˰ٳ�?");
				}
			}
		} else if (status == 8) {
			if (selectedType == 1) {
				if (selectedType2 == 2) {
					cm.sendNextPrev("�̰� ���͵� ������� ������ ��������. �׷� ��ſ� �ð��Ǳ�~ by. T.K pack3.0 version");
					cm.dispose();
				}
			}
		}
	}
}