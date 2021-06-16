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

Halloween PQ Warp NPC

*/


function start() {
	cm.sendSimple ("Do you want to go to the #bHalloween PQ?#k\r\n#L0#Yes#l\r\n#L1#No#l");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.warp (103000103, 0);
		cm.gainItem (3994017,1);
		cm.sendOk ("Welcome to the first Stage! First get #b#i4000035# 50 Tableclothes.#k");
	} else {
		cm.warp (910000000, 0);
		cm.sendOK ("OK. Enjoy Halloween!~");
	}
}
