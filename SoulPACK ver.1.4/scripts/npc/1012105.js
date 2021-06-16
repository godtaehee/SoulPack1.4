/*
	! 이 스크립트는 스크립트 메이커 리프(w3aries)가 제작하였습니다.
	! 이 스크립트는 제한배포 되었으며 재배포가 가능합니다.
	! 이 주석은 제작자의 동의가 있을시 수정이 가능합니다.
      Copyright (C) 2008 Script Maker 리프 <w3aries@naver.com>
*/

var status = -1;
var skin = Array(0, 1, 2, 3, 4);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status == 1 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("어서오세요! 저희 헤네시스 피부관리실에 오신걸 환영해요. 혹시 저처럼 탱탱하고 건강하고 아름다운 피부를 원하시나요? #b헤네시스 피부관리 쿠폰#k만 있다면 원하시는 대로 피부를 손 봐 드린답니다. 한 번 믿고 저에게 맡겨 보시는건 어떠세요?");
		} else if (status == 1) {
			cm.sendStyle("저희 샵에서 특수 개발한 기계로 피부관리 후의 모습을 볼 수 있답니다. 어떤 피부를 원하시나요? 골라 보세요~", skin);
		} else if (status == 2) {
			cm.dispose();
			if (cm.haveItem(5153000)) {
				cm.gainItem(5153000, -1);
				cm.setSkin(skin[selection]);
//				cm.sendOk("");
			} else {
				cm.sendNext("음... 저희 가게 피부관리 쿠폰을 가지고 있지 않은것 같군요. 죄송하지만 쿠폰이 없다면 피부 손질을 해 드릴수가 없답니다.");
			}
		}
	}
}