/*
���̵�� ����:��� ����Ʈ ����Ŀ 1.7
���峯¥:2008-10-01 ���� 4:18:44
NPC �ڵ�:2040042
NPC�� �Ұ� & ����Ʈ ������ ���:�ȳ� �ϴû�ǳ���̾� ���͸� ��Ƽ� ����1�徿 ���� ��������
���ù� 1:����
���ù� 2:����
���ù� 2�� �����Ͽ����� NPC�� ��:��������
�ʿ� ������ ���� �������� NPC�� ��:���ٽñ��ؿ� ����1��
NPC�� �� & ���� ������ ���:���� ���������� �̵���������
������ �����Ҷ� NPC�� �ϴ� ��:35�̻�
�α⵵(ȯ����ġ)�� �����Ҷ� NPC�� �ϴ� ��:����
������ �ߴ� ��:����
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
     if (cm.getLevel() >= 1) {
     if (p.getFame() >= 0) {
        var str = "���� ǥ�� �Ѱ��� ���ش� �ּ���.";
        str += "#L0#Ȯ��#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("");
        }
    } else {
        cm.sendOk("");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4001022, 1))) {
        var str = "���������� �����帮�ڽ��ϴ�.";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("���� ǥ�� �Ѱ��� ���ش��ּ���.");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(4001022, -1);
   cm.gainItem(5654654, 1);
   cm.gainExp(400000);
   cm.gainMeso(40);
   cm.gainMeso(-0);
   cm.warp(922010900, 0);
   cm.dispose();
   }
  }
 }

