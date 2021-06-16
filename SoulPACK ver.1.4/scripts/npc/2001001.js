/*
Goblin Project 1.2
필요한 재료
4000048
필요한 갯수
30
보상 아이템
2049001
보상 갯수
1
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
            cm.sendOk("...링콜.. SMLS문의");
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
     if (p.getFame() >= ) {
        var str = "추운 겨울날 ... 나를 만들어줘서 고마워..\r\n  다름이아니라, 몇일전 엄청나게 큰 괴물에게 당했거든..\r\n 그놈의 털30뭉치를 나에게  가져와!!! #b(그놈의 이름이;; 예...)#k";
        str += "#b필요한 아이템\r\n";
        str += "#v4000048# * 30\r\n";
        str += "#b필요한 메소:100\r\n";
        str += "#L0#반드시잡아오겠습니다.#l\r\n";
        str += "#L1#제가죽을수도있습니다.#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("너 같이 초보자는 나의 소망을 못들어줘!");
        }
    } else {
        cm.sendOk("");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 100) {
        if ((cm.haveItem(4000048, 30))) {
        var str = "음..이털이 확실한거겠지? 믿고 내가가지고, \r\n 2049001 선물로줄게!";
        str += "#b보상\r\n";
        var str = "경험치 + 100\r\n";
        str += "#b메소:100\r\n";
        str += "#v2049001# * 1\r\n";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("#e짜쯩나게하지마.#n");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("#rㅉㅉ #k 너녀석은 글러먹었어..");
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(4000048, -30);
   cm.gainItem(2049001, 1);
   cm.gainExp(100);
   cm.gainMeso(100);
   cm.gainMeso(-100);
   cm.dispose();
   }
  }
 }

