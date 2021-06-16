/*
5 , 10 , 15억 화폐 교환엔피씨 제작 by . BaNy
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
   cm.sendOk("ㅇㅅㅇ         ");
   cm.dispose();
   return;
  }
  if (mode == 1)
   status++;
  else
   status--;
  if (status == 0) {
   cm.sendNext("화폐 변경 임무를 맡은 기사 입니다. 화폐는 캐시샵탭에 저장되며, 사용하시면 손해 입니다. 저에게 파세요");
  } else if (status == 1) {
   cm.sendSimple("#r#L1#메소 5억을 동화폐로 교환#l\r\n#L2#메소 10억을 은화폐로 교환#l\r\n#L3#메소 20억을 금화폐로 교환#k#l\r\n#b#L4#동화폐를 메소 5억으로 교환#l\r\n#L5#은화폐를 메소 10억으로 교환#l\r\n#L6#금화폐를 메소 20억으로 교환#k#l\r\n#g#L7#동화폐 2개를 은화폐 1개로 교환#l\r\n#L8#동화폐 4개를 금화폐 1개로 교환#l\r\n#L9#은화폐 2개를 금화폐 1개로 교환#k#l\r\n#d#L10#금화폐를 1개를 동화폐 4개로 교환\r\n#d#L11#금화폐를 1개를 은화폐 2개로 교환\r\n#d#L12#은화폐를 1개를 동화폐 2개로 교환") 
  } else if (selection == 1) {
   if (cm.getMeso() < 500000000) {
   cm.sendOk("#r5억 메소가 없습니다.#k "); 
   cm.dispose();
   } else {
   cm.sendOk("#r교환\r 되었습니다.");
   cm.gainMeso(-500000000); 
   cm.gainItem(5200000,1); 
   cm.dispose();
  }
  } else if (selection == 2) {
   if (cm.getMeso() < 1000000000) {
   cm.sendOk("#r10억메소#k가 없습니다");
   cm.dispose();
   } else {
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainMeso(-1000000000);
   cm.gainItem(5200001,1);
   cm.dispose();
     }
  } else if (selection == 3) {
   if (cm.getMeso() < 2000000000) {
   cm.sendOk("#r20억메소#k가 없습니다..");
   cm.dispose();
   } else {
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainMeso(-2000000000);
   cm.gainItem(5200002,1);
   cm.dispose();
   }
  } else if (selection == 4) {
  if(cm.haveItem(5200000,1) == false) {
   cm.sendOk("동화폐가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(5200000,1) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(5200000,-1);
   cm.gainMeso(500000000);
   cm.dispose();
   }
  } else if (selection == 5) {
  if(cm.haveItem(5200001,1) == false) { 
   cm.sendOk("은화폐가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(5200001,1) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(5200001,-1);
   cm.gainMeso(1000000000);
   cm.dispose();
   }
  } else if (selection == 6) {
  if(cm.haveItem(5200002,1) == false) { 
   cm.sendOk("금화폐가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(5200002,1) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(5200002,-1);
   cm.gainMeso(2000000000);
   cm.dispose();
   }
  } else if (selection == 7) {
  if(cm.haveItem(5200000,2) == false) { 
   cm.sendOk("동화폐가 2개가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(5200000,2) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(5200000,-2);
   cm.gainItem(5200001,1);
   cm.dispose();
   }
  } else if (selection == 8) {
  if(cm.haveItem(5200000,4) == false) { 
   cm.sendOk("동화폐가 4개가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(5200000,4) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(5200000,-4);
   cm.gainItem(5200002,1);
   cm.dispose();
   }
  } else if (selection == 9) {
  if(cm.haveItem(5200001,2) == false) { 
   cm.sendOk("은화폐가 2개가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(5200001,2) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(5200001,-2);
   cm.gainItem(5200002,1);
   cm.dispose();
   }
  } else if (selection == 10) {
  if(cm.haveItem(5200002,1) == false) { 
   cm.sendOk("금화폐가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(5200002,1) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(5200002,-1);
   cm.gainItem(5200000,4);
   cm.dispose();
   }
  } else if (selection == 11) {
  if(cm.haveItem(5200002,1) == false) { 
   cm.sendOk("금화폐가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(5200002,1) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(5200002,-1);
   cm.gainItem(5200001,2);
   cm.dispose();
   }
  } else if (selection == 12) {
  if(cm.haveItem(5200001,1) == false) { 
   cm.sendOk("은화폐가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(5200001,1) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(5200001,-1);
    cm.gainItem(5200000,2);
   cm.dispose();
   }
  }
 }
}