importPackage(net.sf.odinms.client);

var status = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (status == 3 && mode == 0) {
			cm.sendOk("퀘스트를 하지 않으면 #b초기자금#k을 받을 수 없음.");
			cm.dispose();
			return;
	} else if (status == 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getQuestStatus(771021).equals(MapleQuestStatus.Status.NOT_STARTED)) {
				cm.sendSimple("이 상자에서 뭔가 신비한 힘이 느껴진다...\r\n\r\n#L0##d초기자금 퀘스트#k#l");
		} else if (cm.getQuestStatus(771021).equals(MapleQuestStatus.Status.STARTED) && (cm.haveItem(4000019, 20))) {
				cm.sendSimple("이 상자에서 뭔가 신비한 힘이 느껴진다...\r\n\r\n#L0##d초기자금 퀘스트(완료가능)#k#l");
		} else if (cm.getQuestStatus(771021).equals(MapleQuestStatus.Status.STARTED)) {
				cm.sendSimple("이 상자에서 뭔가 신비한 힘이 느껴진다...\r\n\r\n#L0##d초기자금 퀘스트(진행중)#k#l");
			} else {
				cm.sendOk("뭐라고 쓰여있다.\r\n(초기자금 퀘스트는 한번만 가능하다.)");
				cm.dispose();
				}
	} else if (status == 1) {
			if (cm.getQuestStatus(771021).equals(MapleQuestStatus.Status.NOT_STARTED)) {
				status = 2;
				cm.sendNext("(안에 뭐라고 써있다...)\r\n이 상자에 달팽이의 껍질을 20개 가져다 주면 초기자금이 생긴다...");
		} else if (cm.getQuestStatus(771021).equals(MapleQuestStatus.Status.STARTED) && (cm.haveItem(4000019, 20))) {
				status = 7;
				cm.sendNext("갑자기 상자에서 빛이 나기 시작하며 상자가 열린다...");
		} else if (cm.getQuestStatus(771021).equals(MapleQuestStatus.Status.STARTED)) {
				cm.sendOk("아직 달팽이 껍질이 없는것 같다.");
				cm.dispose();
			}	
	} else if (status == 2) {
				cm.sendNext("(안에 뭐라고 써있다...)\r\n이 상자에 달팽이의 껍질을 20개 가져다 주면 초기자금이 생긴다...");
	} else if (status == 3) {
				cm.sendAcceptDecline("퀘스트를 하려면 #b수락(Accept)#k 하지 않는다면 #b거절(Decline)#k을 누르시오.");
	} else if (status == 4) {
				status = 5;
				cm.startQuest(771021);
				cm.sendOk("#rTIP.달팽이의 껍질은 초록달팽이를 잡으면 나온답니다.#k")			
	} else if (status == 5) {
				cm.sendOk("#rTIP.달팽이의 껍질은 초록달팽이를 잡으면 나온답니다.#k")
	} else if (status == 6) {
				cm.dispose();			
	} else if (status == 7) {
				cm.sendNext("갑자기 상자에서 빛이 나기 시작하며 상자가 열린다...");
	} else if (status == 8) {
				cm.sendOk("그 상자 안을 보니 초기자금 50000000메소가 있다.");
				cm.completeQuest(771021);
				cm.gainItem(4000019, -20);
				cm.gainMeso(50000000);
				cm.dispose();
				}
			}
		}
				 		