/*
	이 파일은 노리팩의 일부 파일입니다.
    Copyright (C) 2008 노리 <dulely@naver.com>
                       리프 <w3aries@naver.com>
                       키라씨 <blac2002@naver.com>
                       정씨 <gudjsgh6@naver.com>
                       지레프 <rlaehdwns4@naver.com>
                       블랙보이 <rlaeorjsrltk@naver.com>
                       전체 <vkdnjel23@naver.com>
                       필승 <aaaa9454@naver.com>
                       호동씨 <hodong_sea@naver.com>
                       윈터씨 <ab1239@naver.com>
                       구름군 <wkdtlguszoq@naver.com>

    이 파일은 제한없이 사용이 가능한 파일이며 재배포 가능합니다.
    이 파일을 위 저작권자의 허락 없이 무단으로 주석수정 및 삭제를 할 경우
    법률에 의해 처벌받을 수 있습니다.
	저작권 및 법률정보 <http://likms.assembly.go.kr/law/jsp/main.jsp>
*/

importPackage(net.sf.odinms.client);

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status == 4 && mode == 0) {
			cm.sendNext("이렇게 매력적인 나를 거부하다니, 믿을 수 없군!");
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
			if (cm.getQuestStatus(991021).equals(MapleQuestStatus.Status.NOT_STARTED)) {
				cm.sendSimple("날씨가 정말 좋지?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##d 로저와 사과#k#l");
			} else if (cm.getQuestStatus(991021).equals(MapleQuestStatus.Status.STARTED) && (!cm.haveItem(2010007, 1))) {
				cm.sendSimple("날씨가 정말 좋지?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list0#\r\n#L0##d 로저와 사과 (완료가능)#k#l");
			} else if (cm.getQuestStatus(991021).equals(MapleQuestStatus.Status.STARTED)) {
				cm.sendSimple("날씨가 정말 좋지?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list0#\r\n#L0##d 로저와 사과 (진행중)#k#l");
			} else {
				cm.sendOk("많은 도움이 되었어? 그럼 잘 가~");
				cm.dispose();
			}
		} else if (status == 1) {
			if (cm.getQuestStatus(991021).equals(MapleQuestStatus.Status.NOT_STARTED)) {
				status = 2;
				cm.sendNext("헤이, 맨~ 나좀 잠깐 볼까? 하하! 나는 새로운 여행자들에게 여러 가지를 알려주는 교관, 로저야.");
			} else if (cm.getQuestStatus(991021).equals(MapleQuestStatus.Status.STARTED) && (!cm.haveItem(2010007, 1))) {
				if (cm.getPlayer().getHp() == cm.getPlayer().getMaxHp()) {
//				if (cm.getHp() == cm.getMaxHp()) {
					status = 9;
					cm.sendNext("아이템을 먹는 거... 어때? 간단하지? 오른쪽 하단 슬롯에 #b단축 아이콘#k으로 설정할 수도 있다구. 몰랐지? 하하~ 하지만 아이템이 없으면 가만히 있어도 알아서 회복되기도 해. 느리다는 단점이 있지만 초보 시절엔 이런 회복도 나쁘지 않은 방법이야.");
				} else {
					cm.sendNext("아직 체력이 완전히 회복되지 않았는 걸? 내가 준 로저의 사과는 다 먹은거야? 확실해?");
					cm.dispose();
				}
			} else if (cm.getQuestStatus(991021).equals(MapleQuestStatus.Status.STARTED)) {
				cm.sendOk("내가 준 #r로저의 사과#k를 전부 먹으라니까 그러네~ 아이템 창을 열어서 #b소비 탭#k을 클릭해봐. 로저의 사과가 있을테니 더블 클릭해서 먹으면 돼.");
				cm.dispose();
			}
		} else if (status == 2) {
			cm.sendNext("헤이, 맨~ 나좀 잠깐 볼까? 하하! 나는 새로운 여행자들에게 여러 가지를 알려주는 교관, 로저야.");
		} else if (status == 3) {
			cm.sendNextPrev("그런걸 누가 하라고 시켰냐구? 아하하! 너는 호기심이 많군! 좋아 좋아~ 이건 내가 자진해서 하는 일이야.");
		} else if (status == 4) {
			cm.sendAcceptDecline("자... 그럼 장난 좀 쳐볼까? 에잇!");
		} else if (status == 5) {
			status = 6;
			cm.startQuest(991021);
			cm.getPlayer().setHp(25);
			cm.getPlayer().updateSingleStat(MapleStat.HP, 25);
			cm.gainItem(2010007, 1);
			cm.sendNext("놀랐지? HP 가 0이 되면 큰일난다구. 자, #r로저의 사과#k를 줄 테니 먹어봐. 힘이 날거야. 아이템 창을 열어서 더블클릭해봐. 아이템창은 #bI키#k를 누르면 간단히 열린다구.");
		} else if (status == 6) {
			cm.sendNext("놀랐지? HP 가 0이 되면 큰일난다구. 자, #r로저의 사과#k를 줄 테니 먹어봐. 힘이 날거야. 아이템 창을 열어서 더블클릭해봐. 아이템창은 #bI키#k를 누르면 간단히 열린다구.");
		} else if (status == 7) {
			cm.sendPrev("내가 준 로저의 사과, 전부 먹어야 돼. 먹으면 바로 HP가 회복되는 것이 보일 거야. HP를 전부 회복한 후 다시 말을 걸어줘.");
		} else if (status == 8) {
			cm.dispose();
		} else if (status == 9) {
			cm.sendNext("아이템을 먹는 거... 어때? 간단하지? 오른쪽 하단 슬롯에 #b단축 아이콘#k으로 설정할 수도 있다구. 몰랐지? 하하~ 하지만 아이템이 없으면 가만히 있어도 알아서 회복되기도 해. 느리다는 단점이 있지만 초보 시절엔 이런 회복도 나쁘지 않은 방법이야.");
		} else if (status == 10) {
			cm.sendNextPrev("좋았어! 많은 걸 배웠으니 선물을 주지. 여행을 하려면 꼭 배워둬야 하는 거니까 나한테 고마워 하라구! 위급할 때 사용해.");
		} else if (status == 11) {
			cm.sendNextPrev("내가 가르쳐 줄 수 있는건 여기까지야. 아쉽지만 이제 헤어져야 할 시간이로군. 아무쪼록 몸조심 하라구. 그럼 잘가~!!!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i2010000# 사과 3개\r\n#i2010009# 초록사과 3개\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#   10 exp");
		} else if (status == 12) {
			cm.completeQuest(991021);
			cm.gainExp(10);
			cm.gainItem(2010000, 3);
			cm.gainItem(2010009, 3);
			cm.dispose();
		}
	}
}
