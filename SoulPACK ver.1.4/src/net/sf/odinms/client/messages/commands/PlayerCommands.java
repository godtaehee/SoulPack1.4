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
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.MapleStat;
import net.sf.odinms.client.messages.Command;
import net.sf.odinms.client.messages.CommandDefinition;
import net.sf.odinms.client.messages.IllegalCommandSyntaxException;
import net.sf.odinms.client.messages.MessageCallback;
import net.sf.odinms.scripting.npc.NPCScriptManager;
import net.sf.odinms.server.MapleShop;
import net.sf.odinms.server.MapleShopFactory;
import net.sf.odinms.server.MapleStorage;
import net.sf.odinms.client.MapleRing;

public class PlayerCommands implements Command {


	@Override
	public void execute(MapleClient c, MessageCallback mc, String[] splitted) throws Exception,
																				IllegalCommandSyntaxException {
                if (splitted[0].equals("@spinel")) {
                         NPCScriptManager npc = NPCScriptManager.getInstance();
                         npc.start(c, 9000020);  
              }else if (splitted[0].equals("@cody")) {
                         NPCScriptManager npc = NPCScriptManager.getInstance();
                         npc.start(c, 9200000);   
              }  else if (splitted[0].equals("@nana")) {
                         NPCScriptManager npc = NPCScriptManager.getInstance();
                         npc.start(c, 9201001); 	
              }  else if (splitted[0].equals("@reset")) {
                         NPCScriptManager npc = NPCScriptManager.getInstance();
                         npc.start(c, 9201028);						 
                  } else if (splitted[0].equals("@storage")) {
                                c.getPlayer().getStorage().sendStorage(c, 2080005);
                  } else if (splitted[0].equals("@str")) {
                   int up;
                    up = Integer.parseInt(splitted[1]);
                    MapleCharacter player = c.getPlayer();
                    if ( player.getRemainingAp() < up ||  player.getRemainingAp() < 0) {
                        mc.dropMessage("InsufficientAP");
                    } else if ( player.getRemainingAp() > 0) {
                          player.setStr(player.getStr() + up);
                          player.setRemainingAp(player.getRemainingAp() - up);
                          player.updateSingleStat(MapleStat.AVAILABLEAP, player.getRemainingAp());
                          player.updateSingleStat(MapleStat.STR, player.getStr());
                }
                 
                }else if (splitted[0].equals("@int")) {
                   int up;
                    up = Integer.parseInt(splitted[1]);                   
                    MapleCharacter player = c.getPlayer();
                    if ( player.getRemainingAp() < up ||  player.getRemainingAp() < 0) {
                        mc.dropMessage("InsufficientAP");
                    } else if ( player.getRemainingAp() > 0) {
                          player.setInt(player.getInt() + up);
                          player.setRemainingAp(player.getRemainingAp() - up);
                          player.updateSingleStat(MapleStat.AVAILABLEAP, player.getRemainingAp());
                          player.updateSingleStat(MapleStat.INT, player.getInt());
                }
                    //DEX
                }else if (splitted[0].equals("@dex")) {
                   int up;
                    up = Integer.parseInt(splitted[1]);
                   MapleCharacter player = c.getPlayer();
                    if ( player.getRemainingAp() < up ||  player.getRemainingAp() < 0) {
                        mc.dropMessage("InsufficientAP");
                    } else if ( player.getRemainingAp() > 0) {
                          player.setDex(player.getDex() + up);
                          player.setRemainingAp(player.getRemainingAp() - up);
                           player.updateSingleStat(MapleStat.AVAILABLEAP, player.getRemainingAp());
                          player.updateSingleStat(MapleStat.DEX, player.getDex());
                }
                    //LUCK
                }else if (splitted[0].equals("@luk")) {
                   int up;
                    up = Integer.parseInt(splitted[1]);
                    MapleCharacter player = c.getPlayer();
                    if ( player.getRemainingAp() < up ||  player.getRemainingAp() < 0) {
                        mc.dropMessage("InsufficientAP");
                    } else if ( player.getRemainingAp() > 0) {
                          player.setLuk(player.getLuk() + up);
                             player.setRemainingAp(player.getRemainingAp() - up);
                           player.updateSingleStat(MapleStat.AVAILABLEAP, player.getRemainingAp());
                          player.updateSingleStat(MapleStat.LUK, player.getLuk());
                }
                
            }  else if (splitted[0].equals("@commands")) {
                                mc.dropMessage("The player Commands are:");
                                mc.dropMessage("@str, @int, @dex, @luk, #save, @version, @help, @spinel, @cody, @storage, @nana");
               } else if (splitted[0].equals("#save")) {
				c.getPlayer().saveToDB(true);
				 mc.dropMessage("Saved.");
		} else if (splitted[0].equals("@ring")) {
            			int itemId = Integer.parseInt(splitted[1]);
            			String partnerName = splitted[2];
            			int partnerId = MapleCharacter.getIdByName(partnerName, 0);
            			if (c.getPlayer().getMeso() < 1000000) { // Change to the ammount you want.
            			mc.dropMessage("Creating a ring cost 1,000,000 mesos!");
            } else {
            c.getPlayer().gainMeso(-10000000, true);    
            int[] ret = MapleRing.createRing(c, itemId, c.getPlayer().getId(), c.getPlayer().getName(), partnerId, partnerName);
            if (ret[0] == -1 || ret[1] == -1) {
                mc.dropMessage("There was an unknown error.");
                mc.dropMessage("Make sure the person you are attempting to create a ring with is online.");
            }
}  

               } else if (splitted[0].equals("@scrollshop")) {
				MapleShopFactory sfact = MapleShopFactory.getInstance();
				MapleShop shop = sfact.getShop(65);
				shop.sendShop(c);
                } else if (splitted[0].equals("@gms")) {
                    mc.dropMessage("The Maple4U GM's are : Maple4U, ADMIN, Paladin");
                } else if (splitted[0].equals("@help")) {
if (splitted.length != 2) {
mc.dropMessage("Syntax: The following commands will help you:");
mc.dropMessage("@help commands");
mc.dropMessage("@help report");
mc.dropMessage("@help job");
mc.dropMessage("@help skills");
mc.dropMessage("@help ap");
mc.dropMessage("@help buying");
mc.dropMessage("@help rebirth");
mc.dropMessage("@help pvp");
} else if (splitted[1].equals("commands")) {
mc.dropMessage("Commands:");
mc.dropMessage("@str,@luk,@int,@dex. They help you distribute sp faster example:(@str 500)");
mc.dropMessage("You can use @cody! @cody- like talking to cody just that you can use at anywhere");
mc.dropMessage("You can use @nana! @nana- like talking to nana just that you can use at anywhere");
mc.dropMessage("You can use @spinel! @spinel- ike talking to spinel just that you can use at anywhere");
} else if (splitted[1].equals("report")) { 
mc.dropMessage("How to report:");
mc.dropMessage("Right click the player you want to report");
mc.dropMessage("Then click the drop down menu and select why yo want to report the player"); 
mc.dropMessage("You may include a chat log for the Gm's to review just tick the box");
} else if (splitted[1].equals("job")) { 
mc.dropMessage("Changing jobs:");
mc.dropMessage("To change your job simply do it like in normal MapleStory");
mc.dropMessage("Now when you hit 30 and higher you may use cody located in henesys to change jobs");
} else if (splitted[1].equals("skills")) {
mc.dropMessage("All About Skills:");
mc.dropMessage("Once you are level 30 you may use Mia to max all your skills");
mc.dropMessage("Their are a couple of skills that will not work due to them not being coded");
} else if (splitted[1].equals("ap")) {
mc.dropMessage("All About Ability(Ap):");
mc.dropMessage("To add ap faster use the @str etc.. commands(it is not free sp)");
mc.dropMessage("The maximum Ap you may have is 31,000");
mc.dropMessage("To get a stat reset simply go to thomas swift located on the far right side of henesys");
} else if (splitted[1].equals("buying")) {
mc.dropMessage("Where to buy stuff:");
mc.dropMessage("You can buy weapon, equip at nana, nana sell item according to their town job example ellina Nana-mage item");
mc.dropMessage("You can buy 300 kinds of scroll at anywhere just type @scrollshop you can buy directly!");
mc.dropMessage("Fredrick in fm sells items!"); 
mc.dropMessage("Mr moneybag sells all chairs.");
} else if (splitted[1].equals("rebirth")) { 
mc.dropMessage("All about the rebirth Process:");
mc.dropMessage("You we be given 6 ap for your first rebirth 2nd time will be 7ap!");
mc.dropMessage("Our rebirth npc is at kerning -mr pickall (npc)");
mc.dropMessage("You may rebirth to another class but you may not use archer+shadow partner");
mc.dropMessage("You must be level 200");
mc.dropMessage("Have fun!");
} else if (splitted[1].equals("pvp")) { 
mc.dropMessage("PVP stand for Player verus Player");
mc.dropMessage("Our current PVP teleporter is Amos the Strong-NPC");
} else {
mc.dropMessage("Try another term");
}     
                }               
        }         
	@Override
	public CommandDefinition[] getDefinition() {
		return new CommandDefinition[] {
			new CommandDefinition("spinel", "", "Opens spinel from anywhere", 0),
                        new CommandDefinition("cody", "", "Opens cody from anywhere", 0),
                        new CommandDefinition("reset", "", "Reset ap anywehere", 0),
                        new CommandDefinition("nana", "", "Opens nana from anywhere", 0),
                        new CommandDefinition("storage", "", "Opens storage from anywhere", 0),
                        new CommandDefinition("str", "", "add your stats very fast", 0),
                        new CommandDefinition("int", "", "add your stats very fast", 0),
                        new CommandDefinition("dex", "", "add your stats very fast", 0),
                        new CommandDefinition("luk", "", "add your stats very fast", 0),
                        new CommandDefinition("save", "", "save your data", 0),
                        new CommandDefinition("scrollshop", "", "open scrollshop from anywhere", 0),
                        new CommandDefinition("gms", "", "Current GMs for this server", 0),
                        new CommandDefinition("help", "", "about our server", 0),
                        new CommandDefinition("expfix", "", "fix negative exp", 0),
		
		};
	}

}