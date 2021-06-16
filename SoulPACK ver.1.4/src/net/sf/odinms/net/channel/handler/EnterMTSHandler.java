/*
	제작자 : 패닉씨(leesh6796@naver.com)
*/

package net.sf.odinms.net.channel.handler;



import net.sf.odinms.tools.data.input.SeekableLittleEndianAccessor;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.MapleJob;
import net.sf.odinms.net.AbstractMaplePacketHandler;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.server.maps.MapleMap;
import net.sf.odinms.scripting.npc.NPCScriptManager;

public class EnterMTSHandler extends AbstractMaplePacketHandler {
 @Override
 public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
                if (c.getPlayer().getMapId() < 100000000) {
                       c.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(1,"메이플 아일랜드에선 불가능합니다."));
                       c.getSession().write(MaplePacketCreator.enableActions());
                } else {
			if (c.getPlayer().getMapId() >= 100000000) {
				NPCScriptManager.getInstance().start(c, 1052013);
                        	c.getSession().write(MaplePacketCreator.enableActions());
			}
		}
 	}
}