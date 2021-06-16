/*
		NPC : Rupi (2002000)
		HappyVill (209000000)
		MADE BY 소희(jantnic)
*/
importPackage(net.sf.odinms.server.maps);

var status = 0;
var cost;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if ((status <= 2 && mode == 0) || (status == 4 && mode == 1)){
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (cm.getChar().getMapId() != 209000000) {
		if (status == 0) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendNext("엘리니아와 가까운 곳에 눈으로 덮인 마을이 있다는 소문 들으셨나요?");
				cost = 200;
			} else {
				cm.sendNext("엘리니아와 가까운 곳에 눈으로 덮인 마을이 있다는 소문 들으셨나요?");
				cost = 2000;
			}
		} else if (status == 1) {
			cm.sendNext("엘리니아와 가까운 곳에 몇십년째 눈만 내리고있다는 마을이 있다는 소문 들으셧나요?");
		} else if (status == 2) {
			cm.sendYesNo("새하얀 눈으로 가득한 마을로 가보고 싶지 않으세요?");
		} else if (status == 3) {
			cm.sendNext("지금 보내드리죠. 눈으로 뒤덮힌 새하얀마을에서 즐거운시간되세요.");
		} else if (status == 4) {
			if (cm.getMeso() < cost) {
				cm.sendPrev("죄송하지만, 돈이 부족하시네요.");
			} else {
				cm.gainMeso(-cost);
				cm.warp(209000000, 0);
				cm.dispose();
			}	
		}
	} else if (cm.getChar().getMapId() == 209000000) {
		if (status == 0) {
			cm.sendSimple ("#L0##b엘리니아#k로 가야 겠어요.#l\r\n#L1##b이 곳#k에서 아직 더있고 싶어요.#l");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendOk("지금 보내드리죠. 기회가 대시면 이마을로 또놀러오세요.");
			} else if (selection == 1) {
				cm.sendOk("언제든 오세요. 엘리니아로 대려다드리죠.");
				cm.dispose();
			} 
		} else if (status == 2) {
			cm.warp(101000000, 0);
			cm.dispose();
			}
		}
	}
}