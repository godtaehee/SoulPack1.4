/*
하자전용 혼테일 목걸이를 주문서로 바꿔주는 퀘스트 입니다
제작자: 소울씨(xoeh15) 무단배포 불가능입니다
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
            cm.sendOk("ㅇㅇ");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
     var p = cm.c.getPlayer();
     if (cm.getLevel() >= 120) {
     if (p.getFame() >= 0) {
        var str = "안녕 나는 #b요코요코#k 라고 한다 다름이 아니고 #r혼테일의 목걸이#k를 여친한테 선물해주려하는데 가진건 주문서밖에 없어서말이야 그래서말인데 #r혼테일목걸이 1개#k를 가져다주면 #g혼돈의주문서 100개#k랑 #g백의주문서 20퍼짜리 5개를#k줄께 어때 할만하니?";
        str += "#b#L0#흠.. 잡긴어렵겟지만 우선 해볼께#l\r\n#k";
        str += "#b#L1#꺼져 병신아 혼테일? 장난하냐?#l\r\n#k";
        cm.sendSimple(str);
    } else {
        cm.sendOk("넌 달팽이도 못잡겟는걸?");
        }
    } else {
        cm.sendOk("ㅇㅇ");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(1122000, 1))) {
        var str = "잘했어 잠시만 기다려";
        str += "#b보상\r\n";
        str += "경험치 + 300000\r\n";
        str += "#b메소:0\r\n";
        str += "#v2049100# * 100\r\n";
        str += "#v2049003# * 5\r\n";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("시발놈아 제대로 구해와라");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("잘가 병신아 ㅇㅇ");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(1122000, -1);
   cm.gainItem(2049100, 100);
   cm.gainItem(2049003, 5);
   cm.gainExp(300000);
   cm.gainMeso(0);
   cm.gainMeso(-0);
   cm.dispose();
   }
  }
 }

