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
				cm.sendNext("�ȳ�? ����Կö�°ɺ��� ������߱���?");
			} else {
				cm.sendOk("�츮���� ����������Ա��ϴ�? ���������°�?");
				cm.dispose();
			}
		} else if (status == 1) {
			if (cm.getPlayer().getNoPets() == 0) {
				cm.sendNextPrev("�̺�, �굵�����鼭 ģ�е�����Կø�������!");
			} else {
				cm.gainItem(4031035, -1);
				cm.gainCloseness(2 * cm.getC().getChannelServer().getPetExpRate(), 0);
				cm.sendNextPrev("��! �������ֱ���? ģ�е� 200���÷��ٰ�.��� ��հԳ��.");
			}
			cm.dispose();
		}
	}
}