/*
�������� ȥ���� ����̸� �ֹ����� �ٲ��ִ� ����Ʈ �Դϴ�
������: �ҿﾾ(xoeh15) ���ܹ��� �Ұ����Դϴ�
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
            cm.sendOk("����");
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
        var str = "�ȳ� ���� #b���ڿ���#k ��� �Ѵ� �ٸ��� �ƴϰ� #rȥ������ �����#k�� ��ģ���� �������ַ��ϴµ� ������ �ֹ����ۿ� ������̾� �׷������ε� #rȥ���ϸ���� 1��#k�� �������ָ� #gȥ�����ֹ��� 100��#k�� #g�����ֹ��� 20��¥�� 5����#k�ٲ� � �Ҹ��ϴ�?";
        str += "#b#L0#��.. ����ư����� �켱 �غ���#l\r\n#k";
        str += "#b#L1#���� ���ž� ȥ����? �峭�ϳ�?#l\r\n#k";
        cm.sendSimple(str);
    } else {
        cm.sendOk("�� �����̵� ����ٴ°�?");
        }
    } else {
        cm.sendOk("����");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(1122000, 1))) {
        var str = "���߾� ��ø� ��ٷ�";
        str += "#b����\r\n";
        str += "����ġ + 300000\r\n";
        str += "#b�޼�:0\r\n";
        str += "#v2049100# * 100\r\n";
        str += "#v2049003# * 5\r\n";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("�ù߳�� ����� ���ؿͶ�");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("�߰� ���ž� ����");
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

