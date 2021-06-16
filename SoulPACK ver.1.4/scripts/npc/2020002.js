importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

/*
만든이:민 하율
본 파일을 무단배포를 허가하지않습니다.
그리고, 만든이의 이름은 수정하지마세요.
*/
var status = 0;
var price = 2000000;
var map = Array(211000100);

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
			cm.sendSimple("늙은 노인에게 무슨볼일인가..\r\n#L1##b아르웬의 유리구두를 받으러왔습니다.#k#l\r\n\#L2##b가져왔습니다!#k#l");
			} else if (status == 1) {
			if (selection == 1) {
                                cm.sendSimple("젊은이..#r아르웬의 유리구드#k를 받아가려면 우선 내 부탁하나만 들어줬으면 좋겠네..\r\n#b나한테 손녀딸이 있는데 #b#v4001001##k#b를 너무 갖고 싶어하지뭐야..#k\n#r#b#v4001001##k#r10개#k만 구해다주면, #r아르웬의 유리구두#k를 주지.\r\n아마 #r루디브리엄#k에서 살고있는 #bnana(H)#k가 가지고있을꺼야!")
			} else if (status == 2) {
			} else if (selection == 2) { 
				if(cm.haveItem(4001001, 10) == false) {
					cm.sendOk("내가 가져오란 #b#v4001001##k#r10개#k를 다 안가져왔네!!");
				} else {
					cm.sendOk("고맙네 ! 약속대로 #b#v4001000##k#r아르웬의 유리구두#k를 주겠네!!");
			                cm.gainItem(4001001,-10);
					cm.gainItem(4001000, 1);
                                        cm.gainExp(8000000);
				}
			        cm.dispose();



			}
		}
	}
}
