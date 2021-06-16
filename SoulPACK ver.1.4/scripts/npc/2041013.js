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
            cm.sendOk("오류");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
         if (status == 0) {
        var str = "여행자여, 안녕? 너 혹시 #r파란색 가운#k 옷을 가지고 싶지 않으니?\r\n아래 재료들만 모아오면 내가 #r파란색 가운#k을 너에게 줄수있는데.. 어쩌겠니?";
        str += "#b필요한 아이템\r\n";
        str += "#v4000007# * 20\r\n";
        str += "#v4000034# * 10\r\n";
        str += "#v4000166# * 10\r\n";
        str += "#v4000042# * 20\r\n";
        str += "#v4000012# * 5\r\n";
        str += "#L0#수락#l\r\n";
        str += "#L1#거절#l\r\n";
        cm.sendSimple(str);
            }
        else if (status == 1) {
        if (selection == 0) {
        if ((cm.haveItem(4000007, 20)) && (cm.haveItem(4000034, 10)) && (cm.haveItem(4000166, 10)) && (cm.haveItem(4000042, 20)) && (cm.haveItem(4000012, 5))) {
        var str = "자 여기 파란색 가운이야";
        str += "#b보상\r\n";
        str += "경험치 + 100\r\n";
        str += "#v1050018# * 1\r\n";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("어서 재료들을 모아와야되 알겠지?");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("꺼저라");
        cm.dispose();
      }
     }
        else if (status == 2) {
   cm.gainExp(100);
   cm.gainMeso(0);
   cm.gainItem(4000007, -20);
   cm.gainItem(4000034, -10);
   cm.gainItem(4000166, -10);
   cm.gainItem(4000042, -20);
   cm.gainItem(4000012, -5);
   cm.gainItem(1050018, 1);
   cm.dispose();
      }
     }
    }
/*
Goblin Quest Maker - Simpler ver 1.0
설마 이거까지 지우려고??
*/

