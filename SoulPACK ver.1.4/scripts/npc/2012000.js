/*
	AGATHA , 오르비스 매표소 티켓판매원
	MAP : 오르비스 매표소
	MADE BY 소희 (jantnic)
*/


var status = 0;

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
			cm.sendSimple("안녕하세요. 가실 곳을 골라주세요.\r\n#L0#리프레#l\r\n#L1#엘리니아#l\r\n#L2#루디브리엄#l\r\n#L3#아리안트#l\r\n#L4#무릉#l");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendSimple("원하시는 티켓을 골라주세요.\r\n#L0##r리프레행 티켓(기본)#k\r\n#L1##r리프레행 티켓(일반)#k");
			} else if (selection == 1) {
				cm.sendSimple("원하시는 티켓을 골라주세요.\r\n#L2##r엘리니아행 티켓(기본)#k\r\n#L3##r엘리니아행 티켓(일반)#k");
			} else if (selection == 2) {
				cm.sendSimple("원하시는 티켓을 골라주세요.\r\n#L4##r루디브리엄행 티켓(기본)#k\r\n#L5##r루디브리엄행 티켓(일반)#k");
			} else if (selection == 3) {
				cm.sendSimple("원하시는 티켓을 골라주세요.\r\n#L6##r아르안트행 티켓(기본)#k\r\n#L7##r아리안트행 티켓(일반)#k");
			} else if (selection == 4) {
				cm.sendSimple("#L8##r무릉으로 가는법을 가르쳐주세요!#k");
		}
		} if (status == 2) {
			if (selection == 0) {
					if (cm.getMeso() >= 3000) {
					cm.sendOk("리프레행 티켓(기본)을 구입하셧습니다. 다음에또 이용해주세요.");
					cm.gainMeso(-3000);
					cm.gainItem(4031330,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 티켓을 사셧거나 메소가 부족합니다.");
    					cm.dispose();
				}
			} else if (selection == 1) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("리프레행 티켓(일반)을 구입하셧습니다. 다음에또 이용해주세요.");
					cm.gainMeso(-5000);
					cm.gainItem(4031331,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 티켓을 사셧거나 메소가 부족합니다.");
    					cm.dispose();
				}
			} else if (selection == 2) {
					if (cm.getMeso() >= 3000) {
					cm.sendOk("엘리니아행 티켓(기본)을 구입하셧습니다. 다음에또 이용해주세요.");
					cm.gainMeso(-3000);
					cm.gainItem(4031046,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 티켓을 사셧거나 메소가 부족합니다.");
    					cm.dispose();
				}
			} else if (selection == 3) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("엘리니아행 티켓(일반)을 구입하셧습니다. 다음에또 이용해주세요.");
					cm.gainMeso(-5000);
					cm.gainItem(4031047,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 티켓을 사셧거나 메소가 부족합니다.");
    					cm.dispose();
				}
			} else if (selection == 4) {
					if (cm.getMeso() >= 3000) {
					cm.sendOk("루디브리엄행 티켓(기본)을 구입하셧습니다. 다음에또 이용해주세요.");
					cm.gainMeso(-3000);
					cm.gainItem(4031073,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 티켓을 사셧거나 메소가 부족합니다.");
    					cm.dispose();
				}
   			} else if (selection == 5) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("루디브리엄행 티켓(일반)을 구입하셧습니다. 다음에또 이용해주세요.");
					cm.gainMeso(-5000);
     					cm.gainItem(4031074,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 티켓을 사셧거나 메소가 부족합니다.");
     					cm.dispose();
    				}
   			} else if (selection == 6) {
					if (cm.getMeso() >= 3000) {
					cm.sendOk("아리안트행 티켓(기본)을 구입하셧습니다. 다음에또 이용해주세요.");
					cm.gainMeso(-3000);
          					cm.gainItem(4031575,1);
          					cm.dispose();
   				 } else {
     					cm.sendOk("이미 티켓을 사셧거나 메소가 부족합니다.");
          					cm.dispose();
    				}
        					} else if (selection == 7) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("아리안트행 티켓(일반)을 구입하셧습니다. 다음에또 이용해주세요.");
					cm.gainMeso(-5000);
          					cm.gainItem(4031576,1);
          					cm.dispose();
        				} else {
     					cm.sendOk("이미 티켓을 사셧거나 메소가 부족합니다.");
          					cm.dispose();
				}
       					} else if (selection == 8) {
					if (cm.getMeso() >= 1) {
					cm.sendOk("무릉행은 티켓없이도 가실수있답니다. 티켓을 사지않고도 학에게 돈을내고 이동이가능합니다. 지금당장 무릉행 정거장으로 가셔서 학에게 돈을내시면 무릉으로 바로이동이 가능하답니다.");
					cm.gainMeso(0);
          					cm.dispose();
        				} else {
     					cm.sendOk("이미 티켓을 사셧거나 메소가 부족합니다.");
          					cm.dispose();
				}
			}
		}
	}
}