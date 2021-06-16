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
var maps = Array(100000000, 101000000, 102000000, 103000000, 120000000, 104000000, 105040300, 200000000, 211000000, 230000000, 220000000, 221000000, 222000000, 240000000, 250000000, 251000000, 800000000, 801000000, 260000000, 600000000, 280030000, 220080001, 240060200, 230040420, 980000000, 980010000);
var names = Array("헤네시스", "엘리니아", "페리온", "커닝시티","노틸러스 선착장","리스항구", "슬리피우드", "오르비스", "엘나스", "아쿠아로드", "루디브리엄", "지구방위본부", "아랫마을", "리프레", "무릉", "허브마을", "버섯신사", "쇼와마을", "아리안트", "뉴리프시티","#r자쿰", "#r파풀", "#r혼테일", "#r피아누스", "#r몬스터 카니발", "#r투기장[물약가능,카니발응용]);
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
			cm.sendNext("#b#h ##k님 안녕하세요?");
		} else if (status == 1) {
			cm.sendNextPrev("다른곳도 여행하고 싶으세요?")
		} else if (status == 2) {
			var selStr = "어디로 모셔드릴까요?#b";
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