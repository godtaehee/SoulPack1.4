/*
���̵�� ����:��� ����Ʈ ����Ŀ 1.7
���峯¥:2008-09-29 ���� 9:39:21
NPC �ڵ�:2040038
NPC�� �Ұ� & ����Ʈ ������ ���:�ȳ� �� �뷩��ǳ�� #b#t4001022# �̰�1�徿 ���ؿ� ����!!
���ù� 1:����
���ù� 2:����
���ù� 2�� �����Ͽ����� NPC�� ��:������ ���� �������ϸ� �ʶ� �� ���Ҳ��� ����
�ʿ� ������ ���� �������� NPC�� ��:������ 
NPC�� �� & ���� ������ ���:���� 
������ �����Ҷ� NPC�� �ϴ� ��:���� ������ 35�̻�
�α⵵(ȯ����ġ)�� �����Ҷ� NPC�� �ϴ� ��:��������Ʈ
������ �ߴ� ��:�𻧼�Ʈ����
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
        var str = "���� ���徿 ���ؿ�����.";
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
        cm.sendOk("���� ���徿 ���ؿ�����.");
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
   cm.gainItem(1302001, 1);
   cm.gainExp(250000);
   cm.gainMeso(10);
   cm.gainMeso(-0);
   cm.warp(922010400, 0);
   cm.dispose();
   }
  }
 }

