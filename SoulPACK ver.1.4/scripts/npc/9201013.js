/*
@    Author : Snow
@
@    NPC = NAME
@    Map =  MAP
@    NPC MapId = MAPID
@    Function = Rebirth Player
@
*/

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
        cm.sendYesNo("안녕 나는 너를 대성당으로 보내줘. 너의 한번 뒤에 Nicole will send you down to be married. 준비가 되면 프리스트처럼 보이는 NPC를 클릭해.혹시 사고라도 내서 잘못 클릭하면 걱정마 악마가 너를 다른곳으로 내보내버리니까! 잘가~!");
} else if (status == 1) {
        cm.warp(680000210,0);
        cm.dispose();
        }            
    }
}