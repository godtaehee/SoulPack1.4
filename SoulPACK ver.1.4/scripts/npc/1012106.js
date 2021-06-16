/*
아이디어 가드:고블린 퀘스트 메이커 1.7
저장날짜:2009-01-25 오후 8:59:50
NPC 코드:1012106
NPC의 소개 & 퀘스트 아이템 요약:안녕하세요 저는 밍밍부인이라고 해요 동물의 가죽 파이어보어의 송곳니 100개만 가져다주시면 메소와 경험치를 드릴께요
선택문 1:그래 내가 도와주지
선택문 2:이 형이 오늘은 좀 귀찮아서..
선택문 2를 선택하였을시 NPC의 말:다음엔 꼭 와주세요
필요 아이템 조건 불충족시 NPC의 말:파이어보어의 송곳니 100개가 없습니다
NPC의 말 & 보상 아이템 요약:파이어보어의 송곳니 100개네요 감사합니다 여기 화염의카타나요
레벨이 부족할때 NPC가 하는 말:레벨이 딸리네요
인기도(환생수치)가 부족할때 NPC가 하는 말:
에러시 뜨는 말:아나 오류떳어 ㅋㅋ
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
            cm.sendOk("아나 오류떳어 ㅋㅋ");
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
        var str = "안녕하세요 저는 밍밍부인이라고 해요 동물의 가죽 파이어보어의 송곳니 100개만 가져다주시면 메소와 경험치를 드릴께요";
        str += "#L0#그래 내가 도와주지#l\r\n";
        str += "#L1#이 형이 오늘은 좀 귀찮아서..#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("레벨이 딸리네요");
        }
    } else {
        cm.sendOk("");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4000024, 100))) {
        var str = "파이어보어의 송곳니 100개네요 감사합니다 여기 메소랑 경험치요";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("파이어보어의 송곳니 100개가 없습니다");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("다음엔 꼭 와주세요");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(4000024, -100);
   cm.gainExp(30000);
   cm.gainMeso(10000000);
   cm.gainMeso(10000000);
   cm.dispose();
   }
  }
 }

