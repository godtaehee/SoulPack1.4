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
            cm.sendOk("����");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
         if (status == 0) {
        var str = "�����ڿ�, �ȳ�? �� Ȥ�� #r�Ķ��� ����#k ���� ������ ���� ������?\r\n�Ʒ� ���鸸 ��ƿ��� ���� #r�Ķ��� ����#k�� �ʿ��� �ټ��ִµ�.. ��¼�ڴ�?";
        str += "#b�ʿ��� ������\r\n";
        str += "#v4000007# * 20\r\n";
        str += "#v4000034# * 10\r\n";
        str += "#v4000166# * 10\r\n";
        str += "#v4000042# * 20\r\n";
        str += "#v4000012# * 5\r\n";
        str += "#L0#����#l\r\n";
        str += "#L1#����#l\r\n";
        cm.sendSimple(str);
            }
        else if (status == 1) {
        if (selection == 0) {
        if ((cm.haveItem(4000007, 20)) && (cm.haveItem(4000034, 10)) && (cm.haveItem(4000166, 10)) && (cm.haveItem(4000042, 20)) && (cm.haveItem(4000012, 5))) {
        var str = "�� ���� �Ķ��� �����̾�";
        str += "#b����\r\n";
        str += "����ġ + 100\r\n";
        str += "#v1050018# * 1\r\n";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("� ������ ��ƿ;ߵ� �˰���?");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("������");
        cm.dispose();
      }
     }
        else if (status == 2) {
   cm.gainExp(100);
   cm.gainMeso(0);
   cm.gainItem(4000007, -20);
   cm.gainItem(4000034, -10);
   cm.gainItem(4000166, -10);
   cm.gainItem(4000042, -20);
   cm.gainItem(4000012, -5);
   cm.gainItem(1050018, 1);
   cm.dispose();
      }
     }
    }
/*
Goblin Quest Maker - Simpler ver 1.0
���� �̰ű��� �������??
*/

