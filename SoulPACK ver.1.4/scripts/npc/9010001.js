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
        var str = "��...Ȥ�� #r������ġ��#k �̶�� �ƴ�?\r\n������ ��� ���� ��~�� �������ٴ� ���� ����� �฻�̾�...\r\n������ #r������ġ��#k�� �ʹ� ���� �־ �׷���..�װ� �ʿ��Ѱ͵��� ������ ���� ���� #r������ġ��#k�� ����.. �? �ʿ��Ѱ͵��� �Ʒ� �����̾�\r\n";
        str += "#b�ʿ��� ������\r\n";
        str += "#v2012003# * 4\r\n";
        str += "#v2012002# * 4\r\n";
        str += "#v2022003# * 10\r\n";
        str += "#L0#����!������ ������ò�!#l\r\n";
        str += "#L1#��¼���?�ʳ� ���� ���Ŷ�#l\r\n";
        cm.sendSimple(str);
            }
        else if (status == 1) {
        if (selection == 0) {
        if ((cm.haveItem(2012003, 4)) && (cm.haveItem(2012002, 4)) && (cm.haveItem(2022003, 10))) {
        var str = "������ ��� ��ƿԱ���!!\r\n����! ���� #r������ġ��#k 5���� !!\r\n";
        str += "#b����\r\n";
        str += "����ġ + 5000\r\n";
        str += "#v2022178# * 5\r\n";
        cm.sendNext(str);
        }
        else {
        cm.sendOk("#r������ġ��#k�� �ʿ��ϴٸ� � ������ ��ƿ�!! ");
        cm.dispose();
        }
       }
      else if (selection == 1) {
      cm.sendNext("�� ������� �ض�...���߿� ������ �ٲ�� �ٽ� ã�ƿ�����.. �˰���?");
        cm.dispose();
      }
     }
        else if (status == 2) {
   cm.gainExp(5000);
   cm.gainMeso(0);
   cm.gainItem(2012003, -4);
   cm.gainItem(2012002, -4);
   cm.gainItem(2022003, -10);
   cm.gainItem(2022178, 30);
   cm.dispose();
      }
     }
    }
/*
Goblin Quest Maker - Simpler ver 1.0
���� �̰ű��� �������??
*/

