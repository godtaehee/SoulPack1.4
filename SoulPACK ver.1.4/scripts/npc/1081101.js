/* �����ø��� ��ȯ NPC
*  
* ������ : ��ǳ(gwangyun1) ���ܹ���! ���ܼ���! �����մϴ�. ���� ���ܼ���! ���ܹ��� �Ͻô� ���� ��Ÿ���ٸ� @USFM Ȱ�� �����ϴ�!
* 
* ��ȯ NPC.js: �����ø���(�⺻) ~ �����ø���(4) 
*/ 
function start() {    
        cm.sendSimple("�ȳ��ϼ���! ���� ����� �����ø��ڸ� ��ȭ ���ѵ帮�ڽ��ϴ�! #k\r\n#L0# #v4001126# 1000���� #v1002508# #k\r\n#L1##v1002508# 1��,#v4001126# 1000����  #v1002509##k\r\n#L2##v1002509# 1��,#v4001126# 2000���� #v1002510##k\r\n#L3##v1002510# 1��,#v4001126# 4000���� #v1002511# #k\r\n#L4##v1002511# 1��,#v4001126# 6000����#v1002758#"); 
    } 
function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
            cm.haveItem(4001126,1000);
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1002508,1); 
            cm.sendOk("#g�����ø���(�⺻)#k�� �����̽��ϴ�!"); 
        } else if (selection == 1) { 
            cm.haveItem(4001126,1000); 
            cm.haveItem(1002508,1); 
            cm.gainItem(4001126,-1000); 
            cm.gainItem(1002508,-1); 
            cm.gainItem(1002509,1); 
            cm.sendOk("#g�����ø���(1)#k�� �����̽��ϴ�!"); 
        } else if (selection == 2) { 
            cm.haveItem(1002509,1); 
            cm.haveItem(4001126,2000); 
            cm.gainItem(1002509,-1); 
            cm.gainItem(4001126,-2000);
            cm.gainItem(1002510,1); 
            cm.sendOk("#g�����ø���(2)#k�� �����̽��ϴ�!"); 
        } else if (selection == 3) { 
            cm.haveItem(1002510,1); 
            cm.haveItem(4001126,4000); 
            cm.gainItem(1002510,-1); 
            cm.gainItem(4001126,-4000); 
            cm.gainItem(1002511,1); 
            cm.sendOk("#g�����ø���(3)#k�� �����̽��ϴ�!"); 
        } else if (selection == 4) { 
            cm.haveItem(1002511,1); 
            cm.haveItem(4001126,6000); 
            cm.gainItem(1002511,-1); 
            cm.gainItem(4001126,-6000); 
            cm.gainItem(1002758,1); 
            cm.sendOk("#g�����ø���(4)#k�� �����̽��ϴ�!"); 
            cm.dispose(); 
        } 
    }  