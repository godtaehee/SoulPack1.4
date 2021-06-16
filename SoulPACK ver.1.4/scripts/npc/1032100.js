/*
	MADE BY 소희(jantnic) 수정자 소울씨(xoeh15)
	TRADE NPC
*/
function start() {
	cm.sendSimple ("저는 #b요정 아르웬#k이라고 합니다 #rNPC 증발현상#k을 막기위해 엘리니아에서 왔답니다 무엇을 도와드릴까요?\r\n참고: NPC 증발현상이란 어떠한 맵에 NPC가 모여있을때 NPC가 한명한명 사라지는현상을 말합니다\r\n#L0#저희서버를 소개합니다~ [클라우 머신]#l\r\n#L1#엘리멘탈 상점가기 [마야]\r\n#L2#새로운 스킬배우기 [묘묘]\r\n#L3#레벨별 장비사기 [문지기]\r\n#L4#무기만들기 [해피]\r\n#L5#자유시장 사냥터가기\r\n#L6#스텟찍기 [북극곰 로로]\r\n#L7#보스워프 NPC [몽 프럼 콩]\r\n#L8#캐시충전 NPC [유스]\r\n#L9#희귀상점 [피아노]")
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.openNpc(9201067);
	} else if (selection == 1) {
		cm.openNpc(1012101);
	} else if (selection == 2) {
		cm.openNpc(9090000);
	} else if (selection == 3) {
		cm.openNpc(2120001);
	} else if (selection == 4) {
		cm.openNpc(9220004);
	} else if (selection == 5) {
		cm.openNpc(1052006);
	} else if (selection == 6) {
		cm.openNpc(9001001);
	} else if (selection == 7) {
		cm.openNpc(1052012);
	} else if (selection == 7) {
		cm.openNpc(9120009);
	} else if (selection == 8) {
		cm.openNpc (9120009);
	} else if (selection == 9) {
		cm.openNpc (2121005);
	} else {
		cm.dispose();
	}
}