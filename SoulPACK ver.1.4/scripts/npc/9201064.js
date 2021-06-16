/*
	Mani
	NLC VIP HAIR/HAIR COLOR CHANGE
	MADE BY 소희 (jantnic)
*/
var status = 0;
var beauty = 0;
var hairprice = 2000000;
var haircolorprice = 2000000;
var mhair = Array(30250, 30110, 30230, 30050, 30280, 30410, 30730, 30160, 30200);
var fhair = Array(31150, 31310, 31220, 31300, 31260, 31160, 31730, 31410, 31410);
var hairnew = Array();

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
			cm.sendSimple("여긴 고급헤어샵 입니다. 무엇을 하시겠습니까?\r\n#L0#쿠폰을 살래요#l\r\n#L1#머리스타일을 바꾸고 싶어요#l\r\n#L2#머리색깔을 바꾸고 싶어요#l");						
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("어느 쿠폰을 사실건가요?\r\n#L0#머리바꾸기 쿠폰을 " + hairprice + " 메소에 살께요\r\n#L1#머리색바꾸기 쿠폰을" + haircolorprice + " 메소에 살께요");
			} else if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mhair.length; i++) {
						hairnew.push(mhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				} 
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fhair.length; i++) {
						hairnew.push(fhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				}
				cm.sendStyle("원하는 머리스타일을 골라주세요.", hairnew);
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("원하는 머리색깔을 골라주세요.", haircolor);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150031) == true){
					cm.gainItem(5150031, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("자 원하던 머리스타일로 바뀌었습니다, 가서 거울을 한번 보세요.");
				} else {
					cm.sendOk("죄송하지만, 쿠폰이 없으면 원하는 머리로 바꾸어 드릴수 없습니다.");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151026) == true){
					cm.gainItem(5151026, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("자 원하던 머리색깔로 바뀌었습니다, 가서 거울을 한번 보세요.");
				} else {
					cm.sendOk("죄송하지만, 쿠폰이 없으면 원하는 머리색깔로 바꾸어 드릴수 없습니다.");
				}
			}
			if (beauty == 0){
				if (selection == 0 && cm.getMeso() >= hairprice) {
					cm.gainMeso(-hairprice);
					cm.gainItem(5150031, 1);
					cm.sendOk("다음에 또 이용해 주세요.");
				} else if (selection == 1 && cm.getMeso() >= haircolorprice) {
					cm.gainMeso(-haircolorprice);
					cm.gainItem(5151026, 1);
					cm.sendOk("다음에 또 이용해 주세요.");
				} else {
					cm.sendOk("죄송하지만, 쿠폰은 한개에 2,000,000 메소입니다.");
				}
			}
		}
	}
}
