/*
이 스크립트의 저작권은
쫑알[maple0025]에게 있습니다.
무단배포든 무한배포든 상관없습니다.
제작자만 지우지 마시기 바랍니다.
*/
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (cm.getPlayer().getMapId() == 251000000 ) {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.sendNext("생각이 바뀌면 다시 말을 걸어 주게.");
		cm.dispose();
			return;
		}	
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendYesNo("안녕하신가? 모험가 양반. 여행은 즐거우신가? 요새 날개가 없는 사람들을 #b무릉#k까지 이동시켜 주고 있는데, 생각 있는가? 배처럼 안전하지는 않아서 얌전히 타고 있어야 하긴 하지만, 배보다 훨씬 빠르게 이동이 가능하다네. #b500 메소#k만 낸다면 간단히 옮겨 주도록 하지.");
		} else if (status == 1) {
			if (cm.getPlayer().getMeso() < 1500) {
				cm.sendOk("자네, 메소는 충분히 가지고 있는겐가?")
				cm.dispose();
			} else {
				cm.gainMeso(-1500);
				cm.warp(250000100, 0);
				cm.dispose();
				}
			}
		}	
	}
		if (cm.getPlayer().getMapId() == 250000100 ) {
		if (mode == -1) {
			cm.dispose();
		} else {		
		if (status == 0 && mode == 0) {
			cm.dispose();
		} else {
		if (status >= 1 && mode == 0) {
			cm.sendNext("생각이 바뀌면 다시 말을 걸어 주게.");
			cm.dispose();
			return;
		}	
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("안녕하신가? 모험가 양반. 여행은 즐거우신가? 자네는 나처럼 날개가 있지 않으니 모처럼의 여행이 불편하겠군. 요새 날개가 없는 사람들을 다른 지역까지 이동시켜 주고 있는데, 생각 있는가? 그럼 자네가 가고 싶은 곳을 선택해 보게.\r\n\r\n#L0##b오르비스(1500 메소)#k#l\r\n#L1##b백초마을(500 메소)#k#l");
		} else if (status == 1) {
			if (selection == 0) {
			if (cm.getPlayer().getMeso() < 6000) {
				cm.sendOk("자네, 메소는 충분히 가지고 있는겐가?")
				cm.dispose();
			} else {
				cm.gainMeso(-6000);
				cm.warp(200000141, 0);
				cm.dispose();	
			}				
		} else if (selection == 1) {
			cm.sendYesNo("지금 #b백초마을#k로 이동하겠나? 탑승 중에 위험한 행동을 해서 떨어지지만 않는다면 금방 도착 한다네. #b500 메소#k만 내면 바로 보내주지.")
				} 
			} else if (status == 2) {
			if (cm.getPlayer().getMeso() < 1500) {
				cm.sendOk("자네, 메소는 충분히 가지고 있는겐가?")
				cm.dispose();
			} else {
				cm.gainMeso(-1500);
				cm.warp(251000000, 0);
				cm.dispose();
					}
				}
			}
		}
	}	
		if (cm.getPlayer().getMapId() == 200000141 ) {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.sendNext("생각이 바뀌면 다시 말을 걸어 주게.");
		cm.dispose();
			return;
		}	
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("안녕하신가? 모험가 양반. 여행은 즐거우신가? 요새 날개가 없는 사람들을 다른 지역까지 이동시켜 주고 있는데, 생각있는가? 위험한 행동을 해서 떨어지지만 않는다면 안전하게 이동시켜 준다네. 그럼 자네가 가고 싶은 곳을 선택해 보게.\r\n#L1##b무릉(1500 메소)#k#l");
		} else if (status == 1) {
			if (cm.getPlayer().getMeso() < 1500) {
				cm.sendOk("자네, 메소는 충분히 가지고 있는겐가?")
				cm.dispose();
			} else {
				cm.gainMeso(-1500);
				cm.warp(250000100, 0);
				cm.dispose();
				}
			}
		}	
	}
}