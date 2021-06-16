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
            cm.sendOk("오류-_-");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
         if (status == 0) {
        var str = "너...혹시 #r만병통치약#k 이라고 아니?\r\n먹으면 모든 병이 싸~악 고쳐진다는 아주 희기한 약말이야...\r\n나에게 #r만병통치약#k이 너무 많이 있어서 그런데..네가 필요한것들을 가지고 오면 내가 #r만병통치약#k을 주지.. 어때? 필요한것들은 아래 재료들이야\r\n";
        str += "#b필요한 아이템\r\n";
        str += "#v2012003# * 4\r\n";
        str += "#v2012002# * 4\r\n";
        str += "#v2022003# * 10\r\n";
        str += "#L0#좋아!재료들을 가지고올께!#l\r\n";
        str += "#L1#어쩌라고?너나 많이 마셔라#l\r\n";
        cm.sendSimple(str);
            }
        else if (status == 1) {
        if (selection == 0) {
        if ((cm.haveItem(2012003, 4)) && (cm.haveItem(2012002, 4)) && (cm.haveItem(2022003, 10))) {
        var str = "재료들을 모두 모아왔구나!!\r\n좋아! 여기 #r만병통치약#k 5개야 !!\r\n";
        str += "#b보상\r\n";
        str += "경험치 + 5000\r\n";
        str += "#v2022178# * 5\r\n";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("#r만병통치약#k이 필요하다면 어서 재료들을 모아와!! ");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("너 마음대로 해라...나중에 생각이 바뀌면 다시 찾아오던가.. 알겠지?");
        cm.dispose();
      }
     }
        else if (status == 2) {
   cm.gainExp(5000);
   cm.gainMeso(0);
   cm.gainItem(2012003, -4);
   cm.gainItem(2012002, -4);
   cm.gainItem(2022003, -10);
   cm.gainItem(2022178, 30);
   cm.dispose();
      }
     }
    }
/*
Goblin Quest Maker - Simpler ver 1.0
설마 이거까지 지우려고??
*/

