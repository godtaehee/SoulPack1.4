/* 단풍의 두번째 작품! 타임리스 교환 NPC
*  
* 제작자 : 단풍(gwangyun1) 무단배포! 무단수정! 허용안합니다. 만약 무단수정! 무단배포 하시는 분이 나타난다면 @USFM 활동 접습니다!
* 
* 타임리스 NPC.js: 한손검.양손검.한손도끼.한손둔기.양손도끼.양손둔기.너클 추가! 차차 더 추가 할 것 입니다. 
*/ 
function start() {    
        cm.sendSimple("안녕하세요!, #r#h ##k님, #b드래곤 아이템#k을 더욱 강화시켜서 #g타임리스 아이템#k으로 만들어 주겠어요! #k\r\n#L0# #v1302059# 5개로 #v1302081# #k\r\n#L1##v1312031# 5개로 #v1312037##k\r\n#L2##v1322052# 5개로 #v1322060##k\r\n#L3##v1402036# 5개로 #v1402046# #k\r\n#L4##v1412026# 5개로 #v1412033##k\r\n#L5##v1422028# 5개로 #v1422037##k\r\n#L6##v1482013# 5개로 #v1482023#"); 
    } 
function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
            cm.haveItem(1302059,5); 
            cm.gainItem(1302059,-5); 
            cm.gainItem(1302081,1); 
            cm.sendOk("#g타임리스 한손검#k을 받으셨습니다!"); 
        } else if (selection == 1) { 
            cm.haveItem(1312031,5); 
            cm.gainItem(1312031,-5); 
            cm.gainItem(1312037,1); 
            cm.sendOk("#g타임리스 한손도끼#k를 받으셨습니다!"); 
        } else if (selection == 2) { 
            cm.haveItem(1322052,5); 
            cm.gainItem(1322052,-5); 
            cm.gainItem(1322060,1); 
            cm.sendOk("#g타임리스 한손둔기#k를 받으셨습니다!"); 
        } else if (selection == 3) { 
            cm.haveItem(1402036,5); 
            cm.gainItem(1402036,-5); 
            cm.gainItem(1402046,1); 
            cm.sendOk("#g타임리스 양손검#k을 받으셨습니다!"); 
        } else if (selection == 4) { 
            cm.haveItem(1412026,5); 
            cm.gainItem(1412026,-5); 
            cm.gainItem(1412033,1); 
            cm.sendOk("#g타임리스 양손도끼#k를 받으셨습니다!"); 
        } else if (selection == 5) { 
            cm.haveItem(1422028,5); 
            cm.gainItem(1422028,-5); 
            cm.gainItem(1422037,1); 
            cm.sendOk("#g타임리스 양손둔기#k를 받으셨습니다!"); 
        } else if (selection == 6) { 
            cm.haveItem(1482013,5); 
            cm.gainItem(1482013,-5); 
            cm.gainItem(11482023,1); 
            cm.sendOk("#g타임리스 너클#k을 받으셨습니다!"); 
            cm.dispose(); 
        } 
    }  