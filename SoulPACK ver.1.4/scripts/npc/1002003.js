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
    이 파일의 주석을 수정 및 삭제할 시 위 제작자들의 동의가 필요합니다.
    이 파일의 저작권은 위 제작자들에게 있으며 위 제작자들의 동의없이
    무단수정 및 악용할 시 저작권법 위반으로 처벌 받으실 수 있습니다.
	저작권 및 법률정보 <http://likms.assembly.go.kr/law/jsp/main.jsp>
*/

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status == 0 && mode == 0) {
			cm.sendNext("이봐, 자네! 친구 목록이 부족한 건 아닌가? 친구 목록이 부족하다면 나와 거래해 보는건 어떤가? 헐헐~");
			cm.dispose();
			return;
		} else if (status >= 1 && mode == 0) {
			cm.sendNext("이봐, 자네! 친구 목록이 부족한 건 아닌가? 친구 목록이 부족하다면 나와 거래해 보는건 어떤가? 헐헐~");
			cm.dispose();
			return;
		}	
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendYesNo("오늘도 손님이 많아야 할텐데... 엇! 잠깐만! 자네 친구 목록을 늘리고 싶지는 않은가? 자네 얼굴을 보니 한 눈에 친구가 굉장히 많을것 같다는 예감이 들었다네. 어떤가... 메소만 조금 준다면 자네의 친구 목록을 늘려주겠네. 대신 같은 계정에 다른 캐릭터에게는 적용되지 않으니까 신중히 하라구. 해볼텐가?");
		} else if (status == 1) {
			cm.sendYesNo("좋았어! 잘생각했네. 가격은 그다지 비싸지 않아. 내가 큰 맘 먹고 #r대폭할인#k을 시작했기 때문이지. #b친구 목록 5명을 추가 하는 데 5만 메소#k라네. 물론 낱개로는 팔지 않는다네. 한 번 사두기만 하면 영원히 목록이 늘어나는 셈이니까 친구 목록이 부족한 사람이라면 해보는 것도 나쁘지 않아. 어때? 5만 메소 내겠나?");
		} else if (status == 2) {
			var capacity = cm.getPlayer().getBuddylist().getCapacity();
			if (capacity >= 100 || cm.getMeso() < 50000) {
				cm.sendNext("자네... #b5만 메소#k는 확실히 가지고 있는 건가? 만일 그렇다면 친구 목록이 최대로 늘어나 있는건 아닌지 확인해 주게. 아무리 돈을 낸다 하더라도 친구 목록은 기본 개수를 포함해서 #b100개 이상#k 늘어날 수 없다네.");
				cm.dispose();
			} else {
				var newcapacity = capacity + 5;
				cm.gainMeso(-50000);
				cm.updateBuddyCapacity(newcapacity);
				cm.sendOk("좋았어! 자네의 친구 목록이 5개 늘어나 있을 것일세. 한 번 확인해 보게나. 그리고 만일 그래도 친구 목록이 부족하다면 언제든지 날 찾아와 주게. 몇 번이라도 늘려줄테니까 말야. 물론 공짜로는 안되지만... 그럼 잘가게~");
				cm.dispose();
			}
		}
	}
}
