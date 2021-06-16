/* 저작권 : 아 봉씨 + 단풍씨
*  
* 주문서 교환 NPC 첫 도전
* 
* 주문서교환NPC.js: 주문서 교환 NPC입니다. 
*/ 
function start() {    
        cm.sendSimple("안녕하세요. #b#h ##k님, 저는 당신이 가지고 있는 #r하트or단풍잎#k을 #b신비의 주문서#k로 바꿔드립니다. \r\n#r[TIP]하트는 빅토리아 아일랜드에 리본돼지,돼지 한테 뜹니다.\r\n[TIP]단풍잎은 빨간달팽이 잡아야 나옵니다#k #k\r\n#L0# #v4001126# 1000개로 #v2049003# #k\r\n#L1##v4001126# 1000개로 #v2049100##k\r\n#L2# #v4031683# 1000개로 #v2041212##k\r\n#L3# #v4031683# 1000개로 #v2049102##k\r\n#L4# #v4031683# 1000개로 #v2041211##k\r\n#L5# #v4031683# 1000개로 #v2041200#"); 
    } 
function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
            cm.haveItem(4001126 ,1000); 
            cm.gainItem(4001126,-1000); 
            cm.gainItem(2049003,1); 
            cm.sendOk("#b백의 주문서#k의 효과는 20% 확률로 주문서 실패시 업그레이드 횟수가 줄지 않는답니다."); 
        } else if (selection == 1) { 
            cm.haveItem(4001126,1000); 
            cm.gainItem(4001126,-1000); 
            cm.gainItem(2049100,1); 
            cm.sendOk("#b혼돈의 주문서#k의 효과는 60% 확률로 주문서가 성공시 옵션을 마음대로 변경해놓답니다.");  
        } else if (selection == 2) { 
            cm.haveItem(4031683,1000); 
            cm.gainItem(4031683,-1000); 
            cm.gainItem(2041212,1); 
            cm.sendOk("#b호루스의 눈#k의 효과는 70% 확률로 호루스의 목걸이의 옵션을 추가시킵니다.");
        } else if (selection == 3) { 
            cm.haveItem(4031683,1000); 
            cm.gainItem(4031683,-1000); 
            cm.gainItem(2049102,1); 
            cm.sendOk("#b리프 주문서#k의 효과는 100% 확률로 메이플 리프에 옵션을 추가시킵니다.");
        } else if (selection == 4) { 
            cm.haveItem(4031683,1000); 
            cm.gainItem(4031683,-1000); 
            cm.gainItem(2041211,1); 
            cm.sendOk("#b슈피겔만의 구슬#k의 효과는 60% 확률로 슈피겔만의 목걸이에 옵션을 추가시킵니다.");
        } else if (selection == 5) { 
            cm.haveItem(4031683,1000); 
            cm.gainItem(4031683,-1000); 
            cm.gainItem(2041200,1); 
            cm.sendOk("#b드래곤의 알#k의 효과는 100% 확률로 혼테일의 목걸이에 목걸이에 옵션을 추가시킵니다.");
            cm.dispose(); 
        } 
    }  
