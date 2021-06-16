//	Roonolph
//	HappyVill NPC
//	Made : 소희 (jantnic)

importPackage(net.sf.odinms.client);



var status = 0;
var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*50+1);


function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("토르에게 뿔을 갖다줘야할텐데... 눈이너무많이오네...");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("토르녀석 오늘도 뿔을 잃어버렸구만... 오늘따라 유난히 #b토르의 뿔#k이 보이지않네... 어, 저기 여행자님 부탁좀 드려도될까요? 토르가 캐시샵에서 돌아오는길에 뿔을 잃어버리고 말았어요. 토르는 뿔을잃어버리면 무조건 울기만해서 제가찾아주고있거든요... 근데 아무리찾아도 보이지를 않네요... 저대신 캐시샵에 들어가셔서 #b토르의 뿔#k좀 찾아주시겠어요? #b토르의 뿔#k을 가져다주시면 #b루돌프의 코#k를 드릴께요!");
			}
		else if (status == 1) {
			if (cm.getLevel() >= 1 && cm.haveItem(4031063, 1)) {
			cm.sendOk("찾아오셧네요! 고맙습니다. 답례를 드려야겠죠? #b루돌프의 코#k라는 아이템인데요. 감사의표시니 가져가세요!");
			} else {
			cm.sendOk("#b토르의 뿔#k을 갖다주세요.. 캐시샵에 들어가시면 찾으실수 있어요!");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(4031063, -1);
			cm.gainMeso(1000);
			cm.gainExp(1000);
			if ((itemchance >= 1) && (itemchance <= 2)) {
			cm.gainItem(1012011, 1);
			}
			else if ((itemchance >= 3) && (itemchance <= 4)) {
			cm.gainItem(1012012, 1);
			}
			else if ((itemchance >= 5) && (itemchance <= 6)) {
			cm.gainItem(1012013, 1);
			}
			else if ((itemchance >= 7) && (itemchance <= 8)) {
			cm.gainItem(1012014, 1);
			}
			else if ((itemchance >= 9) && (itemchance <= 10)) {
			cm.gainItem(1012015, 1);
			}
			else if ((itemchance >= 11) && (itemchance <= 12)) {
			cm.gainItem(1012016, 1);
			}
			else if ((itemchance >= 13) && (itemchance <= 14)) {
			cm.gainItem(1012017, 1);
			}
			else if ((itemchance >= 15) && (itemchance <= 16)) {
			cm.gainItem(1012018, 1);
			}
			else if ((itemchance >= 17) && (itemchance <= 18)) {
			cm.gainItem(1012019, 1);
			}
			else if ((itemchance >= 19) && (itemchance <= 20)) {
			cm.gainItem(1012020, 1);
			}

			cm.dispose();
		}
	}
}
