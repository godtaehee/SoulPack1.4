/* ���� : ��ȯ ��ũ��Ʈ
*  
* ������ : ��ǳ(gwangyun1)
* 
* ���찳��ȯ NPC 
*/ 
function start() {  
        cm.sendSimple("#v4001038##v4001039##v4001040##v4001041##v4001042##v4001043#�� ����ֽŴٸ� #b����ä��#k�� #bȭ����īŸ��#k �Ǵ� #b�õ���ġ#k�� ������ �� �ֽ��ϴ�.#k\r\n#b#L0# ���찳�� ����ä�� �����#k\r\n#b#L1# ���찳�� ȭ����īŸ�� �����#k\r\n#b#L2# ���찳�� �õ���ġ �����")
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
            cm.sendOk("#v1302049# #b����ä��#k�� �ϼ��Ǿ����ϴ�!"); 
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
            cm.sendOk("#v1302063# #bȭ����īŸ��#k�� �ϼ��Ǿ����ϴ�!");
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
            cm.sendOk("#v1442039# #b������ġ#k�� �ϼ��Ǿ����ϴ�!");
            cm.dispose(); 
        } 
    }  