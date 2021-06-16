/*
	
	철퍼덕 제작 

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
			cm.sendOk("나중에 알파벳을 모두 모으셨으면 다시 찾아와주세요")
			cm.dispose();
		}
		if (mode == 1)
			status++;
		else
			status--;
		
		if(status == 0) {
		var tmp_str = "흠냐흠냐.. 어느덧 겨울방학이 시작됬구나..난 우리서버 겨울방학 이벤트로 스노우보드를 모아오면 슈퍼스노우보드로 바꿔준단다\r\n";

		tmp_str += "#L1# #b스노우보드를 다모아왔습니다!#k\r\n"
;
		
		cm.sendSimple(tmp_str);
		
		} else if(status == 1) {
			if(selection == 0) {
			cm.sendOk("꼭 나중에 다시 찾아주세요..");        //거절
			cm.dispose();
		
		} else if(selection == 1) {
		cm.sendYesNo("6가지 스노우보드\r\n#v1442012# #v1442013# #v1442014# #v1442015# #v1442016# #v1442017#\r\n를 모두 모아왔니??\r\n내가 듣기론 헤네시스 달팽이 엔피시가 퀴즈를 맞추면 스노우보드를 준다는 소문을 들었는데...."); //승인
			status = 9;
		
		} else if(selection == 2) {
		cm.sendYesNo("#rNEXON#k 알파벳을 모두 모아오셨나요??\r\n");  //승인
			status = 11;
		
		} else if(selection == 3) {
		cm.sendYesNo("#rWIZET#k 알파벳을 모두 모아오셨나요?\r\n");  //승인
			status = 13;
			}

		} if(status == 2) {
			cm.sendOk("나중에 알파벳을 모두 모아오시면 다시 찾아와주세요\r\n");
			cm.dispose();
			}


		} if(status == 10) {
			if ((cm.haveItem(1442012, 1)) && (cm.haveItem(1442013, 1)) && (cm.haveItem(1442014, 1)) && (cm.haveItem(1442015, 1)) && (cm.haveItem(1442016, 1)) && (cm.haveItem(1442017, 1))) {
			cm.gainItem(1442012,-1);
			cm.gainItem(1442013,-1);
			cm.gainItem(1442014,-1);
			cm.gainItem(1442015,-1);
			cm.gainItem(1442016,-1);
			cm.gainItem(1442017,-1);
			cm.gainItem(1442046, 1);  //보상 악마의문서
			cm.sendOk("오.. 정말 6가지 스노우보드를 모두 모아왔구나! 자 여기 #v1442046#받아!\r\n");
			
			cm.dispose();

		} else {
			cm.sendOk("넌 6가지 스노우보드를 모두 가지고 있지 않아...\r\n");
			cm.dispose();
			}
		} if(status == 12) {
			if ((cm.haveItem(3994004, 1)) && (cm.haveItem(3994001, 1)) && (cm.haveItem(3994009, 1)) && (cm.haveItem(3994005, 1)) && (cm.haveItem(3994004, 1)))   {
			cm.gainItem(3994004,-1);
			cm.gainItem(3994001,-1);
			cm.gainItem(3994009,-1);
			cm.gainItem(3994005,-1);
			cm.gainItem(3994004,-1);
			cm.gainItem(4031019, 1);  //보상 악마의문서
			cm.sendOk("축하드립니다!! 악마의 문서가 지급되었습니다. 악마의 문서는 커닝시티 공사장의 '천지'를 찾아가면 해독이 가능합니다.해독하면 매직박스가 생기는데 커닝시티 마을의 몽땅따에게 갖고 가면 열 수 있습니다. 그 안에서 어떤 것이 나올 지는 아무도 모른답니다. 행운을 빕니다.\r\n");
			cm.dispose();

		} else {
			cm.sendOk("알파벳이 부족합니다.\r\n");
			cm.dispose();
			}
		} if(status == 14) {
			if ((cm.haveItem(3994014, 1)) && (cm.haveItem(3994002, 1)) && (cm.haveItem(3994011, 1)) && (cm.haveItem(3994001, 1))   && (cm.haveItem(3994008, 1)))   {
			cm.gainItem(3994014,-1);
			cm.gainItem(3994002,-1);
			cm.gainItem(3994011,-1);
			cm.gainItem(3994001,-1);
			cm.gainItem(3994008,-1);
			cm.gainItem(4031019, 1);  //보상 악마의문서
			cm.sendOk("축하드립니다!! 악마의 문서가 지급되었습니다. 악마의 문서는 커닝시티 공사장의 '천지'를 찾아가면 해독이 가능합니다.해독하면 매직박스가 생기는데 커닝시티 마을의 몽땅따에게 갖고 가면 열 수 있습니다. 그 안에서 어떤 것이 나올 지는 아무도 모른답니다. 행운을 빕니다.\r\n");
			cm.dispose();

		} else {
			cm.sendOk("알파벳이 부족합니다.\r\n");
			cm.dispose();
			}
		} if(status == 16) {
			if(cm.getChar().getFame() > 1) {
			cm.gainFame(-2);
			cm.gainItem(2000003, 200);
			cm.sendOk("축하드립니다!! 악마의 문서가 지급되었습니다. 악마의 문서는 커닝시티 공사장의 '천지'를 찾아가면 해독이 가능합니다.해독하면 매직박스가 생기는데 커닝시티 마을의 몽땅따에게 갖고 가면 열 수 있습니다. 그 안에서 어떤 것이 나올 지는 아무도 모른답니다. 행운을 빕니다.\r\n");
			cm.dispose();

		} else {
			cm.sendOk("알파벳이 부족합니다.\r\n");
			cm.dispose();
			}
			cm.dispose();
			}
		}