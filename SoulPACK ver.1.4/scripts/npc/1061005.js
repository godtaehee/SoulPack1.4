/* �ѱ�ȭ:�޳�
�����ּ������������?
*/
var status = 0;

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
			status--;
		if (status == 0) {
			if (cm.haveItem(4031035)) {
				cm.sendNext("�� ������ ���ʰ� ���� ����. ���� ���ʸ� �߰����� ���� ���� ��ڴٳ�.#fUI/UIWindow.img/QuestIcon/4/0#");
			} else {
                                                                        cm.sendNext("�� ������ ���ʰ� ���� ����. ���� ���ʸ� �߰����� ���� ��\r\n�� ��ڴٳ�.\r\n\r\n #fUI/UIWindow.img/QuestIcon/4/0# \r\n        #b���Ʈ���� �� ���� �� �����#k");
			}
		} else if (status == 1) {
				cm.sendNext("���... ��ٷ��ְ�. ���� �� ���踦 ���ƴٴϸ鼭 ���ʸ� ��\r\n���ϰ� �ִ� ���������. �� �ٹ濡�� ������ ���ʸ� ã�ƺ�\r\n �� �־���. �ֱٿ��� ���ʸ� �߰��ϱ� ���� ū���̶��.\r\n�ڳ�... Ȥ�� ���ʵ��� ���� ���� �߰������� ���ߴ°�?");
			} else {
				cm.gainItem(4031035, -1);
				cm.gainCloseness(2 * cm.getC().getChannelServer().getPetExpRate(), 0);
				cm.sendNextPrev("��! �������ֱ���? ģ�е� 200���÷��ٰ�.��� ��հԳ��.");
			}
			cm.dispose();
		}
	}
}