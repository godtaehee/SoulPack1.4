/*
	Miranda
	NLC Skin Change
	MADE BY 소희 (jantnic)
*/
var status = 0;
var price = 1000000;
var skin = Array(0, 1, 2, 3, 4);

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
		if (status == 0) {
			cm.sendSimple("여긴 스킨케여샵입니다. 무엇을 하시겠습니까?\r\n#L1#스킨케어쿠폰을" + price + " 메소에 살래요#l\r\n\#L2#이미 쿠폰을 가지고 있습니다.#l");
			} else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= price) {
					cm.gainMeso(-price);
					cm.gainItem(5153009, 1);
					cm.sendOk("감사합니다. 다음에 또 이용해주세요.");
				} else {
					cm.sendOk("죄송하지만, 쿠폰은 한개에 1,000,000 메소입니다.");
				}
				cm.dispose();
			} else if (selection == 2) {
				cm.sendStyle("원하는 몸색깔을 골라주세요.", skin);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (cm.haveItem(5153009) == true){
				cm.gainItem(5153009, -1);
				cm.setSkin(skin[selection]);
				cm.sendOk("자 원하던 몸색깔로 바뀌었습니다, 가서 거울을 한번 보세요.");
			} else {
				cm.sendOk("죄송하지만, 스킨케어쿠폰이 없으면 몸색깔을 바꿀수 없습니다.");
			}
		}
	}
}
