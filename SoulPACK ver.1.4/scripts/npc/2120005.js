/*
���� : ��ǳ(gwangyun1)
*/
/**
�ɽ��ؼ� ����� �ý��ϴ�. �尩���ݷ��ֹ��� 60%�ִ� ����Ʈ���. �ݺ������� ��ŭ ��ư� �߽��ϴ�.
**/

importPackage(net.sf.odinms.client);
var status = 0;



function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendSimple("�ȳ�? ���� �� #rCinemaSever#k���� ����� �������� ��� ������ ���� �ʹ� �ȉ�ٰ� ������... �׷��� ���� ��Ź�� ����ָ� #r�尩���ݷ��ֹ���60%#k�� �ٲ�... ��Ź�� ���� ��ƴܴ�... � �غ��ڴ�?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##b �尩���ݷ� �ֹ����� ���ʹ�!(�ݺ�����)");
			}
		if (status == 1) {
				cm.sendOk("�����Ҳ���? �׷��� #b�������� ��� 100��#k�� #b���ȹ����� ��ü 300��#k �׸��� #b�������� 300��#k�� #k�ʷϹ����� �� 200��#k �� #b������� ������ 200��#k�� ������ �� �� �ִ�? ");
			}
		else if (status == 2) {
			if (cm.haveItem(4000010, 100) && cm.haveItem(4000004, 300)&& cm.haveItem(4000003, 300) && cm.haveItem(4000012, 200) && cm.haveItem(4000022, 200)) {
			cm.sendOk("�س±���! �� ����Ʈ�� #r�ݺ�#k�� �����ϴ� ����Ŀ� �ٽ� ����...\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i2040804# �尩 ���ݷ� �ֹ��� 60% 1��");
                        
   }
   else if (!cm.haveItem(4000010, 100) && cm.haveItem(4000004, 300) && cm.haveItem(4000003, 300) && cm.haveItem(4000012, 200) && cm.haveItem(4000022, 200)) {
   cm.sendOk("���� �ʴ� �������� ������ ���̱���...");
   cm.dispose();
   }
		}
		else if (status == 3) {
   
   cm.gainItem(4000010, -100);
   cm.gainItem(4000004, -300);
   cm.gainItem(4000003, -300);
   cm.gainItem(4000012, -200);
   cm.gainItem(4000022, -200);
   cm.gainItem(2040804, 1);
			cm.dispose();
}
}
}