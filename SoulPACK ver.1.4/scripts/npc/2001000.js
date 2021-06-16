//	Clif
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
			cm.sendOk("61년세월동안 난여기살았지만.. 행복한마을에서 눈이 그치는걸 볼수없엇다네.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("자네. 부탁좀 들어주게. 내 손자에게 선물을 줘야하는데 내가기르던 달팽이들이 포장중이던 내선물상자를 다 갉아먹어버리고 도망을가버렸어! 부탁이니 내 선물상자좀 구해다주게나.\r\n선물상자는 #b파란달팽이,빨간달팽이#k를 잡으면 얻을수있을게야.\r\n나에 선물상자 25개를 모아와주게나...");
			}
		else if (status == 1) {
			if (cm.getLevel() >= 10 && cm.haveItem(4031427, 25)) {
			cm.sendOk("나대신 모아오느냐고 수고했네.. 우리손자가 기뻐하겠구먼..");
			} else {
			cm.sendOk("레벨이 10미만이거나, 선물상자가 모자라네... 레벨이 10미만이면 루돌프에게 가보거라. 루돌프의부탁을 들어주면 루돌프의 코라는 신기한 아이템을 준다던데...");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(4031427, -25);
			cm.gainMeso(3000);
			cm.gainExp(1200);
			if ((itemchance >= 1) && (itemchance <= 20)) {
			cm.gainItem(2022178, itemamount);
			}
			else if ((itemchance >= 21) && (itemchance <= 40)) {
			cm.gainItem(2030000, itemamount);
			}
			else if ((itemchance >= 41) && (itemchance <= 50)) {
			cm.gainItem(2000006, itemamount);
			}
			else if ((itemchance >= 51) && (itemchance <= 60)) {
			cm.gainItem(2000002, itemamount);
			}
			else if ((itemchance >= 61) && (itemchance <= 70)) {
			cm.gainItem(2000000, itemamount);
			}
			else if (itemchance == 71) {
			cm.gainItem(2041005, 1);
			}
			else if (itemchance == 72) {
			cm.gainItem(2041002, 1);
			}
			else if (itemchance == 73) {
			cm.gainItem(2040310, 1);
			}
			else if (itemchance == 74) {
			cm.gainItem(2040511, 1);
			}
			else if (itemchance == 75) {
			cm.gainItem(2040402, 1);
			}
			else if (itemchance == 76) {
			cm.gainItem(2040902, 1);
			}
			else if (itemchance == 77) {
			cm.gainItem(2040603, 1);
			}
			else if (itemchance == 78) {
			cm.gainItem(2041011, 1);
			}
			else if (itemchance == 79) {
			cm.gainItem(2040002, 1);
			}	
			else if (itemchance == 80) {
			cm.gainItem(2044202, 1);
			}	
			else if (itemchance == 81) {
			cm.gainItem(2044402, 1);
			}
			else if (itemchance == 82) {
			cm.gainItem(2043802, 1);
			}
			else if (itemchance == 83) {
			cm.gainItem(2043102, 1);
			}	
			else if (itemchance == 84) {
			cm.gainItem(2043702, 1);
			}
			else if (itemchance == 85) {
			cm.gainItem(2044502, 1);
			}
			else if (itemchance == 86) {
			cm.gainItem(2044602, 1);
			}
			else if (itemchance == 87) {
			cm.gainItem(2043202, 1);
			}
			else if (itemchance == 88) {
			cm.gainItem(2043302, 1);
			}
			else if (itemchance == 89) {
			cm.gainItem(2044702, 1);
			}
			else if (itemchance == 90) {
			cm.gainItem(2043008, 1);
			}
			else if (itemchance == 91) {
			cm.gainItem(2044002, 1);
			}
			else if (itemchance == 92) {
			cm.gainItem(2044302, 1);
			}
			else if (itemchance == 93) {
			cm.gainItem(2044102, 1);
			}
			else if (itemchance == 94) {
			cm.gainItem(2043002, 1);
			}

			cm.dispose();
		}
	}
}
