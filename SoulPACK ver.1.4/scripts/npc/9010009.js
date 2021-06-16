/*
아이디어 가드:고블린 퀘스트 메이커 1.7
저장날짜:2009-01-26 오전 10:17:29
NPC 코드:9010009
NPC의 소개 & 퀘스트 아이템 요약:안녕 난 듀이 #b듀이#k야 다름이 아니고 택배 배달을 해야하는데 트렁크 문이 굳어버렸지 뭐니 그래서 니가 나에게 #r물컹물컹한액체 50개#k만 주면 내가 경험치와 메소를 줄께 어때 한번 해보겠어?
선택문 1:그래, 내가 도와줄게
선택문 2:싫어, 아직 달팽이도 못 죽인단말야!!
선택문 2를 선택하였을시 NPC의 말:나중에 생각있으면 다시 와줘
필요 아이템 조건 불충족시 NPC의 말:액체가 부족해 이정도로는 어림도 없어
NPC의 말 & 보상 아이템 요약:와 물컹물컹한 액체네 그럼 보상을 해줘야겠지? 잠시만 기달려~
레벨이 부족할때 NPC가 하는 말:넌 아직 나의 부탁을 들어주긴 레벨이 낮은거 같아
인기도(환생수치)가 부족할때 NPC가 하는 말:
에러시 뜨는 말:오류가 났네..
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
            cm.sendOk("오류가 났네..");
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
        var str = "안녕 난 듀이 #b듀이#k야 다름이 아니고 택배 배달을 해야하는데 트렁크 문이 굳어버렸지 뭐니 그래서 니가 나에게 #r물컹물컹한액체 50개#k만 주면 내가 경험치와 메소를 줄께 어때 한번 해보겠어?";
        str += "#L0#그래, 내가 도와줄게#l\r\n";
        str += "#L1#싫어, 아직 달팽이도 못 죽인단말야!!#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("넌 아직 나의 부탁을 들어주긴 레벨이 낮은거 같아");
        }
    } else {
        cm.sendOk("");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4000004, 50))) {
        var str = "와 물컹물컹한 액체네 그럼 보상을 해줘야겠지? 잠시만 기달려~";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("액체가 부족해 이정도로는 어림도 없어");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("나중에 생각있으면 다시 와줘");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(4000004, -50);
   cm.gainExp(4500);
   cm.gainMeso(1500000);
   cm.gainMeso(-0);
   cm.dispose();
   }
  }
 }

