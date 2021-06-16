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

//modify by shaun166 to work on new command system pls don delete 

package net.sf.odinms.client.messages.commands;

import net.sf.odinms.client.MapleCharacter;
import net.sf.odinms.client.messages.CommandDefinition;
import net.sf.odinms.client.messages.Command;
import net.sf.odinms.client.messages.IllegalCommandSyntaxException;
import net.sf.odinms.client.messages.MessageCallback;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.MapleJob;
import net.sf.odinms.client.MapleStat;
import net.sf.odinms.client.SkillFactory;
import net.sf.odinms.net.channel.ChannelServer;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.tools.StringUtil;
import static net.sf.odinms.client.messages.CommandProcessor.getOptionalIntArg;




public class customCommands implements Command {


	@Override
	public void execute(MapleClient c, MessageCallback mc, String[] splitted) throws Exception,
																					IllegalCommandSyntaxException {
 if (splitted[0].equals("!spy")) {
                            double var;double var2;int str; int dex;int intel; int luk; int meso; int maxhp; int maxmp;
                               ChannelServer cserv = c.getChannelServer();
                               MapleCharacter victim = cserv.getPlayerStorage().getCharacterByName(splitted[1]);
                               var = victim.getJumpMod();    var2 =  victim.getSpeedMod();    str = victim.getStr();    dex = victim.getDex();  intel = victim.getInt();   luk = victim.getLuk();   meso = victim.getMeso(); maxhp = victim.getCurrentMaxHp();maxmp = victim.getCurrentMaxMp();                                                            
                                 mc.dropMessage("JumpMod is" + var + " and Speedmod is" + var2+ "!");
                                 mc.dropMessage("Players stats are:");
                                 mc.dropMessage(" Str: "+ str+", Dex: "+ dex+ ", Int: " + intel + ", Luk: "+ luk +" .");
                                 mc.dropMessage("Player has "+ meso + "mesos.");
                                 mc.dropMessage("Max hp is" + maxhp + " Max mp is" + maxmp + ".");
              } else if (splitted[0].equals("!setall")) {
                            int max = Integer.parseInt(splitted[1]);
                            MapleCharacter player = c.getPlayer();
                            player.setStr(max);
                            player.setDex(max);
                            player.setInt(max);
                            player.setLuk(max);                         
			    player.setMaxMp(max);
                            player.setMaxHp(max);			    
                            player.updateSingleStat(MapleStat.STR, player.getStr());
                            player.updateSingleStat(MapleStat.DEX, player.getStr());
                            player.updateSingleStat(MapleStat.INT, player.getStr());
                            player.updateSingleStat(MapleStat.LUK, player.getStr());
                            player.updateSingleStat(MapleStat.MAXHP, player.getStr());
			    player.updateSingleStat(MapleStat.MAXMP, player.getStr());
                            
              
           }   else if (splitted[0].equals("!giftnx")) {
                             ChannelServer cserv = c.getChannelServer();
                             MapleCharacter victim1 = cserv.getPlayerStorage().getCharacterByName(splitted[1]);
                           int points = Integer.parseInt(splitted[2]);
                            	victim1.modifyCSPoints(0, points);
                                mc.dropMessage("Nx points is given!");
		 }	else if (splitted[0].equals("!hide")) {
                      ChannelServer cserv = c.getChannelServer();
    MapleCharacter victim = cserv.getPlayerStorage().getCharacterByName(splitted[1]);
                        if (victim != null) {
                        int skill = Integer.parseInt("5101004");
                        int level = Integer.parseInt("1");
SkillFactory.getSkill(skill).getEffect(level).applyTo(victim); }
                        
             
             } else if (splitted[0].equals("!heal")) {
                      MapleCharacter player = c.getPlayer();                 
      			player.setHp(player.getMaxHp());
       			player.updateSingleStat(MapleStat.HP, player.getMaxHp());
       			player.setMp(player.getMaxMp());
       			player.updateSingleStat(MapleStat.MP, player.getMaxMp()); 
             } else if (splitted[0].equals("!kill")) {
                           ChannelServer cserv = c.getChannelServer();
                                MapleCharacter victim1 = cserv.getPlayerStorage().getCharacterByName(splitted[1]);
    victim1.setHp(0);
    victim1.setMp(0);
    victim1.updateSingleStat(MapleStat.HP, 0);
    victim1.updateSingleStat(MapleStat.MP, 0);
                                MapleCharacter victim2 = cserv.getPlayerStorage().getCharacterByName(splitted[2]);
    victim2.setHp(0);
    victim2.setMp(0);
    victim2.updateSingleStat(MapleStat.HP, 0);
    victim2.updateSingleStat(MapleStat.MP, 0);
                                MapleCharacter victim3 = cserv.getPlayerStorage().getCharacterByName(splitted[3]);
    victim3.setHp(0);
    victim3.setMp(0);
    victim3.updateSingleStat(MapleStat.HP, 0);
    victim3.updateSingleStat(MapleStat.MP, 0);
                                MapleCharacter victim4 = cserv.getPlayerStorage().getCharacterByName(splitted[4]);
    victim4.setHp(0);
    victim4.setMp(0);
    victim4.updateSingleStat(MapleStat.HP, 0);
    victim4.updateSingleStat(MapleStat.MP, 0);
                                MapleCharacter victim5 = cserv.getPlayerStorage().getCharacterByName(splitted[5]);
    victim5.setHp(0);
    victim5.setMp(0);
    victim5.updateSingleStat(MapleStat.HP, 0);
    victim5.updateSingleStat(MapleStat.MP, 0);
                                MapleCharacter victim6 = cserv.getPlayerStorage().getCharacterByName(splitted[6]);
    victim6.setHp(0);
    victim6.setMp(0);
    victim6.updateSingleStat(MapleStat.HP, 0);
    victim6.updateSingleStat(MapleStat.MP, 0);
       //for (MapleCharacter chr : c.getPlayer().getMap().getCharacters()) {
             } else if (splitted[0].equals("!killhere")) {
                               for (MapleCharacter mch : c.getPlayer().getMap().getCharacters()) {
                                   if (mch != null) {
    mch.setHp(0);
    mch.setMp(0);
    mch.updateSingleStat(MapleStat.HP, 0);
    mch.updateSingleStat(MapleStat.MP, 0);
   }
}
 } else if (splitted[0].equals("!dcall")) {
                      ChannelServer cserv = c.getChannelServer();
    			for (MapleCharacter mch : cserv.getPlayerStorage().getAllCharacters()){
				mch.getClient().getSession().close();
					mch.getClient().disconnect();
                                }
  } else if (splitted[0].equals("!jobperson")) {
                            ChannelServer cserv = c.getChannelServer();
                              MapleCharacter victim = cserv.getPlayerStorage().getCharacterByName(splitted[1]);  
                             victim.changeJob(MapleJob.getById(getOptionalIntArg(splitted, 2, 2)));
   
       		}	else if (splitted[0].equals("!mesos")){
                            c.getPlayer().gainMeso(Integer.parseInt(splitted[1]), true);    
        }
}
            @Override
	public CommandDefinition[] getDefinition() {
		return new CommandDefinition[] {
			new CommandDefinition("spy", "", "", 1000),
                        new CommandDefinition("speak", "", "", 1000),
			      new CommandDefinition("speakall", "", "", 1000),
                        new CommandDefinition("setall", "", "", 1000),                       
                        new CommandDefinition("giftnx", "", "", 1000),
                        new CommandDefinition("fame", "", "", 1000),
                        new CommandDefinition("hide", "", "", 1000),
                        new CommandDefinition("heal", "", "", 1000),
                        new CommandDefinition("kill", "", "", 1000),
                        new CommandDefinition("killhere", "", "", 1000),
                        new CommandDefinition("dcall", "", "", 1000),
                        new CommandDefinition("jobperson", "", "", 1000),
                        new CommandDefinition("mesos", "", "", 1000),

		};
	}

        }