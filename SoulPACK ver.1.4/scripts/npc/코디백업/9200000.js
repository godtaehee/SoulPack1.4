/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
 Agatha - Orbis Platform Usher
 Warp NPC
*/

var status = 0;
var maps = new Array(200080101,220020600, 104000000, 102000000, 100000000, 103000000,101000000, 105040300,200000000, 211000000,110000000, 220000000,  230000000, 260000000, 250000000, 251000000,221000000,600000000,801040000);
var mapNames = new Array("#r미로미로 파티퀘스트(제작중)#k 레밸제한:30~100 ","단풍잎 사냥터","리스항구", "페리온", "헤네시스", "커닝시티","엘리니아","슬리피우드","오르비스", "엘나스","플로리나비치", "루디브리엄", "아쿠아리움", "아리안트", "무릉도원", "허브타운","지구방위본부","뉴라이프시티","하이드 아웃");
var selectedMap = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		var where = "어디로 이동하시겠습니까?\r\n한번 이동하시는데 드는 비용은 #r5,000#k메소입니다.\r\n───────────────────────";
		for (var i = 0; i < maps.length; i++) {
			where += "\r\n#L" + i + "# " + mapNames[i] + "#l";
		}
		cm.sendSimple(where);
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
					cm.sendNext ("좋아,다음에보자.조심해!");
					selectedMap = selection;
					status++
			} else if (status == 2) {
					cm.warp(maps[selectedMap], 0);
					cm.gainMeso ("-5000");
					cm.dispose();
			}
		}
	}
}