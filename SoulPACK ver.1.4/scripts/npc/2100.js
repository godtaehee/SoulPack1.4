importPackage(net.sf.odinms.client);

var status = -1;
var selectedList = -1;
var selectedOne = 1;
var selectedTwo = 1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
	} else {
                status++;
                selectedList = selection;
                selectedOne = selection;
                selectedTwo = selection;
                if (status == 0) {
                        var String = "� ���� ���Ͻʴϱ�?\r\n\r\n";
                        String += "#L1##b��ǰ����#k#l\r\n";
                        String += "#L2##b��ǰ���#k#l\r\n";
                        cm.sendSimple(String);
                } else if (status == 1) {
                        if (selectedList == 1) {
                                var String = "����忡 #b��ǰ����#k\r\n\r\n";
                                String += "�̰��� ȸ���鰣�� ������ ��Ÿ� ���� �ִ� �����Դϴ�.";
                                String += "����� �Ǹ��ڿ� �ش� ��ǰ�� ������ ���� #b�����ϱ�#k �� �����ø�";
                                String += "��ǰ�� ��µ��ÿ� �������� ���� ���������ϴ�. ����, ��ſ� �ö��";
                                String += "#b��ǰ���� Ȯ���Ͻðڽ��ϱ�?";
                                cm.sendYesNo(String);status = 9; // ����
                        } else if (selectedList == 2) {
                                var String = "����忡 #b��ǰ���#k �ϱ�\r\n\r\n";
                                String += "�̰��� ȸ���鰣�� ������ ��Ÿ� ���� �ִ� �����Դϴ�.";
                                String += "����� ������ ��ǰ�� �����ϰ���� ��ǰ�� Ŭ���ϰ� ������ �����ϴ�.";
                                String += "�̻� �����ø� #b��ǰ����#k�� Ȯ�� �ϽǼ��ֽ��ϴ�. #b��ǰ���� �ø��ðڽ��ϱ�?";
                                cm.sendYesNo(String);status = 19; // ���
                        }
                /* ��ǰ ���� ���� */
                } else if (status == 10) { // ��Ϻ���
                        var String = "���� �������� ��ǰ ����Դϴ�.\r\n\r\n";
                        cm.sendSimple(String+cm.ItemList());
                } else if (status == 11) { // �ɼǺ���
                        cm.sendSimple(cm.ItemInfo(selectedOne));
                } else if (status == 12) { // ��ǰ����
                        cm.ItemSale(selectedOne);
                        cm.dispose();
                /* ��ǰ ���� �� */
                /* ��ǰ ��� ���� */
                } else if (status == 20) { // �����ϱ�
                        var String = "���� �����ϰ� ��� ��ǰ ����Դϴ�.\r\n\r\n";
                        String += "��ǰ ������ #b�����Է�#k Ȥ�� #b���尡��#k�� �����Ͻø� �����Ͻô� ��ǰ��";
                        String += "��Ÿ�Ͽ� �ö󰩴ϴ�. �ѹ� �ø� #r��Ź�ǰ�� �ٽ� �����ü� �����Ƿ�#k";
                        String += "�����ϰ� �����Ͻñ� �ٶ��ϴ�.\r\n\r\n";
                        cm.sendSimple(String+cm.ItemList(cm.getC()));
                } else if (status == 21) { // �ɼǺ���
                        cm.sendSimple(cm.ItemInfo(cm.getC(), selectedTwo));
                } else if (status == 22) { // ���
                        cm.ItemAddList(selectedTwo);
                        cm.dispose();
                /* ��ǰ ��� �� */
                } else {
                        cm.sendSimple("������ �� �˰ڽ��ϴ�.");
                        cm.dispose();
                }
	}
}