/*
	NARA 
	MADE BY 소희 (jantnic)
	HELP : 리프
	 ㄴ 말만...
*/

importPackage(net.sf.odinms.server.maps);

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status == 0 && mode == 0) {
			cm.dispose();
			return;
		} else if (status <= 2 && mode == 0) {
			cm.sendNext("플로리나 비치로 여행을 떠나보고 싶지는 않은가요? 빅토리아 아일랜드 가까운 곳에는 플로리나비치라는 환상적인 해변이 있죠!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("여름휴가로 안성맞춤인 #b플로리나비치#k라는 환상적인 해변이 있다는 말은 들어본 적이 있으세요? #b2000 메소#k를 내거나 #b자유여행권#k이 있다면 언제든지 저를 통해 그곳으로 갈 수 있어요.\r\n\r\n#L0# #b2000 메소#k를 내겠습니다.#l\r\n#L1# #b자유여행권#k을 가지고 있습니다.#l\r\n#L2# #b자유여행권#k이 뭔가요?#l");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendYesNo("#b2000 메소#k를 내고 플로리나비치로 가실건가요? 하지만 그곳에도 몬스터가 있는 모양이니 준비하는 것을 잊지 마세요. 지금 당장 플로리나비치로 떠나실건가요?");
			} else if (selection == 1) {
				status = 2;
				cm.sendYesNo("#b자유여행권#k을 가지고 있으신가요? 그것만 가지고 있다면 언제든지 플로리나비치로 갈 수 있죠! 하지만 그곳에도 몬스터가 있는 모양이니 준비하는 것을 잊지 마세요. 지금 당장 플로리나비치로 떠나실건가요?");
			} else if (selection == 2) {
				status = 4;
				cm.sendNext("후후... #b자유여행권#k이 뭔지 궁금해진 모양이시네요. 자유여행권은 가지고 있기만 하면 평생 무료로 언제든지 플로리나비치로 갈 수 있는 아이템이에요. 워낙 특별한 티켓이라 저희들도 특별히 취급하고 있었는데 얼마전 휴가를 내고 지구방위본부라는 곳을 다녀오던 길에 잃어버렸죠...");
			}
		} else if (status == 2) {
			if (cm.getMeso() < 2000) {
				cm.sendNext("메소가 부족한거같아요? 좀더 모아서 가져오세요. 입구 있던걸 판다든지... 필드에서 몬스터를 쓰러뜨려 보던지... 방법은 여러가지가 있어요...");
				cm.dispose();
			} else {
				cm.gainMeso(-2000);
				cm.getChar().saveLocation(SavedLocationType.FLORINA);
				cm.warp(110000000, 0);
				cm.dispose();
			}
		} else if (status == 3) {
			if (cm.haveItem(4031134)) {
				cm.getChar().saveLocation(SavedLocationType.FLORINA);
				cm.warp(110000000, 0);
				cm.dispose();
			} else {
				cm.sendNext("흐음... #b자유여행권#k이 어디에 있다는 거죠? 분명히 가지고 있는건가요? 다시 한 번 확인해 주세요.");
				cm.dispose();
			}
		} else if (status == 4) {
			cm.sendNext("후후... #b자유여행권#k이 뭔지 궁금해진 모양이시군요. 자유여행권은 가지고 있기만 하면 평생 무료로 언제든지 플로리나비치로 갈 수 있는 아이템이에요. 워낙 특별한 티켓이라 저희들도 특별히 취급하고 있었는데 얼마전 휴가를 내고 지구방위본부라는 곳을 다녀오던 길에 잃어버렸죠...");
		} else if (status == 5) {
			cm.sendNextPrev("아쉽게도 결국 찾지 못하고 돌아오긴 했는데 여간 찜찜한게 아니에요. 그곳에 있는 누군가가 잘 주워다 주워졌으면 하는 바램이에요... 아무튼 뭐 대충 이런거고 여행자님이 지구방위본부로 가서 모험을 하다 보면 찾을 수도 있지 않을까요? 설명은 여기까지에요. 궁금한 점이 있다면 언제든지 저에게 물어봐 주길 바래요");
		} else if (status == 6) {
			cm.dispose();
		}
	}
}
