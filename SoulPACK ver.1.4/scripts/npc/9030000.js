/*
제작자: 소울씨(xoeh15) 입니다 마뇽꼬리 표창 교환 퀘스트입니다 무단배포 금지입니다
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
            cm.sendOk("ㅇ");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
     var p = cm.c.getPlayer();
     if (cm.getLevel() >= 110) {
     if (p.getFame() >= 0) {
        var str = "자네혹시 표창도적인가? 만약 그렇다면 나와 거래를 하지않겟나 거래 방법은 간단하다네 리프레에 가서 마뇽을 잡아와 #v4000235#만 얻어온다면 내가 #v2070006# #b10000개#k를 주지 어때 한번 해보겟나?\r\n참고로 10000개는 통단위가 아니라네 갯수단위로 10000개라는뜻이지\r\n";
        str += "#b#L0#네 한번해보죠#l\r\n#k";
        str += "#b#L1#아직 마뇽을잡기엔 레벨이 낮군요..#l\r\n#k";
        cm.sendSimple(str);
    } else {
        cm.sendOk("자넨 아직 레벨이 낮다네");
        }
    } else {
        cm.sendOk("ㅇ");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4000235, 1))) {
        var str = "#fUI/UIWindow.img/QuestIcon/4/0#\r\n#fUI/UIWindow.img/QuestIcon/8/0#100000\r\n#fUI/UIWindow.img/QuestIcon/3/0##v2070006#\r\n마뇽의꼬리구먼 잠시만 기다리게";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("마뇽의꼬리가 없구먼 구해오게나");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("꼭 다시 찾아오게나");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(4000235, -1);
   cm.gainItem(2070006, 10000);
   cm.gainExp(100000);
   cm.gainMeso(0);
   cm.gainMeso(-0);
   cm.dispose();
   }
  }
 }

