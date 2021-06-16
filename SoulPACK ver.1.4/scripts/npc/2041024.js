/*
Goblin Quest Maker - Simpler ver 1.0
이주석 지우면 큰일난다. ㅇㅋ?
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
            cm.sendOk("퀘스트 로드 실패");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
         if (status == 0) {
        var str = "#r차원의 균일 조각#k이 필요하신건가요?\r\n아래 재료를 모아오시면 제가 #r차원의 균일조각 1개#k 를 당신에게 드리겠습니다\r\n";
        str += "#b필요한 아이템\r\n";
        str += "#v4000152# * 40\r\n";
        str += "#L0#좋아요#l\r\n";
        str += "#L1#거절#l\r\n";
        cm.sendSimple(str);
            }
        else if (status == 1) {
        if (selection == 0) {
        if ((cm.haveItem(4000152, 40))) {
        var str = "자 여기 받으세요 아 그나저나 #r차원의 균일조각#k 사용법은 아시겠죠...?";
        str += "#b보상\r\n";
        str += "경험치 + 10000\r\n";
        str += "#v4031179# * 1\r\n";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("재료가 부족하면 #r차원의 균일조각#k을 드릴수 없습니다.");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("다음에 또 찾아오시던가 하세요");
        cm.dispose();
      }
     }
        else if (status == 2) {
   cm.gainExp(10000);
   cm.gainMeso(0);
   cm.gainItem(4000152, -40);
   cm.gainItem(4031179, 1);
   cm.dispose();
      }
     }
    }
/*
Goblin Quest Maker - Simpler ver 1.0
설마 이거까지 지우려고??
*/

