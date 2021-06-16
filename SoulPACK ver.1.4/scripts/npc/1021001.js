/*
	
	EnCia 제작 (디어기반)

*/

/*

	인기도를 아이템으로 교환해줌

*/

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
		} else {
		if (mode == 0) {
			cm.sendOk("꼭 나중에 찾아주세요..")
			cm.dispose();
		}
		if (mode == 1)
			status++;
		else
			status--;
		
		if(status == 0) {
		var tmp_str = "인기도를 아이템으로 바꾸어주는 곳입니다.\r\n인기도는 랭킹에도 포함되는 부분이니\r\n신중히 생각하시고 교환해주세요..\r\n";
		tmp_str += "#L1##b#v2000000#빨간 포션 200개(인기도1필요)#k\r\n"
		tmp_str += "#L2##b#v2000001#주황 포션 200개(인기도2필요)#k\r\n"
		tmp_str += "#L3##b#v2000002#하얀 포션 200개(인기도3필요)#k\r\n"
		tmp_str += "#L4##b#v2000003#파란 포션 200개(인기도2필요)#k\r\n"
		tmp_str += "#L5##b#v2000006#마나 엘릭서 200개(인기도4필요)#k\r\n"
		tmp_str += "#L6##b#v2000007#빨간 포션 알약 200개(인기도2필요)#k\r\n"
		tmp_str += "#L7##b#v2000008#주황 포션 알약 200개(인기도3필요)#k\r\n"
		tmp_str += "#L8##b#v2000009#하얀 포션 알약 200개(인기도4필요)#k\r\n"
		tmp_str += "#L9##b#v2000010#파란 포션 알약 200개(인기도3필요)#k\r\n"
		tmp_str += "#L10##b#v2000011#마나 엘릭서 알약(인기도5필요)#k\r\n"
		tmp_str += "#L11##b#v2022003#장어구이 200개(인기도8필요)#k\r\n"
		tmp_str += "#L12##b#v2001001#쭈쭈바 200개(인기도15필요)#k\r\n"
		tmp_str += "#L13##b#v2001002#팥빙수 200개(인기도20필요)#k\r\n"
		tmp_str += "#L14##b#v2020014#새벽의 이슬 200개(인기도30필요)#k\r\n"
		tmp_str += "#L15##b#v2020015#황혼의 이슬 200개(인기도35필요)#k\r\n"
		tmp_str += "#L0##b교환 안한다..#k#r#n";
		
		cm.sendSimple(tmp_str);
		
		} else if(status == 1) {
			if(selection == 0) {
			cm.sendOk("꼭 나중에 찾아주세요..");
			cm.dispose();
		
		} else if(selection == 1) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 1이 깍여요..#k\r\n");
			status = 9;
		
		} else if(selection == 2) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 2가 깍여요..#k\r\n");
			status = 11;
		
		} else if(selection == 3) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 3이 깍여요..#k\r\n");
			status = 13;
		
		} else if(selection == 4) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 2가 깍여요..#k\r\n");
			status = 15;
		
		} else if(selection == 5) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 4가 깍여요..#k\r\n");
			status = 17;
		
		} else if(selection == 6) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 2가 깍여요..#k\r\n");
			status = 19;
		
		} else if(selection == 7) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 3이 깍여요..#k\r\n");
			status = 21;
		
		} else if(selection == 8) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 4가 깍여요..#k\r\n");
			status = 23;
		
		} else if(selection == 9) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 3이 깍여요..#k\r\n");
			status = 25;
		
		} else if(selection == 10) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 5가 깍여요..#k\r\n");
			status = 27;
		
		} else if(selection == 11) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 8이 깍여요..#k\r\n");
			status = 29;
		
		} else if(selection == 12) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 15가 깍여요..#k\r\n");
			status = 31;
		
		} else if(selection == 13) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 20이 깍여요..#k\r\n");
			status = 33;
		
		} else if(selection == 14) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 30이 깍여요..#k\r\n");
			status = 35;
		
		} else if(selection == 15) {
		cm.sendYesNo("정말 교환하실꺼죠?? #r하지만 인기도 35가 깍여요..#k\r\n");
			status = 37;
			}
		} if(status == 2) {
			cm.sendOk("꼭 다시 찾아주세요..\r\n");
			cm.dispose();
			}
		} if(status == 10) {
			if(cm.getChar().getFame() > 0) {
			cm.gainFame(-1);
			cm.gainItem(2000000, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 12) {
			if(cm.getChar().getFame() > 1) {
			cm.gainFame(-2);
			cm.gainItem(2000001, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 14) {
			if(cm.getChar().getFame() > 2) {
			cm.gainFame(-3);
			cm.gainItem(2000002, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 16) {
			if(cm.getChar().getFame() > 1) {
			cm.gainFame(-2);
			cm.gainItem(2000003, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 18) {
			if(cm.getChar().getFame() > 3) {
			cm.gainFame(-4);
			cm.gainItem(2000006, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 20) {
			if(cm.getChar().getFame() > 1) {
			cm.gainFame(-2);
			cm.gainItem(2000007, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 22) {
			if(cm.getChar().getFame() > 2) {
			cm.gainFame(-3);
			cm.gainItem(2000008, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 24) {
			if(cm.getChar().getFame() > 3) {
			cm.gainFame(-4);
			cm.gainItem(2000009, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 26) {
			if(cm.getChar().getFame() > 2) {
			cm.gainFame(-3);
			cm.gainItem(2000010, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 28) {
			if(cm.getChar().getFame() > 4) {
			cm.gainFame(-5);
			cm.gainItem(2000011, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 30) {
			if(cm.getChar().getFame() > 7) {
			cm.gainFame(-8);
			cm.gainItem(2022003, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 32) {
			if(cm.getChar().getFame() > 14) {
			cm.gainFame(-15);
			cm.gainItem(2001001, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 34) {
			if(cm.getChar().getFame() > 19) {
			cm.gainFame(-20);
			cm.gainItem(2001002, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 36) {
			if(cm.getChar().getFame() > 29) {
			cm.gainFame(-30);
			cm.gainItem(2020014, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
		} if(status == 38) {
			if(cm.getChar().getFame() > 34) {
			cm.gainFame(-35);
			cm.gainItem(2020015, 200);
			cm.reloadChar();
			cm.sendOk("자 아이템 받고..인기도는 내가 가져 갈께...\r\n");
			cm.dispose();

		} else {
			cm.sendOk("인기도가 부족해요... 다른사람한테 인기도좀 사든지 모아서 오세요...\r\n");
			cm.dispose();
			}
			cm.dispose();
			}
		}