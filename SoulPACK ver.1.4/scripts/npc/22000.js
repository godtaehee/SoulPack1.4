/*
	���εȾ����� ���������ϱ�
	MADE BY ���� (jantnic)
*/
importPackage(net.sf.odinms.client);

var slot;
var item;
var qty;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status <= 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendNext("���εȾ��������ִٸ� �������� ��������������.");
            cm.dispose();
            return;
        }
    if (mode == 1)
            status++;
    else
            status--;
        if (status == 0) {
            cm.sendGetNumber("����������� �������� ��ȣ�� �Է��ϼ���. ��ݻ����ξ����۸� �����մϴ�.\r\n[����]\r\n��ݻ����� �������� 3��°�������� 3���Է�, 5��°�������� 5�Է��Ͻø�˴ϴ�.",1,1,100);
        } else if (status == 1) {
            slot = selection;
            item = cm.getChar().itemid(slot);
            if (item==0){
                cm.sendOk("�˼�������, �������� �������� �ʽ��ϴ�.")
                cm.dispose();
            }
            else
                cm.sendYesNo("�� �������� ������� �Ͻðڽ��ϱ�? ��������ϼŵ� �������ڹ��踸�ִٸ� ���������� �ٽ� ��ݼ����� �ϽǼ��ֽ��ϴ�.\r\n#i"+item+"# #b#t"+item+"#")
        } else if (status == 2) {
            cm.getChar().lockitem(slot,false)
            cm.sendOk("#i"+item+"##b#t"+item+"##k\r\n�� �������� ��ݻ��¿��� �����Ǿ����ϴ�.");
            cm.dispose();
        }
    }
}  
