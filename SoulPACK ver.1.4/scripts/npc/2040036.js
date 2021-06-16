/*
아이디어 가드:고블린 퀘스트 메이커 1.7
저장날짜:2008-09-29 오후 9:04:45
NPC 코드:2040036
NPC의 소개 & 퀘스트 아이템 요약:안녕난 빨간풍선이야 #b#t4001022#이걸 각자 4장씩 구해와 무조건 수락눌러 \r\n 만약 거절누를시 말안할거야 그러면 파퀘가 망치는거지 ㅎ
선택문 1:수락
선택문 2:거절 안하는게 좋아
선택문 2를 선택하였을시 NPC의 말:파퀘 망쳣어 ㅂㅂ
필요 아이템 조건 불충족시 NPC의 말:재료없어  #b#t4001022#이거 각자 4장 구해오라고 
NPC의 말 & 보상 아이템 요약:오호.. 재료를 구해왔구나  그럼 다음맵으로 보내주지\r\n 아! 다음맵은 위로 올라가야지 파퀘장소로 간다는사실
레벨이 부족할때 NPC가 하는 말:레벨부족 
인기도(환생수치)가 부족할때 NPC가 하는 말:인기도부족..
에러시 뜨는 말:루파퀘스트
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
        var str = "각자 4장씩 구해오세요.";
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
        if ((cm.haveItem(4001022, 4))) {
        var str = "다음맵으로 보내드리겠습니다.";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("각자 4장씩 구해오세요.");
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
   cm.gainItem(4001022, -4);
   cm.gainItem(4006001, 50);
   cm.gainExp(10000);
   cm.gainMeso(10);
   cm.gainMeso(-0);
   cm.warp(922010201, 0);
   cm.dispose();
   }
  }
 }

