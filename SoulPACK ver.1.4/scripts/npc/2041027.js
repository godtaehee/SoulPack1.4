/*
����: �ҿﾾ(xoeh15) ���ܹ��� ����
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
        var str = "�ȳ��ϽŰ� �� #b������ ���̼�#k �̶���Ѵٳ� �� �ڳ� ���� �ؿ��� ������ϰ��ֳ�? ����ϴ±迡 ���� ���͢Z���ϴµ�.. ������ �ƴ϶�� �ؿ� ���͸� ������ #r�α���������#k��°� ���´ٳ� �װ� #r150#k ���� �شٸ� ������ ���ϰ� ���� � �ѹ��غ��ٳ�? \r\n ����� ������ �ϴ°� �����ž�\r\n";
        str += "#b#L0#��.. �ѹ��غ�����#l\r\n#k";
        str += "#b#L1#�� ���� ������ �ȵǳ׿�#l\r\n#k";
        cm.sendSimple(str);
    } else {
        cm.sendOk("�ڳ� ���� �� ������⿣ ������ �ȵǴ±�..");
        }
    } else {
        cm.sendOk("0");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4000111, 150))) {
        var str = "#fUI/UIWindow.img/QuestIcon/4/0#\r\n#fUI/UIWindow.img/QuestIcon/5/0#\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20000\r\n�� �������� ��޸��� �� �������ٳ�";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("�ڳ�!! �峭�ϴ°ǰ�!! 150���� �ƴ϶��");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("������ �� ���ְ�");
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

