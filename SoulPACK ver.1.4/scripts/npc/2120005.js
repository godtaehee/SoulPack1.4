/*
제작 : 단풍(gwangyun1)
*/
/**
심심해서 만들어 봤습니다. 장갑공격력주문서 60%주는 퀘스트고요. 반복가능인 만큼 어렵게 했습니다.
**/

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
				cm.sendSimple("안녕? 나는 이 #rCinemaSever#k에서 힘들게 아이템을 얻는 유저를 보면 너무 안됬다고 생각해... 그래서 나의 부탁을 들어주면 #r장갑공격력주문서60%#k를 줄께... 부탁은 조금 어렵단다... 어때 해보겠니?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##b 장갑공격력 주문서를 얻고싶다!(반복가능)");
			}
		if (status == 1) {
				cm.sendOk("도전할꺼니? 그러면 #b슬라임의 방울 100개#k와 #b물컹물컹한 액체 300개#k 그리고 #b나뭇가지 300개#k와 #k초록버섯의 갓 200개#k 또 #b스톤골렘의 돌조각 200개#k만 가져다 줄 수 있니? ");
			}
		else if (status == 2) {
			if (cm.haveItem(4000010, 100) && cm.haveItem(4000004, 300)&& cm.haveItem(4000003, 300) && cm.haveItem(4000012, 200) && cm.haveItem(4000022, 200)) {
			cm.sendOk("해냈구나! 이 퀘스트는 #r반복#k이 가능하니 잠시후에 다시 와줘...\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i2040804# 장갑 공격력 주문서 60% 1개");
                        
   }
   else if (!cm.haveItem(4000010, 100) && cm.haveItem(4000004, 300) && cm.haveItem(4000003, 300) && cm.haveItem(4000012, 200) && cm.haveItem(4000022, 200)) {
   cm.sendOk("역시 너는 도전력이 부족한 아이구나...");
   cm.dispose();
   }
		}
		else if (status == 3) {
   
   cm.gainItem(4000010, -100);
   cm.gainItem(4000004, -300);
   cm.gainItem(4000003, -300);
   cm.gainItem(4000012, -200);
   cm.gainItem(4000022, -200);
   cm.gainItem(2040804, 1);
			cm.dispose();
}
}
}