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
			cm.sendSimple("���! �ΰ��� ������ ������������?\r\n#L1##b����Ҿƹ����� �Ұ��οԽ��ϴ�.#k#l\r\n\#L2##b������Խ��ϴ�.#k#l");
			} else if (status == 1) {
			if (selection == 1) {
                                cm.sendSimple("���..����Ҿƹ����� �Ұ����ް� ���ź��̽ñ���..!\r\n...����Ҿƹ������� #b#v4001001##k#r10��#k�� ������ �޾ƿ����ϼ̴ٱ���?\r\n�Ҿƹ����� ��.. �����ϴ�!\r\n�帮�µ��� #b#v1092021##k#r�̽�ƽ ����#k�� ���ؿ��ø� �帮�ڽ��ϴ�.\r\n#r�̽�ƽ ����#k�� #bũ�γ뽺#k��� ������ �������ִܸ��� �������� �ֽ��ϴ�.")
			} else if (status == 2) {
			} else if (selection == 2) { 
				if(cm.haveItem(1092021, 1) == false) {
					cm.sendOk("����! �ΰ��� ������ �ȉ����!");
				} else {
					cm.sendOk("���� ���ؿ��̱���..����̴� #b#v4001001##k#r10��#k�� �帮�ڽ��ϴ�.\r\n���� #b����Ҿƹ���#k�� ��������~");
			                cm.gainItem(1092021,-1);
					cm.gainItem(4001001, 10);
                                        cm.gainExp(8000000);
				}
			        cm.dispose();



			}
		}
	}
}
