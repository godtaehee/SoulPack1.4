/* ��ǳ�� �ι�° ��ǰ! Ÿ�Ӹ��� ��ȯ NPC
*  
* ������ : ��ǳ(gwangyun1) ���ܹ���! ���ܼ���! �����մϴ�. ���� ���ܼ���! ���ܹ��� �Ͻô� ���� ��Ÿ���ٸ� @USFM Ȱ�� �����ϴ�!
* 
* Ÿ�Ӹ��� NPC.js: �Ѽհ�.��հ�.�Ѽյ���.�Ѽյб�.��յ���.��յб�.��Ŭ �߰�! ���� �� �߰� �� �� �Դϴ�. 
*/ 
function start() {    
        cm.sendSimple("�ȳ��ϼ���!, #r#h ##k��, #b�巡�� ������#k�� ���� ��ȭ���Ѽ� #gŸ�Ӹ��� ������#k���� ����� �ְھ��! #k\r\n#L0# #v1302059# 5���� #v1302081# #k\r\n#L1##v1312031# 5���� #v1312037##k\r\n#L2##v1322052# 5���� #v1322060##k\r\n#L3##v1402036# 5���� #v1402046# #k\r\n#L4##v1412026# 5���� #v1412033##k\r\n#L5##v1422028# 5���� #v1422037##k\r\n#L6##v1482013# 5���� #v1482023#"); 
    } 
function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
            cm.haveItem(1302059,5); 
            cm.gainItem(1302059,-5); 
            cm.gainItem(1302081,1); 
            cm.sendOk("#gŸ�Ӹ��� �Ѽհ�#k�� �����̽��ϴ�!"); 
        } else if (selection == 1) { 
            cm.haveItem(1312031,5); 
            cm.gainItem(1312031,-5); 
            cm.gainItem(1312037,1); 
            cm.sendOk("#gŸ�Ӹ��� �Ѽյ���#k�� �����̽��ϴ�!"); 
        } else if (selection == 2) { 
            cm.haveItem(1322052,5); 
            cm.gainItem(1322052,-5); 
            cm.gainItem(1322060,1); 
            cm.sendOk("#gŸ�Ӹ��� �Ѽյб�#k�� �����̽��ϴ�!"); 
        } else if (selection == 3) { 
            cm.haveItem(1402036,5); 
            cm.gainItem(1402036,-5); 
            cm.gainItem(1402046,1); 
            cm.sendOk("#gŸ�Ӹ��� ��հ�#k�� �����̽��ϴ�!"); 
        } else if (selection == 4) { 
            cm.haveItem(1412026,5); 
            cm.gainItem(1412026,-5); 
            cm.gainItem(1412033,1); 
            cm.sendOk("#gŸ�Ӹ��� ��յ���#k�� �����̽��ϴ�!"); 
        } else if (selection == 5) { 
            cm.haveItem(1422028,5); 
            cm.gainItem(1422028,-5); 
            cm.gainItem(1422037,1); 
            cm.sendOk("#gŸ�Ӹ��� ��յб�#k�� �����̽��ϴ�!"); 
        } else if (selection == 6) { 
            cm.haveItem(1482013,5); 
            cm.gainItem(1482013,-5); 
            cm.gainItem(11482023,1); 
            cm.sendOk("#gŸ�Ӹ��� ��Ŭ#k�� �����̽��ϴ�!"); 
            cm.dispose(); 
        } 
    }  