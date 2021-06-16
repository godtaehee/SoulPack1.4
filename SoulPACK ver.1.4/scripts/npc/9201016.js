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
======>OdinMS NX Npc<======
by [GM]Fatality of FusionMS
*/
function start() {
	cm.sendSimple ("�ȳ� ���� ������Ŭ,��,�Ҹ��� �Ȱ��վ�. ���������ϴ�??\r\n#L0#��Ŭ#l\r\n#L1#��#l\r\n#L2#�Ҹ�#l\r\n#L3#����#l\r\n#L4#����#l\r\n#L5#�尩#l\r\n#L6#�Ź�#l\r\n#L7#�ֹ���#l");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.openShop (5000);
	} else if (selection == 1) {
		cm.openShop (5001);
	} else if (selection == 2) {
		cm.openShop (5002);
                   } else if (selection == 3) {
		cm.openShop (5003);
	} else if (selection == 4) {
		cm.openShop (5004);
	} else if (selection == 5) {
		cm.openShop (5005);
	} else if (selection == 6) {
		cm.openShop (5006);
	} else if (selection == 7) {
		cm.openShop (5007);
	} else {
		cm.dispose();
	}
}