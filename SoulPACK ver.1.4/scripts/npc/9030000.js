/*
������: �ҿﾾ(xoeh15) �Դϴ� �������� ǥâ ��ȯ ����Ʈ�Դϴ� ���ܹ��� �����Դϴ�
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
            cm.sendOk("��");
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
        var str = "�ڳ�Ȥ�� ǥâ�����ΰ�? ���� �׷��ٸ� ���� �ŷ��� �����ʰٳ� �ŷ� ����� �����ϴٳ� �������� ���� ������ ��ƿ� #v4000235#�� ���´ٸ� ���� #v2070006# #b10000��#k�� ���� � �ѹ� �غ��ٳ�?\r\n����� 10000���� ������� �ƴ϶�� ���������� 10000����¶�����\r\n";
        str += "#b#L0#�� �ѹ��غ���#l\r\n#k";
        str += "#b#L1#���� ��������⿣ ������ ������..#l\r\n#k";
        cm.sendSimple(str);
    } else {
        cm.sendOk("�ڳ� ���� ������ ���ٳ�");
        }
    } else {
        cm.sendOk("��");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4000235, 1))) {
        var str = "#fUI/UIWindow.img/QuestIcon/4/0#\r\n#fUI/UIWindow.img/QuestIcon/8/0#100000\r\n#fUI/UIWindow.img/QuestIcon/3/0##v2070006#\r\n�����ǲ������� ��ø� ��ٸ���";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("�����ǲ����� ������ ���ؿ��Գ�");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("�� �ٽ� ã�ƿ��Գ�");
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

