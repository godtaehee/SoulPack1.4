/* 종류 : 교환 스크립트
*  
* 제작자 : 단풍(gwangyun1) :: 무단수정, 무단배포 금지합니다 ::
* 
* 메이플 아이템 교환 NPC
*
* 활동카페 : http://cafe.naver.com/myfm1 [@MYFM - 나의 프리메이플] 
*/
function start() {  
        cm.sendSimple("안녕하세요! #r여행자#k님, 혹시 #r단풍잎#k을 가지고 계시지 않으신가요?#k\r\n#L0# 단풍잎 500개로 #r메이플망토(1)#k 만들기#k\r\n#L1# 단풍잎 1000개로 #r메이플망토(2)#k 만들기#k\r\n#L2# 단풍잎 2000개로 #r메이플망토(3)#k 만들기#k\r\n#L3# 단풍잎 500개로 #r메이플이어링(1)#k 만들기#k\r\n#L4# 단풍잎 1000개로 #r메이플이어링(2)#k 만들기#k\r\n#L5# 단풍잎 2000개로 #r메이플이어링(3)#k 만들기#k\r\n#L6# 단풍잎 100개로 #r메이플모자(기본)#k 만들기#k\r\n#L7# 단풍잎 500개로 #r메이플모자(1)#k 만들기#k\r\n#L8# 단풍잎 1000개로 #r메이플모자(2)#k 만들기#k\r\n#L9# 단풍잎 2000개로 #r메이플모자(3)#k 만들기#k\r\n#L10# 단풍잎 3000개로 #r메이플모자(4)#k 만들기#k\r\n#L11# 단풍잎 1000개로 #b메이플소드#k 만들기#k\r\n#L12# 단풍잎 2000개로 #b메이플켈트소드#k 만들기#k\r\n#L13# 단풍잎 3000개로 #b메이플글로리소드#k 만들기#k\r\n#L14# 단풍잎 3000개로 #b메이플소울로헨#k 만들기#k\r\n#L15# 단풍잎 2000개로 #b메이플스피어#k 만들기#k\r\n#L16# 단풍잎 3000개로 #b메이플베리트스피어#k 만들기#k\r\n#L17# 단풍잎 2000개로 #b메이플바그나#k 만들기#k\r\n#L18# 단풍잎 3000개로 #b메이플다크메이트#k 만들기#k\r\n#L19# 단풍잎 3000개로 #b메이플아수라대거#k 만들기#k\r\n#L20# 단풍잎 1000개로 #b메이플스론즈#k 만들기#k\r\n#L21# 단풍잎 2000개로 #b메이플칸데오#k 만들기#k\r\n#L22# 단풍잎 3000개로 #b메이플스칸다#k 만들기#k\r\n#L23# 단풍잎 1000개로 #b메이플스태프#k 만들기#k\r\n#L24# 단풍잎 2000개로 #b메이플라마스태프#k 만들기#k\r\n#L25# 단풍잎 3000개로 #b메이플위스덤스태프#k 만들기#k\r\n#L26# 단풍잎 3000개로 #b메이플샤이니완드#k 만들기#k\r\n#L27# 단풍잎 1000개로 #b메이플보우#k 만들기#k\r\n#L28# 단풍잎 2000개로 #b메이플헌터스#k 만들기#k\r\n#L29# 단풍잎 3000개로 #b메이플간디바보우#k 만들기#k\r\n#L30# 단풍잎 1000개로 #b메이플크로우#k 만들기#k\r\n#L31# 단풍잎 2000개로 #b메이플크로스보우#k 만들기#k\r\n#L32# 단풍잎 3000개로 #b메이플니샤다#k 만들기#k\r\n#L33# 단풍잎 1000개로 #b메이플너클#k 만들기#k\r\n#L34# 단풍잎 2000개로 #b메이플스톰핑거#k 만들기#k\r\n#L35# 단풍잎 3000개로 #b메이플골든크로#k 만들기#k\r\n#L36# 단풍잎 1000개로 #b메이플건#k 만들기#k\r\n#L37# 단풍잎 2000개로 #b메이플스톰피스톨#k 만들기#k\r\n#L38# 단풍잎 3000개로 #b메이플캐논슈터#k 만들기#k\r\n#L39# 단풍잎 500개로 #g메이플우산#k 만들기#k\r\n#L40# 단풍잎 500개로 #g메이플트리#k 만들기#k\r\n#L41# 단풍잎 500개로 #g메이플깃발#k 만들기#k\r\n#L42# 단풍잎 500개로 #g메이플쉴드#k 만들기#k\r\n#L43# 단풍잎 1000개로 #g메이플메지션쉴드#k 만들기#k\r\n#L44# 단풍잎 1000개로 #g메이플워리어쉴드#k 만들기")
    } 
function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1102166,1); 
            cm.sendOk("#v1102166# #r메이플망토(1)#k 획득!");
        } else if (selection == 1) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1102167,1); 
            cm.sendOk("#v1102167# #r메이플망토(2)#k 획득!");
        } else if (selection == 2) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1102168,1); 
            cm.sendOk("#v1102168# #r메이플망토(3)#k 획득!");
        } else if (selection == 3) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1032040,1); 
            cm.sendOk("#v1032040# #r메이플이어링(1)#k 획득!");
        } else if (selection == 4) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1032041,1); 
            cm.sendOk("#v1032041# #r메이플이어링(2)#k 획득!");
        } else if (selection == 5) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1032042,1); 
            cm.sendOk("#v1032042# #r메이플이어링(3)#k 획득!");
        } else if (selection == 6) { 
            cm.haveItem(4001126,100);  
            cm.gainItem(4001126,-100); 
            cm.gainItem(1002508,1); 
            cm.sendOk("#v1002508# #r메이플모자(기본)#k 획득!");
        } else if (selection == 7) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1002509,1); 
            cm.sendOk("#v1002509# #r메이플모자(1)#k 획득!");
        } else if (selection == 8) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1002510,1); 
            cm.sendOk("#v1002510# #r메이플모자(2)#k 획득!");
        } else if (selection == 9) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1002511,1); 
            cm.sendOk("#v1002511# #r메이플모자(3)#k 획득!");
        } else if (selection == 10) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1002758,1); 
            cm.sendOk("#v1002758# #r메이플모자(4)#k 획득!");
        } else if (selection == 11) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1302020,1); 
            cm.sendOk("#v1302020# #b메이플소드#k 획득!");
        } else if (selection == 12) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1302030,1); 
            cm.sendOk("#v1302030# #b메이플켈트소드#k 획득!");
        } else if (selection == 13) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1302064,1); 
            cm.sendOk("#v1302064# #b메이플글로리소드#k 획득!");
        } else if (selection == 14) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1402039,1); 
            cm.sendOk("#v1402039# #b메이플소울로헨#k 획득!");
        } else if (selection == 15) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1432012,1); 
            cm.sendOk("#v1432012# #b메이플스피어#k 획득!");
        } else if (selection == 16) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1432040,1); 
            cm.sendOk("#v1432040# #b메이플베리트스피어#k 획득!");
        } else if (selection == 17) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1332025,1); 
            cm.sendOk("#v1332025# #b메이플바그나#k 획득!");
        } else if (selection == 18) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1332055,1); 
            cm.sendOk("#v1332055# #b메이플다크메이트#k 획득!");
        } else if (selection == 19) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1332056,1); 
            cm.sendOk("#v1332056# #b메이플아수라대거#k 획득!");
        } else if (selection == 20) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1472030,1); 
            cm.sendOk("#v1472030# #b메이플스론즈#k 획득!");
        } else if (selection == 21) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1472032,1); 
            cm.sendOk("#v1472032# #b메이플칸데오#k 획득!");
        } else if (selection == 22) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1472055,1); 
            cm.sendOk("#v1472055# #b메이플스칸다#k 획득!");
        } else if (selection == 23) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1382009,1); 
            cm.sendOk("#v1382009# #b메이플스태프#k 획득!");
        } else if (selection == 24) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1382012,1); 
            cm.sendOk("#v1382012# #b메이플라마스태프#k 획득!");
        } else if (selection == 25) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1382039,1); 
            cm.sendOk("#v1382039# #b메이플위스덤스태프#k 획득!");
        } else if (selection == 26) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1372034,1); 
            cm.sendOk("#v1372034# #b메이플샤이니완드#k 획득!");
        } else if (selection == 27) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1452016,1); 
            cm.sendOk("#v1452016# #b메이플보우#k 획득!");
        } else if (selection == 28) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1452022,1); 
            cm.sendOk("#v1452022# #b메이플헌터스#k 획득!");
        } else if (selection == 29) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1452045,1); 
            cm.sendOk("#v1452045# #b메이플간디바보우#k 획득!");
        } else if (selection == 30) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1462014,1); 
            cm.sendOk("#v1462014# #b메이플크로우#k 획득!");
        } else if (selection == 31) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1462019,1); 
            cm.sendOk("#v1462019# #b메이플크로스보우#k 획득!");
        } else if (selection == 32) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1462040,1); 
            cm.sendOk("#v1462040# #b메이플니샤다#k 획득!");
        } else if (selection == 33) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1482020,1); 
            cm.sendOk("#v1482020# #b메이플너클#k 획득!");
        } else if (selection == 34) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1482021,1); 
            cm.sendOk("#v1482021# #b메이플스톰핑거#k 획득!");
        } else if (selection == 35) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1482022,1); 
            cm.sendOk("#v1482022# #b메이플골든크로#k 획득!");
        } else if (selection == 36) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1492020,1); 
            cm.sendOk("#v1492020# #b메이플건#k 획득!");
        } else if (selection == 37) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1492021,1); 
            cm.sendOk("#v1492021# #b메이플스톰피스톨#k 획득!");
        } else if (selection == 38) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1492022,1); 
            cm.sendOk("#v1492021# #b메이플캐논슈터#k 획득!");
        } else if (selection == 39) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1302058,1); 
            cm.sendOk("#v1302058# #g메이플우산#k 획득!");
        } else if (selection == 40) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1432046,1); 
            cm.sendOk("#v1432046# #g메이플트리#k 획득!");
        } else if (selection == 41) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1302036,1); 
            cm.sendOk("#v1302036# #g메이플깃발#k 획득!");
        } else if (selection == 42) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1092030,1); 
            cm.sendOk("#v1092030# #g메이플쉴드#k 획득!");
        } else if (selection == 43) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1092045,1); 
            cm.sendOk("#v1092045# #g메이플매지션쉴드#k 획득!");
        } else if (selection == 44) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1092046,1); 
            cm.sendOk("#v1092046# #g메이플워리어쉴드#k 획득!");
            cm.dispose(); 
        } 
    }  