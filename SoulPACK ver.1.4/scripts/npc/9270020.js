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
            cm.sendOk("����-_-");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
         if (status == 0) {
        var str = "�����ڴ� �ȳ��ϼ���?\r\n�ѹ� #r�̰���#k�� ������ �������� �����Ƿ���?\r\n���� �̰����� �̵��� ���ѵ帮��. �� �Ʒ��� ������ ��ƿ��ž��մϴ�.\r\n";
        str += "#b�ʿ��� ������\r\n";
        str += "#v2060000# * 20\r\n";
        str += "#v2061000# * 20\r\n";
        str += "#v2030004# * 2\r\n";
        str += "#L0#���ݹٷ� �̰����� �����ڽ��ϴ�!#l\r\n";
        str += "#L1#�˼��մϴ�. ���߿� �ѹ� ��������#l\r\n";
        cm.sendSimple(str);
            }
        else if (status == 1) {
        if (selection == 0) {
        if ((cm.haveItem(2060000, 20)) && (cm.haveItem(2061000, 20)) && (cm.haveItem(2030004, 2))) {
        var str = "�׷� �̰����� �����ٵ帮��";
        str += "#b����\r\n";
        str += "����ġ + 0\r\n";
        str += "#v2030004# * 4\r\n";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("��Ḧ ��� �������ž� �̰����� �̵��� ���ѵ帳�ϴ�.");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("��..�ϱ� �̰� ��׽ý��� ���Ÿ��� ���� ���� ��ȭ�ο� ��������... �׷� ������ �ٽ� ������~");
        cm.dispose();
      }
     }
        else if (status == 2) {
   cm.gainExp(0);
   cm.gainMeso(0);
   cm.gainItem(2060000, -20);
   cm.gainItem(2061000, -20);
   cm.gainItem(2030004, -2);
   cm.gainItem(2030004, 4);
   cm.dispose();
      }
     }
    }
/*
Goblin Quest Maker - Simpler ver 1.0
���� �̰ű��� �������??
*/

