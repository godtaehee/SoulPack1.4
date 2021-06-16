/*
*/

/*
 * To change this template, choose Tools | Templates and open the template in the editor.
 */

package net.sf.odinms.net.channel.handler;

import java.rmi.RemoteException;
import net.sf.odinms.client.MapleCharacter;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.messages.CommandProcessor;
import net.sf.odinms.net.AbstractMaplePacketHandler;
import net.sf.odinms.net.channel.ChannelServer;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.tools.data.input.SeekableLittleEndianAccessor;

/**
 * 
 * @author Matze
 */
public class WhisperHandler extends AbstractMaplePacketHandler {

 public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
  byte mode = slea.readByte();
  if (mode == 6) { // whisper
   // System.out.println("in whisper handler");
   String recipient = slea.readMapleAsciiString();
   String text = slea.readMapleAsciiString();
                        String korText = KorConvertHendler.KorConvert(text);
   
   if (!CommandProcessor.getInstance().processCommand(c, text)) {
    MapleCharacter player = c.getChannelServer().getPlayerStorage().getCharacterByName(recipient);
    if (player != null) {
     player.getClient().getSession().write(MaplePacketCreator.getWhisper(c.getPlayer().getName(), c.getChannel(), korText));
     c.getSession().write(MaplePacketCreator.getWhisperReply(korText, (byte) 1));
    } else { // not found
     try {
      if (ChannelServer.getInstance(c.getChannel()).getWorldInterface().isConnected(recipient)) {
       ChannelServer.getInstance(c.getChannel()).getWorldInterface().whisper(
        c.getPlayer().getName(), recipient, c.getChannel(), korText);
       c.getSession().write(MaplePacketCreator.getWhisperReply(recipient, (byte) 1));
      } else {
       c.getSession().write(MaplePacketCreator.getWhisperReply(recipient, (byte) 0));
      }
     } catch (RemoteException e) {
      c.getSession().write(MaplePacketCreator.getWhisperReply(recipient, (byte) 0));
      c.getChannelServer().reconnectWorld();
     }
    }
   }
  } else if (mode == 5) { // - /find
   String recipient = slea.readMapleAsciiString();
   MapleCharacter player = c.getChannelServer().getPlayerStorage().getCharacterByName(recipient);
   if (player != null && (c.getPlayer().isGM() || !player.isHidden())) {
                            if (player.inCS()) {
     c.getSession().write(MaplePacketCreator.getFindReplyWithCS(recipient));
    } else {
     c.getSession().write(MaplePacketCreator.getFindReplyWithMap(recipient, player.getMap().getId()));
    }
    } else { // not found
     try {
      
     int channel = ChannelServer.getInstance(c.getChannel()).getWorldInterface().find(recipient);
     if (channel > -1) {
      c.getSession().write(MaplePacketCreator.getFindReply(recipient, channel));
     } else {
      c.getSession().write(MaplePacketCreator.getWhisperReply(recipient, (byte) 0));
     }
    } catch (RemoteException e) {
     c.getChannelServer().reconnectWorld();
    }
   }
  }
 }
}

