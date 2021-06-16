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

Halloween PQ NPC

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
		if (status >= 2 && mode == 0) {
			cm.sendOk ("Enjoy Haloween!~");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext ("I manage the first stage of the #bHalloween PQ#k!");
			}
		else if (status == 1) {
			if (cm.haveItem(4000035,50)) {
			if (cm.haveItem(3994017,1))
			cm.sendOk ("Great! You are ready for the second stage");
			}
			if (!cm.haveItem(4000035,50)) {
			cm.sendOk ("It's either you are not part of the #bHalloween PQ#k or you have not collected #b#i4000035# 50 Tableclothes.#k");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(4000035,-50);
			cm.gainItem(3994017,-1);
			cm.gainItem(3994018,1);
			cm.gainExp(50000);
			cm.warp(103000105,0);
			cm.sendOk ("Welcome to the second stage! Get me #b#i4000036# 30 Medicine With Weird Vibes.#k");
			cm.dispose();
		}
	}
}
