/*
���̵�� ����:��� ����Ʈ ����Ŀ 1.7
���峯¥:2008-09-29 ���� 9:20:53
NPC �ڵ�:2040034
NPC�� �Ұ� & ����Ʈ ������ ���:�ȳ�~~ �� ���ĸ� ���������� �� ������ (������ �����°� �Ƴ�) \r\n���� �Ķ������̲���������
���ù� 1:����
���ù� 2:����
���ù� 2�� �����Ͽ����� NPC�� ��:�ʶ������� �����ϸ� �����غ���...
�ʿ� ������ ���� �������� NPC�� ��:������
NPC�� �� & ���� ������ ���:�ٱ��ؿԳ� ������ �ʱ��� ���찳���� ��
������ �����Ҷ� NPC�� �ϴ� ��:���� �����ϳ� �� 35�̻�
�α⵵(ȯ����ġ)�� �����Ҷ� NPC�� �ϴ� ��:�α⵵����
������ �ߴ� ��:��������Ʈ
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
        var str = "�� ��������� ȥ�ڼ��� ������ NPC Ŭ���� ���γ��� �ؾߵǰ� ��������� �ϰ� �ʹٸ� �Ķ������� ������ 1�� �������ֽø� �˴ϴ�. �׸��� ����� NPC Ŭ������ ������������� �׷���� �����ؼ� �ٽ� ó������ �ؾߵ˴ϴ�.";
        str += "#L0#����#l\r\n";
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
        if ((cm.haveItem(4000000, 1))) {
        var str = "�ʱ��� ���찳�� �帮�ڽ��ϴ�.";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("");
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
   cm.gainItem(4000000, -1);
   cm.gainItem(4001021, 1);
   cm.gainExp(10);
   cm.gainMeso(10);
   cm.gainMeso(-0);
   cm.warp(922010100, 0);
   cm.dispose();
   }
  }
 }

