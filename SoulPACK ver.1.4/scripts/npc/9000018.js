/*


		       ������ ��ȸ(f_lla)  - "��ƿ��"
		       �ڹ��ܺ����� �����մϴ�.��

			       ::: ��ó :::
			SA.������â�Crush
			      ��ȸ(f_lla)
				
	���� �ڷ�� SA.������â�Crush �����������ڷ�ν� Ÿī���(����) ��������� �����������.
		       �ؼ����� ����°ǵ��� �����ּ���.



*/
/**
P.S ::
����� ����Ű����� �� '�밡��' �پ����ϴ�.
���� ���׹� ���������� �ִٸ�, <f_lla@naver.com>
���Ϻ����ּ���.
 
	: @	<Naver E-Mail : @ f_lla@naver.com>			@  :
	: @	<Server Name : MinHwi Server>			@  :
	: @	�� @ Exp 550 @ 					@  :
	: @	�� @ Drop 20 @ 					@  :
	: @	�� @ Mesos 30 @					@  :
	: @	�� @ Test ��  @						@  :
	: @	<  Server    :  http://www.minhwi.gg.gg/   >		@  :
	: @	<  My Blog  :  http://blog.naver.com/f_lla  >		@  :
	: @	<  Cafe        :  http://cafe.naver.com/sawnzm (SAC) >	@  :
			�ؼ����� ���⵵�ǵ��� �����ּ���.
**/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("�ȳ��ϼ���  #b[" + cm.getChar().getName() + "]#k ��!\r\n���� ���⸦�����ִ� #b��ƿ��#k����մϴ�.\r\n#b[ ���� ������ ������� �������� ����? �׷� ����� ��� �����ô�ϴ�, �򰡴� #r'���������е�'#k �� ���ּ��� ! ]#k\r\n����� #r����#k�� �°� ���⸦ �����帮�� �ֽ��ϴ�.\r\n������ ���⸦ �����÷��� #b5,000�޼�#k�� �ʿ��մϴ�.\r\n#r�������� ó���ϴ¹���#k, ������ �ȾƵ� ������ �������ʱ⶧���� �����ֽðų�, �ٸ�������� �ֽø�˴ϴ�.\r\n������ �����ʴ� ����� �����������ּ���.\r\n#L0##b���� ����#l\r\n#L1##b���� ����#l\r\n#L2##b�ü� ����#l\r\n#L3##b���� ����#l                           ");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendSimple("#rBy.f_lla#k\r\n�ȳ��ϼ���, #b[" + cm.getChar().getName() + "]#k(��)�� #r����#k�� �½��ϱ� ?\r\n#b�������� �ȾƵ� �����̳����������� �����ϼ���#k\r\n��հ�\r\n��\r\n#L29##i1402030##r[Lv]30#k : #b�� Ǫ#k\r\n#L30##i1402031##r[Lv]35#k : #bȣ ��#k\r\n#L31##i1402032##r[Lv]50#k : #b�׸���#k\r\n#L32##i1402033##r[Lv]60#k : #b�׷���#k\r\n#L33##i1402034##r[Lv]70#k : #b�׷���Ʈ ����#k\r\n��յ�����\r\n#L34##i1412022##r[Lv]35#k : #b�� ��¡#k\r\n#L35##i1412023##r[Lv]50#k : #b���̴�#k\r\n#L36##i1412024##r[Lv]60#k : #bũ�γ뽺#k\r\n#L37##i1412025##r[Lv]70#k : #b�۹���#k#l\r\n��\r\n��յб�\r\n#L38##i1422023##r[Lv]35#k : #b��� ���#k\r\n#L39##i1422024##r[Lv]50#k : #b��¡(?)#k\r\n#L40##i1422025##r[Lv]60#k : #bȣ����#k\r\n#L41##i1422026##r[Lv]70#k : #bũ��#k#l\r\n��\r\nâ\r\n#L42##i1432031##r[Lv]20#k : #b����â#k\r\n#L43##i1432032##r[Lv]35#k : #b���� ���#k\r\n#L44##i1432033##r[Lv]50#k : #b����â#k\r\n#L45##i1432034##r[Lv]60#k : #b������#k\r\n#L46##i1432035##r[Lv]70#k : #bȣ�� ��â#k\r\n��\r\n����\r\n#L47##i1442040##r[Lv]35#k : #b���浵#k\r\n#L48##i1442041##r[Lv]50#k : #b��õ��#k\r\n#L49##i1442042##r[Lv]60#k : #bȲ�浵#k\r\n#L50##i1442043##r[Lv]70#k : #b���ƻ�#k\r\n							                    ");
			} else if (selection == 1) {
				cm.sendSimple("#rBy.f_lla#k\r\n�ȳ��ϼ���, #b[" + cm.getChar().getName() + "]#k(��)�� #r����#k�� �½��ϱ� ?\r\n#b�������� �ȾƵ� �����̳����������� �����ϼ���#k\r\n#L20##i1372027##r[Lv]18#k : #b���ڵ� �ϵ�#k\r\n#L21##i1372028##r[Lv]38#k : #bũ�ι�#k\r\n#L22##i1372029##r[Lv]48#k : #b�̺� ���Ϸ�#k\r\n#L23##i1372030##r[Lv]58 : #b���� ����#k\r\n#L24##i1382030##r[Lv]35 : #b��ũ ������#k\r\n#L25##i1382031##r[Lv]45 : #b�� ��#k\r\n#L26##i1382032##r[Lv]55 : #b�̺� ����#k\r\n#L27##i1382033##r[Lv]65 : #b��ũ ���̵�#k\r\n#L28##i1382034##r[Lv]75#k : #b���̱�#k\r\n                ");
			} else if (selection == 2) {
				cm.sendSimple("#rBy.f_lla#k\r\n�ȳ��ϼ���, #b[" + cm.getChar().getName() + "]#k(��)�� #r�ü�#k�� �½��ϱ� ?\r\n#b�������� �ȾƵ� �����̳����������� �����ϼ���#k\r\n#L10##i1452038##r[Lv]20#k : ���̵�\r\n#L11##i1452039##r[Lv]35#k : �ø�Ǫ��\r\n#L12##i1452040##r[Lv]50#k : ��Ȳ����\r\n#L13##i1452041##r[Lv]60#k : �������\r\n#L14##i1452042##r[Lv]70#k : ��ũ �Ʒ��\r\n#L15##i1462033##r[Lv]18#k : #b��缮��#k\r\n#L16##i1462034##r[Lv]35#k : #b�ο��#k\r\n#L17##i1462035##r[Lv]50#k : #b��� Ŭ�ο�#k\r\n#L18##i1462036##r[Lv]60#k : #b�׷ν� �߰�#k\r\n#L19##i1462037##r[Lv]70#k : #b��ũ ����#k\r\n              ");
			} else if (selection == 3) {
				cm.sendSimple("#rBy.f_lla#k\r\n�ȳ��ϼ���, #b[" + cm.getChar().getName() + "]#k(��)�� #r����#k�� �½��ϱ�?\r\n#b�������� �ȾƵ� �����̳����������� �����ϼ���#k\r\n#L0##i1332043##r[Lv]20#k : #b����Ŭ����#l#k \r\n#L1##i1332044# #r[Lv]35#k : #b�ű�Ÿ#l#k \r\n#L2##i1332045# #r[Lv] 50#k : #b��Ÿ#l#k \r\n#L3##i1332046# #r[Lv]60#k : #bĭ���#l \r\n#L4##i1332047# #r[Lv]70#k : #b��õ��#k#l\r\n#L5##i1472045##r[Lv] 20#k : #b�Ƹ�Ƽ�� �ƴ�#k#l\r\n#L6##i1472046##r[Lv] 35#k : #b��ũ ������#k#l\r\n#L7##i1472047##r[Lv] 50#k : #b��ũ �Ⱓƽ#k#l\r\n#L8##i1472048##r[Lv] 60#k : #b�� ����#k#l\r\n#L9##i1472049##r[Lv] 70#k : #b�ں�� ��Ƽ��#k#l\r\n                         		������������������������������                        #bBy.f_lla#k\r\n������ �����ð����ϱ�?\r\n^^*                  ");
		}
		} if (status == 2) {
			if (selection == 0) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                           ");
					cm.gainMeso(-5000);
					cm.gainItem(1332043,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.					");
    					cm.dispose();
				}
			} else if (selection == 1) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                           ");
					cm.gainMeso(-5000);
					cm.gainItem(1332044,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.					");
    					cm.dispose();
				}
			} else if (selection == 2) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                    ");
					cm.gainMeso(-5000);
					cm.gainItem(1332045,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.					");
    					cm.dispose();
				}
			} else if (selection == 3) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
					cm.gainItem(1332046,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
    					cm.dispose();
				}
			} else if (selection == 4) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
					cm.gainItem(1332047,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
    					cm.dispose();
				}
   			} else if (selection == 5) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1472045,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
    				}
   			} else if (selection == 6) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
          					cm.gainItem(1472046,1);
          					cm.dispose();
   				 } else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
          					cm.dispose();
    				}
        					} else if (selection == 7) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
          					cm.gainItem(1472047,1);
          					cm.dispose();
        				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
          					cm.dispose();
    				}
        					} else if (selection == 8) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
          					cm.gainItem(1472048,1);
          					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
    				}
   					} else if (selection == 9) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1472049,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 10) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1452038,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 11) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1452039,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 12) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1452040,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 13) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1452041,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 14) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1452042,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 15) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1462033,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 16) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1462034,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 17) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1462035,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 18) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1462036,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 19) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1462037,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 20) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1372027,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 21) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1372028,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 22) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1372029,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 23) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1372030,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 24) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1382030,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 25) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1382031,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 26) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1382032,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 27) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1382033,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 28) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1382034,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 29) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1402030,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 30) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1402031,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 31) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1402032,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 32) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1402033,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 33) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1402034,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 34) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1412022,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 35) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1412023,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 36) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1412024,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 37) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1412025,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 38) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1422023,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 39) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1422024,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 40) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1422025,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 41) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1422026,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 42) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1432031,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 43) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1432032,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 44) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1432033,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 45) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1432034,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 46) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1432035,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 47) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1442040,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 48) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1442041,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 49) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1442042,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 50) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1442043,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
   					} else if (selection == 51) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("�� �����÷��� �ٽ� ã���ּ��� #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1442044,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("�̹� �������̰ų�#r�޼�#k�� �����մϴ�.				");
     					cm.dispose();
				}
			}
		}
	}
}