/*
���̵�� ����:��� ����Ʈ ����Ŀ 1.7
���峯¥:2008-10-01 ���� 3:47:59
NPC �ڵ�:2040039
NPC�� �Ұ� & ����Ʈ ������ ���:�ȳ� �� ���λ�ǳ���̾� ���濡 ���� �󽺸�������\r\n ī�尡�����µ� 1�徿������ ���岨��.\r\n ����1�徿�����ͼ� ���� �� ����
���ù� 1:����
���ù� 2:����
���ù� 2�� �����Ͽ����� NPC�� ��:�ʶ������� ����
�ʿ� ������ ���� �������� NPC�� ��:���ٽñ��ؿ�¡?
NPC�� �� & ���� ������ ���:���� ����̵����ٲ�
������ �����Ҷ� NPC�� �ϴ� ��:����������
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
            cm.sendOk("");
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
        var str = "�� �濡 ���ż� ǥ�� ���ؿ����� ���� �����ּ���.";
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
        cm.sendOk("�� �濡 ���ż� ǥ�� ���ؿ����� ���� �����ּ���.");
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
   cm.gainExp(300000);
   cm.gainMeso(10);
   cm.gainMeso(-0);
   cm.warp(922010600, 0);
   cm.dispose();
   }
  }
 }

