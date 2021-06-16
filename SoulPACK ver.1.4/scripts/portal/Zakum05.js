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

importPackage(net.sf.odinms.server.maps);
importPackage(net.sf.odinms.net.channel);
importPackage(net.sf.odinms.tools);

/*
    Zakum Entrance
*/

function enter(pi) {
	var nextMap = 211042400;
	if (pi.getQuestStatus(100200) != net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
		// do nothing; send message to player
		pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(6, "You are not ready to face the boss."));
		return false;	
	}
	else if (!pi.haveItem(4001017)) {
		// do nothing; does not have Eye of Fire
		pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(6,"You do not have the Eye of Fire.  You may not face the boss."));
		return false;
	}
	else {
		pi.warp(nextMap,"west00");
		return true;
	}
}