/* ���� : ��ȯ ��ũ��Ʈ
*  
* ������ : ��ǳ(gwangyun1) :: ���ܼ���, ���ܹ��� �����մϴ� ::
* 
* ������ ������ ��ȯ NPC
*
* Ȱ��ī�� : http://cafe.naver.com/myfm1 [@MYFM - ���� ����������] 
*/
function start() {  
        cm.sendSimple("�ȳ��ϼ���! #r������#k��, Ȥ�� #r��ǳ��#k�� ������ ����� �����Ű���?#k\r\n#L0# ��ǳ�� 500���� #r�����ø���(1)#k �����#k\r\n#L1# ��ǳ�� 1000���� #r�����ø���(2)#k �����#k\r\n#L2# ��ǳ�� 2000���� #r�����ø���(3)#k �����#k\r\n#L3# ��ǳ�� 500���� #r�������̾(1)#k �����#k\r\n#L4# ��ǳ�� 1000���� #r�������̾(2)#k �����#k\r\n#L5# ��ǳ�� 2000���� #r�������̾(3)#k �����#k\r\n#L6# ��ǳ�� 100���� #r�����ø���(�⺻)#k �����#k\r\n#L7# ��ǳ�� 500���� #r�����ø���(1)#k �����#k\r\n#L8# ��ǳ�� 1000���� #r�����ø���(2)#k �����#k\r\n#L9# ��ǳ�� 2000���� #r�����ø���(3)#k �����#k\r\n#L10# ��ǳ�� 3000���� #r�����ø���(4)#k �����#k\r\n#L11# ��ǳ�� 1000���� #b�����üҵ�#k �����#k\r\n#L12# ��ǳ�� 2000���� #b��������Ʈ�ҵ�#k �����#k\r\n#L13# ��ǳ�� 3000���� #b�����ñ۷θ��ҵ�#k �����#k\r\n#L14# ��ǳ�� 3000���� #b�����üҿ����#k �����#k\r\n#L15# ��ǳ�� 2000���� #b�����ý��Ǿ�#k �����#k\r\n#L16# ��ǳ�� 3000���� #b�����ú���Ʈ���Ǿ�#k �����#k\r\n#L17# ��ǳ�� 2000���� #b�����ùٱ׳�#k �����#k\r\n#L18# ��ǳ�� 3000���� #b�����ô�ũ����Ʈ#k �����#k\r\n#L19# ��ǳ�� 3000���� #b�����þƼ�����#k �����#k\r\n#L20# ��ǳ�� 1000���� #b�����ý�����#k �����#k\r\n#L21# ��ǳ�� 2000���� #b������ĭ����#k �����#k\r\n#L22# ��ǳ�� 3000���� #b�����ý�ĭ��#k �����#k\r\n#L23# ��ǳ�� 1000���� #b�����ý�����#k �����#k\r\n#L24# ��ǳ�� 2000���� #b�����ö󸶽�����#k �����#k\r\n#L25# ��ǳ�� 3000���� #b������������������#k �����#k\r\n#L26# ��ǳ�� 3000���� #b�����û��̴Ͽϵ�#k �����#k\r\n#L27# ��ǳ�� 1000���� #b�����ú���#k �����#k\r\n#L28# ��ǳ�� 2000���� #b���������ͽ�#k �����#k\r\n#L29# ��ǳ�� 3000���� #b�����ð���ٺ���#k �����#k\r\n#L30# ��ǳ�� 1000���� #b������ũ�ο�#k �����#k\r\n#L31# ��ǳ�� 2000���� #b������ũ�ν�����#k �����#k\r\n#L32# ��ǳ�� 3000���� #b�����ôϻ���#k �����#k\r\n#L33# ��ǳ�� 1000���� #b�����ó�Ŭ#k �����#k\r\n#L34# ��ǳ�� 2000���� #b�����ý����ΰ�#k �����#k\r\n#L35# ��ǳ�� 3000���� #b�����ð��ũ��#k �����#k\r\n#L36# ��ǳ�� 1000���� #b�����ð�#k �����#k\r\n#L37# ��ǳ�� 2000���� #b�����ý����ǽ���#k �����#k\r\n#L38# ��ǳ�� 3000���� #b������ĳ����#k �����#k\r\n#L39# ��ǳ�� 500���� #g�����ÿ��#k �����#k\r\n#L40# ��ǳ�� 500���� #g������Ʈ��#k �����#k\r\n#L41# ��ǳ�� 500���� #g�����ñ��#k �����#k\r\n#L42# ��ǳ�� 500���� #g�����ý���#k �����#k\r\n#L43# ��ǳ�� 1000���� #g�����ø����ǽ���#k �����#k\r\n#L44# ��ǳ�� 1000���� #g�����ÿ������#k �����")
    } 
function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1102166,1); 
            cm.sendOk("#v1102166# #r�����ø���(1)#k ȹ��!");
        } else if (selection == 1) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1102167,1); 
            cm.sendOk("#v1102167# #r�����ø���(2)#k ȹ��!");
        } else if (selection == 2) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1102168,1); 
            cm.sendOk("#v1102168# #r�����ø���(3)#k ȹ��!");
        } else if (selection == 3) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1032040,1); 
            cm.sendOk("#v1032040# #r�������̾(1)#k ȹ��!");
        } else if (selection == 4) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1032041,1); 
            cm.sendOk("#v1032041# #r�������̾(2)#k ȹ��!");
        } else if (selection == 5) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1032042,1); 
            cm.sendOk("#v1032042# #r�������̾(3)#k ȹ��!");
        } else if (selection == 6) { 
            cm.haveItem(4001126,100);  
            cm.gainItem(4001126,-100); 
            cm.gainItem(1002508,1); 
            cm.sendOk("#v1002508# #r�����ø���(�⺻)#k ȹ��!");
        } else if (selection == 7) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1002509,1); 
            cm.sendOk("#v1002509# #r�����ø���(1)#k ȹ��!");
        } else if (selection == 8) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1002510,1); 
            cm.sendOk("#v1002510# #r�����ø���(2)#k ȹ��!");
        } else if (selection == 9) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1002511,1); 
            cm.sendOk("#v1002511# #r�����ø���(3)#k ȹ��!");
        } else if (selection == 10) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1002758,1); 
            cm.sendOk("#v1002758# #r�����ø���(4)#k ȹ��!");
        } else if (selection == 11) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1302020,1); 
            cm.sendOk("#v1302020# #b�����üҵ�#k ȹ��!");
        } else if (selection == 12) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1302030,1); 
            cm.sendOk("#v1302030# #b��������Ʈ�ҵ�#k ȹ��!");
        } else if (selection == 13) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1302064,1); 
            cm.sendOk("#v1302064# #b�����ñ۷θ��ҵ�#k ȹ��!");
        } else if (selection == 14) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1402039,1); 
            cm.sendOk("#v1402039# #b�����üҿ����#k ȹ��!");
        } else if (selection == 15) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1432012,1); 
            cm.sendOk("#v1432012# #b�����ý��Ǿ�#k ȹ��!");
        } else if (selection == 16) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1432040,1); 
            cm.sendOk("#v1432040# #b�����ú���Ʈ���Ǿ�#k ȹ��!");
        } else if (selection == 17) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1332025,1); 
            cm.sendOk("#v1332025# #b�����ùٱ׳�#k ȹ��!");
        } else if (selection == 18) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1332055,1); 
            cm.sendOk("#v1332055# #b�����ô�ũ����Ʈ#k ȹ��!");
        } else if (selection == 19) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1332056,1); 
            cm.sendOk("#v1332056# #b�����þƼ�����#k ȹ��!");
        } else if (selection == 20) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1472030,1); 
            cm.sendOk("#v1472030# #b�����ý�����#k ȹ��!");
        } else if (selection == 21) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1472032,1); 
            cm.sendOk("#v1472032# #b������ĭ����#k ȹ��!");
        } else if (selection == 22) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1472055,1); 
            cm.sendOk("#v1472055# #b�����ý�ĭ��#k ȹ��!");
        } else if (selection == 23) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1382009,1); 
            cm.sendOk("#v1382009# #b�����ý�����#k ȹ��!");
        } else if (selection == 24) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1382012,1); 
            cm.sendOk("#v1382012# #b�����ö󸶽�����#k ȹ��!");
        } else if (selection == 25) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1382039,1); 
            cm.sendOk("#v1382039# #b������������������#k ȹ��!");
        } else if (selection == 26) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1372034,1); 
            cm.sendOk("#v1372034# #b�����û��̴Ͽϵ�#k ȹ��!");
        } else if (selection == 27) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1452016,1); 
            cm.sendOk("#v1452016# #b�����ú���#k ȹ��!");
        } else if (selection == 28) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1452022,1); 
            cm.sendOk("#v1452022# #b���������ͽ�#k ȹ��!");
        } else if (selection == 29) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1452045,1); 
            cm.sendOk("#v1452045# #b�����ð���ٺ���#k ȹ��!");
        } else if (selection == 30) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1462014,1); 
            cm.sendOk("#v1462014# #b������ũ�ο�#k ȹ��!");
        } else if (selection == 31) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1462019,1); 
            cm.sendOk("#v1462019# #b������ũ�ν�����#k ȹ��!");
        } else if (selection == 32) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1462040,1); 
            cm.sendOk("#v1462040# #b�����ôϻ���#k ȹ��!");
        } else if (selection == 33) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1482020,1); 
            cm.sendOk("#v1482020# #b�����ó�Ŭ#k ȹ��!");
        } else if (selection == 34) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1482021,1); 
            cm.sendOk("#v1482021# #b�����ý����ΰ�#k ȹ��!");
        } else if (selection == 35) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1482022,1); 
            cm.sendOk("#v1482022# #b�����ð��ũ��#k ȹ��!");
        } else if (selection == 36) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1492020,1); 
            cm.sendOk("#v1492020# #b�����ð�#k ȹ��!");
        } else if (selection == 37) { 
            cm.haveItem(4001126,2000);  
            cm.gainItem(4001126,-2000); 
            cm.gainItem(1492021,1); 
            cm.sendOk("#v1492021# #b�����ý����ǽ���#k ȹ��!");
        } else if (selection == 38) { 
            cm.haveItem(4001126,3000);  
            cm.gainItem(4001126,-3000); 
            cm.gainItem(1492022,1); 
            cm.sendOk("#v1492021# #b������ĳ����#k ȹ��!");
        } else if (selection == 39) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1302058,1); 
            cm.sendOk("#v1302058# #g�����ÿ��#k ȹ��!");
        } else if (selection == 40) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1432046,1); 
            cm.sendOk("#v1432046# #g������Ʈ��#k ȹ��!");
        } else if (selection == 41) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1302036,1); 
            cm.sendOk("#v1302036# #g�����ñ��#k ȹ��!");
        } else if (selection == 42) { 
            cm.haveItem(4001126,500);  
            cm.gainItem(4001126,-500); 
            cm.gainItem(1092030,1); 
            cm.sendOk("#v1092030# #g�����ý���#k ȹ��!");
        } else if (selection == 43) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1092045,1); 
            cm.sendOk("#v1092045# #g�����ø����ǽ���#k ȹ��!");
        } else if (selection == 44) { 
            cm.haveItem(4001126,1000);  
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1092046,1); 
            cm.sendOk("#v1092046# #g�����ÿ������#k ȹ��!");
            cm.dispose(); 
        } 
    }  