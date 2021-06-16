/*
	ELLINIA VIP CAP	
	ELLINIA : ELLINIA
	MADE BY 소희 (jantnic)
	HELP : 리프 (w3aries)
*/

var status = -1;
var cost;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 1 && mode == 0) {
			cm.sendNext("이 마을에도 볼거리가 가득하답니다. 개미굴 광장으로 이동하고 싶어지면 언제든지 저희 택시를 이용해 주세요~");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("안녕하세요~! 모범택시입니다. 마을 끼리만 모셔다 드리던 기존의 택시와는 달리 저희는 차별화된 서비스를 제공해 드리고 있습니다. 모범택시라서 가격은 조금 비싸긴 하지만... 단돈 10000 메소에 손님을 안전하고 빠르게 #b개미굴 광장#k까지 모셔다 드립니다.");
		} else if (status == 1) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendYesNo("특별히 초보자는 90% 세일된 가격으로 모시고 있으니 한 번 이용해 보세요. 개미굴 광장은 빅토리아 아일랜드 중앙에 있는 던전 깊숙히 24시간 포장마차가 자리잡고 있는 곳입니다. #b1,000 메소#k에 개미굴 광장까지 가보시겠습니까?");
				cost = 1000;
			} else {
				cm.sendYesNo("초보자가 아닌 분들께는 정해진 요금을 모두 받고 있습니다. 개미굴 광장은 빅토리아 아일랜드의 중앙에 있는 던전 깊은곳 24시간 포장마차가 자리잡고 있는 곳입니다. #b10,000 메소#k에 개미굴 광장까지 가보시겠습니까?");
				cost = 10000;
			}
		} else if (status == 2) {
			if (cm.getMeso() < cost) {
				cm.sendNext("메소가 부족하시군요. 죄송하지만 요금을 지불하지 않으면 저희 모범택시를 이용하실 수 없습니다.")
				cm.dispose();
			} else {
				cm.gainMeso(-cost);
				cm.warp(105070001, 0);
				cm.dispose();
			}
		}
	}
}
