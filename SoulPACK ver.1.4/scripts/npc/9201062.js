/* 
	J.J.
	NLC VIP EYE COLOR CHANGE
	MADE BY 소희 (jantnic)
*/
var status = 0;
var price = 2000000;
var colors = Array();

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
			cm.sendSimple("여긴 성형외과 입니다. 무엇을 하시겠습니까?\r\n#L1#쿠폰을 " + price + "메소에 살래요#l\r\n\#L2#이미 쿠폰이있어요#l");						
		} else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= price) {
					cm.gainMeso(-price);
					cm.gainItem(5152036, 1);
					cm.sendOk("감사합니다. 다음에 또 이용해 주세요.");
				} else {
					cm.sendOk("죄송하지만, 쿠폰 한개에 " + price + " 메소입니다.");
				}
				cm.dispose();
			} else if (selection == 2) {
				if (cm.getChar().getGender() == 0) {
					var current = cm.getChar().getFace()
 % 100 + 20000;
				}
				if (cm.getChar().getGender() == 1) {
					var current = cm.getChar().getFace()
 % 100 + 21000;
				}
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
				cm.sendStyle("원하시는 눈에 색깔을 골라주세요. 마음에 드는걸로 결정해주세요.", colors);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (cm.haveItem(5152036) == true){
				cm.gainItem(5152036, -1);
				cm.setFace(colors[selection]);
				cm.sendOk("자 눈색깔이 바뀌었습니다. 가서 거울을 확인하세요.");
			} else {
				cm.sendOk("죄송하지만, 쿠폰이 없으면 눈색깔을 바꾸어 드릴수 없습니다.");			
			}
		}
	}
}
