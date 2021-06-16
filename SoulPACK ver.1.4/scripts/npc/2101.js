/* 제작자 : 철퍼덕
*/


importPackage(net.sf.odinms.client);

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	status++;
		if (status == 0) {
			cm.sendYesNo ("안녕! 처음보는애구나 히히..\r\n이곳을 지나 1차전직을 시켜주는 #r세라#k누나에게 가보고싶지?\r\n");
			} else if (status == 1) {

			if(cm.haveItem(4031003,1) == false) {         //       아이템이름 쓰셈
				cm.sendOk("그럼 이곳에서 나오는 몬스터들을 잡아 내가 잃어버린 거울을 가져와줄레?바로 이렇게 생긴거야 #v4031003#");
				cm.dispose();
			} else if(cm.haveItem(4031003, 1) == true) { //       아이템이름 쓰셈
 				cm.sendOk("그럼 이곳에서 나오는 몬스터들을 잡아 내가 잃어버린 거울을 가져와줄레?바로 이렇게 생긴거야 #v4031003#");
				cm.gainMeso(25000); //돈뺏고
				cm.gainItem(4031003, -1);   //깍이는템
				cm.gainItem(5072000, 40);   //깍이는템
				cm.warp(3);
				cm.dispose();
			}
		} else {
			cm.dispose();
		}
	}