/* �ѱ�ȭ:�޳�
�����ּ����� �������?
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
		if (status == 0 && mode == 0) {
			cm.dispose();
			return;
		} else if (status >= 1 && mode == 0) {
			cm.sendNext("��. �ȴٰ�? ��¿������.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("�������̳�?\r\n#L0##b����Բ� ��å���ϰ�ͽ��ϴ�..#l\r\n#L1#����¹������ϴ°��ΰ���?#k#l");
		} else if (status == 1) {
			if (selection == 0) {
				if (cm.haveItem(4031035,1)) {
					cm.sendNext("�̺�...���������ʳ�?");
					cm.dispose();
				} else {
					cm.sendYesNo("��..����Բ� ��å���ϰ�ʹٰ�? ����. ���������޾�. �������ִ� ���������� �ǳ��ָ� ����ģ�е��� 200�÷��ٲ���. yes�������� �������ٰ�.");
				}
			} else {
				cm.sendOk("���⸻�̾�? ����Բ� ��å���Ҽ����ְ�.. �㿥�Ե��� ��⸦���δٰ��ϴ���.");
				cm.dispose();
			}
		} else if (status == 2) {
			cm.gainItem(4031035, 1);
			cm.sendNext("������ ��Ÿ��â�������ž�! ���ٰ� �ؾ���������� �������ö󰡼� �����������ֶ��~");
			cm.dispose();
		}
	}
}