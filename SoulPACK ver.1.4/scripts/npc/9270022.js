/*
���̵�� ����:��� ����Ʈ ����Ŀ 1.7
���峯¥:2009-02-25 ���� 7:59:18
NPC �ڵ�:9270022
NPC�� �Ұ� & ����Ʈ ������ ���:�ȳ� �� #bĵ��#k�� �ٸ��� �ƴϰ� �� �ؿ��ִ� #rȣ����ŧ��#k ��� ���͸� ��Ƽ� #gȣ����ŧ���� ��#k 200���� �����شٸ� #v1002511#�� ���� � �Ҹ��Ѱ�?\r\n
���ù� 1:#b�ѹ� �غ���#k
���ù� 2:#b���� �ȵǰڱ���#k
���ù� 2�� �����Ͽ����� NPC�� ��:�� ���Գ�~
�ʿ� ������ ���� �������� NPC�� ��:�ڳ� ���� ��ᰡ ���°Ű���
NPC�� �� & ���� ������ ���:�� ���̱��� �����ϰ� ���ڴ�
������ �����Ҷ� NPC�� �ϴ� ��:�� ���� �̸��� ��⿣ �ʹ� �Ϸ�
�α⵵(ȯ����ġ)�� �����Ҷ� NPC�� �ϴ� ��:0
������ �ߴ� ��:0
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
            cm.sendOk("0");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
     var p = cm.c.getPlayer();
     if (cm.getLevel() >= 70) {
     if (p.getFame() >= 0) {
        var str = "�ȳ� �� #bĵ��#k�� �ٸ��� �ƴϰ� �� �ؿ��ִ� #rȣ����ŧ��#k ��� ���͸� ��Ƽ� #gȣ����ŧ���� ��#k 200���� �����شٸ� #v1002511#�� ���� � �Ҹ��Ѱ�?\r\n";
        str += "#L0##b�ѹ� �غ���#k#l\r\n";
        str += "#L1##b���� �ȵǰڱ���#k#l\r\n";
        cm.sendSimple(str);
    } else {
        cm.sendOk("�� ���� �̸��� ��⿣ �ʹ� �Ϸ�");
        }
    } else {
        cm.sendOk("0");
        }
        }
        else if (status == 1) {
        if (selection == 0) {
        if (cm.getMeso() >= 0) {
        if ((cm.haveItem(4000355, 200))) {
        var str = "#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n�� ���̱��� �����ϰ� ���ڴ�";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("�ڳ� ���� ��ᰡ ���°Ű���");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("�� ���Գ�~");
        cm.dispose();
      }
     }
    }
      else if (status == 2) {
   cm.gainItem(4000355, -200);
   cm.gainItem(1002511, 1);
   cm.gainExp(10500);
   cm.gainMeso(0);
   cm.gainMeso(-0);
   cm.dispose();
   }
  }
 }

