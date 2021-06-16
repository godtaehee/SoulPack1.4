/*
아이디어 가드:고블린 퀘스트 메이커 1.7
저장날짜:2009-02-11 오전 12:36:18
NPC 코드:9270031
NPC의 소개 & 퀘스트 아이템 요약:돈을벌고싶지?
선택문 1:어!!!
선택문 2:별루.....
선택문 2를 선택하였을시 NPC의 말:나도너한테돈주기싫어
필요 아이템 조건 불충족시 NPC의 말:그럼그렇지
NPC의 말 & 보상 아이템 요약:너한테주기아까운데
레벨이 부족할때 NPC가 하는 말:니레벨이면달팽이껍질도못잡아30만들고와
인기도(환생수치)가 부족할때 NPC가 하는 말:
에러시 뜨는 말:오류래
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
            cm.sendOk("오류래");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
     var p = cm.c.getPlayer();
     if (cm.getLevel() >= 0) {
     if (p.getFame() >= 0) {
        var str = "돈을벌고싶지?";
        str += "#L0#어!!!#l\r\n";
        str += "#L1#별루.....#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("나중에 또와라");
        }
    } else {
        cm.sendOk("");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4000000, 70))) {
        var str = "너한테 주기아까운데";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("그럼그렇지ㅋ");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("나도너한테돈주기싫어");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(4000000, -70);
   cm.gainItem(2000012, 5);
   cm.gainExp(0);
   cm.gainMeso(80000000);
   cm.gainMeso(-0);
   cm.dispose();
   }
  }
 }

