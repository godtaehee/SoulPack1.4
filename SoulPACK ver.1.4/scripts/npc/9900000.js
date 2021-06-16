/*

	구씨가문제작 가위바위보NPC  (8/8)

*/


importPackage(net.sf.odinms.client);




var randomA = 1 + Math.floor(Math.random() * 100 - 1);
var randomB = 1 + Math.floor(Math.random() * 100 - 1);
var randomC = 1 + Math.floor(Math.random() * 100 - 1); 


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
		} else {
		if (mode == 0) {
			cm.sendOk("잘가~ ");
			cm.dispose();
		}
		if (mode == 1)
			status++;
		else
			status--;

		if(status == 0) {
		var tmp_str = "안녕하세요. 가위바위보 도박을 하시러오신거같은데...\r\n";
		tmp_str += "수수료는 10,000메소고요. 이길시 3배로 돌려받습니다. 뭐내실건가요?\r\n";
		tmp_str += "#L1##r가위#k\r\n";
		tmp_str += "#L2##b바위#k\r\n";
		tmp_str += "#L3##d보자기#k\r\n";

		cm.sendSimple(tmp_str);

		} else if(selection == 1) {
			if(cm.getMeso() < 10000) {
			cm.sendOk("돈도 없으면서 뭘한다고\r\n");
			cm.dispose();

		} else if(randomA > 64) {
			cm.gainMeso(30000);
			cm.sendOk("#r니가 이겼어 가위바위보 잘하는데? 여기 돈#k\r\n");
			cm.dispose();

		} else {
			cm.gainMeso(-10000);
			cm.sendOk("#r내가 이겼다 돈내놔#k\r\n");
			cm.dispose();
			}

		} else if(selection == 2) {
			if(cm.getMeso() < 10000) {
			cm.sendOk("돈도 없으면서 뭘한다고\r\n");
			cm.dispose();

		} else if(randomA > 64) {
			cm.gainMeso(30000);
			cm.sendOk("#r니가 이겼어 가위바위보 잘하는데? 여기 돈#k\r\n");
			cm.dispose();

		} else {
			cm.gainMeso(-10000);
			cm.sendOk("#r내가 이겼다 돈내놔#k\r\n");
			cm.dispose();
			}

		} else if(selection == 3) {
			if(cm.getMeso() < 10000) {
			cm.sendOk("돈도 없으면서 뭘한다고\r\n");
			cm.dispose();

		} else if(randomA > 64) {
			cm.gainMeso(30000);
			cm.sendOk("#r니가 이겼어 가위바위보 잘하는데? 여기 돈#k\r\n");
			cm.dispose();

		} else {
			cm.gainMeso(-10000);
			cm.sendOk("#r내가 이겼다 돈내놔#k\r\n");
			cm.dispose();
			}
			cm.dispose();
			}
	    }
}