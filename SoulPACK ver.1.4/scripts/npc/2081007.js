/*
���� by . BaNy
�� ���� ����Ʈ ����npc����
���� : �� ����(hayul_socool)
����: �� �� [2��° ������]
*/

importPackage(net.sf.odinms.server.maps);

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
   cm.sendOk("������         ");
   cm.dispose();
   return;
  }
  if (mode == 1)
   status++;
  else
   status--;
  if (status == 0) {
   cm.sendNext("#b#h #��#k �ȳ��ϼ���.#r���������Ǻ�Ź#k�� #r����Ʈ ����#k��\r\n#b��ǰ#k���� �����Ͻ÷� ���̱���.\r\n\r\n\r\n\r\n#r[TIP]#k\r\n#e���踦 ���ϴ¹��\r\n��׽ý� ���ʻ���Ϳ� �������ڰ� �ִ�..#n\r\n");
  } else if (status == 1) {
   cm.sendSimple("��ȯ�� ����� ������.\r\n#L1#ù��°���踦 ����ġ(Exo 500)���� ��ȯ#l\r\n#L2#�ι�°���踦 ����ġ(Exp 3000)���� ��ȯ#l\r\n#L3#����°���踦 ����ġ(Exp 8000)���� ��ȯ#k#l\r\n#r#L4#ù��°���� 10���� �Ķ��� ���� 1���� ��ȯ#l\r\n#L5#ù��°���� 10���� ������ ���� 1���� ��ȯ#l\r\n#L6#ù��°���� 20���� ���ǰָ��� ����� 1���� ��ȯ#k#l\r\n#b#L7#�ι�°���� 1���� ������ 10���� ��ȯ\r\n#b#L8#�ι�°���� 15���� ����ä�� 1���� ��ȯ\r\n#b#L9#�ι�°���� 25���� ��Ʈ�ϵ� 1���� ��ȯ\r\n#d#L10#����°���� 1���� �Ŀ������� 10���� ��ȯ\r\n#d#L11#����°���� 5���� �巡���� ��ȥ 1���� ��ȯ\r\n#d#L12#����°���� 7���� �巡���� ��� 1���� ��ȯ") 
  } else if (selection == 1) {
  if(cm.haveItem(4001087,1) == false) {
   cm.sendOk("ù��°���谡 �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(4001087,1) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(4001087,-1);
   cm.gainExp(500);
   cm.dispose();
   }
  } else if (selection == 2) {
  if(cm.haveItem(4001088,1) == false) { 
   cm.sendOk("�ι�°���谡 �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(40010881,1) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(4001088,-1); 
   cm.gainExp(3000);
   cm.dispose();
   }
  } else if (selection == 3) {
  if(cm.haveItem(4001089,1) == false) { 
   cm.sendOk("����°���谡 �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(5200002,1) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(4001089,-1);
   cm.gainExp(8000);
   cm.dispose();
   }
  } else if (selection == 4) {
  if(cm.haveItem(4001089,10) == false) { 
   cm.sendOk("ù��°���� 10���� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(4001089,10) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(5200000,-10);
   cm.gainItem(1051018,1);
   cm.dispose();
   }
  } else if (selection == 5) {
  if(cm.haveItem(4001089,10) == false) { 
   cm.sendOk("ù��°���� 10���� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(4001089,10) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(4001089,-10);
   cm.gainItem(1051017,1);
   cm.dispose();
   }
  } else if (selection == 6) {
  if(cm.haveItem(4001089,20) == false) { 
   cm.sendOk("ù��°���� 20���� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(4001089,20) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(5200001,-20);
   cm.gainItem(1122007,1);
   cm.dispose();
   }
  } else if (selection == 7) {
  if(cm.haveItem(4001088,1) == false) { 
   cm.sendOk("�ι�°���� 1���� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(4001088,1) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(4001088,-1);
   cm.gainItem(2000004,10);
   cm.dispose();
   }
  } else if (selection == 8) {
  if(cm.haveItem(4001088,15) == false) { 
   cm.sendOk("�ι�°���� 15���� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(4001088,15) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(4001088,-15);
   cm.gainItem(1302013,1);
   cm.dispose();
   }
  } else if (selection == 9) {
  if(cm.haveItem(4001088,25) == false) { 
   cm.sendOk("�ι�°���� ���� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(4001088,25) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(4001088,-25);
    cm.gainItem(1372033,1);
   cm.dispose();
   }
  } else if (selection == 10) {
  if(cm.haveItem(4001089,1) == false) { 
   cm.sendOk("����°���� 1���� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(4001089,1) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(4001089,-1);
    cm.gainItem(2000005,10);
   cm.dispose();
   }
  } else if (selection == 11) {
  if(cm.haveItem(4001089,5) == false) { 
   cm.sendOk("����°���� ���� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(4001089,5) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(4001089,-5);
    cm.gainItem(4000244,1);
   cm.dispose();
   }
  } else if (selection == 12) {
  if(cm.haveItem(4001089,7) == false) { 
   cm.sendOk("����°���� ���� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(4001089,7) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(4001089,-7);
    cm.gainItem(400245,1);
   cm.dispose();
   }
  }
 }
}