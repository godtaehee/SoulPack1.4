/*
	GUILD MARK MAKE, CHANGE
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
			cm.sendSimple("안녕하세요, 무엇을도와드릴까요?\r\n#b#L0#길드마크를 만들고싶어요/바꾸고싶어요#l#k");
		else if (status == 1)
		{
			sel = selection;
			if (selection == 0)
			{
				if (cm.getChar().getGuildRank() == 1)
					cm.sendYesNo("길드마크를 만들기위해서는 #b" + cm.getChar().emblemCost() + " 메소#k가 필요합니다. 정말 길드마크를 만드시겠습니까?");
				else
					cm.sendOk("길드 마스터만이 마크를 만들거나 수정할수있습니다.");
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
