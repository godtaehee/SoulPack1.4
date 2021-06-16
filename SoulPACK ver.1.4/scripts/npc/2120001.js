

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
		} else {
		if (mode == 0) {
			cm.sendOk("그럼 잘가세요 그리고 나중에 또 들러주세요..");
			cm.dispose();
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
		var tmp_str = "#r#h ##k님 안녕하세요? 여기는 #r레벨별#k로 #b장비#k를 사는곳입니다.";
		tmp_str += "자신의 #r레벨단위#k를 골라주세요.\r\n\r\n";
		tmp_str += "                                        #r※ 주의사항 ※\r\n\r\n";
		tmp_str += "                                         #k10제 20만 메소\r\n";
		tmp_str += "                                         #k20제 60만 메소\r\n";
		tmp_str += "                                        #d30제 160만 메소\r\n";
		tmp_str += "                                        #d40제 320만 메소\r\n";
		tmp_str += "                                        #b50제 600만 메소\r\n";
		tmp_str += "                                       #b60제 2000만 메소\r\n";
		tmp_str += "                                       #b70제 4000만 메소\r\n";
		tmp_str += "                                    #b80제 1억2000만 메소\r\n";
		tmp_str += "                                         #b90제 2억 메소\r\n";
		tmp_str += "                                  #r100제 3억2000만 메소\r\n";
		tmp_str += "                                        #r110제 10억 메소\r\n\r\n";
		tmp_str += "           #d----------------레벨 : 10제 아이템사기----------------\r\n                                          #b#L0#전사 \r\n                                          #L11#법사 \r\n                                          #L22#궁수 \r\n                                          #L33#도적 \r\n                                          #L44#해적\r\n\r\n";
		tmp_str += "           #d----------------레벨 : 20제 아이템사기----------------\r\n\r\n                                          #b#L1#전사 \r\n                                          #L12#법사 \r\n                                          #L23#궁수 \r\n                                          #L34#도적 \r\n                                          #L45#해적\r\n\r\n";
		tmp_str += "           #d----------------레벨 : 30제 아이템사기----------------\r\n\r\n                                          #b#L2#전사 \r\n                                          #L13#법사 \r\n                                          #L24#궁수 \r\n                                          #L35#도적 \r\n                                          #L46#해적\r\n\r\n";
		tmp_str += "           #d----------------레벨 : 40제 아이템사기----------------\r\n\r\n                                          #b#L3#전사 \r\n                                          #L14#법사 \r\n                                          #L25#궁수 \r\n                                          #L36#도적 \r\n                                          #L47#해적\r\n\r\n";
		tmp_str += "           #d----------------레벨 : 50제 아이템사기----------------\r\n\r\n                                          #b#L4#전사 \r\n                                          #L15#법사 \r\n                                          #L26#궁수 \r\n                                          #L37#도적 \r\n                                          #L48#해적\r\n\r\n";
		tmp_str += "           #d----------------레벨 : 60제 아이템사기----------------\r\n\r\n                                          #b#L5#전사 \r\n                                          #L16#법사 \r\n                                          #L27#궁수 \r\n                                          #L38#도적 \r\n                                          #L49#해적\r\n\r\n";
		tmp_str += "           #d----------------레벨 : 70제 아이템사기----------------\r\n\r\n                                          #b#L6#전사 \r\n                                          #L17#법사 \r\n                                          #L28#궁수 \r\n                                          #L39#도적 \r\n                                          #L50#해적\r\n\r\n";
		tmp_str += "           #d----------------레벨 : 80제 아이템사기----------------\r\n\r\n                                          #b#L7#전사 \r\n                                          #L18#법사 \r\n                                          #L29#궁수 \r\n                                          #L40#도적 \r\n                                          #L51#해적\r\n\r\n";
		tmp_str += "           #d----------------레벨 : 90제 아이템사기----------------\r\n\r\n                                          #b#L8#전사 \r\n                                          #L19#법사 \r\n                                          #L30#궁수 \r\n                                          #L41#도적 \r\n                                          #L52#해적\r\n\r\n";
		tmp_str += "           #d----------------레벨 : 100제 아이템사기----------------\r\n\r\n                                          #b#L9#전사 \r\n                                          #L20#법사 \r\n                                          #L31#궁수 \r\n                                          #L42#도적 \r\n                                          #L53#해적\r\n\r\n";
		tmp_str += "           #d----------------레벨 : 110제 아이템사기----------------\r\n\r\n                                          #b#L10#전사 \r\n                                          #L21#법사 \r\n                                          #L32#궁수 \r\n                                          #L43#도적 \r\n                                          #L54#해적";
		cm.sendSimple(tmp_str);
		} else if (status == 1) {
			if (selection == 0) {
				if (cm.getMeso() >= 200000) {
				cm.sendYesNo("정말 사실꺼죠?");
				cm.gainMeso(-200000);
				cm.gainItem(1312000,1);
				cm.gainItem(1412001,1);
				cm.gainItem(1322032,1);
				cm.gainItem(1422000,1);
				cm.gainItem(1302001,1);
				cm.gainItem(1402001,1);
				cm.gainItem(1432000,1);
				cm.gainItem(1442000,1);
				cm.gainItem(1092005,1);
				cm.gainItem(1002044,1);
				cm.gainItem(1040015,1);
				cm.gainItem(1041014,1);
				cm.gainItem(1060008,1);
				cm.gainItem(1061014,1);
				cm.gainItem(1082003,1);
				cm.gainItem(1072050,1);
				var tmp_str = "#h #님 #r전사10제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1312000# #v1412001# #v1322032# #v1422000# #v1302001# #v1402001# #v1432000# #v1442000# #v1092005# #v1002044# #v1040015# #v1041014# #v1060008# #v1061014# #v1082003# #v1072050# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 1) {
				if (cm.getMeso() >= 600000) {
				cm.gainMeso(-600000);
				cm.gainItem(1312016,1);
				cm.gainItem(1412002,1);
				cm.gainItem(1322002,1);
				cm.gainItem(1422003,1);
				cm.gainItem(1302002,1);
				cm.gainItem(1402000,1);
				cm.gainItem(1432009,1);
				cm.gainItem(1442007,1);
				cm.gainItem(1092006,1);
				cm.gainItem(1002003,1);
				cm.gainItem(1041021,1);
				cm.gainItem(1061016,1);
				cm.gainItem(1050005,1);
				cm.gainItem(1082004,1);
				cm.gainItem(1072007,1);
				var tmp_str = "#h #님 #r전사20제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1312016# #v1412002# #v1322002# #v1422003# #v1302002# #v1402000# #v1432009# #v1442007# #v1092006# #v1002003# #v1041021# #v1061016# #v1050005# #v1082004# #v1072007# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 2) {
				if (cm.getMeso() >= 1600000) {
				cm.gainMeso(-1600000);
				cm.gainItem(1312005,1);
				cm.gainItem(1412006,1);
				cm.gainItem(1322046,1);
				cm.gainItem(1422001,1);
				cm.gainItem(1302008,1);
				cm.gainItem(1402024,1);
				cm.gainItem(1432002,1);
				cm.gainItem(1442001,1);
				cm.gainItem(1092002,1);
				cm.gainItem(1002023,1);
				cm.gainItem(1050011,1);
				cm.gainItem(1051010,1);
				cm.gainItem(1082006,1);
				cm.gainItem(1072040,1);
				var tmp_str = "#h #님 #r전사30제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1312005# #v1412006# #v1322046# #v1422001# #v1302008# #v1402024# #v1432002# #v1442001# #v1092002# #v1002023# #v1050011# #v1051010# #v1082006# #v1072040# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 3) {
				if (cm.getMeso() >= 3200000) {
				cm.gainMeso(-3200000);
				cm.gainItem(1312007,1);
				cm.gainItem(1412005,1);
				cm.gainItem(1322016,1);
				cm.gainItem(1422007,1);
				cm.gainItem(1302009,1);
				cm.gainItem(1402007,1);
				cm.gainItem(1432005,1);
				cm.gainItem(1442003,1);
				cm.gainItem(1092011,1);
				cm.gainItem(1002098,1);
				cm.gainItem(1040000,1);
				cm.gainItem(1041086,1);
				cm.gainItem(1060075,1);
				cm.gainItem(1061085,1);
				cm.gainItem(1082025,1);
				cm.gainItem(1072127,1);
				var tmp_str = "#h #님 #r전사40제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1312007# #v1412005# #v1322016# #v1422007# #v1302009# #v1402007# #v1432005# #v1442003# #v1092011# #v1002098# #v1040000# #v1041086# #v1060075# #v1061085# #v1082025# #v1072127# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 4) {
				if (cm.getMeso() >= 6000000) {
				cm.gainMeso(-6000000);
				cm.gainItem(1312008,1);
				cm.gainItem(1412022,1);
				cm.gainItem(1322017,1);
				cm.gainItem(1422005,1);
				cm.gainItem(1302010,1);
				cm.gainItem(1402020,1);
				cm.gainItem(1432020,1);
				cm.gainItem(1442035,1);
				cm.gainItem(1092004,1);
				cm.gainItem(1002028,1);
				cm.gainItem(1040087,1);
				cm.gainItem(1041089,1);
				cm.gainItem(1060076,1);
				cm.gainItem(1061088,1);
				cm.gainItem(1082011,1);
				cm.gainItem(1072135,1);
				var tmp_str = "#h #님 #r전사50제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1312008# #v1412022# #v1322017# #v1422005# #v1302010# #v1402020# #v1432020# #v1442035# #v1092004# #v1002028# #v1040087# #v1041089# #v1060076# #v1061088# #v1082011# #v1072135# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 5) {
				if (cm.getMeso() >= 20000000) {
				cm.gainMeso(-20000000);
				cm.gainItem(1312009,1);
				cm.gainItem(1412018,1);
				cm.gainItem(1322018,1);
				cm.gainItem(1422009,1);
				cm.gainItem(1302037,1);
				cm.gainItem(1402021,1);
				cm.gainItem(1432021,1);
				cm.gainItem(1442036,1);
				cm.gainItem(1092011,1);
				cm.gainItem(1002029,1);
				cm.gainItem(1040093,1);
				cm.gainItem(1041093,1);
				cm.gainItem(1060082,1);
				cm.gainItem(1061092,1);
				cm.gainItem(1082061,1);
				cm.gainItem(1072149,1);
				var tmp_str = "#h #님 #r전사60제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1312009# #v1412018# #v1322018# #v1422009# #v1302037# #v1402021# #v1432021# #v1442036# #v1092011# #v1002029# #v1040093# #v1041093# #v1060082# #v1061092# #v1082061# #v1072149# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 6) {
				if (cm.getMeso() >= 40000000) {
				cm.gainMeso(-40000000);
				cm.gainItem(1312010,1);
				cm.gainItem(1412019,1);
				cm.gainItem(1322019,1);
				cm.gainItem(1422010,1);
				cm.gainItem(1302046,1);
				cm.gainItem(1402023,1);
				cm.gainItem(1432022,1);
				cm.gainItem(1442037,1);
				cm.gainItem(1092017,1);
				cm.gainItem(1002030,1);
				cm.gainItem(1040104,1);
				cm.gainItem(1041098,1);
				cm.gainItem(1060092,1);
				cm.gainItem(1061097,1);
				cm.gainItem(1082105,1);
				cm.gainItem(1072156,1);
				var tmp_str = "#h #님 #r전사70제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1312010# #v1412019# #v1322019# #v1422010# #v1302046# #v1402023# #v1432022# #v1442037# #v1092017# #v1002030# #v1040104# #v1041098# #v1060092# #v1061097# #v1082105# #v1072156# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 7) {
				if (cm.getMeso() >= 120000000) {
				cm.gainMeso(-120000000);
				cm.gainItem(1312011,1);
				cm.gainItem(1412020,1);
				cm.gainItem(1322028,1);
				cm.gainItem(1422012,1);
				cm.gainItem(1302042,1);
				cm.gainItem(1402004,1);
				cm.gainItem(1432023,1);
				cm.gainItem(1442038,1);
				cm.gainItem(1092025,1);
				cm.gainItem(1002340,1);
				cm.gainItem(1050083,1);
				cm.gainItem(1051080,1);
				cm.gainItem(1082117,1);
				cm.gainItem(1072212,1);
				var tmp_str = "#h #님 #r전사80제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1312011# #v1412020# #v1322028# #v1422012# #v1302042# #v1402004# #v1432023# #v1442038# #v1092025# #v1002340# #v1050083# #v1051080# #v1082117# #v1072212# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 8) {
				if (cm.getMeso() >= 200000000) {
				cm.gainMeso(-200000000);
				cm.gainItem(1312015,1);
				cm.gainItem(1412010,1);
				cm.gainItem(1322029,1);
				cm.gainItem(1422013,1);
				cm.gainItem(1302023,1);
				cm.gainItem(1402016,1);
				cm.gainItem(1432011,1);
				cm.gainItem(1442020,1);
				cm.gainItem(1092028,1);
				cm.gainItem(1002532,1);
				cm.gainItem(1040113,1);
				cm.gainItem(1041121,1);
				cm.gainItem(1060102,1);
				cm.gainItem(1061120,1);
				cm.gainItem(1082130,1);
				cm.gainItem(1072198,1);
				var tmp_str = "#h #님 #r전사90제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1312015# #v1412010# #v1322029# #v1422013# #v1302023# #v1402016# #v1432011# #v1442020# #v1092028# #v1002532# #v1040113# #v1041121# #v1060102# #v1061120# #v1082130# #v1072198# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 9) {
				if (cm.getMeso() >= 320000000) {
				cm.gainMeso(-320000000);
				cm.gainItem(1312030,1);
				cm.gainItem(1412021,1);
				cm.gainItem(1322045,1);
				cm.gainItem(1422027,1);
				cm.gainItem(1402011,1);
				cm.gainItem(1402035,1);
				cm.gainItem(1432030,1);
				cm.gainItem(1442044,1);
				cm.gainItem(1092038,1);
				cm.gainItem(1002379,1);
				cm.gainItem(1040122,1);
				cm.gainItem(1041124,1);
				cm.gainItem(1060111,1);
				cm.gainItem(1061123,1);
				cm.gainItem(1082141,1);
				cm.gainItem(1072222,1);
				var tmp_str = "#h #님 #r전사100제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1312030# #v1412021# #v1322045# #v1422027# #v1402011# #v1402035# #v1432030# #v1442044# #v1092038# #v1002379# #v1040122# #v1041124# #v1060111# #v1061123# #v1082141# #v1072222# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 10) {
				if (cm.getMeso() >= 1000000000) {
				cm.gainMeso(-1000000000);
				cm.gainItem(1312031,1);
				cm.gainItem(1412026,1);
				cm.gainItem(1322052,1);
				cm.gainItem(1422028,1);
				cm.gainItem(1302059,1);
				cm.gainItem(1402036,1);
				cm.gainItem(1432038,1);
				cm.gainItem(1442045,1);
				cm.gainItem(1092042,1);
				cm.gainItem(1002551,1);
				cm.gainItem(1052075,1);
				cm.gainItem(1082168,1);
				cm.gainItem(1072273,1);
				var tmp_str = "#h #님 #r전사110제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1312031# #v1412026# #v1322052# #v1422028# #v1302059# #v1402036# #v1432038# #v1442045# #v1092042# #v1002551# #v1052075# #v1082168# #v1072273# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 11) {
				if (cm.getMeso() >= 200000) {
				cm.gainMeso(-200000);
				cm.gainItem(1382000,1);
				cm.gainItem(1002017,1);
				cm.gainItem(1050008,1);
				cm.gainItem(1082019,1);
				cm.gainItem(1072006,1);
				var tmp_str = "#h #님 #r법사10제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1382000# #v1002017# #v1050008# #v1082019# #v1072006# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 12) {
				if (cm.getMeso() >= 600000) {
				cm.gainMeso(-600000);
				cm.gainItem(1382004,1);
				cm.gainItem(1092021,1);
				cm.gainItem(1002016,1);
				cm.gainItem(1050001,1);
				cm.gainItem(1051003,1);
				cm.gainItem(1082022,1);
				cm.gainItem(1072021,1);
				var tmp_str = "#h #님 #r법사20제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1382004# #v1092021# #v1002016# #v1050001# #v1051003# #v1082022# #v1072021# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 13) {
				if (cm.getMeso() >= 1600000) {
				cm.gainMeso(-1600000);
				cm.gainItem(1382017,1);
				cm.gainItem(1092029,1);
				cm.gainItem(1002036,1);
				cm.gainItem(1050029,1);
				cm.gainItem(1082053,1);
				cm.gainItem(1072078,1);
				var tmp_str = "#h #님 #r법사30제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1382017# #v1092029# #v1002036# #v1050029# #v1082053# #v1072078# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 14) {
				if (cm.getMeso() >= 3200000) {
				cm.gainMeso(-3200000);
				cm.gainItem(1382019,1);
				cm.gainItem(1002154,1);
				cm.gainItem(1050049,1);
				cm.gainItem(1051030,1);
				cm.gainItem(1082064,1);
				cm.gainItem(1072117,1);
				var tmp_str = "#h #님 #r법사40제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1382019# #v1002154# #v1050049# #v1051030# #v1082064# #v1072117# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 15) {
				if (cm.getMeso() >= 6000000) {
				cm.gainMeso(-6000000);
				cm.gainItem(1382021,1);
				cm.gainItem(1002218,1);
				cm.gainItem(1050056,1);
				cm.gainItem(1051047,1);
				cm.gainItem(1082080,1);
				cm.gainItem(1072143,1);
				var tmp_str = "#h #님 #r법사50제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1382021# #v1002218# #v1050056# #v1051047# #v1082080# #v1072143# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 16) {
				if (cm.getMeso() >= 20000000) {
				cm.gainMeso(-20000000);
				cm.gainItem(1382032,1);
				cm.gainItem(1092045,1);
				cm.gainItem(1002246,1);
				cm.gainItem(1050070,1);
				cm.gainItem(1051055,1);
				cm.gainItem(1082088,1);
				cm.gainItem(1072139,1);
				var tmp_str = "#h #님 #r법사60제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1382032# #v1092045# #v1002246# #v1050070# #v1051055# #v1082088# #v1072139# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 17) {
				if (cm.getMeso() >= 40000000) {
				cm.gainMeso(-40000000);
				cm.gainItem(1382023,1);
				cm.gainItem(1002254,1);
				cm.gainItem(1050074,1);
				cm.gainItem(1051058,1);
				cm.gainItem(1082100,1);
				cm.gainItem(1072159,1);
				var tmp_str = "#h #님 #r법사70제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1382023# #v1002254# #v1050074# #v1051058# #v1082100# #v1072159# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 18) {
				if (cm.getMeso() >= 120000000) {
				cm.gainMeso(-120000000);
				cm.gainItem(1382008,1);
				cm.gainItem(1002274,1);
				cm.gainItem(1050095,1);
				cm.gainItem(1051097,1);
				cm.gainItem(1082123,1);
				cm.gainItem(1072179,1);
				var tmp_str = "#h #님 #r법사80제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1382008# #v1002274# #v1050095# #v1051097# #v1082123# #v1072179# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 19) {
				if (cm.getMeso() >= 200000000) {
				cm.gainMeso(-200000000);
				cm.gainItem(1382035,1);
				cm.gainItem(1002366,1);
				cm.gainItem(1050105,1);
				cm.gainItem(1051104,1);
				cm.gainItem(1082134,1);
				cm.gainItem(1072209,1);
				var tmp_str = "#h #님 #r법사90제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1382035# #v1002366# #v1050105# #v1051104# #v1082134# #v1072209# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 20) {
				if (cm.getMeso() >= 320000000) {
				cm.gainMeso(-320000000);
				cm.gainItem(1382035,1);
				cm.gainItem(1002366,1);
				cm.gainItem(1050105,1);
				cm.gainItem(1051104,1);
				cm.gainItem(1082134,1);
				cm.gainItem(1072209,1);
				var tmp_str = "#h #님 #법사100제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1382035# #v1002366# #v1050105# #v1051104# #v1082134# #v1072209# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 21) {
				if (cm.getMeso() >= 1000000000) {
				cm.gainMeso(-1000000000);
				cm.gainItem(1382036,1);
				cm.gainItem(1002401,1);
				cm.gainItem(1052076,1);
				cm.gainItem(1082164,1);
				cm.gainItem(1072268,1);
				var tmp_str = "#h #님 #r법사110제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1382036# #v1002401# #v1052076# #v1082164# #v1072268# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 22) {
				if (cm.getMeso() >= 200000) {
				cm.gainMeso(-200000);
				cm.gainItem(1452002,1);
				cm.gainItem(1462001,1);
				cm.gainItem(1002057,1);
				cm.gainItem(1040071,1);
				cm.gainItem(1041007,1);
				cm.gainItem(1062004,1);
				cm.gainItem(1061009,1);
				cm.gainItem(1082012,1);
				cm.gainItem(1072059,1);
				var tmp_str = "#h #님 #r궁수10제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1452002# #v1462001# #v1002057# #v1040071# #v1041007# #v1062004# #v1061009# #v1082012# #v1072059# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 23) {
				if (cm.getMeso() >= 600000) {
				cm.gainMeso(-600000);
				cm.gainItem(1452001,1);
				cm.gainItem(1462003,1);
				cm.gainItem(1002120,1);
				cm.gainItem(1040003,1);
				cm.gainItem(1041013,1);
				cm.gainItem(1062002,1);
				cm.gainItem(1061024,1);
				cm.gainItem(1082013,1);
				cm.gainItem(1072068,1);
				var tmp_str = "#h #님 #r궁수20제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1452001# #v1462003# #v1002120# #v1040003# #v1041013# #v1062002# #v1061024# #v1082013# #v1072068# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 24) {
				if (cm.getMeso() >= 1600000) {
				cm.gainMeso(-1600000);
				cm.gainItem(1452005,1);
				cm.gainItem(1462004,1);
				cm.gainItem(1002165,1);
				cm.gainItem(1040067,1);
				cm.gainItem(1041054,1);
				cm.gainItem(1060056,1);
				cm.gainItem(1061050,1);
				cm.gainItem(1082050,1);
				cm.gainItem(1072082,1);
				var tmp_str = "#h #님 #r궁수30제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1452005# #v1462004# #v1002165# #v1040067# #v1041054# #v1060056# #v1061050# #v1082050# #v1072082# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 25) {
				if (cm.getMeso() >= 3200000) {
				cm.gainMeso(-3200000);
				cm.gainItem(1452007,1);
				cm.gainItem(1462006,1);
				cm.gainItem(1002170,1);
				cm.gainItem(1040079,1);
				cm.gainItem(1041082,1);
				cm.gainItem(1060069,1);
				cm.gainItem(1061064,1);
				cm.gainItem(1082073,1);
				cm.gainItem(1072119,1);
				var tmp_str = "#h #님 #r궁수40제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1452007# #v1462006# #v1002170# #v1040079# #v1041082# #v1060069# #v1061064# #v1082073# #v1072119# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 26) {
				if (cm.getMeso() >= 6000000) {
				cm.gainMeso(-6000000);
				cm.gainItem(1452008,1);
				cm.gainItem(1462007,1);
				cm.gainItem(1002214,1);
				cm.gainItem(1050051,1);
				cm.gainItem(1051039,1);
				cm.gainItem(1082085,1);
				cm.gainItem(1072125,1);
				var tmp_str = "#h #님 #r궁수50제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1452008# #v1462007# #v1002214# #v1050051# #v1051039# #v1082085# #v1072125# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 27) {
				if (cm.getMeso() >= 20000000) {
				cm.gainMeso(-20000000);
				cm.gainItem(1452004,1);
				cm.gainItem(1462008,1);
				cm.gainItem(1002270,1);
				cm.gainItem(1050060,1);
				cm.gainItem(1051043,1);
				cm.gainItem(1082091,1);
				cm.gainItem(1072146,1);
				var tmp_str = "#h #님 #r궁수60제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1452004# #v1462008# #v1002270# #v1050060# #v1051043# #v1082091# #v1072146# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 28) {
				if (cm.getMeso() >= 40000000) {
				cm.gainMeso(-40000000);
				cm.gainItem(1452011,1);
				cm.gainItem(1462009,1);
				cm.gainItem(1002289,1);
				cm.gainItem(1050064,1);
				cm.gainItem(1051065,1);
				cm.gainItem(1082111,1);
				cm.gainItem(1072167,1);
				var tmp_str = "#h #님 #r궁수70제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1452011# #v1462009# #v1002289# #v1050064# #v1051065# #v1082111# #v1072167# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 29) {
				if (cm.getMeso() >= 120000000) {
				cm.gainMeso(-120000000);
				cm.gainItem(1452014,1);
				cm.gainItem(1462012,1);
				cm.gainItem(1002278,1);
				cm.gainItem(1051069,1);
				cm.gainItem(1082112,1);
				cm.gainItem(1072185,1);
				var tmp_str = "#h #님 #r궁수80제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1452014# #v1462012# #v1002278# #v1050078# #v1051069# #v1082112# #v1072185# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 30) {
				if (cm.getMeso() >= 200000000) {
				cm.gainMeso(-200000000);
				cm.gainItem(1452026,1);
				cm.gainItem(1462021,1);
				cm.gainItem(1002405,1);
				cm.gainItem(1050091,1);
				cm.gainItem(1051085,1);
				cm.gainItem(1082127,1);
				cm.gainItem(1072205,1);
				var tmp_str = "#h #님 #r궁수90제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1452026# #v1462021# #v1002405# #v1050091# #v1051085# #v1082127# #v1072205# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 31) {
				if (cm.getMeso() >= 320000000) {
				cm.gainMeso(-320000000);
				cm.gainItem(1452021,1);
				cm.gainItem(1462015,1);
				cm.gainItem(1002408,1);
				cm.gainItem(1050107,1);
				cm.gainItem(1051106,1);
				cm.gainItem(1082160,1);
				cm.gainItem(1072229,1);
				var tmp_str = "#h #님 #r궁수100제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1452021# #v1462015# #v1002408# #v1050107# #v1051106# #v1082160# #v1072229# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 32) {
				if (cm.getMeso() >= 1000000000) {
				cm.gainMeso(-1000000000);
				cm.gainItem(1452044,1);
				cm.gainItem(1462039,1);
				cm.gainItem(1002547,1);
				cm.gainItem(1052071,1);
				cm.gainItem(1082163,1);
				cm.gainItem(1072229,1);
				var tmp_str = "#h #님 #r궁수110제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1452044# #v1462039# #v1002547# #v1052071# #v1082163# #v1072229# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 33) {
				if (cm.getMeso() >= 200000) {
				cm.gainMeso(-200000);
				cm.gainItem(1472000,1);
				cm.gainItem(1332000,1);
				cm.gainItem(1002125,1);
				cm.gainItem(1040033,1);
				cm.gainItem(1041038,1);
				cm.gainItem(1060023,1);
				cm.gainItem(1061031,1);
				cm.gainItem(1082031,1);
				cm.gainItem(1072071,1);
				cm.gainItem(2070000,1);
				var tmp_str = "#h #님 #r도적10제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1472000# #v1332000# #v1002125# #v1040033# #v1041038# #v1060023# #v1061031# #v1082031# #v1072071# #v2070000# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 34) {
				if (cm.getMeso() >= 600000) {
				cm.gainMeso(-600000);
				cm.gainItem(1472006,1);
				cm.gainItem(1332013,1);
				cm.gainItem(1002130,1);
				cm.gainItem(1040044,1);
				cm.gainItem(1041003,1);
				cm.gainItem(1060033,1);
				cm.gainItem(1061003,1);
				cm.gainItem(1082034,1);
				cm.gainItem(1072332,1);
				cm.gainItem(1092018,1);
				cm.gainItem(2070001,1);
				var tmp_str = "#h #님 #r도적20제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1472006# #v1332013# #v1002130# #v1040044# #v1041003# #v1060033# #v1061003# #v1082034# #v1072332# #v1092018# #v2070001# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 35) {
				if (cm.getMeso() >= 1600000) {
				cm.gainMeso(-1600000);
				cm.gainItem(1472010,1);
				cm.gainItem(1332012,1);
				cm.gainItem(1002175,1);
				cm.gainItem(1040057,1);
				cm.gainItem(1041048,1);
				cm.gainItem(1060037,1);
				cm.gainItem(1061044,1);
				cm.gainItem(1082044,1);
				cm.gainItem(1072035,1);
				cm.gainItem(2070001,1);
				var tmp_str = "#h #님 #r도적30제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1472010# #v1332012# #v1002175# #v1040057# #v1041048# #v1060037# #v1061044# #v1082044# #v1072035# #v2070001# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 36) {
				if (cm.getMeso() >= 3200000) {
				cm.gainMeso(-3200000);
				cm.gainItem(1472017,1);
				cm.gainItem(1332031,1);
				cm.gainItem(1002185,1);
				cm.gainItem(1040084,1);
				cm.gainItem(1041076,1);
				cm.gainItem(1060073,1);
				cm.gainItem(1061071,1);
				cm.gainItem(1082074,1);
				cm.gainItem(1072109,1);
				cm.gainItem(2070002,1);
				var tmp_str = "#h #님 #r도적40제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1472017# #v1332031# #v1002185# #v1040084# #v1041076# #v1060073# #v1061071# #v1082074# #v1072109# #v2070002# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 37) {
				if (cm.getMeso() >= 6000000) {
				cm.gainMeso(-6000000);
				cm.gainItem(1472021,1);
				cm.gainItem(1332034,1);
				cm.gainItem(1002210,1);
				cm.gainItem(1040097,1);
				cm.gainItem(1041080,1);
				cm.gainItem(1060086,1);
				cm.gainItem(1061079,1);
				cm.gainItem(1082066,1);
				cm.gainItem(1072130,1);
				cm.gainItem(2070003,1);
				var tmp_str = "#h #님 #r도적50제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1472021# #v1332034# #v1002210# #v1040097# #v1041080# #v1060086# #v1061079# #v1082066# #v1072130# #v2070003# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 38) {
				if (cm.getMeso() >= 20000000) {
				cm.gainMeso(-20000000);
				cm.gainItem(1472036,1);
				cm.gainItem(1332040,1);
				cm.gainItem(1002249,1);
				cm.gainItem(1040100,1);
				cm.gainItem(1041096,1);
				cm.gainItem(1060089,1);
				cm.gainItem(1061095,1);
				cm.gainItem(1082094,1);
				cm.gainItem(1072152,1);
				cm.gainItem(1092047,1);
				cm.gainItem(2070004,1);
				var tmp_str = "#h #님 #r도적60제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1472036# #v1332040# #v1002249# #v1040100# #v1041096# #v1060089# #v1061095# #v1082094# #v1072152# #v1092047# #v2070004# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 39) {
				if (cm.getMeso() >= 40000000) {
				cm.gainMeso(-40000000);
				cm.gainItem(1472042,1);
				cm.gainItem(1332041,1);
				cm.gainItem(1002285,1);
				cm.gainItem(1040107,1);
				cm.gainItem(1041103,1);
				cm.gainItem(1060095,1);
				cm.gainItem(1061102,1);
				cm.gainItem(1082097,1);
				cm.gainItem(1072163,1);
				cm.gainItem(2070005,1);
				var tmp_str = "#h #님 #r도적70제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1472042# #v1332041# #v1002285# #v1040107# #v1041103# #v1060095# #v1061102# #v1082097# #v1072163# #v2070005# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 40) {
				if (cm.getMeso() >= 120000000) {
				cm.gainMeso(-120000000);
				cm.gainItem(1472043,1);
				cm.gainItem(1332037,1);
				cm.gainItem(1002330,1);
				cm.gainItem(1040110,1);
				cm.gainItem(1041107,1);
				cm.gainItem(1060099,1);
				cm.gainItem(1061106,1);
				cm.gainItem(1082120,1);
				cm.gainItem(1072174,1);
				cm.gainItem(1092050,1);
				cm.gainItem(2070006,1);
				var tmp_str = "#h #님 #r도적80제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1472043# #v1332037# #v1002330# #v1040110# #v1041107# #v1060099# #v1061106# #v1082120# #v1072174# #v1092050# #v2070006# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 41) {
				if (cm.getMeso() >= 200000000) {
				cm.gainMeso(-200000000);
				cm.gainItem(1472033,1);
				cm.gainItem(1332027,1);
				cm.gainItem(1002326,1);
				cm.gainItem(1040118,1);
				cm.gainItem(1041118,1);
				cm.gainItem(1060107,1);
				cm.gainItem(1061117,1);
				cm.gainItem(1082144,1);
				cm.gainItem(1072194,1);
				cm.gainItem(2070007,1);
				var tmp_str = "#h #님 #r도적90제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1472033# #v1332027# #v1002326# #v1040118# #v1041118# #v1060107# #v1061117# #v1082144# #v1072194# #v2070007# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 42) {
				if (cm.getMeso() >= 320000000) {
				cm.gainMeso(-320000000);
				cm.gainItem(1472053,1);
				cm.gainItem(1332052,1);
				cm.gainItem(1002383,1);
				cm.gainItem(1050099,1);
				cm.gainItem(1051093,1);
				cm.gainItem(1082138,1);
				cm.gainItem(1072216,1);
				cm.gainItem(2070016,1);
				var tmp_str = "#h #님 #r도적100제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1472053# #v1332052# #v1002383# #v1050099# #v1051093# #v1082138# #v1072216# #v2070016# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 43) {
				if (cm.getMeso() >= 1000000000) {
				cm.gainMeso(-1000000000);
				cm.gainItem(1472052,1);
				cm.gainItem(1332049,1);
				cm.gainItem(1002550,1);
				cm.gainItem(1052072,1);
				cm.gainItem(1082167,1);
				cm.gainItem(1072272,1);
				cm.gainItem(1092049,1);
				var tmp_str = "#h #님 #r도적110제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1472052# #v1332049# #v1002550# #v1052072# #v1082167# #v1072272# #v1092049# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 44) {
				if (cm.getMeso() >= 200000) {
				cm.gainMeso(-200000);
				cm.gainItem(1482000,1);
				cm.gainItem(1492000,1);
				cm.gainItem(2330000,1);
				cm.gainItem(1002610,1);
				cm.gainItem(1052095,1);
				cm.gainItem(1072285,1);
				var tmp_str = "#h #님 #r해적10제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1482000# #v1492000# #v2330000# #v1002610# #v1052095# #v1072285# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 45) {
				if (cm.getMeso() >= 600000) {
				cm.gainMeso(-600000);
				cm.gainItem(1482002,1);
				cm.gainItem(1492002,1);
				cm.gainItem(1002616,1);
				cm.gainItem(1052101,1);
				cm.gainItem(1082183,1);
				cm.gainItem(1072288,1);
				var tmp_str = "#h #님 #r해적20제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1482002# #v1492002# #v1002616# #v1052101# #v1082183# #v1072288# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 46) {
				if (cm.getMeso() >= 1600000) {
				cm.gainMeso(-1600000);
				cm.gainItem(1482004,1);
				cm.gainItem(1492004,1);
				cm.gainItem(2330001,1);
				cm.gainItem(1002622,1);
				cm.gainItem(1052107,1);
				cm.gainItem(1082189,1);
				cm.gainItem(1072294,1);
				var tmp_str = "#h #님 #r해적30제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1482004# #v1492004# #v2330001# #v1002622# #v1052107# #v1082189# #v1072294# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 47) {
				if (cm.getMeso() >= 3200000) {
				cm.gainMeso(-3200000);
				cm.gainItem(1482006,1);
				cm.gainItem(1492006,1);
				cm.gainItem(1002628,1);
				cm.gainItem(1052113,1);
				cm.gainItem(1082195,1);
				cm.gainItem(1072300,1);
				var tmp_str = "#h #님 #r해적40제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1482006# #v1492006# #v1002628# #v1052113# #v1082195# #v1072300# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 48) {
				if (cm.getMeso() >= 6000000) {
				cm.gainMeso(-6000000);
				cm.gainItem(1482007,1);
				cm.gainItem(1492007,1);
				cm.gainItem(2330002,1);
				cm.gainItem(1002631,1);
				cm.gainItem(1052116,1);
				cm.gainItem(1082198,1);
				cm.gainItem(1072303,1);
				var tmp_str = "#h #님 #r해적50제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1482007# #v1492007# #v2330002# #v1002631# #v1052116# #v1082198# #v1072303# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 49) {
				if (cm.getMeso() >= 20000000) {
				cm.gainMeso(-20000000);
				cm.gainItem(1482008,1);
				cm.gainItem(1002634,1);
				cm.gainItem(1052119,1);
				cm.gainItem(1082201,1);
				cm.gainItem(1072306,1);
				var tmp_str = "#h #님 #r해적60제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1482008# #v1002634# #v1052119# #v1082201# #v1072306# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 50) {
				if (cm.getMeso() >= 40000000) {
				cm.gainMeso(-40000000);
				cm.gainItem(1482009,1);
				cm.gainItem(1492008,1);
				cm.gainItem(2330003,1);
				cm.gainItem(2331000,1);
				cm.gainItem(2332000,1);
				cm.gainItem(1002637,1);
				cm.gainItem(1052122,1);
				cm.gainItem(1082204,1);
				cm.gainItem(1072309,1);
				var tmp_str = "#h #님 #r해적70제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1482009# #v1492008# #v2330003# #v2331000# #v2332000# #v1002637# #v1052122# #v1082204# #v1072309# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 51) {
				if (cm.getMeso() >= 120000000) {
				cm.gainMeso(-120000000);
				cm.gainItem(1482010,1);
				cm.gainItem(1492010,1);
				cm.gainItem(1002640,1);
				cm.gainItem(1052125,1);
				cm.gainItem(1082207,1);
				cm.gainItem(1072312,1);
				var tmp_str = "#h #님 #r해적80제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1482010# #v1492010# #v1002640# #v1052125# #v1082207# #v1072312# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 52) {
				if (cm.getMeso() >= 200000000) {
				cm.gainMeso(-200000000);
				cm.gainItem(1482011,1);
				cm.gainItem(1492011,1);
				cm.gainItem(2330004,1);
				cm.gainItem(1002643,1);
				cm.gainItem(1052128,1);
				cm.gainItem(1082210,1);
				cm.gainItem(1072315,1);
				var tmp_str = "#h #님 #r해적90제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1482011# #v1492011# #v2330004# #v1002643# #v1052128# #v1082210# #v1072315# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 53) {
				if (cm.getMeso() >= 320000000) {
				cm.gainMeso(-320000000);
				cm.gainItem(1482012,1);
				cm.gainItem(1492012,1);
				cm.gainItem(1002646,1);
				cm.gainItem(1052131,1);
				cm.gainItem(1082213,1);
				cm.gainItem(1072318,1);
				var tmp_str = "#h #님 #r해적100제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1482012# #v1492012# #v1002646# #v1052131# #v1082213# #v1072318# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			} else if (selection == 54) {
				if (cm.getMeso() >= 1000000000) {
				cm.gainMeso(-1000000000);
				cm.gainItem(1482013,1);
				cm.gainItem(1492013,1);
				cm.gainItem(2330005,1);
				cm.gainItem(1002649,1);
				cm.gainItem(1052134,1);
				cm.gainItem(1082216,1);
				cm.gainItem(1072321,1);
				var tmp_str = "#h #님 #r해적110제 #k장비를 드렸습니다.\r\n";
				tmp_str += " 장비는 #v1482013# #v1492013# #v2330005# #v1002649# #v1052134# #v1082216# #v1072321# 입니다.\r\n\r\n";
				tmp_str += " 잘 받으셨죠??\r\n\r\n";
				tmp_str += "그럼 잘가시고 나중에 또 들러주세요";
				cm.sendOk(tmp_str);
				cm.dispose();
				} else {
				cm.sendOk("#b#h #님 #k메소가 부족합니다... 돈을 모으신후 다시와주세요...");
				cm.dispose();
				}
			}
		}
	}
}