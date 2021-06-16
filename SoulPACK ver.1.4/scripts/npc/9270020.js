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
        var str = "여행자님 안녕하세요?\r\n한번 #r싱가폴#k로 여행을 떠나보지 않으실레요?\r\n제가 싱가폴로 이동을 시켜드리죠. 단 아래의 재료들을 모아오셔야합니다.\r\n";
        str += "#b필요한 아이템\r\n";
        str += "#v2060000# * 20\r\n";
        str += "#v2061000# * 20\r\n";
        str += "#v2030004# * 2\r\n";
        str += "#L0#지금바로 싱가폴로 가보겠습니다!#l\r\n";
        str += "#L1#죄송합니다. 나중에 한번 가볼께요#l\r\n";
        cm.sendSimple(str);
            }
        else if (status == 1) {
        if (selection == 0) {
        if ((cm.haveItem(2060000, 20)) && (cm.haveItem(2061000, 20)) && (cm.haveItem(2030004, 2))) {
        var str = "그럼 싱가폴로 데려다드리죠";
        str += "#b보상\r\n";
        str += "경험치 + 0\r\n";
        str += "#v2030004# * 4\r\n";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("재료를 모두 가져오셔야 싱가폴로 이동을 시켜드립니다.");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("네..하긴 이곳 헤네시스도 볼거리도 많은 아주 평화로운 마을이죠... 그럼 다음에 다시 오세요~");
        cm.dispose();
      }
     }
        else if (status == 2) {
   cm.gainExp(0);
   cm.gainMeso(0);
   cm.gainItem(2060000, -20);
   cm.gainItem(2061000, -20);
   cm.gainItem(2030004, -2);
   cm.gainItem(2030004, 4);
   cm.dispose();
      }
     }
    }
/*
Goblin Quest Maker - Simpler ver 1.0
설마 이거까지 지우려고??
*/

