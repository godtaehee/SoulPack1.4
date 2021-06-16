/*
제작: 소울씨(xoeh15) 무단배포 금지
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
     if (cm.getLevel() >= 35) {
     if (p.getFame() >= 0) {
        var str = "안녕하신가 난 #b수집광 매이션#k 이라고한다네 흠 자네 지금 밑에서 사냥을하고있나? 사냥하는김에 나좀 도와줫음하는데.. 어려운건 아니라네 밑에 몬스터를 잡으면 #r싸구려건전지#k라는게 나온다네 그걸 #r150#k 개만 준다면 보상은 후하게 주지 어때 한번해보겟나? \r\n 참고로 도적이 하는게 좋을거야\r\n";
        str += "#b#L0#흠.. 한번해볼께요#l\r\n#k";
        str += "#b#L1#전 아직 레벨이 안되네요#l\r\n#k";
        cm.sendSimple(str);
    } else {
        cm.sendOk("자넨 아직 이 몹을잡기엔 레벨이 안되는군..");
        }
    } else {
        cm.sendOk("0");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4000111, 150))) {
        var str = "#fUI/UIWindow.img/QuestIcon/4/0#\r\n#fUI/UIWindow.img/QuestIcon/5/0#\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20000\r\n오 건전지군 기달리세 곧 꺼내오겟네";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("자네!! 장난하는건가!! 150개가 아니라네");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("다음에 또 와주게");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(4000111, -150);
   cm.gainItem(1472032, 1);
   cm.gainExp(20000);
   cm.gainMeso(0);
   cm.gainMeso(-0);
   cm.dispose();
   }
  }
 }

