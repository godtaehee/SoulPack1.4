/*


		       제작은 민회(f_lla)  - "마틸다"
		       ★무단불펌을 금지합니다.★

			       ::: 출처 :::
			SA.서든어택㈜Crush
			      민회(f_lla)
				
	※위 자료는 SA.서든어택㈜Crush 에만공유된자료로써 타카페및(불펌) 상업적으로 허용하지않음.
		       ※수정시 여기는건들지 말아주세요.



*/
/**
P.S ::
만든건 쉬운거같지만 꽤 '노가다' 뛰었습니다.
만약 버그및 불편한점이 있다면, <f_lla@naver.com>
메일보내주세요.
 
	: @	<Naver E-Mail : @ f_lla@naver.com>			@  :
	: @	<Server Name : MinHwi Server>			@  :
	: @	└ @ Exp 550 @ 					@  :
	: @	└ @ Drop 20 @ 					@  :
	: @	└ @ Mesos 30 @					@  :
	: @	└ @ Test 中  @						@  :
	: @	<  Server    :  http://www.minhwi.gg.gg/   >		@  :
	: @	<  My Blog  :  http://blog.naver.com/f_lla  >		@  :
	: @	<  Cafe        :  http://cafe.naver.com/sawnzm (SAC) >	@  :
			※수정시 여기도건들지 말아주세요.
**/

var status = 0;

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
			cm.sendSimple("안녕하세요  #b[" + cm.getChar().getName() + "]#k 님!\r\n저는 무기를빌려주는 #b마틸다#k라고합니다.\r\n#b[ 랩은 낮은대 끼고싶은 아이탬이 많죠? 그런 고민을 듣고 만들어봤답니다, 평가는 #r'유저여러분들'#k 이 해주세요 ! ]#k\r\n당신의 #r직업#k에 맞개 무기를 빌려드리고 있습니다.\r\n하지만 무기를 빌리시려면 #b5,000메소#k가 필요합니다.\r\n#r아이탬을 처리하는법은#k, 상점에 팔아도 가격이 나오지않기때문애 떨궈주시거나, 다른사람들을 주시면됩니다.\r\n직업애 맞지않는 무기는 빌리지말아주세요.\r\n#L0##b전사 무기#l\r\n#L1##b법사 무기#l\r\n#L2##b궁수 무기#l\r\n#L3##b도적 무기#l                           ");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendSimple("#rBy.f_lla#k\r\n안녕하세요, #b[" + cm.getChar().getName() + "]#k(님)은 #r전사#k가 맞습니까 ?\r\n#b아이탬을 팔아도 가격이나오지않으니 주의하세요#k\r\n양손검\r\n↓\r\n#L29##i1402030##r[Lv]30#k : #b왕 푸#k\r\n#L30##i1402031##r[Lv]35#k : #b호 검#k\r\n#L31##i1402032##r[Lv]50#k : #b그리스#k\r\n#L32##i1402033##r[Lv]60#k : #b그륜힐#k\r\n#L33##i1402034##r[Lv]70#k : #b그레이트 로헨#k\r\n양손도끼↓\r\n#L34##i1412022##r[Lv]35#k : #b라 이징#k\r\n#L35##i1412023##r[Lv]50#k : #b사이닝#k\r\n#L36##i1412024##r[Lv]60#k : #b크로노스#k\r\n#L37##i1412025##r[Lv]70#k : #b핼버드#k#l\r\n↓\r\n양손둔기\r\n#L38##i1422023##r[Lv]35#k : #b골든 모어#k\r\n#L39##i1422024##r[Lv]50#k : #b블리징(?)#k\r\n#L40##i1422025##r[Lv]60#k : #b호프만#k\r\n#L41##i1422026##r[Lv]70#k : #b크롬#k#l\r\n↓\r\n창\r\n#L42##i1432031##r[Lv]20#k : #b삼지창#k\r\n#L43##i1432032##r[Lv]35#k : #b장팔 사모#k\r\n#L44##i1432033##r[Lv]50#k : #b십자창#k\r\n#L45##i1432034##r[Lv]60#k : #b스페판#k\r\n#L46##i1432035##r[Lv]70#k : #b호진 공창#k\r\n↓\r\n폴암\r\n#L47##i1442040##r[Lv]35#k : #b구룡도#k\r\n#L48##i1442041##r[Lv]50#k : #b방천극#k\r\n#L49##i1442042##r[Lv]60#k : #b황룡도#k\r\n#L50##i1442043##r[Lv]70#k : #b월아산#k\r\n							                    ");
			} else if (selection == 1) {
				cm.sendSimple("#rBy.f_lla#k\r\n안녕하세요, #b[" + cm.getChar().getName() + "]#k(님)은 #r법사#k가 맞습니까 ?\r\n#b아이탬을 팔아도 가격이나오지않으니 주의하세요#k\r\n#L20##i1372027##r[Lv]18#k : #b위자드 완드#k\r\n#L21##i1372028##r[Lv]38#k : #b크로미#k\r\n#L22##i1372029##r[Lv]48#k : #b이블 테일러#k\r\n#L23##i1372030##r[Lv]58 : #b엔젤 윙즈#k\r\n#L24##i1382030##r[Lv]35 : #b아크 스태프#k\r\n#L25##i1382031##r[Lv]45 : #b쏜 즈#k\r\n#L26##i1382032##r[Lv]55 : #b이블 윙즈#k\r\n#L27##i1382033##r[Lv]65 : #b다크 레이든#k\r\n#L28##i1382034##r[Lv]75#k : #b케이그#k\r\n                ");
			} else if (selection == 2) {
				cm.sendSimple("#rBy.f_lla#k\r\n안녕하세요, #b[" + cm.getChar().getName() + "]#k(님)은 #r궁수#k가 맞습니까 ?\r\n#b아이탬을 팔아도 가격이나오지않으니 주의하세요#k\r\n#L10##i1452038##r[Lv]20#k : 라이덴\r\n#L11##i1452039##r[Lv]35#k : 올림푸스\r\n#L12##i1452040##r[Lv]50#k : 봉황위궁\r\n#L13##i1452041##r[Lv]60#k : 골든힌켈\r\n#L14##i1452042##r[Lv]70#k : 다크 아룬드\r\n#L15##i1462033##r[Lv]18#k : #b산양석궁#k\r\n#L16##i1462034##r[Lv]35#k : #b로우어#k\r\n#L17##i1462035##r[Lv]50#k : #b골든 클로우#k\r\n#L18##i1462036##r[Lv]60#k : #b그로스 야거#k\r\n#L19##i1462037##r[Lv]70#k : #b다크 레븐#k\r\n              ");
			} else if (selection == 3) {
				cm.sendSimple("#rBy.f_lla#k\r\n안녕하세요, #b[" + cm.getChar().getName() + "]#k(님)은 #r도적#k이 맞습니까?\r\n#b아이탬을 팔아도 가격이나오지않으니 주의하세요#k\r\n#L0##i1332043##r[Lv]20#k : #b리프클리브#l#k \r\n#L1##i1332044# #r[Lv]35#k : #b신기타#l#k \r\n#L2##i1332045# #r[Lv] 50#k : #b게타#l#k \r\n#L3##i1332046# #r[Lv]60#k : #b칸디네#l \r\n#L4##i1332047# #r[Lv]70#k : #b용천권#k#l\r\n#L5##i1472045##r[Lv] 20#k : #b아만티움 아대#k#l\r\n#L6##i1472046##r[Lv] 35#k : #b다크 슬레인#k#l\r\n#L7##i1472047##r[Lv] 50#k : #b다크 기간틱#k#l\r\n#L8##i1472048##r[Lv] 60#k : #b흑 갑충#k#l\r\n#L9##i1472049##r[Lv] 70#k : #b코브라 스티어#k#l\r\n                         		　　　　　　　　　　　　　　　                        #bBy.f_lla#k\r\n무엇을 빌리시갰습니까?\r\n^^*                  ");
		}
		} if (status == 2) {
			if (selection == 0) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                           ");
					cm.gainMeso(-5000);
					cm.gainItem(1332043,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.					");
    					cm.dispose();
				}
			} else if (selection == 1) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                           ");
					cm.gainMeso(-5000);
					cm.gainItem(1332044,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.					");
    					cm.dispose();
				}
			} else if (selection == 2) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                    ");
					cm.gainMeso(-5000);
					cm.gainItem(1332045,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.					");
    					cm.dispose();
				}
			} else if (selection == 3) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
					cm.gainItem(1332046,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
    					cm.dispose();
				}
			} else if (selection == 4) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
					cm.gainItem(1332047,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
    					cm.dispose();
				}
   			} else if (selection == 5) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1472045,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
    				}
   			} else if (selection == 6) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
          					cm.gainItem(1472046,1);
          					cm.dispose();
   				 } else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
          					cm.dispose();
    				}
        					} else if (selection == 7) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
          					cm.gainItem(1472047,1);
          					cm.dispose();
        				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
          					cm.dispose();
    				}
        					} else if (selection == 8) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
          					cm.gainItem(1472048,1);
          					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
    				}
   					} else if (selection == 9) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1472049,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 10) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1452038,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 11) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1452039,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 12) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1452040,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 13) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1452041,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 14) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1452042,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 15) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1462033,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 16) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1462034,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 17) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1462035,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 18) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1462036,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 19) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1462037,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 20) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1372027,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 21) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1372028,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 22) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1372029,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 23) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1372030,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 24) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1382030,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 25) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1382031,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 26) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1382032,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 27) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1382033,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 28) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1382034,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 29) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1402030,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 30) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1402031,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 31) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1402032,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 32) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1402033,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 33) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1402034,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 34) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1412022,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 35) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1412023,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 36) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1412024,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 37) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1412025,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 38) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1422023,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 39) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1422024,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 40) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1422025,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 41) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1422026,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 42) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1432031,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 43) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1432032,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 44) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1432033,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 45) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1432034,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 46) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1432035,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 47) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1442040,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 48) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1442041,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 49) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1442042,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 50) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1442043,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
   					} else if (selection == 51) {
					if (cm.getMeso() >= 5000) {
					cm.sendOk("또 빌리시려면 다시 찾아주세요 #b^^*#k                       ");
					cm.gainMeso(-5000);
     					cm.gainItem(1442044,1);
     					cm.dispose();
    				} else {
     					cm.sendOk("이미 빌려가셨거나#r메소#k가 부족합니다.				");
     					cm.dispose();
				}
			}
		}
	}
}