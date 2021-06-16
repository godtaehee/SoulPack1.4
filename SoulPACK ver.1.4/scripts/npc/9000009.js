/*
만든이:민 하율
본 파일을 무단배포를 허가하지않습니다.
그리고, 만든이의 이름은 수정하지마세요.
*/
importPackage(net.sf.odinms.client);
var status = 0;



function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("하하하하!난 해적왕 바이킹! 아무도 날 막지못해! 하하하하하하하하하!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("어이 ~ 형씨~ ! 내가 말이야, 이 바다를 지배한 #r바이킹#k님이시라구 ! 하하하.. 내가 한달전에... 아! 잡담은 그만두기로하지. #b내가 지금 무척 필요한것들이 있는데, 그걸좀 구해다줄수있겠나 ? #r당연히 공짜로 구해달라는건 아니야!#b 내가 모험을 하다 발견한 #r전설의 사과,치즈#b를 주도록하지!\r\n내가 필요한것들은 목록에 적어뒀다네.하하하!\r\n#r팁#b도적어뒀으니 오래걸리진 않겠지?#k\r\n\r\n#b[목록]#k\r\n\r\n#b#v2022176##k #d파워엘릭서#k 100개\r\n#b#v4001006##k #d불꽃깃털#k 30개\r\n#b#v4003002##k #d얼음조각#k 10개\r\n#b#v4001000##k #d아르웬의 유리구두#k 1개\r\n\r\n#b[팁]#k\r\n#b#v4001006##k#d불꽃깃털#k은 #r붉은켄타우로스#k가가지고있다는말을 들었지!\r\n#b#v4003002##k#d얼음조각#k은 #b오르비스공원#k에 있는 #dneveNPC#k가 가지고있지!\r\n#b#v4001000##k#d아르웬의 유리구두#k는 #b엘나스시장#k에 있는 #r고든할배#k가 가지고 있을꺼야!#r고든할배#k한테 가봐~ !");
			}
		else if (status == 1) {
			if ((cm.haveItem(2022176, 100)) && (cm.haveItem(4001006, 30)) && (cm.haveItem(4003002, 10)) && (cm.haveItem (4001000, 1))) {
			cm.sendYesNo("호오! 대단하군, 대단해!! 덕분에 도움이 많이 되곘어!!\r\n약속대로 #b#v2022179##k와#b#v2022273##k를 #r20개#k씩 주겠네!하하하하!");
   }
   else if (!cm.haveItem(2022176, 100)) {
   cm.sendOk("내가 가져오란#b#v2022176##k이 부족해 !");
   cm.dispose();
   }
   else if (!cm.haveItem(4001006, 30)) {
   cm.sendOk("내가 가져오란#b#v4001006##k이 부족해 !");
   cm.dispose();
   }
   else if (!cm.haveItem(4003002, 10)) {
   cm.sendOk("내가 가져오란#b#v4003002##k이 부족해 !");
   cm.dispose();
   }
   else if (!cm.haveItem(4001000, 1)) {
   cm.sendOk("내가 가져오란#b#v4001000##k이 부족해 !");
   cm.dispose();
   }
   		}
		else if (status == 2) {
   cm.gainItem(2022176, -100);
   cm.gainItem(4001006, -30);
   cm.gainItem(4003002, -10);
   cm.gainItem(4001000, -1);
   cm.gainItem(2022179, 20);
   cm.gainItem(2022273, 20);
   cm.gainExp(10000000);
			cm.dispose();
}
}
}