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

Halloween PQ NPC 7

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
				cm.sendNext ("I manage the seventh stage of the #bHalloween PQ#k!");
			}
		else if (status == 1) {
			if (cm.haveItem(2022245,10)) {
			if (cm.haveItem(3994023,1))
			cm.sendOk ("Great! You are ready for the eighth stage");
			}
			if (!cm.haveItem(2022245,10)) {
			cm.sendOk ("It's either you are not part of the #bHalloween PQ#k or you have not collected #b#i2022245# 10 Heartstoppers.#k");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(2022245,-10);
			cm.gainItem(3994023,-1);
			cm.gainItem(3994024,1);
			cm.gainExp(50000);
			cm.warp(682000502,0);
			cm.sendOk ("Welcome to the 8th stage! This one is also kind of hard. Kill Hoodoos to get #b#i2022247# 10 Red Gummy Slimes.#k Good Luck!");
			cm.dispose();
		}
	}
}
