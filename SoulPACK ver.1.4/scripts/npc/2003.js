/* 
    �����ۺ��� NPC
    ���� : ������ (rlaehdwns4@naver.com)
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
            cm.dispose();
            return;
        }
    if (mode == 1)
            status++;
    else
            status--;
        if (status == 0) {
            cm.sendGetNumber("���ᱸ��� �������ۿ��� ��ݼ����� �����ϰԵǾ��ֽ��ϴ�. ���� ����������Ͻ÷��� ���������� ��������� ��Ź�ϸ�˴ϴ�.\r\n[����]\r\n��װ� ������������ 3��°�������� 3�Է�, 4��°�������� 4�Է�",1,1,100);
        } else if (status == 1) {
            slot = selection;
            item = cm.getChar().itemid(slot);
            if (item==0){
                cm.sendOk("�˼�������, �������� �������� �ʽ��ϴ�.")
                cm.dispose();
            }
            else
                cm.sendYesNo("�� �������� ��׽ðڽ��ϱ�? \r\n#i"+item+"# #b#t"+item+"#")
        } else if (status == 2) {
            cm.getChar().lockitem(slot,true)
            cm.sendOk("#i"+item+"##b#t"+item+"##k \r\n�� �������� ��ݻ��°� �Ǿ����ϴ�.");
            cm.gainItem(5060001, -1);
            cm.dispose();
        }
    }
}  
