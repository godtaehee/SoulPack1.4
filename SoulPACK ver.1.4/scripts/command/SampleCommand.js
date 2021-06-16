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

importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.client.messages);
importPackage(net.sf.odinms.tools);

function getDefinition () {
	var ret = java.lang.reflect.Array.newInstance(CommandDefinition, 1);
	ret[0] = new CommandDefinition("scoreboard", "", "Just a sample", "50"); 
	return ret;
}

function execute (c, mc, splitted) {
	c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.showAriantScoreBoard());
}