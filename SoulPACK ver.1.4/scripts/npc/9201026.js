/*
	���� : ��ǳ(gwangyun1)
	���� : ���� (jantnic)
*/

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
				cm.sendSimple("�ȳ��ϼ���. ���� �� ������Ƽ�� �湮�ϱ����� �����Ͼƿ� ��Ⱦ��µ� ���γ༮���� �� �ٳ����� ��� ���İ����Ⱦ��... ��Ƽ�� ���������� �ٳ����ε�... �ٻ��ܹ��ȳ׿�... ���γ༮���� ��Ƽ� �ٳ���200���� ���ش� �ֽǼ��ֳ���? ��Ź�帳�ϴ� �����ڴ�...\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##b�Ҿ���� �ٳ���");
			}
		else if (status == 1) {
			if ((cm.haveItem(4000029, 200))) {
			cm.sendOk("�� ���� ���ش��ּ˱���! �����ϴ�. ���п� ��Ƽ�� �����ʰ� �ٳ����� ����Ҽ� �ְڳ׿�... ���� �����ϴ�. �����ڴ�! �帱�� �����������ִ� �� ������ε�... �̰Ŷ� ����������! �׷� �������ּ���.\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#\r\n2000 exp\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1050018#, #i1050017# ���ڰ���, ���ڰ���");
                        
   }
   else if (!cm.haveItem(4000029, 200)) {
   cm.sendOk("���γ༮���� ����� �ٳ��� 200���� �������ּ���.");
   cm.dispose();
   }
		}
		else if (status == 2) {
   
   cm.gainItem(4000029, -200);
   cm.gainItem(1050018, 1);
   cm.gainItem(1051017, 1);
   cm.gainExp(2000);
			cm.dispose();
}
}
}