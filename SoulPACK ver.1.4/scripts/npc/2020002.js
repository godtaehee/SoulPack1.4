importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

/*
������:�� ����
�� ������ ���ܹ����� �㰡�����ʽ��ϴ�.
�׸���, �������� �̸��� ��������������.
*/
var status = 0;
var price = 2000000;
var map = Array(211000100);

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
			cm.sendSimple("���� ���ο��� ���������ΰ�..\r\n#L1##b�Ƹ����� �������θ� �������Խ��ϴ�.#k#l\r\n\#L2##b�����Խ��ϴ�!#k#l");
			} else if (status == 1) {
			if (selection == 1) {
                                cm.sendSimple("������..#r�Ƹ����� ��������#k�� �޾ư����� �켱 �� ��Ź�ϳ��� ��������� ���ڳ�..\r\n#b������ �ճ���� �ִµ� #b#v4001001##k#b�� �ʹ� ���� �;���������..#k\n#r#b#v4001001##k#r10��#k�� ���ش��ָ�, #r�Ƹ����� ��������#k�� ����.\r\n�Ƹ� #r���긮��#k���� ����ִ� #bnana(H)#k�� ��������������!")
			} else if (status == 2) {
			} else if (selection == 2) { 
				if(cm.haveItem(4001001, 10) == false) {
					cm.sendOk("���� �������� #b#v4001001##k#r10��#k�� �� �Ȱ����Գ�!!");
				} else {
					cm.sendOk("���� ! ��Ӵ�� #b#v4001000##k#r�Ƹ����� ��������#k�� �ְڳ�!!");
			                cm.gainItem(4001001,-10);
					cm.gainItem(4001000, 1);
                                        cm.gainExp(8000000);
				}
			        cm.dispose();



			}
		}
	}
}
