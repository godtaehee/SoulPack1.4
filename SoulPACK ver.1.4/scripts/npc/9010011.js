/*
아이디어 가드:고블린 퀘스트 메이커 1.7
저장날짜:2008-11-06 오후 6:48:45
NPC 코드:9010011
NPC의 소개 & 퀘스트 아이템 요약:여행자님 안녕하세요?\r\n혹시 #r멀티펫 스킬#k을 배워보고 싶지 않신가요?\r\n멀티펫 스킬이란 펫을 #r3마리 까지 장착#k이 가능하게 해주는 스킬이죠\r\n아래의 재료들을 모아오면 제가 #r멀티펫 스킬#k을 가르쳐 드리죠
선택문 1:수락
선택문 2:거절
선택문 2를 선택하였을시 NPC의 말:그래 다음에 오세요
필요 아이템 조건 불충족시 NPC의 말:재료들이 부족합니다. \r\n재료를 모두 모아오세요 !
NPC의 말 & 보상 아이템 요약:#r초보자 스킬창#k을 열어보세요 ^^\r\n멀티펫 스킬이 배워져있을겁니다.
레벨이 부족할때 NPC가 하는 말:레밸이 부족합니다!
인기도(환생수치)가 부족할때 NPC가 하는 말:인기도가 부족합니다
에러시 뜨는 말:오류
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
            cm.sendOk("오류");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
     var p = cm.c.getPlayer();
     if (cm.getLevel() >= 10) {
     if (p.getFame() >= 0) {
        var str = "여행자님 안녕하세요?\r\n혹시 #r멀티펫 스킬#k을 배워보고 싶지 않신가요?\r\n멀티펫 스킬이란 펫을 #r3마리 까지 장착#k이 가능하게 해주는 스킬이죠\r\n아래의 재료들을 모아오면 제가 #r멀티펫 스킬#k을 가르쳐 드리죠\r\n#b필요한 재료#k\r\n#v5000006# 허스키펫 1개\r\n#v4000120# 촉수 50개\r\n#v4031014# 장어구이 10개\r\n\r\n";
        str += "#L0#수락#l\r\n";
        str += "#L1#거절#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("레밸이 부족합니다!");
        }
    } else {
        cm.sendOk("레밸 10이상이 되어야합니다.");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(5000006, 1)) && (cm.haveItem(4000120, 50)) && (cm.haveItem(4031014, 10))) {
        var str = "#r초보자 스킬창#k을 열어보세요 ^^\r\n멀티펫 스킬이 배워져있을겁니다.";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("재료들이 부족합니다. \r\n재료를 모두 모아오세요 !");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("그래 다음에 오세요");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(5000006, -1);
   cm.gainItem(4000120, -50);
   cm.gainItem(4031014, -10);

   cm.gainExp(0);
   cm.gainMeso(0);
   cm.gainMeso(-0);
   cm.teachSkill(8,1,1);
   cm.dispose();
   }
  }
 }

