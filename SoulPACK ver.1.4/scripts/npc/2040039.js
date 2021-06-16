/*
아이디어 가드:고블린 퀘스트 메이커 1.7
저장날짜:2008-10-01 오후 3:47:59
NPC 코드:2040039
NPC의 소개 & 퀘스트 아이템 요약:안녕 난 연두색풍선이야 각방에 들어가서 몬스를잡으면\r\n 카드가나오는데 1장씩가져와 파장꺼도.\r\n 각각1장씩가져와서 가각 날 눌러
선택문 1:수락
선택문 2:거절
선택문 2를 선택하였을시 NPC의 말:너랑말안함 ㅅㄱ
필요 아이템 조건 불충족시 NPC의 말:재료다시구해오징?
NPC의 말 & 보상 아이템 요약:고마워 담맵이동해줄께
레벨이 부족할때 NPC가 하는 말:레벨부족해
인기도(환생수치)가 부족할때 NPC가 하는 말:루파
에러시 뜨는 말:루파 
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
     var p = cm.c.getPlayer();
     if (cm.getLevel() >= 1) {
     if (p.getFame() >= 0) {
        var str = "각 방에 들어가셔서 표를 구해오신후 각자 눌러주세요.";
        str += "#L0#확인#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("");
        }
    } else {
        cm.sendOk("");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4001022, 1))) {
        var str = "다음맵으로 보내드리겠습니다.";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("각 방에 들어가셔서 표를 구해오신후 각자 눌러주세요.");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(4001022, -1);
   cm.gainExp(300000);
   cm.gainMeso(10);
   cm.gainMeso(-0);
   cm.warp(922010600, 0);
   cm.dispose();
   }
  }
 }

