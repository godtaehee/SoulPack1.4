/*
      �� give about  NO NO NO NO NO NO NO NO NO ��
      �� Scripts Maker is Rudolph => DanPungSsy ��
*/

/*
      NPC  : Ace of Heart
      explanation : TeachSkill
      Maker : Rudolph(gwangyun1)
*/
function start() { 
        cm.sendSimple("�ȳ��ϼ���. ���� ��ſ��� ���� #r���ο� ��ų#k�� �ο��� �帰��ϴ�.#k\r\n#L0# #b1000�� �޼ҷ� ������ ȥ ����#k#k\r\n#L1# #b500�� �޼ҷ� ���̵� ����#k#k\r\n#L2##b 5000�� �޼ҷ� ������ �޾Ƹ� ����#b")
    } 
function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
            if (cm.getMeso() >= 10000000) {
	    cm.gainMeso(-10000000);
            cm.teachSkill(1003, 1, 1)
            cm.dispose();
            }
            cm.sendOk("#b������ȥ#k�� ȹ���ϼ̽��ϴ�.\r\n#b�ʺ��� ��ųâ#k�� Ȯ�����ֿ�.");
        } else if (selection == 1) { 
            if (cm.getMeso() >= 5000000) {
	    cm.gainMeso(-5000000);
            cm.teachSkill(1004, 1, 1)
            cm.sendOk("#b���̵�#k�� ȹ���ϼ̽��ϴ�.\r\n#b�ʺ��� ��ųâ#k�� Ȯ�����ּ���.");
            cm.dispose(); 
        } 
        } else if (selection == 2) { 
            if (cm.getMeso() >= 50000000) {
	    cm.gainMeso(-50000000);
            cm.teachSkill(1004, 1, 1)
            cm.sendOk("#b������ �޾Ƹ�#k�� ȹ���ϼ̽��ϴ�.\r\n#b�ʺ��� ��ųâ#k�� Ȯ�����ּ���.");
            cm.dispose(); 
        } 
       }  
      }