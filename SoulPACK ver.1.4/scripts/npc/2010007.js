/*
	GUILD CREATE,CAPITAL+,DELETE
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
			cm.sendSimple("����ðԳ�, ��带���鷯�°հ�?\r\n#b#L0#��带 ����� �;��!#l\r\n#L1#��带 ��ü�ϰ� �;��!#l\r\n#L2#��� �ο��� �ø��� �;��!#l#k");
		else if (status == 1)
		{
			sel = selection;
			if (selection == 0)
			{
				if (cm.getChar().getGuildId() > 0)
				{
					cm.sendOk("��带 ���������. ��带 Ż���� �Ŀ� �ٽ�ã�ƿ��ð�.");
					cm.dispose();
				}
				else
					cm.sendYesNo("��带 ����� �����ǰ�, ��带 ������� #b" + cm.getChar().guildCost() + " �޼�#�� �ʿ��ϴٳ�, ���� ����հ�?");
			}
			else if (selection == 1)
			{
				if (cm.getChar().getGuildId() <= 0 || cm.getChar().getGuildRank() != 1)
				{
					cm.sendOk("��� �����Ͱ� ���� ������ ã�ƿ��ð�.");
					cm.dispose();
				}
				else
					cm.sendYesNo("��带 ��ü�ϰ� �����ǰ�, ��带 ��ü�ϸ� ��忡 ���ԵǾ��ִ� ������ ��� Ż��ǰ� ��尡 �ƿ� �������ٳ�, ���� ��带 ��ü�Ұǰ�?");
			}
			else if (selection == 2)
			{
				if (cm.getChar().getGuildId() <= 0 || cm.getChar().getGuildRank() != 1)
				{
					cm.sendOk("��� �����Ͱ� ���� ������ ã�ƿ��ð�.");
					cm.dispose();
				}
				else
					cm.sendYesNo("��� �ο��� �ø�������ǰ�, ����ο��� �ø����� " + cm.getChar().capacityCost() + " �޼�#k�� �ʿ��ϴٳ�, ���� �ø��ǰ�?");
			}
		}
		else if (status == 2)
		{
			if (sel == 0 && cm.getChar().getGuildId() <= 0)
			{
				cm.getChar().genericGuildMessage(1);
				cm.dispose();
			}
			else if (sel == 1 && cm.getChar().getGuildId() > 0 && cm.getChar().getGuildRank() == 1)
			{
				cm.getChar().disbandGuild();
				cm.dispose();
			}
			else if (sel == 2 && cm.getChar().getGuildId() > 0 && cm.getChar().getGuildRank() == 1)
			{
				cm.getChar().increaseGuildCapacity();
				cm.dispose();
			}
		}
	}
}
