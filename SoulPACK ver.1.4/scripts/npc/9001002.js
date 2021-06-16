function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		status++;
		if(status == 0) {
			cm.sendSimple("캐시충전하러 왔군요~ 후훗 충전하실 금액을 골라주세요~ \r \r\n#b#L1#500,000 메소 ☞ 1,000 캐시#l\r\n#L2#5,000,000 메소 ☞ 9,000 캐시#l\r\n#L3#50,000,000 메소 ☞ 84,000 캐시#l");
		} else if(status == 1) {
			if(selection == 1) {
				if(cm.getMeso() >= 500000) {
					cm.gainMeso(-500000);
					cm.gainnxCash(1000) 
				} else {
					cm.sendOk("죄송하지만, 최소한 500,000 메소이상 가지고계셔야합니다.")
					cm.dispose();
				}
				cm.dispose();
			} else if(selection == 2) {
				if(cm.getMeso() >= 5000000) {
					cm.gainMeso(-5000000);
					cm.gainnxCash(9000);
				} else {
					cm.sendOk("죄송하지만, 최소한 5,000,000 메소이상 가지고계셔야합니다.")
					cm.dispose();
				}
				cm.dispose();
			} else if(selection == 3) {
				if(cm.getMeso() >= 50000000) {
					cm.gainMeso(-50000000);
					cm.gainnxCash(84000);
				} else {
					cm.sendOk("죄송하지만, 최소한 50,000,000 메소이상 가지고계셔야합니다.")
					cm.dispose();
				}
				cm.dispose();
			} else {
				cm.dispose();
			}				
		} else {
			cm.dispose();
		}
	}
}