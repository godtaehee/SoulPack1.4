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

Halloween PQ NPC 9

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
				cm.sendNext ("I manage the Boss stage of the Halloween PQ!\r\n(If I dont work the next time, relog in)");
			}
		else if (status == 1) {
			if (cm.haveItem(3994085,1)) {
			if (cm.haveItem(3995000,1))
			cm.sendOk ("Great! You are ready for the Bonus stage!!!");
			}
			if (!cm.haveItem(3994085,1)) {
			cm.sendOk ("You have not killed #bFrankenstein.#k");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(3994085,-1);
			cm.gainItem(3995000,-1);
			cm.gainExp(150000);
			cm.warp(682000700,0);
			cm.gainItem(1302034,1);
			cm.gainItem(1432013,1);
			cm.gainItem(1402044,1);
			cm.gainItem(1002699,1);
			cm.gainItem(1302062,1);
			cm.gainItem(2022113,100);
			cm.gainItem(2022246,100);
			cm.gainItem(5021012,3);
			cm.gainItem(4031203,500);
			cm.sendOk ("WOW! You are in the #bBonus Stage!#k You will have 1 minute here. #bBe aware that the snail there is the reactor, and be carful there!#k\r\n\r\n#bJUMP DOWN AND YOU WILL BE AUTOMATICALLY WRAPED TO FM.#k");
			cm.dispose();
		}
	}
}
