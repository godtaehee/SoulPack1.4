/*
아이디어 가드:고블린 퀘스트 메이커 1.7
저장날짜:2008-10-01 오후 7:58:28
NPC 코드:2040044
NPC의 소개 & 퀘스트 아이템 요약:안녕 난 보라색 풍선 저앞에있는 보스를 잡고와 \r\n 잡고오면 템이뜰텐데. 그걸 들고와\r\n 각자라는사실..파티끼리6마리잡아서 각자열쇠1개씩 가지고 날클릭하면되 \r\n 그럼 이만..
선택문 1:수락
선택문 2:거절
선택문 2를 선택하였을시 NPC의 말:루파퀘스트
필요 아이템 조건 불충족시 NPC의 말:보스잡으라고 
NPC의 말 & 보상 아이템 요약:고마워 보상은 펫을 줄꺼야 ㅎㅎ
레벨이 부족할때 NPC가 하는 말:레벨 부족해.. 35이상
인기도(환생수치)가 부족할때 NPC가 하는 말:루파퀘스트-찐빵세트
에러시 뜨는 말:루파퀘스트-찐빵세트
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
        var str = "파티원 & 개인 으로 보스몹을 잡아서 각자 열쇠를 가지고 오시면 됩니다.";
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
        if ((cm.haveItem(4001016, 1))) {
        var str = "수고하셧습니다. 펫을 선물로 드리도록 하겠습니다.";
        str += "보상 선택:#L1# 호랑이 펫";
        str += "보상 선택:#L2# 팽귄 펫";
        str += "보상 선택:#L3# 스컹크 펫";
        str += "보상 선택:#L4# 브라운 하트 화살(궁수)";
        str += "보상 선택:#L5# 파란색 하트 화살(궁수)";
        cm.sendSimple(str);
        }
        else {
        cm.sendOk("파티원 & 개인 으로 보스몹을 잡아서 각자 열쇠를 가지고 오시면 됩니다.");
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
   cm.gainItem(4001016, -1);
   cm.gainItem(5000025, 1);
   cm.gainExp(999999999);
   cm.gainMeso(0);
   cm.gainMeso(-0);
   cm.warp(221024500, 0);
   if (selection == 1) {
   cm.gainItem(5000044, 1);
   }
   if (selection == 2) {
   cm.gainItem(5000023, 1);
   }
   if (selection == 3) {
   cm.gainItem(5000045, 1);
   }
   if (selection == 4) {
   cm.gainItem(2060004, 999);
   }
   if (selection == 5) {
   cm.gainItem(2061004, 999);
   }
   cm.dispose();
   }
  }
 }

