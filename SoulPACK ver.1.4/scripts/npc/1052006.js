/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
					   Matthias Butz <matze@odinms.de>
					   Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* Mia Warp
	So people aren't stuck in Nath.
*/

var status = 0;
var maps = Array(910000001, 910000002, 910000003, 910000004, 910000005, 910000006, 910000007, 910000008, 910000009, 910000010, 910000011, 910000012, 910000013, 910000014, 910000015, 910000016, 910000017);
var names = Array("#g[뉴 사냥터]#k 자유시장1 [킹슬라임]", "#g[뉴 사냥터]#k 자유시장2 [알리샤르]", "#g[뉴 사냥터]#k 자유시장3 [파파픽시]", "#g[뉴 사냥터]#k 자유시장4 [주니어 발록]", "#g[뉴 사냥터]#k 자유시장5 [마가티아 보스]", "#g[뉴 사냥터]#k 자유시장6 [블루 머쉬맘]", "#g[뉴 사냥터]#k 자유시장7 [개념 無 유령]", "#g[뉴 사냥터]#k 자유시장8 [대왕지네]", "#g[뉴 사냥터]#k 자유시장9 [다크 고양이]", "#g[뉴 사냥터]#k 자유시장10 [지구방위대 슈퍼맨]", "#g[뉴 사냥터]#k 자유시장11 [아줌마]", "#g[뉴 사냥터]#k 자유시장12 [할아버지<<존나쌤]", "#g[뉴 사냥터]#k 자유시장13 [스텀피]", "#g[뉴 사냥터]#k 자유시장14 [포장마차]", "#g[뉴 사냥터]#k 자유시장15 [머쉬맘]", "#g[뉴 사냥터]#k 자유시장 16 [크림슨 발록]", "#g[뉴 사냥터]#k 자유시장 17 [스키타는 예티]")
// var cost = Array(1000, 1000, 1000, 1000);
var selectedMap = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("다음에 또 이용해주세요~");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("#b#h ##k님 안녕하세요? 자유시장 워프 NPC 제이크 입니다");
		} else if (status == 1) {
			cm.sendNextPrev("자유시장 사냥터는 총 17개가 있으며 1~17까지 자유시장의 형태인 다양한 보스들이 준비되어있습니다 레벨업에 탁월한 사냥터이며 레벨업이 빠른만큼 위험성도 만만치 않습니다 부디 현명한 선택하셔서 열렙 하시길 바랍니다")
		} else if (status == 2) {
			var selStr = "어떤 자유시장에 들어가실껍니까? 선택해주세요#b";
			for (var i = 0; i < maps.length; i++) {
				selStr += "\r\n#L" + i + "#" + names[i] + "#l";
			}
			cm.sendSimple(selStr);
		} else if (status == 3) {
// 			   if (cm.getMeso() < cost[selection]) {
			   if (cm.getMeso() < 0) {
				cm.sendOk("메소가 부족합니다")
				cm.dispose();
			} else {
				cm.sendYesNo("#b" + names[selection] + "#k (으)로 가시겠습니까?");
				selectedMap = selection;
			}
		} else if (status == 4) {
// 			cm.gainMeso(-cost[selectedMap]);
			cm.warp(maps[selectedMap], 0);
			cm.dispose();
		}
	}
}	