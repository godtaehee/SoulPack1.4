/*
5 , 10 , 15�� ȭ�� ��ȯ���Ǿ� ���� by . BaNy
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
   cm.sendNext("ȭ�� ���� �ӹ��� ���� ��� �Դϴ�. ȭ��� ĳ�ü��ǿ� ����Ǹ�, ����Ͻø� ���� �Դϴ�. ������ �ļ���");
  } else if (status == 1) {
   cm.sendSimple("#r#L1#�޼� 5���� ��ȭ��� ��ȯ#l\r\n#L2#�޼� 10���� ��ȭ��� ��ȯ#l\r\n#L3#�޼� 20���� ��ȭ��� ��ȯ#k#l\r\n#b#L4#��ȭ�� �޼� 5������ ��ȯ#l\r\n#L5#��ȭ�� �޼� 10������ ��ȯ#l\r\n#L6#��ȭ�� �޼� 20������ ��ȯ#k#l\r\n#g#L7#��ȭ�� 2���� ��ȭ�� 1���� ��ȯ#l\r\n#L8#��ȭ�� 4���� ��ȭ�� 1���� ��ȯ#l\r\n#L9#��ȭ�� 2���� ��ȭ�� 1���� ��ȯ#k#l\r\n#d#L10#��ȭ�� 1���� ��ȭ�� 4���� ��ȯ\r\n#d#L11#��ȭ�� 1���� ��ȭ�� 2���� ��ȯ\r\n#d#L12#��ȭ�� 1���� ��ȭ�� 2���� ��ȯ") 
  } else if (selection == 1) {
   if (cm.getMeso() < 500000000) {
   cm.sendOk("#r5�� �޼Ұ� �����ϴ�.#k "); 
   cm.dispose();
   } else {
   cm.sendOk("#r��ȯ\r �Ǿ����ϴ�.");
   cm.gainMeso(-500000000); 
   cm.gainItem(5200000,1); 
   cm.dispose();
  }
  } else if (selection == 2) {
   if (cm.getMeso() < 1000000000) {
   cm.sendOk("#r10��޼�#k�� �����ϴ�");
   cm.dispose();
   } else {
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainMeso(-1000000000);
   cm.gainItem(5200001,1);
   cm.dispose();
     }
  } else if (selection == 3) {
   if (cm.getMeso() < 2000000000) {
   cm.sendOk("#r20��޼�#k�� �����ϴ�..");
   cm.dispose();
   } else {
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainMeso(-2000000000);
   cm.gainItem(5200002,1);
   cm.dispose();
   }
  } else if (selection == 4) {
  if(cm.haveItem(5200000,1) == false) {
   cm.sendOk("��ȭ�� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(5200000,1) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(5200000,-1);
   cm.gainMeso(500000000);
   cm.dispose();
   }
  } else if (selection == 5) {
  if(cm.haveItem(5200001,1) == false) { 
   cm.sendOk("��ȭ�� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(5200001,1) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(5200001,-1);
   cm.gainMeso(1000000000);
   cm.dispose();
   }
  } else if (selection == 6) {
  if(cm.haveItem(5200002,1) == false) { 
   cm.sendOk("��ȭ�� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(5200002,1) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(5200002,-1);
   cm.gainMeso(2000000000);
   cm.dispose();
   }
  } else if (selection == 7) {
  if(cm.haveItem(5200000,2) == false) { 
   cm.sendOk("��ȭ�� 2���� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(5200000,2) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(5200000,-2);
   cm.gainItem(5200001,1);
   cm.dispose();
   }
  } else if (selection == 8) {
  if(cm.haveItem(5200000,4) == false) { 
   cm.sendOk("��ȭ�� 4���� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(5200000,4) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(5200000,-4);
   cm.gainItem(5200002,1);
   cm.dispose();
   }
  } else if (selection == 9) {
  if(cm.haveItem(5200001,2) == false) { 
   cm.sendOk("��ȭ�� 2���� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(5200001,2) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(5200001,-2);
   cm.gainItem(5200002,1);
   cm.dispose();
   }
  } else if (selection == 10) {
  if(cm.haveItem(5200002,1) == false) { 
   cm.sendOk("��ȭ�� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(5200002,1) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(5200002,-1);
   cm.gainItem(5200000,4);
   cm.dispose();
   }
  } else if (selection == 11) {
  if(cm.haveItem(5200002,1) == false) { 
   cm.sendOk("��ȭ�� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(5200002,1) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(5200002,-1);
   cm.gainItem(5200001,2);
   cm.dispose();
   }
  } else if (selection == 12) {
  if(cm.haveItem(5200001,1) == false) { 
   cm.sendOk("��ȭ�� �����ϴ�.");
   cm.dispose();
  } else if(cm.haveItem(5200001,1) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(5200001,-1);
    cm.gainItem(5200000,2);
   cm.dispose();
   }
  }
 }
}