/*
���̵�� ����:��� ����Ʈ ����Ŀ 1.7
���峯¥:2008-11-06 ���� 6:48:45
NPC �ڵ�:9010011
NPC�� �Ұ� & ����Ʈ ������ ���:�����ڴ� �ȳ��ϼ���?\r\nȤ�� #r��Ƽ�� ��ų#k�� ������� ���� �ʽŰ���?\r\n��Ƽ�� ��ų�̶� ���� #r3���� ���� ����#k�� �����ϰ� ���ִ� ��ų����\r\n�Ʒ��� ������ ��ƿ��� ���� #r��Ƽ�� ��ų#k�� ������ �帮��
���ù� 1:����
���ù� 2:����
���ù� 2�� �����Ͽ����� NPC�� ��:�׷� ������ ������
�ʿ� ������ ���� �������� NPC�� ��:������ �����մϴ�. \r\n��Ḧ ��� ��ƿ����� !
NPC�� �� & ���� ������ ���:#r�ʺ��� ��ųâ#k�� ������� ^^\r\n��Ƽ�� ��ų�� ����������̴ϴ�.
������ �����Ҷ� NPC�� �ϴ� ��:������ �����մϴ�!
�α⵵(ȯ����ġ)�� �����Ҷ� NPC�� �ϴ� ��:�α⵵�� �����մϴ�
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
     if (cm.getLevel() >= 10) {
     if (p.getFame() >= 0) {
        var str = "�����ڴ� �ȳ��ϼ���?\r\nȤ�� #r��Ƽ�� ��ų#k�� ������� ���� �ʽŰ���?\r\n��Ƽ�� ��ų�̶� ���� #r3���� ���� ����#k�� �����ϰ� ���ִ� ��ų����\r\n�Ʒ��� ������ ��ƿ��� ���� #r��Ƽ�� ��ų#k�� ������ �帮��\r\n#b�ʿ��� ���#k\r\n#v5000006# �㽺Ű�� 1��\r\n#v4000120# �˼� 50��\r\n#v4031014# ���� 10��\r\n\r\n";
        str += "#L0#����#l\r\n";
        str += "#L1#����#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("������ �����մϴ�!");
        }
    } else {
        cm.sendOk("���� 10�̻��� �Ǿ���մϴ�.");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(5000006, 1)) && (cm.haveItem(4000120, 50)) && (cm.haveItem(4031014, 10))) {
        var str = "#r�ʺ��� ��ųâ#k�� ������� ^^\r\n��Ƽ�� ��ų�� ����������̴ϴ�.";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("������ �����մϴ�. \r\n��Ḧ ��� ��ƿ����� !");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("�׷� ������ ������");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(5000006, -1);
   cm.gainItem(4000120, -50);
   cm.gainItem(4031014, -10);

   cm.gainExp(0);
   cm.gainMeso(0);
   cm.gainMeso(-0);
   cm.teachSkill(8,1,1);
   cm.dispose();
   }
  }
 }

