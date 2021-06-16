/*
제작 by . BaNy
민 하율 퀘스트 보상npc수정
수정 : 민 하율(hayul_socool)
수정: 웃 자 [2번째 수정자]
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
   cm.sendNext("#b#h #님#k 안녕하세요.#r보물상자의부탁#k의 #r퀘스트 보상#k을\r\n#b상품#k으로 변경하시러 오셨군요.\r\n\r\n\r\n\r\n#r[TIP]#k\r\n#e열쇠를 구하는방법\r\n헤네시스 동쪽사냥터에 보물상자가 있다..#n\r\n");
  } else if (status == 1) {
   cm.sendSimple("교환할 목록을 고르세요.\r\n#L1#첫번째열쇠를 경험치(Exo 500)으로 교환#l\r\n#L2#두번째열쇠를 경험치(Exp 3000)으로 교환#l\r\n#L3#세번째열쇠를 경험치(Exp 8000)으로 교환#k#l\r\n#r#L4#첫번째열쇠 10개를 파란색 가운 1개로 교환#l\r\n#L5#첫번째열쇠 10개를 빨간색 가운 1개로 교환#l\r\n#L6#첫번째열쇠 20개를 슈피겔만의 목걸이 1개로 교환#k#l\r\n#b#L7#두번째열쇠 1개를 엘릭서 10개로 교환\r\n#b#L8#두번째열쇠 15개를 붉은채찍 1개로 교환\r\n#b#L9#두번째열쇠 25개를 하트완드 1개로 교환\r\n#d#L10#세번째열쇠 1개를 파워엘릭서 10개로 교환\r\n#d#L11#세번째열쇠 5개를 드래곤의 영혼 1개로 교환\r\n#d#L12#세번째열쇠 7개를 드래곤의 비늘 1개로 교환") 
  } else if (selection == 1) {
  if(cm.haveItem(4001087,1) == false) {
   cm.sendOk("첫번째열쇠가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(4001087,1) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(4001087,-1);
   cm.gainExp(500);
   cm.dispose();
   }
  } else if (selection == 2) {
  if(cm.haveItem(4001088,1) == false) { 
   cm.sendOk("두번째열쇠가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(40010881,1) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(4001088,-1); 
   cm.gainExp(3000);
   cm.dispose();
   }
  } else if (selection == 3) {
  if(cm.haveItem(4001089,1) == false) { 
   cm.sendOk("세번째열쇠가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(5200002,1) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(4001089,-1);
   cm.gainExp(8000);
   cm.dispose();
   }
  } else if (selection == 4) {
  if(cm.haveItem(4001089,10) == false) { 
   cm.sendOk("첫번째열쇠 10개가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(4001089,10) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(5200000,-10);
   cm.gainItem(1051018,1);
   cm.dispose();
   }
  } else if (selection == 5) {
  if(cm.haveItem(4001089,10) == false) { 
   cm.sendOk("첫번째열쇠 10개가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(4001089,10) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(4001089,-10);
   cm.gainItem(1051017,1);
   cm.dispose();
   }
  } else if (selection == 6) {
  if(cm.haveItem(4001089,20) == false) { 
   cm.sendOk("첫번째열쇠 20개가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(4001089,20) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(5200001,-20);
   cm.gainItem(1122007,1);
   cm.dispose();
   }
  } else if (selection == 7) {
  if(cm.haveItem(4001088,1) == false) { 
   cm.sendOk("두번째열쇠 1개가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(4001088,1) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(4001088,-1);
   cm.gainItem(2000004,10);
   cm.dispose();
   }
  } else if (selection == 8) {
  if(cm.haveItem(4001088,15) == false) { 
   cm.sendOk("두번째열쇠 15개가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(4001088,15) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(4001088,-15);
   cm.gainItem(1302013,1);
   cm.dispose();
   }
  } else if (selection == 9) {
  if(cm.haveItem(4001088,25) == false) { 
   cm.sendOk("두번째열쇠 개가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(4001088,25) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(4001088,-25);
    cm.gainItem(1372033,1);
   cm.dispose();
   }
  } else if (selection == 10) {
  if(cm.haveItem(4001089,1) == false) { 
   cm.sendOk("세번째열쇠 1개가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(4001089,1) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(4001089,-1);
    cm.gainItem(2000005,10);
   cm.dispose();
   }
  } else if (selection == 11) {
  if(cm.haveItem(4001089,5) == false) { 
   cm.sendOk("세번째열쇠 개가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(4001089,5) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(4001089,-5);
    cm.gainItem(4000244,1);
   cm.dispose();
   }
  } else if (selection == 12) {
  if(cm.haveItem(4001089,7) == false) { 
   cm.sendOk("세번째열쇠 개가 없습니다.");
   cm.dispose();
  } else if(cm.haveItem(4001089,7) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(4001089,-7);
    cm.gainItem(400245,1);
   cm.dispose();
   }
  }
 }
}