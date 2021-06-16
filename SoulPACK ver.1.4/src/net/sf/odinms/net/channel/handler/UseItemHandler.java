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
 * UseItemHandler.java
 *
 * Created on 27. November 2007, 16:51
 */

package net.sf.odinms.net.channel.handler;

import net.sf.odinms.client.IItem;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.MapleInventoryType;
import net.sf.odinms.net.AbstractMaplePacketHandler;
import net.sf.odinms.server.MapleInventoryManipulator;
import net.sf.odinms.server.MapleItemInformationProvider;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.tools.data.input.SeekableLittleEndianAccessor;

/**
 *
 * @author Matze
 */

public class UseItemHandler extends AbstractMaplePacketHandler {
//	private static Logger log = LoggerFactory.getLogger(UseItemHandler.class);

	public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
		if (!c.getPlayer().isAlive()) {
			c.getSession().write(MaplePacketCreator.enableActions());
			return;
		}
		MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
		slea.readInt(); // i have no idea :) (o.o)
		byte slot = (byte)slea.readShort();
		int itemId = slea.readInt(); //as if we cared... ;)
		IItem toUse = c.getPlayer().getInventory(MapleInventoryType.USE).getItem(slot);
		if (toUse != null && toUse.getQuantity() > 0) {
			if (toUse.getItemId() != itemId) {
//				log.info("[h4x] Player {} is using an item not in the slot: {}", c.getPlayer().getName(), Integer.valueOf(itemId));
				return;
			}
			if (itemId == 2022178 || itemId == 2050004) {
				c.getPlayer().dispelDebuffs();
				MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
				c.getSession().write(MaplePacketCreator.enableActions());
				return;
			}
			if (ii.isTownScroll(itemId)) {
				if (ii.getItemEffect(toUse.getItemId()).applyTo(c.getPlayer())) {
					MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
				}
				c.getSession().write(MaplePacketCreator.enableActions());
				return;
			}
			MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false);
			ii.getItemEffect(toUse.getItemId()).applyTo(c.getPlayer());
			c.getPlayer().checkBerserk();
		} else {
//			log.info("[h4x] Player {} is using an item he does not have: {}", c.getPlayer().getName(), Integer.valueOf(itemId));
			return;
		}
	}
}