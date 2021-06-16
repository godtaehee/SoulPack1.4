/*
아이디어 가드:고블린 퀘스트 메이커 1.7
저장날짜:2008-11-08 오후 7:29:31
NPC 코드:9010013
NPC의 소개 & 퀘스트 아이템 요약:어이, 자네 혹시 #r라이딩 스킬#k 이라고 아나?\r\n라이딩 스킬을 가진다면 안장,돼지만 있다면 라이딩을 즐길수 있지~~어떄 아래 재료들만 모아오면 내가바로 #r라이딩 스킬#k을 배우게 해주지!
선택문 1:승락
선택문 2:거절
선택문 2를 선택하였을시 NPC의 말:꺼저
필요 아이템 조건 불충족시 NPC의 말:어서 재료를 모아와야지 !! 안그래?
NPC의 말 & 보상 아이템 요약:그래 왔구나, 어서 초보자 스킬창을 열어보렴!\r\n안장,돼지는 아쿠아리움 무기상점에서 판매한단다!
레벨이 부족할때 NPC가 하는 말:#r라이딩 스킬 습득 퀘스트#K는 30레밸 이상부터 가능하단말야!
인기도(환생수치)가 부족할때 NPC가 하는 말:#r라이딩 스킬 습득 퀘스트#K는 30레밸 이상부터 가능하단말야!
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
     if (cm.getLevel() >= 30) {
     if (p.getFame() >= 0) {
        var str = "어이, 자네 혹시 #r라이딩 스킬#k 이라고 아나?\r\n라이딩 스킬을 가진다면 안장,돼지만 있다면 라이딩을 즐길수 있지~~어떄 아래 재료들만 모아오면 내가바로 #r라이딩 스킬#k을 배우게 해주지!\r\n\r\n#b필요한 재료#k \r\n#v4000179# * 30개\r\n#v4000076# * 10개\r\n#v4000329# * 30개\r\n#v4001126# * 20개\r\n";
        str += "#L0#승락#l\r\n";
        str += "#L1#거절#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("#r라이딩 스킬 습득 퀘스트#K는 30레밸 이상부터 가능하단말야!");
        }
    } else {
        cm.sendOk("#r라이딩 스킬 습득 퀘스트#K는 30레밸 이상부터 가능하단말야!");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4000179, 30)) && (cm.haveItem(4000076, 10)) && (cm.haveItem(4000329, 30)) && (cm.haveItem(4001126, 20))) {
        var str = "그래 왔구나, 어서 초보자 스킬창을 열어보렴!\r\n안장,돼지는 아쿠아리움 무기상점에서 판매한단다!";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("어서 재료를 모아와야지 !! 안그래?");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("꺼저");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(4000179, -30);
   cm.gainItem(4000076, -10);
   cm.gainItem(4000329, -30);
   cm.gainItem(4001126, -20);
   cm.teachSkill(1004,1,1);
   cm.dispose();
   }
  }
 }

