/*
	Made By : ���� (jantnic)
	NPC Name: 		Cloy
	NPC Code :		1012005
	Map: 		Victoria Road : Henesys Park 
	Map Code : 	100000200
	Description: 		Pet Master
	Language : Korean
*/
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if ((status == 1 && mode == 0) || (status == 5 && mode == 1) || (status == 10 && mode == 1) || (status == 13 && mode == 1) || (status == 15 && mode == 0)) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendNext("�꿡 ���� �ñ��� ���� �ֳ�? �����̵��� ������ ����Գ�.");
	} else if (status == 1) {
		cm.sendSimple("#L0#�꿡���� �������ּ���.#l\r\n#L1#���� ��� Ű����?#l\r\n#L2#�굵 �׳���?#l\r\n#L3#����,����������� ��ɾ�� ����?#l\r\n#L4#������������ ��ɾ�� ����?#l\r\n#L5#��ȫ,����䳢�� ��ɾ�� ����?#l\r\n#L6#�̴�ī���� ��ɾ�� ����?#l\r\n#L7#�絹���� ��ɾ�� ����?#l\r\n#L8#������������ ��ɾ�� ����?#l\r\n#L9#�Ǵ��� ��ɾ�� ����?#l\r\n#L10#�㽺Ű�� ��ɾ�� ����?#l\r\n#L11#��뺸��,������ ��ɾ�� ����?#l\r\n#L12#�������� ��ɾ�� ����?#l\r\n#L13#��Ű�� ��ɾ�� ����?#l\r\n#L14#���ȣ������ ��ɾ�� ����?#l\r\n#L15#����� ��ɾ�� ����?#l\r\n#L16#Ȳ�ݻ������� ��ɾ�� ����?#l\r\n#L17#�κ��� ��ɾ�� ����?#l\r\n#L18#�̴Ͽ�Ƽ�� ��ɾ�� ����?#l\r\n#L19#�ִϾ�߷��� ��ɾ�� ����?#l\r\n#L20#�Ʊ�巡���� ��ɾ�� ����?#l\r\n#L21#�׸�,����,���巡���� ��ɾ�� ����?#l\r\n#L22#���巡���� ��ɾ�� ����?#l\r\n#L23#�ִϾ���� ��ɾ�� ����?#l\r\n#L24#�������� ��ɾ�� ����?#l\r\n#L25#�������� ��ɾ�� ����?#l\r\n#L26#����ũ�� ��ɾ�� ����?#l\r\n#L27#�� �ɷ�ġ �����ϴ¹��� �������ּ���.#l");
	} else if (status == 2) {
		if (selection == 0) {
			status = 3;
			cm.sendNext("�켱, ���̶� ĳ�ü����� �����Ҽ�����. ���� �����ǽð����� 90�ϵ��ȸ� ����ִٳ�. 90���������� ���̵ǹ�����. 90���� ������ �����̵ǹ�����. �����̵Ǹ� ���� ���̻�����ϼ�������. �׸��� ���� �Ժηδ��ϸ� �ȵǳ�. ���̶� ���̴� ���ڲ����ָ� ��������� ��������Ѵٳ� ��������� �������ϰ� ���ϸ� �굵 �����������Ծ�...");
		} else if (selection == 1) {
			status = 6;
			cm.sendNext("���� Ű����� �켱 ����̶� �������� �����ؾ��ϳ�. �굵 ���̸� �����鼭 �����δٳ�. �꿡�� ���̸����ٰ�� ������ ���ư�������.. �����ε��ư��� ���û����� ���ϳ�. �谡������ �����ϼ���������.. ����̴� ��׽ý����� ������ Doofus �����������ֳ�. �װ� ����̸� �Ǵٳ�...");
		} else if (selection == 2) {
			status = 11;
			cm.sendNext("�����̶�... �굵 �����ǽð��� ������ �״¹�����.. ���� ������ ���� ��������� �׽ð����� 90�ϰ��� ����ִٳ�. 90���������� �����̵ǹ�����. �����̵Ǹ� ���� ���̻�����ϼ�������. �����ѹ������� � �ź��� ���������� �ǻ츱���ִٴ���, ������ �׾������� ������ ��밡���ϴٴ���, �׿����� �����Ͼƿ�����ִٴ��� �������� �׿����� ���������߳�...");
		} else if (selection == 3) {
			cm.sendNext("T#r���������,�����������#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1~30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#btalk, say, chat#k (Level 10 ~ 30)\r\n#bcutie#k (Level 10 ~ 30)\r\n#bup, stand, rise#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 4) {
			cm.sendNext("#r����������#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, baddog, dummy#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1~30)\r\n#bpee#k (Level 1 ~ 30)\r\n#btalk, say, chat#k (Level 10 ~ 30)\r\n#bdown#k (Level 10 ~ 30)\r\n#bup, stand, rise#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 5) {
			cm.sendNext("#r��ȫ���䳢,����䳢#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bup, stand, rise#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1~30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#btalk, say, chat#k (Level 10 ~ 30)\r\n#bhug#k (Level 10 ~ 30)\r\n#bsleep, sleepy, gotobed#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 6) {
			cm.sendNext("#r�̴�ī��#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bup, stand, rise#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1~30)\r\n#bpee#k (Level 1 ~ 30)\r\n#btalk, say, chat#k (Level 10 ~ 30)\r\n#bthelook, charisma#k (Level 10 ~ 30)\r\n#bdown#k (Level 10 ~ 30)\r\n#bgoodboy, goodgirl#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 7) {
			cm.sendNext("#r�絹��#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bup, stand#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#bmerryxmas, merrychristmas#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1~30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#btalk, say, chat#k (Level 11 ~ 30)\r\n#blonely, alone#k (Level 11 ~ 30)\r\n#bcutie#k (Level 11 ~ 30)\r\n#bmush, go#k (Level 21 ~ 30)");
			cm.dispose();
		} else if (selection == 8) {
			cm.sendNext("#r����������#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1~30)\r\n#bhand#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bsmile#k (Level 10 ~ 30)\r\n#bthelook, charisma#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 9) {
			cm.sendNext("#r�Ǵ�#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bchill, relax#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bup, stand, rise#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bletsplay#k (Level 10 ~ 30)\r\n#bmeh, bleh#k (Level 10 ~ 30)\r\n#bsleep#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 10) {
			cm.sendNext("#r�㽺Ű#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, baddog, dummy#k (Level 1 ~ 30)\r\n#bhand#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bdown#k (Level 10 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bup, stand, rise#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 11) {
			cm.sendNext("#r��뺸��,����#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#bsmile, laugh#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bcutie#k (Level 10 ~ 30)\r\n#bsleep, nap, sleepy#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 12) {
			cm.sendNext("#r������#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#brest#k (Level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (Level 1 ~ 30)\r\n#bpee#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bup, stand#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bplay#k (Level 10 ~ 30)\r\n#bmelong#k (Level 10 ~ 30)\r\n#bsleep, gotobed, sleepy#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 13) {
			cm.sendNext("#r��Ű#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bno, rudeboy, mischief#k (Level 1 ~ 30)\r\n#bstupid#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bup, stand#k (Level 1 ~ 30)\r\n#btalk, chat, gobble#k (Level 10 ~ 30)\r\n#byes, goodboy#k (Level 10 ~ 30)\r\n#bsleepy, birdnap, doze#k (Level 20 ~ 30)\r\n#bbirdeye, thanksgiving, fly, friedbird, imhungry#k (Level 30)");
			cm.dispose();
		} else if (selection == 14) {
			cm.sendNext("#r���ȣ����#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#brest, chill#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bactsad, sadlook#k (Level 10 ~ 30)\r\n#bwait#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 15) {
			cm.sendNext("#r���#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#bup, stand, rise#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bhug, hugme#k (Level 10 ~ 30)\r\n#bwing, hand#k (Level 10 ~ 30)\r\n#bsleep#k (Level 20 ~ 30)\r\n#bkiss, smooch, muah#k (Level 20 ~ 30)\r\n#bfly#k (Level 20 ~ 30)\r\n#bcute, adorable#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 16) {
			cm.sendNext("#rȲ�ݻ�����#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 11 ~ 30)\r\n#bloveme, hugme#k (Level 11 ~ 30)\r\n#bsleep, sleepy, gotobed#k (Level 21 ~ 30)\r\n#bignore / impressed / outofhere#k (Level 21 ~ 30)\r\n#broll, showmethemoney#k (Level 21 ~ 30)");
			cm.dispose();
		} else if (selection == 17) {
			cm.sendNext("#r�κ�#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bup, stand, rise#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#battack, charge#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bgood, thelook, charisma#k (Level 11 ~ 30)\r\n#bspeack, talk, chat, say#k (Level 11 ~ 30)\r\n#bdisguise, change, transform#k (Level 11 ~ 30)");
			cm.dispose();
		} else if (selection == 18) {
			cm.sendNext("#r�̴Ͽ�Ƽ#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#bdance, boogie, shakeit#k (Level 1 ~ 30)\r\n#bcute, cutie, pretty, adorable#k (Level 1 ~ 30)\r\n#biloveyou, likeyou, mylove#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 11 ~ 30)\r\n#bsleep, nap, sleepy, gotobed#k (Level 11 ~ 30)");
			cm.dispose();
		} else if (selection == 19) {
			cm.sendNext("#r�ִϾ�߷�#k�� ��ɾ �˷��ּ���.\r\n#bliedown#k (Level 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (Level 1 ~ 30)\r\n#biloveyou|mylove|likeyou#k (Level 1 ~ 30)\r\n#bcute|cutie|pretty|adorable#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#bsmirk|crooked|laugh#k (Level 1 ~ 30)\r\n#bmelong#k (Level 11 ~ 30)\r\n#bgood|thelook|charisma#k (Level 11 ~ 30)\r\n#bspeak|talk|chat|say#k (Level 11 ~ 30)\r\n#bsleep|nap|sleepy#k (Level 11 ~ 30)\r\n#bgas#k (Level 21 ~ 30)");
			cm.dispose();
		} else if (selection == 20) {
			cm.sendNext("#r�Ʊ�巡��#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (Level 1 ~ 30)\r\n#biloveyou|loveyou#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#bstupid|ihateyou|dummy#k (Level 1 ~ 30)\r\n#bcutie#k (Level 11 ~ 30)\r\n#btalk|chat|say#k (Level 11 ~ 30)\r\n#bsleep|sleepy|gotobed#k (Level 11 ~ 30)");
			cm.dispose();
		} else if (selection == 21) {
			cm.sendNext("#r����,���,�׸��巡��#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 15 ~ 30)\r\n#bno|bad|badgirl|badboy#k (Level 15 ~ 30)\r\n#biloveyou|loveyou#k (Level 15 ~ 30)\r\n#bpoop#k (Level 15 ~ 30)\r\n#bstupid|ihateyou|dummy#k (Level 15 ~ 30)\r\n#btalk|chat|say#k (Level 15 ~ 30)\r\n#bsleep|sleepy|gotobed#k (Level 15 ~ 30)\r\n#bchange#k (Level 21 ~ 30)");
			cm.dispose();
		} else if (selection == 22) {
			cm.sendNext("#r���巡��#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 15 ~ 30)\r\n#bno|bad|badgirl|badboy#k (Level 15 ~ 30)\r\n#biloveyou|loveyou#k (Level 15 ~ 30)\r\n#bpoop#k (Level 15 ~ 30)\r\n#bstupid|ihateyou|dummy#k (Level 15 ~ 30)\r\n#btalk|chat|say#k (Level 15 ~ 30)\r\n#bsleep|sleepy|gotobed#k (Level 15 ~ 30)\r\n#bcutie, change#k (Level 21 ~ 30)");
			cm.dispose();
		} else if (selection == 23) {
			cm.sendNext("#r�ִϾ��#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (Level 1 ~ 30)\r\n#bplaydead, poop#k (Level 1 ~ 30)\r\n#btalk|chat|say#k (Level 1 ~ 30)\r\n#biloveyou, hug#k (Level 1 ~ 30)\r\n#bsmellmyfeet, rockout, boo#k (Level 1 ~ 30)\r\n#btrickortreat#k (Level 1 ~ 30)\r\n#bmonstermash#k (Level 1 ~ 30)");
			cm.dispose();
		} else if (selection == 24) {
			cm.sendNext("#r������#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (Level 1 ~ 30)\r\n#biloveyou|hug|goodboy#k (Level 1 ~ 30)\r\n#btalk|chat|say#k (Level 1 ~ 30)\r\n#bcushion|sleep|knit|poop#k (Level 1 ~ 30)\r\n#bcomb|beach#k (Level 10 ~ 30)\r\n#btreeninja#k (Level 20 ~ 30)\r\n#bdart#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 25) {
			cm.sendNext("#r������#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#bloveyou, mylove, ilikeyou#k (Level 1 ~ 30)\r\n#bmerrychristmas#k (Level 1 ~ 30)\r\n#bcutie, adorable, cute, pretty#k (Level 1 ~ 30)\r\n#bcomb, beach/bad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#btalk, chat, say/sleep, sleepy, gotobed#k (Level 10 ~ 30)\r\n#bchang#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 26) {
			cm.sendNext("#r����ũ#k�� ��ɾ �˷��ּ���.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad/no/badgirl/badboy#k (Level 1 ~ 30)\r\n#brestandrelax, poop#k (Level 1 ~ 30)\r\n#btalk/chat/say, iloveyou#k (Level 1 ~ 30)\r\n#bsnuggle/hug, sleep, goodboy#k (Level 1 ~ 30)\r\n#bfatty, blind, badbreath#k (Level 10 ~ 30)\r\n#bsuitup, bringthefunk#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 27) {
			status = 14;
			cm.sendNext("�� �ɷ�ġ �����ϴ¹��� �˰�����Գ�? ���Ƿ���,��������Ʈ�� �����Ҽ�����. 250,000�޼Ҹ� ���ٸ� �ֹ����� �ǳ�����. �������־���. ���ֹ����� ���꿡�Ը� �����Ѱɷ� �˰��ִٸ�...");
		}
	} else if (status == 3) {
		cm.sendNext("���� �˰ڳ�? �꿡���� �ñ��Ѱ��ִٸ� ���繰����!");
	} else if (status == 4) {
		cm.sendNextPrev("���� �˰ڳ�? �꿡���� �ñ��Ѱ��ִٸ� ���繰����!");
	} else if (status == 5) {
		cm.sendNextPrev("���� �˰ڳ�? �꿡���� �ñ��Ѱ��ִٸ� ���繰����!");
	} else if (status == 6) {
		cm.sendNext("���� �˰ڳ�? �꿡���� �ñ��Ѱ��ִٸ� ���繰����!");
	} else if (status == 7) {
		cm.sendNextPrev("���� �˰ڳ�? �꿡���� �ñ��Ѱ��ִٸ� ���繰����!");
	} else if (status == 8) {
		cm.sendNextPrev("���� �˰ڳ�? �꿡���� �ñ��Ѱ��ִٸ� ���繰����!");
	} else if (status == 9) {
		cm.sendNextPrev("���� �˰ڳ�? �꿡���� �ñ��Ѱ��ִٸ� ���繰����!");
	} else if (status == 10) {
		cm.sendNextPrev("���� �˰ڳ�? �꿡���� �ñ��Ѱ��ִٸ� ���繰����!");
	} else if (status == 11) {
		cm.sendNext("���� �˰ڳ�? �꿡���� �ñ��Ѱ��ִٸ� ���繰����!");
	} else if (status == 12) {
		cm.sendNextPrev("���� �˰ڳ�? �꿡���� �ñ��Ѱ��ִٸ� ���繰����!");
	} else if (status == 13) {
		cm.sendNextPrev("���� �˰ڳ�? �꿡���� �ñ��Ѱ��ִٸ� ���繰����!");
	} else if (status == 15) {
		cm.sendYesNo("��ɷ�ġ �����ֹ����� ����ʹٸ� 250,000 �޼Ҹ� ���ٸ� �ǳ�����. ��ɷ�ġ �����ֹ����� ��ǰ�?");
	} else if (status == 16) {
		if (cm.getMeso() < 250000) {
			cm.sendOk("�޼Ұ������ѰŰ�����, �κ��丮�� 250,000�޼Ұ� �ִ��� Ȯ���غ��ðԳ�.");
		} else {
			cm.gainMeso(-250000);
			cm.gainItem(4160011, 1);
			}
			cm.dispose();
		}
	}
}