/*
Goblin Project 1.2
�ʿ��� ���
4000048
�ʿ��� ����
30
���� ������
2049001
���� ����
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
            cm.sendOk("...����.. SMLS����");
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
        var str = "�߿� �ܿﳯ ... ���� ������༭ ����..\r\n  �ٸ��̾ƴ϶�, ������ ��û���� ū �������� ���߰ŵ�..\r\n �׳��� ��30��ġ�� ������  ������!!! #b(�׳��� �̸���;; ��...)#k";
        str += "#b�ʿ��� ������\r\n";
        str += "#v4000048# * 30\r\n";
        str += "#b�ʿ��� �޼�:100\r\n";
        str += "#L0#�ݵ����ƿ��ڽ��ϴ�.#l\r\n";
        str += "#L1#�������������ֽ��ϴ�.#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("�� ���� �ʺ��ڴ� ���� �Ҹ��� �������!");
        }
    } else {
        cm.sendOk("");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 100) {
        if ((cm.haveItem(4000048, 30))) {
        var str = "��..������ Ȯ���ѰŰ���? �ϰ� ����������, \r\n 2049001 �������ٰ�!";
        str += "#b����\r\n";
        var str = "����ġ + 100\r\n";
        str += "#b�޼�:100\r\n";
        str += "#v2049001# * 1\r\n";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("#e¥����������.#n");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("#r���� #k �ʳ༮�� �۷��Ծ���..");
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

