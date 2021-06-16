/*
아이디어 가드:고블린 퀘스트 메이커 1.7
저장날짜:2008-09-29 오후 9:20:53
NPC 코드:2040034
NPC의 소개 & 퀘스트 아이템 요약:안녕~~ 난 루파를 진행해주지 자 나한테 (파장이 누르는거 아냐) \r\n각자 파란달팽이껍질가져와
선택문 1:수락
선택문 2:거절
선택문 2를 선택하였을시 NPC의 말:너랑말안해 재접하면 생각해볼께...
필요 아이템 조건 불충족시 NPC의 말:재료없어
NPC의 말 & 보상 아이템 요약:다구해왔네 보상은 너구리 지우개주지 ㅎ
레벨이 부족할때 NPC가 하는 말:레벨 부족하네 ㅋ 35이상
인기도(환생수치)가 부족할때 NPC가 하는 말:인기도부족
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
        var str = "이 루디파퀘는 혼자서도 가능해 NPC 클릭은 개인끼리 해야되고 루디파퀘를 하고 싶다면 파란달팽이 껍질을 1개 가져다주시면 됩니다. 그리고 절대로 NPC 클릭한후 취소하지마세요 그럴경우 재접해서 다시 처음부터 해야됩니다.";
        str += "#L0#입장#l\r\n";
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
        if ((cm.haveItem(4000000, 1))) {
        var str = "너구리 지우개를 드리겠습니다.";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("");
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
   cm.gainItem(4000000, -1);
   cm.gainItem(4001021, 1);
   cm.gainExp(10);
   cm.gainMeso(10);
   cm.gainMeso(-0);
   cm.warp(922010100, 0);
   cm.dispose();
   }
  }
 }

