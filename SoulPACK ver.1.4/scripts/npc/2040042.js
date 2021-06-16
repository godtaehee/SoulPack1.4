/*
아이디어 가드:고블린 퀘스트 메이커 1.7
저장날짜:2008-10-01 오후 4:18:44
NPC 코드:2040042
NPC의 소개 & 퀘스트 아이템 요약:안녕 하늘색풍선이야 몬스터를 잡아서 쿠폰1장씩 각각 가져다줘
선택문 1:수락
선택문 2:거절
선택문 2를 선택하였을시 NPC의 말:파퀘망쳐
필요 아이템 조건 불충족시 NPC의 말:재료다시구해와 쿠폰1장
NPC의 말 & 보상 아이템 요약:고마븜 보스방으로 이동시켜주지
레벨이 부족할때 NPC가 하는 말:35이상
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
            cm.sendOk("루파");
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
        var str = "각자 표를 한개씩 구해다 주세요.";
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
        cm.sendOk("각자 표를 한개씩 구해다주세요.");
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
   cm.gainItem(5654654, 1);
   cm.gainExp(400000);
   cm.gainMeso(40);
   cm.gainMeso(-0);
   cm.warp(922010900, 0);
   cm.dispose();
   }
  }
 }

