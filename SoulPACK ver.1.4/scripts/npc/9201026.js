/*
	제작 : 단풍(gwangyun1)
	수정 : 소희 (jantnic)
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
			cm.sendOk("");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendSimple("안녕하세요. 제가 뉴 리프시티에 방문하기전에 엘리니아에 들렸었는데 루팡녀석들이 제 바나나를 모두 훔쳐가버렸어요... 파티때 쓰려고가져온 바나나인데... 다뺏겨버렸네요... 루팡녀석들을 잡아서 바나나200개만 구해다 주실수있나요? 부탁드립니다 여행자님...\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##b잃어버린 바나나");
			}
		else if (status == 1) {
			if ((cm.haveItem(4000029, 200))) {
			cm.sendOk("와 정말 구해다주셧군요! 고맙습니다. 덕분에 파티에 늦지않고 바나나를 배달할수 있겠네요... 정말 고맙습니다. 여행자님! 드릴건 제가가지고있는 이 가운뿐인데... 이거라도 가져가세요! 그럼 수고해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#\r\n2000 exp\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1050018#, #i1050017# 남자가운, 여자가운");
                        
   }
   else if (!cm.haveItem(4000029, 200)) {
   cm.sendOk("루팡녀석들을 무찌르고 바나나 200개를 가져다주세요.");
   cm.dispose();
   }
		}
		else if (status == 2) {
   
   cm.gainItem(4000029, -200);
   cm.gainItem(1050018, 1);
   cm.gainItem(1051017, 1);
   cm.gainExp(2000);
			cm.dispose();
}
}
}