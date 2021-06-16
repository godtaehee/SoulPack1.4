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

import net.sf.odinms.client.messages.CommandDefinition;
import net.sf.odinms.client.messages.Command;
import net.sf.odinms.client.messages.IllegalCommandSyntaxException;
import net.sf.odinms.client.messages.MessageCallback;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.net.channel.ChannelServer;
import net.sf.odinms.server.life.MapleLifeFactory;
import net.sf.odinms.server.life.MapleMonster;
import net.sf.odinms.server.maps.MapleMap;
import net.sf.odinms.tools.MaplePacketCreator;

public class eventsCommands implements Command {
	@Override
	public void execute(MapleClient c, MessageCallback mc, String[] splitted) throws Exception,
																					IllegalCommandSyntaxException {
 if (splitted[0].equals("!coke")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9500144);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(9500151);
                            MapleMonster mob2 = MapleLifeFactory.getMonster(9500152);
                            MapleMonster mob3 = MapleLifeFactory.getMonster(9500153);
                            MapleMonster mob4 = MapleLifeFactory.getMonster(9500154);
                            MapleMonster mob5 = MapleLifeFactory.getMonster(9500143);
                            MapleMonster mob6 = MapleLifeFactory.getMonster(9500145);
                            MapleMonster mob7 = MapleLifeFactory.getMonster(9500149);
                            MapleMonster mob8 = MapleLifeFactory.getMonster(9500147);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob5, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob6, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob7, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob8, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!papu")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(8500001);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!nxslimes")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9400202);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                        } else if (splitted[0].equals("!zakum")){
			MapleMonster mob0 = MapleLifeFactory.getMonster(8800003);
			MapleMonster mob1 = MapleLifeFactory.getMonster(8800004);
			MapleMonster mob2 = MapleLifeFactory.getMonster(8800005);
			MapleMonster mob3 = MapleLifeFactory.getMonster(8800006);
			MapleMonster mob4 = MapleLifeFactory.getMonster(8800007);
			MapleMonster mob5 = MapleLifeFactory.getMonster(8800008);
			MapleMonster mob6 = MapleLifeFactory.getMonster(8800009);
			MapleMonster mob7 = MapleLifeFactory.getMonster(8800010);
			MapleMonster mob8 = MapleLifeFactory.getMonster(8800000);
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob5, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob6, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob7, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob8, c.getPlayer().getPosition());
			c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.serverNotice(0, "The almighty Zakum has awakened!"));			
			}else if (splitted[0].equals("!ergoth")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9300028);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!ludimini")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(8160000);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(8170000);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!cornian")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(8150201);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(8150200);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!balrog")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(8130100);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(8150000);
                            MapleMonster mob2 = MapleLifeFactory.getMonster(9400536);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!mushmom")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(6130101);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(6300005);
                            MapleMonster mob2 = MapleLifeFactory.getMonster(9400205);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!wyvern")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(8150300);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(8150301);
                            MapleMonster mob2 = MapleLifeFactory.getMonster(8150302);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!pirate")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9300119);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(9300107);
                            MapleMonster mob2 = MapleLifeFactory.getMonster(9300105);
                            MapleMonster mob3 = MapleLifeFactory.getMonster(9300106);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!clone")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9001002);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(9001000);
                            MapleMonster mob2 = MapleLifeFactory.getMonster(9001003);
                            MapleMonster mob3 = MapleLifeFactory.getMonster(9001001);
                            MapleMonster mob4 = MapleLifeFactory.getMonster(9001004);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!anego")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9400121);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!theboss")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9400300);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!snackbar")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9500179);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!papapixie")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9300039);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!horseman")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9400549);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!blackcrow")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9400014);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!leafreboss")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9400014);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(8180001);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!shark")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(8150101);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(8150100);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!franken")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9300139);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(9300140);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!bird")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9300090);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(9300089);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!pianus")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(8510000);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!centipede")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9500177);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                        }else if (splitted[0].equals("!kyrin")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9001004);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(9001008);
                            MapleMonster mob2 = MapleLifeFactory.getMonster(9300158);
                            MapleMonster mob3 = MapleLifeFactory.getMonster(9300159);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, c.getPlayer().getPosition());
                        } else if (splitted[0].equals("!fakemob")){
                            MapleMonster mob0 = MapleLifeFactory.getMonster(9500325);
                            MapleMonster mob1 = MapleLifeFactory.getMonster(9500326);
                            MapleMonster mob2 = MapleLifeFactory.getMonster(9500327);
                            MapleMonster mob3 = MapleLifeFactory.getMonster(9500328);
                            MapleMonster mob4 = MapleLifeFactory.getMonster(9500329);
                            MapleMonster mob5 = MapleLifeFactory.getMonster(9500330);
                            MapleMonster mob6 = MapleLifeFactory.getMonster(9500331);
                            MapleMonster mob7 = MapleLifeFactory.getMonster(9500332);
                            MapleMonster mob8 = MapleLifeFactory.getMonster(9500333);
                            MapleMonster mob9 = MapleLifeFactory.getMonster(9500334);
                            MapleMonster mob10 = MapleLifeFactory.getMonster(9500335);
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob5, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob6, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob7, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob8, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob9, c.getPlayer().getPosition());
                            c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob10, c.getPlayer().getPosition());
                        } else if (splitted[0].equals("!horntail")){
			MapleMonster mob0 = MapleLifeFactory.getMonster(8810002);
			MapleMonster mob1 = MapleLifeFactory.getMonster(8810003);
			MapleMonster mob2 = MapleLifeFactory.getMonster(8810004);
			MapleMonster mob3 = MapleLifeFactory.getMonster(8810005);
			MapleMonster mob4 = MapleLifeFactory.getMonster(8810006);
			MapleMonster mob5 = MapleLifeFactory.getMonster(8810007);
			MapleMonster mob6 = MapleLifeFactory.getMonster(8810008);
			MapleMonster mob7 = MapleLifeFactory.getMonster(8810009);
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob0, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob2, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob3, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob4, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob5, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob6, c.getPlayer().getPosition());
			c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob7, c.getPlayer().getPosition());
			c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.serverNotice(0, "As the cave shakes and rattles, here comes Horntail.")); 
        }
        }
                    @Override
	            public CommandDefinition[] getDefinition() {
		    return new CommandDefinition[] {
			new CommandDefinition("coke", "", "", 100),
			new CommandDefinition("papu", "", "", 100),
                        new CommandDefinition("nxslimes", "", "", 100),
			new CommandDefinition("zakum", "", "", 100),
			new CommandDefinition("ergoth", "", "", 100),
			new CommandDefinition("ludimini", "", "", 100),
			new CommandDefinition("cornian", "", "", 100),
			new CommandDefinition("balrog", "", "", 100),
			new CommandDefinition("mushmom", "", "", 100),

			new CommandDefinition("wyvern", "", "", 100),
			new CommandDefinition("pirate", "", "", 100),
                        new CommandDefinition("clone", "", "", 100),                        
			new CommandDefinition("anego", "", "", 100),
			new CommandDefinition("theboss", "", "", 100),
                        new CommandDefinition("snackbar", "", "", 100),
			new CommandDefinition("papapixie", "", "", 100),
                        new CommandDefinition("horseman", "", "", 100),                        
			new CommandDefinition("blackcrow", "", "", 100),
			new CommandDefinition("leafreboss", "", "", 100),
                        new CommandDefinition("shark", "", "", 100),
			new CommandDefinition("franken", "", "", 100),
                        new CommandDefinition("bird", "", "", 100),                        
			new CommandDefinition("pianus", "", "", 100),
			new CommandDefinition("centipede", "", "", 100),
			new CommandDefinition("kyrin", "", "", 100),
			new CommandDefinition("fakemob", "", "", 100),
                        new CommandDefinition("horntail", "", "", 100),
                        
		};
	}

}