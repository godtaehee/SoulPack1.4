/*
Goblin Quest Maker - Simpler ver 1.0
���ּ� ����� ū�ϳ���. ����?
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
            cm.sendOk("����Ʈ �ε� ����");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
         if (status == 0) {
        var str = "#r������ ���� ����#k�� �ʿ��ϽŰǰ���?\r\n�Ʒ� ��Ḧ ��ƿ��ø� ���� #r������ �������� 1��#k �� ��ſ��� �帮�ڽ��ϴ�\r\n";
        str += "#b�ʿ��� ������\r\n";
        str += "#v4000152# * 40\r\n";
        str += "#L0#���ƿ�#l\r\n";
        str += "#L1#����#l\r\n";
        cm.sendSimple(str);
            }
        else if (status == 1) {
        if (selection == 0) {
        if ((cm.haveItem(4000152, 40))) {
        var str = "�� ���� �������� �� �׳����� #r������ ��������#k ������ �ƽð���...?";
        str += "#b����\r\n";
        str += "����ġ + 10000\r\n";
        str += "#v4031179# * 1\r\n";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("��ᰡ �����ϸ� #r������ ��������#k�� �帱�� �����ϴ�.");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("������ �� ã�ƿ��ô��� �ϼ���");
        cm.dispose();
      }
     }
        else if (status == 2) {
   cm.gainExp(10000);
   cm.gainMeso(0);
   cm.gainItem(4000152, -40);
   cm.gainItem(4031179, 1);
   cm.dispose();
      }
     }
    }
/*
Goblin Quest Maker - Simpler ver 1.0
���� �̰ű��� �������??
*/

