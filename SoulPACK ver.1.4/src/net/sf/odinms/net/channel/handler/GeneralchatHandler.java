/*
Made by. 필승(aaaa9454@naver.com)

Korea converted Chalkboard Scripted by. 블랙보이
*/

package net.sf.odinms.net.channel.handler;

import java.rmi.RemoteException;
import java.util.logging.Level;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.messages.CommandProcessor;
import net.sf.odinms.net.AbstractMaplePacketHandler;
import net.sf.odinms.net.MaplePacket;
import net.sf.odinms.net.channel.ChannelServer;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.tools.StringUtil;
import net.sf.odinms.tools.data.input.SeekableLittleEndianAccessor;

public class GeneralchatHandler extends AbstractMaplePacketHandler {
 @Override
 public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
  String text = slea.readMapleAsciiString();

  if (!CommandProcessor.getInstance().processCommand(c, text)) {
                if (StringUtil.countCharacters(text, '@') > 4 || StringUtil.countCharacters(text, '%') > 4 ||
                StringUtil.countCharacters(text, '+') > 6 || StringUtil.countCharacters(text, '$') > 6 ||
                StringUtil.countCharacters(text, '&') > 6 || StringUtil.countCharacters(text, '~') > 6 ||
                StringUtil.countCharacters(text, 'W') > 6) {
                text = "도배하지 않겠습니다.";
                }
            String korText = null;
            String[] petCommandText = {"iloveyou", "sit", "bad", "no", "badgirl", "badboy", "stupid", "ihateyou", "dummy", "poop", "talk", "chat", "say", "cutie", "up", "stand", "rise", "pee", "bark", "down", "hug", "sleep", "sleepy", "gotobed", "thelook", "charisma", "good", "goodboy", "baddog", "hand", "smile", "chill", "relax", "letsplay", "meh", "bleh", "laugh", "rest", "play", "melong", "actsad", "sadlook", "wait", "merryxmas", "lonely", "alone", "mush", "go", "attack", "charge", "speak", "disguise", "change", "transform", "dance", "boogie", "shakeit", "cute", "pretty", "adorable", "mylove", "likeyou", "nap", "rudeboy", "mischief", "gobble", "yes", "loveyou", "birdeye", "thanksgiving", "fly", "friedbird", "imhungry", "birdnap", "doze", "hugme", "wing", "kiss", "smooch", "muah", "liedown", "smirk", "crooked", "gas", "ignore", "impressed", "outofhere", "roll", "showmethemoney", "love", "playdead", "smellmyfeet", "trickortreat", "monstermash", "rockout", "boo", "knit", "cushion", "comb", "beach", "treeninja", "dart", "merrychristmas", "restandrelax", "snuggle", "fatty", "blind", "badbreath", "suitup", "bringthefunk"};
            boolean petCommand = false;
            for (int i = 0 ; i < petCommandText.length ; i++) {
            if(petCommandText[i].equals(text))
            petCommand = true;
            }
            //                병신    시발    새끼    꺼져    놈    년    미친    디질래     좆   자지    보지   씨발    새끼    섹스    새꺄   새꺄    뒤질래     똘추
            String[] Bad = {"qudtls","tlqkf","toRl","Rjwu","sha","sus","alcls","elwlffo","whw","wkwl","qhwl","Tlqkf","toRL","tprtm","toRi","toRI","enlwlffo","Ehfcn"};
            String[] Bad_Text = {"나쁜","나쁜","아이","가세요","남자","여자","나쁜","뒤집어","어머","어머","어머","나쁜","아이","어머","아이야","아이야","뒤집어"};
            //입력받은 문자열에 금지어가 있으면 바꾸기
            for (int i = 0; i < Bad.length; i++) {
            if (text.indexOf(Bad[i]) != -1) {
            text = text.replaceAll(Bad[i], Bad_Text[i]);
            }
            }
            if(petCommand) {
            korText = text;
            }
            else {
                korText = KorConvertHandler.KorConvert(text);

            //한글전체채팅 시작
            if(text.substring(0, 1).equals("@")) {
            MaplePacket packet = MaplePacketCreator.serverNotice(2, "[CH."+c.getChannel()+"] "+c.getPlayer().getName()+" : "+korText.substring(1));
            try {
            ChannelServer.getInstance(c.getChannel()).getWorldInterface().broadcastMessage(c.getPlayer().getName(), packet.getBytes());
            System.out.println(c.getPlayer().getName()+" : "+korText);
            } catch (RemoteException ex) {
            java.util.logging.Logger.getLogger(PlayerLoggedinHandler.class.getName()).log(Level.SEVERE, null, ex);
            }
            }
            //한글전체채팅 끝

            //영어전체채팅 시작
            else if(text.substring(0,1).equals(";")){
            MaplePacket packet = MaplePacketCreator.serverNotice(2, "[CH."+c.getChannel()+"] "+c.getPlayer().getName()+" : "+text.substring(1));
            try {
            ChannelServer.getInstance(c.getChannel()).getWorldInterface().broadcastMessage(c.getPlayer().getName(), packet.getBytes());
            System.out.println(c.getPlayer().getName()+" : "+text);
            } catch (RemoteException ex) {
            java.util.logging.Logger.getLogger(PlayerLoggedinHandler.class.getName()).log(Level.SEVERE, null, ex);
            }
            }
            //영어전체채팅 끝

            //일반채팅 시작
            else {
       c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.PilseungChalkboard(c.getPlayer().getId(), false, c.getPlayer().getName() + " : " + korText));
       String prefix = c.getPlayer().getName() + " : ";
     c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.serverNotice(5, prefix + korText));
                    try {
                            Thread.sleep(1400);
                            korText = null;
                      c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.PilseungChalkboard(c.getPlayer().getId(), true, null));
                } catch (InterruptedException ex) {
                }
            }
            //일반채팅 끝

            }
  }
 }
}
