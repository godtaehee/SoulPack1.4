/* 메이플모자 교환 NPC
*  
* 제작자 : 단풍(gwangyun1) 무단배포! 무단수정! 허용안합니다. 만약 무단수정! 무단배포 하시는 분이 나타난다면 @USFM 활동 접습니다!
* 
* 교환 NPC.js: 메이플모자(기본) ~ 메이플모자(4) 
*/ 
function start() {    
        cm.sendSimple("안녕하세요! 저는 당신의 메이플모자를 강화 시켜드리겠습니다! #k\r\n#L0# #v4001126# 1000개로 #v1002508# #k\r\n#L1##v1002508# 1개,#v4001126# 1000개로  #v1002509##k\r\n#L2##v1002509# 1개,#v4001126# 2000개로 #v1002510##k\r\n#L3##v1002510# 1개,#v4001126# 4000개로 #v1002511# #k\r\n#L4##v1002511# 1개,#v4001126# 6000개로#v1002758#"); 
    } 
function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
            cm.haveItem(4001126,1000);
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1002508,1); 
            cm.sendOk("#g메이플모자(기본)#k을 받으셨습니다!"); 
        } else if (selection == 1) { 
            cm.haveItem(4001126,1000); 
            cm.haveItem(1002508,1); 
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1002508,-1); 
            cm.gainItem(1002509,1); 
            cm.sendOk("#g메이플모자(1)#k을 받으셨습니다!"); 
        } else if (selection == 2) { 
            cm.haveItem(1002509,1); 
            cm.haveItem(4001126,2000); 
            cm.gainItem(1002509,-1); 
            cm.gainItem(4001126,-2000);
            cm.gainItem(1002510,1); 
            cm.sendOk("#g메이플모자(2)#k를 받으셨습니다!"); 
        } else if (selection == 3) { 
            cm.haveItem(1002510,1); 
            cm.haveItem(4001126,4000); 
            cm.gainItem(1002510,-1); 
            cm.gainItem(4001126,-4000); 
            cm.gainItem(1002511,1); 
            cm.sendOk("#g메이플모자(3)#k을 받으셨습니다!"); 
        } else if (selection == 4) { 
            cm.haveItem(1002511,1); 
            cm.haveItem(4001126,6000); 
            cm.gainItem(1002511,-1); 
            cm.gainItem(4001126,-6000); 
            cm.gainItem(1002758,1); 
            cm.sendOk("#g메이플모자(4)#k를 받으셨습니다!"); 
            cm.dispose(); 
        } 
    }  