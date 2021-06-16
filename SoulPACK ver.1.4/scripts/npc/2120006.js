/* 종류 : 교환 스크립트
*  
* 제작자 : 단풍(gwangyun1)
* 
* 지우개교환 NPC 
*/ 
function start() {  
        cm.sendSimple("#v4001038##v4001039##v4001040##v4001041##v4001042##v4001043#를 모아주신다면 #b광선채찍#k과 #b화염의카타나#k 또는 #b냉동참치#k를 얻으실 수 있습니다.#k\r\n#b#L0# 지우개로 광선채찍 만들기#k\r\n#b#L1# 지우개로 화염의카타나 만들기#k\r\n#b#L2# 지우개로 냉동참치 만들기")
    } 
function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
            cm.haveItem(4001038,1); 
            cm.haveItem(4001039,1); 
            cm.haveItem(4001040,1); 
            cm.haveItem(4001041,1); 
            cm.haveItem(4001042,1); 
            cm.haveItem(4001043,1); 
            cm.gainItem(4001038,-1); 
            cm.gainItem(4001039,-1); 
            cm.gainItem(4001040,-1); 
            cm.gainItem(4001041,-1); 
            cm.gainItem(4001042,-1); 
            cm.gainItem(1302059,-1); 
            cm.gainItem(4001043,1); 
            cm.sendOk("#v1302049# #b광선채찍#k이 완성되었습니다!"); 
        } else if (selection == 1) { 
            cm.haveItem(4001038,1); 
            cm.haveItem(4001039,1); 
            cm.haveItem(4001040,1); 
            cm.haveItem(4001041,1); 
            cm.haveItem(4001042,1); 
            cm.haveItem(4001043,1); 
            cm.gainItem(4001038,-1); 
            cm.gainItem(4001039,-1); 
            cm.gainItem(4001040,-1); 
            cm.gainItem(4001041,-1); 
            cm.gainItem(4001042,-1); 
            cm.gainItem(1302059,-1);
            cm.gainItem(1302063,1); 
            cm.sendOk("#v1302063# #b화염의카타나#k가 완성되었습니다!");
        } else if (selection == 2) { 
            cm.haveItem(4001038,1); 
            cm.haveItem(4001039,1); 
            cm.haveItem(4001040,1); 
            cm.haveItem(4001041,1); 
            cm.haveItem(4001042,1); 
            cm.haveItem(4001043,1); 
            cm.gainItem(4001038,-1); 
            cm.gainItem(4001039,-1); 
            cm.gainItem(4001040,-1); 
            cm.gainItem(4001041,-1); 
            cm.gainItem(4001042,-1); 
            cm.gainItem(1302059,-1);
            cm.gainItem(1442039,1); 
            cm.sendOk("#v1442039# #b냄동참치#k가 완성되었습니다!");
            cm.dispose(); 
        } 
    }  