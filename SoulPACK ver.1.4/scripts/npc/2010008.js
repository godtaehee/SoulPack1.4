/*
	GUILD MARK MAKE, CHANGE
	MADE BY ���� (jantnic)
*/

var status = 0;
var sel;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;

		if (status == 0)
			cm.sendSimple("�ȳ��ϼ���, ���������͵帱���?\r\n#b#L0#��帶ũ�� �����;��/�ٲٰ�;��#l#k");
		else if (status == 1)
		{
			sel = selection;
			if (selection == 0)
			{
				if (cm.getChar().getGuildRank() == 1)
					cm.sendYesNo("��帶ũ�� ��������ؼ��� #b" + cm.getChar().emblemCost() + " �޼�#k�� �ʿ��մϴ�. ���� ��帶ũ�� ����ðڽ��ϱ�?");
				else
					cm.sendOk("��� �����͸��� ��ũ�� ����ų� �����Ҽ��ֽ��ϴ�.");
			}
				
		}
		else if (status == 2)
		{
			if (sel == 0)
			{
				cm.getChar().genericGuildMessage(17);
				cm.dispose();
			}
		}
	}
}
