/*
   ※ 배포 및 소스수정만 가능합니다.
   제작자 : 리프(w3aries@naver.com)
   수정자 : 리프(w3aries@naver.com)

	캐시충전 스크립트
*/

importPackage(net.sf.odinms.client);

var status = 0;
var selectedType = -1;
var cash = 0;
var meso = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
	} else {
		status++;
		if (status == 0) {
			var selStr = "소울서버 캐시충전을 맡고 있습니다.\r\n충전하실 캐시금액의 단위를 선택해주세요.#b　　　　　　　　　　　　　　　　　　　　　　　(100만 메소당 1천 캐시)";
			var options = new Array("천원단위", "만원단위");
			for (var i = 0; i < options.length; i++) {
				selStr += "\r\n#L" + i + "#" + options[i] + "#l";
			}
			cm.sendSimple(selStr);
		} else if (status == 1) {
			selectedType = selection;
			if (selectedType == 0) {
				var selStr = "충전하실 캐시금액을 입력해주세요. #b※ 1~9 입력 → 1~9 천원";
				cm.sendGetNumber(selStr,1,1,9);
			} else if (selectedType == 1) {
				var selStr = "충전하실 캐시금액을 입력해주세요. #b※ 1~99 입력 → 1~99 만원";
				cm.sendGetNumber(selStr,1,1,99);
			}
		} else if (status == 2) {
			cash = selection;
			if (selectedType == 0) {
				cm.sendYesNo("충전하실 캐시금액이 #b" + cash + "천원#k인가요?");
			} else if (selectedType == 1) {
				cm.sendYesNo("충전하실 캐시금액이 #b" + cash + "만원#k인가요?");
			}
		} else if (status == 3) {
			if (selectedType == 0) {
				meso = 100000 * cash;
				cash = 10000 * cash;
				if (cm.getMeso() >= meso) {
					cm.sendNext("캐시충전이 완료되었습니다.");
					cm.gainMeso(-meso);
					cm.gainnxCash(parseInt(cash));
					cm.dispose();
				} else {
					cm.sendNext("메소가 부족하신거 같은데요?");
					cm.dispose();
				}
			} else if (selectedType == 1) {
				meso = 10000000 * cash;
				cash = 10000 * cash;
				if (cm.getMeso() >= meso) {
					cm.sendNext("캐시충전이 완료되었습니다.");
					cm.gainMeso(-meso);
					cm.gainnxCash(parseInt(cash));
					cm.dispose();
				} else {
					cm.sendNext("메소가 부족하신거 같은데요?");
					cm.dispose();
				}
			}
		}
	}
}