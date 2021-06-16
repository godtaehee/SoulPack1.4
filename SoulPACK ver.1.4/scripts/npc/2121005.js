/*
by.미키가집적제작했습니다,
무단배포,무한배포 금지
*/
function start() {
	cm.sendSimple ("소울상점입니다~!\r\n저는 휘귀템만팔아용~^^\r\n#L0##b휘귀무기#k#l\r\n#L1##g휘귀방어구#k#l\r\n#L2##r휘귀캐시템");
}

function action(mode, type, selection) {
	cm.dispose();
if (selection == 0) {
		cm.openShop (70);
	} else if (selection == 1) {
		cm.openShop (71);
	} else if (selection == 2) {
		cm.openShop (72);
	} else if (selection == 3) {


	} else {
		cm.dispose();
	}
}