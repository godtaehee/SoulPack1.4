/*
	GUILD CREATE,CAPITAL+,DELETE
	MADE BY 소희 (jantnic)
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
			cm.sendSimple("어서오시게나, 길드를만들러온겐가?\r\n#b#L0#길드를 만들고 싶어요!#l\r\n#L1#길드를 헤체하고 싶어요!#l\r\n#L2#길드 인원을 늘리고 싶어요!#l#k");
		else if (status == 1)
		{
			sel = selection;
			if (selection == 0)
			{
				if (cm.getChar().getGuildId() > 0)
				{
					cm.sendOk("길드를 만들수없네. 길드를 탈퇴한 후에 다시찾아오시게.");
					cm.dispose();
				}
				else
					cm.sendYesNo("길드를 만들고 싶은건가, 길드를 만들려면 #b" + cm.getChar().guildCost() + " 메소#가 필요하다네, 정말 만들겐가?");
			}
			else if (selection == 1)
			{
				if (cm.getChar().getGuildId() <= 0 || cm.getChar().getGuildRank() != 1)
				{
					cm.sendOk("길드 마스터가 집적 나에게 찾아오시게.");
					cm.dispose();
				}
				else
					cm.sendYesNo("길드를 헤체하고 싶은건가, 길드를 헤체하면 길드에 가입되어있는 유저도 모두 탈퇴되고 길드가 아예 없어진다네, 정말 길드를 헤체할건가?");
			}
			else if (selection == 2)
			{
				if (cm.getChar().getGuildId() <= 0 || cm.getChar().getGuildRank() != 1)
				{
					cm.sendOk("길드 마스터가 집적 나에게 찾아오시게.");
					cm.dispose();
				}
				else
					cm.sendYesNo("길드 인원을 늘리고싶은건가, 길드인원을 늘리려면 " + cm.getChar().capacityCost() + " 메소#k가 필요하다네, 정말 늘릴건가?");
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
