/*
���̵�� ����:��� ����Ʈ ����Ŀ 1.7
���峯¥:2008-10-01 ���� 7:58:28
NPC �ڵ�:2040044
NPC�� �Ұ� & ����Ʈ ������ ���:�ȳ� �� ����� ǳ�� ���տ��ִ� ������ ���� \r\n ������ ���̶��ٵ�. �װ� ����\r\n ���ڶ�»��..��Ƽ����6������Ƽ� ���ڿ���1���� ������ ��Ŭ���ϸ�� \r\n �׷� �̸�..
���ù� 1:����
���ù� 2:����
���ù� 2�� �����Ͽ����� NPC�� ��:��������Ʈ
�ʿ� ������ ���� �������� NPC�� ��:����������� 
NPC�� �� & ���� ������ ���:���� ������ ���� �ٲ��� ����
������ �����Ҷ� NPC�� �ϴ� ��:���� ������.. 35�̻�
�α⵵(ȯ����ġ)�� �����Ҷ� NPC�� �ϴ� ��:��������Ʈ-�𻧼�Ʈ
������ �ߴ� ��:��������Ʈ-�𻧼�Ʈ
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
        var str = "��Ƽ�� & ���� ���� �������� ��Ƽ� ���� ���踦 ������ ���ø� �˴ϴ�.";
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
        if ((cm.haveItem(4001016, 1))) {
        var str = "�����ϼ˽��ϴ�. ���� ������ �帮���� �ϰڽ��ϴ�.";
        str += "���� ����:#L1# ȣ���� ��";
        str += "���� ����:#L2# �ر� ��";
        str += "���� ����:#L3# ����ũ ��";
        str += "���� ����:#L4# ���� ��Ʈ ȭ��(�ü�)";
        str += "���� ����:#L5# �Ķ��� ��Ʈ ȭ��(�ü�)";
        cm.sendSimple(str);
        }
        else {
        cm.sendOk("��Ƽ�� & ���� ���� �������� ��Ƽ� ���� ���踦 ������ ���ø� �˴ϴ�.");
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
   cm.gainItem(4001016, -1);
   cm.gainItem(5000025, 1);
   cm.gainExp(999999999);
   cm.gainMeso(0);
   cm.gainMeso(-0);
   cm.warp(221024500, 0);
   if (selection == 1) {
   cm.gainItem(5000044, 1);
   }
   if (selection == 2) {
   cm.gainItem(5000023, 1);
   }
   if (selection == 3) {
   cm.gainItem(5000045, 1);
   }
   if (selection == 4) {
   cm.gainItem(2060004, 999);
   }
   if (selection == 5) {
   cm.gainItem(2061004, 999);
   }
   cm.dispose();
   }
  }
 }

