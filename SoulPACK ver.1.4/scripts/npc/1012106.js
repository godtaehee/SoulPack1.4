/*
���̵�� ����:��� ����Ʈ ����Ŀ 1.7
���峯¥:2009-01-25 ���� 8:59:50
NPC �ڵ�:1012106
NPC�� �Ұ� & ����Ʈ ������ ���:�ȳ��ϼ��� ���� �ֹֺ����̶�� �ؿ� ������ ���� ���̾���� �۰��� 100���� �������ֽø� �޼ҿ� ����ġ�� �帱����
���ù� 1:�׷� ���� ��������
���ù� 2:�� ���� ������ �� �����Ƽ�..
���ù� 2�� �����Ͽ����� NPC�� ��:������ �� ���ּ���
�ʿ� ������ ���� �������� NPC�� ��:���̾���� �۰��� 100���� �����ϴ�
NPC�� �� & ���� ������ ���:���̾���� �۰��� 100���׿� �����մϴ� ���� ȭ����īŸ����
������ �����Ҷ� NPC�� �ϴ� ��:������ �����׿�
�α⵵(ȯ����ġ)�� �����Ҷ� NPC�� �ϴ� ��:
������ �ߴ� ��:�Ƴ� �������� ����
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
            cm.sendOk("�Ƴ� �������� ����");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
     var p = cm.c.getPlayer();
     if (cm.getLevel() >= 30) {
     if (p.getFame() >= 0) {
        var str = "�ȳ��ϼ��� ���� �ֹֺ����̶�� �ؿ� ������ ���� ���̾���� �۰��� 100���� �������ֽø� �޼ҿ� ����ġ�� �帱����";
        str += "#L0#�׷� ���� ��������#l\r\n";
        str += "#L1#�� ���� ������ �� �����Ƽ�..#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("������ �����׿�");
        }
    } else {
        cm.sendOk("");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4000024, 100))) {
        var str = "���̾���� �۰��� 100���׿� �����մϴ� ���� �޼Ҷ� ����ġ��";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("���̾���� �۰��� 100���� �����ϴ�");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("������ �� ���ּ���");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(4000024, -100);
   cm.gainExp(30000);
   cm.gainMeso(10000000);
   cm.gainMeso(10000000);
   cm.dispose();
   }
  }
 }

