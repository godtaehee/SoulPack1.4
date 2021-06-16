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

package net.sf.odinms.net.channel.handler;

import java.rmi.RemoteException;

import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.messages.ServernoticeMapleClientMessageCallback;
import net.sf.odinms.net.AbstractMaplePacketHandler;
import net.sf.odinms.net.channel.ChannelServer;
import net.sf.odinms.net.world.remote.WorldChannelInterface;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.tools.data.input.SeekableLittleEndianAccessor;

/**
*
* @author Acrylic (Terry Han)
*/

public class EnterCashShopHandler extends AbstractMaplePacketHandler {
	@Override
	public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
		if (c.getChannelServer().allowCashshop()) {
			if (c.getPlayer().getNoPets() > 0) {
				c.getPlayer().unequipAllPets();
			}
			try {
				WorldChannelInterface wci = ChannelServer.getInstance(c.getChannel()).getWorldInterface();
				wci.addBuffsToStorage(c.getPlayer().getId(), c.getPlayer().getAllBuffs());
				wci.addCooldownsToStorage(c.getPlayer().getId(), c.getPlayer().getAllCooldowns());
			} catch (RemoteException e) {
				c.getChannelServer().reconnectWorld();
			}
			c.getPlayer().getMap().removePlayer(c.getPlayer());
			c.getSession().write(MaplePacketCreator.warpCS(c));
			c.getPlayer().setInCS(true);
			c.getSession().write(MaplePacketCreator.enableCSUse0());
			c.getSession().write(MaplePacketCreator.enableCSUse1());
			c.getSession().write(MaplePacketCreator.enableCSUse2());
			c.getSession().write(MaplePacketCreator.enableCSUse3());
			c.getSession().write(MaplePacketCreator.showNXMapleTokens(c.getPlayer()));
			c.getSession().write(MaplePacketCreator.sendWishList(c.getPlayer().getId()));
			c.getPlayer().saveToDB(true);
		} else {
			new ServernoticeMapleClientMessageCallback(5, c).dropMessage("The Cash Shop is not available.");
			c.getSession().write(MaplePacketCreator.enableActions());
		}
	}
}
