/*
	Ari
	NLC Random Hair/Hair Color Change
	MADE BY 소희 (jantnic)
*/
var status = 0;
var beauty = 0;
var hairprice = 1000000;
var haircolorprice = 1000000;
var mhair = Array(30250, 30110, 30230, 30050, 30280, 30410, 30730, 30160, 30200, 30440, 30360, 30740, 30400);
var fhair = Array(31150, 31310, 31220, 31300, 31260, 31160, 31730, 31410, 31410, 31720, 31560, 31450);
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
			cm.sendSimple("여긴 일반헤어샵입니다. 무엇을 하시겠습니까?\r\n#L0#쿠폰을 살래요#l\r\n#L1#머리스타일을 바꾸고 싶어요#l\r\n#L2#머리색깔을 바꾸고 싶어요#l");						
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("어느 쿠폰을 사시겠습니까?\r\n#L0#머리스타일 일반쿠폰 " + hairprice + " 메소#l\r\n#L1#머리색깔 일반쿠폰 " + haircolorprice + " 메소#l");
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
				cm.sendYesNo("정말로 머리스타일을 바꾸실건가요?");
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendYesNo("정말로 머리색깔을 바꾸실건가요?");
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150030) == true){
					cm.gainItem(5150030, -1);
					cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
					cm.sendOk("머리스타일이 바뀌었습니다. 가서 거울을 확인하세요.");
				} else {
					cm.sendOk("죄송하지만, 쿠폰이 없으면 머리스타일을 바꿀수 없습니다.");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151025) == true){
					cm.gainItem(5151025, -1);
					cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
					cm.sendOk("머리색깔이 바뀌었습니다. 가서 거울을 확인하세요.");
				} else {
					cm.sendOk("죄송하지만, 쿠폰이 없으면 머리색깔을 바꿀수 없습니다.");
				}
			}
			if (beauty == 0){
				if (selection == 0 && cm.getMeso() >= hairprice) {
					cm.gainMeso(-hairprice);
					cm.gainItem(5150030, 1);
					cm.sendOk("감사합니다. 다음에 또 이용해 주세요.");					
				} else if (selection == 1 && cm.getMeso() >= haircolorprice) {
					cm.gainMeso(-haircolorprice);
					cm.gainItem(5151025, 1);
					cm.sendOk("감사합니다. 다음에 또 이용해 주세요.");
				} else {
					cm.sendOk("죄송하지만, 쿠폰은 한개에 1,000,000 메소입니다.");
				}
			}
		}
	}
}
