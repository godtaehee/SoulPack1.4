/*
아이디어 가드:고블린 퀘스트 메이커 1.7
저장날짜:2009-02-25 오후 7:59:18
NPC 코드:9270022
NPC의 소개 & 퀘스트 아이템 요약:안녕 난 #b캔디#k야 다름이 아니고 내 밑에있는 #r호눔스큘러#k 라는 몬스터를 잡아서 #g호눔스큘러의 흙#k 200개만 구해준다면 #v1002511#를 주지 어때 할만한가?\r\n
선택문 1:#b한번 해보죠#k
선택문 2:#b아직 안되겠군요#k
선택문 2를 선택하였을시 NPC의 말:잘 가게나~
필요 아이템 조건 불충족시 NPC의 말:자네 아직 재료가 없는거같군
NPC의 말 & 보상 아이템 요약:오 흙이구먼 유용하게 쓰겠다
레벨이 부족할때 NPC가 하는 말:넌 아직 이몹을 잡기엔 너무 일러
인기도(환생수치)가 부족할때 NPC가 하는 말:0
에러시 뜨는 말:0
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
            cm.sendOk("0");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
     var p = cm.c.getPlayer();
     if (cm.getLevel() >= 70) {
     if (p.getFame() >= 0) {
        var str = "안녕 난 #b캔디#k야 다름이 아니고 내 밑에있는 #r호눔스큘러#k 라는 몬스터를 잡아서 #g호눔스큘러의 흙#k 200개만 구해준다면 #v1002511#를 주지 어때 할만한가?\r\n";
        str += "#L0##b한번 해보죠#k#l\r\n";
        str += "#L1##b아직 안되겠군요#k#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("넌 아직 이몹을 잡기엔 너무 일러");
        }
    } else {
        cm.sendOk("0");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4000355, 200))) {
        var str = "#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n오 흙이구먼 유용하게 쓰겠다";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("자네 아직 재료가 없는거같군");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("잘 가게나~");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(4000355, -200);
   cm.gainItem(1002511, 1);
   cm.gainExp(10500);
   cm.gainMeso(0);
   cm.gainMeso(-0);
   cm.dispose();
   }
  }
 }

