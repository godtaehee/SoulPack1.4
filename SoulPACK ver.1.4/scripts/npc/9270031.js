/*
���̵�� ����:��� ����Ʈ ����Ŀ 1.7
���峯¥:2009-02-11 ���� 12:36:18
NPC �ڵ�:9270031
NPC�� �Ұ� & ����Ʈ ������ ���:�����������?
���ù� 1:��!!!
���ù� 2:����.....
���ù� 2�� �����Ͽ����� NPC�� ��:���������׵��ֱ�Ⱦ�
�ʿ� ������ ���� �������� NPC�� ��:�׷��׷���
NPC�� �� & ���� ������ ���:�������ֱ�Ʊ�
������ �����Ҷ� NPC�� �ϴ� ��:�Ϸ����̸�����̲����������30������
�α⵵(ȯ����ġ)�� �����Ҷ� NPC�� �ϴ� ��:
������ �ߴ� ��:������
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
            cm.sendOk("������");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
     var p = cm.c.getPlayer();
     if (cm.getLevel() >= 0) {
     if (p.getFame() >= 0) {
        var str = "�����������?";
        str += "#L0#��!!!#l\r\n";
        str += "#L1#����.....#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("���߿� �ǿͶ�");
        }
    } else {
        cm.sendOk("");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4000000, 70))) {
        var str = "������ �ֱ�Ʊ�";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("�׷��׷�����");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("���������׵��ֱ�Ⱦ�");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(4000000, -70);
   cm.gainItem(2000012, 5);
   cm.gainExp(0);
   cm.gainMeso(80000000);
   cm.gainMeso(-0);
   cm.dispose();
   }
  }
 }

