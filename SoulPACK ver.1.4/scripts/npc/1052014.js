/*2000005
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


*/
function start() {
	
	cm.sendSimple ("띠리리..저희가원하는   #v4001126# 이 물건을 200개 넣어주십시오... 띠리리리.. 저희가 파는 물건중 #v1002140##v1042003##v1062007##v1322013##v1302063##v1702149##v1082224##v1702150##v1102149##v1082225##v1102148##v2040807##v2040816#\r\n대표적인것만 올렸습니다.이외 10가지이상이 판매중입니다..  #r\r\n모든몹에 드랍하실수있습니다.(안되는것도있음)#k\r\n#L0#띠리리...동전을 넣으시겠습니까?#l");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
	         if (cm.haveItem(4001126, 200) == true){
                                  
                               
 
				var rand = 1 + Math.floor(Math.random() * 18);
				if (rand == 1) {
					cm.gainItem(1042003, 1); // Sapphire Ore
				}
				else if (rand == 2) {
					cm.gainItem(1062007, 1); // Topaz Ore
				}
				else if (rand == 3) {
					cm.gainItem(1322013, 1); // Opal Ore
				}
				else if (rand == 4) {
					cm.gainItem(1302063, 1); // Amethyst Ore
				}
				else if (rand == 5) {
					cm.gainItem(1102148, 1); // Emerald Ore
				}
				else if (rand == 6) {
					cm.gainItem(1002140, 1); // Garnet Ore
	                      }
                               else if (rand == 7) {
					cm.gainItem(1702149, 1); // Garnet Ore
	                      }
                              else if (rand == 8) {
					cm.gainItem(1082224, 1); // Garnet Ore
	                      }
                               else if (rand == 9) {
					cm.gainItem(1702150, 1); // Garnet Ore
	                      }
                             else if (rand == 10) {
					cm.gainItem(1102149, 1); // Garnet Ore
	                      }
                              else if (rand == 11) {
					cm.gainItem(1082225, 1); // Garnet Ore
	                      }
                              else if (rand == 12) {
					cm.gainItem(1102148, 1); // Garnet Ore
	                      }
                              else if (rand == 13) {
					cm.gainItem(2040807, 1); // Garnet Ore
	                      }
                              else if (rand == 14) {
					cm.gainItem(1082225, 1); // Garnet Ore
	                      }
                              else if (rand == 15) {
					cm.gainItem(1302068, 1); // Garnet Ore
	                      }
                              else if (rand == 16) {
					cm.gainItem(4000038, 5); // Garnet Ore
	                      }
                               else if (rand == 17) {
					cm.gainItem(2000005, 300); // Garnet Ore
	                      }
                               else if (rand == 18) {
					cm.gainItem(2022179, 100); // Garnet Ore
	                      }
                                else if (rand == 18) {
					cm.gainItem(2340000, 3); // Garnet Ore
	                      }
                                cm.gainItem(4001126,200);
                                
				} else {
					cm.sendOk("OOOOPS! It appears you don't have red envelop.");
				}
	} else if (selection == 1) {
	         if(cm.getMeso() >= 50000000){
                                 
                                  cm.gainItem(2101051,-1);
 
				var rand = 1 + Math.floor(Math.random() * 7);
				if (rand == 1) {
					cm.gainItem(2100001, 1); // Sapphire Ore
				}
				else if (rand == 2) {
					cm.gainItem(2100002, 1); // Topaz Ore
				}
				else if (rand == 3) {
					cm.gainItem(2100003, 1); // Opal Ore
				}
				else if (rand == 4) {
					cm.gainItem(2100004, 1); // Amethyst Ore
				}
				else if (rand == 5) {
					cm.gainItem(2100005, 1); // Emerald Ore
				}
				else if (rand == 6) {
					cm.gainItem(2100006, 1); // Garnet Ore
	                      }
                                  cm.gainMeso(-50000000);
	            
				} else {
					cm.sendOk("OOOOPS! It appears you don't have 50mil.");
		}
	        } else if (selection == 2) {
	         if(cm.getMeso() >= 100000000){
                                  
                                  cm.gainItem(2101052,1);
 
				var rand = 1 + Math.floor(Math.random() * 7);
				if (rand == 1) {
					cm.gainItem(2100001, 1); // Sapphire Ore
				}
				else if (rand == 2) {
					cm.gainItem(2100002, 1); // Topaz Ore
				}
				else if (rand == 3) {
					cm.gainItem(2100003, 1); // Opal Ore
				}
				else if (rand == 4) {
					cm.gainItem(2100004, 1); // Amethyst Ore
				}
				else if (rand == 5) {
					cm.gainItem(2100005, 1); // Emerald Ore
				}
				else if (rand == 6) {
					cm.gainItem(2100006, 1); // Garnet Ore
	                      }
				cm.warp(920010300, 0);
                                  cm.gainMeso(-100000000);
	            
				} else {
					cm.sendOk("OOOOPS! It appears you don't have 100 mil.");
		}
                } else if (selection == 3) {
	       if(cm.getMeso() >= 1000000000){
                                  
                                   cm.gainItem(2101053,1);
 
				var rand = 1 + Math.floor(Math.random() * 7);
				if (rand == 1) {
					cm.gainItem(2100001, 1); // Sapphire Ore
				}
				else if (rand == 2) {
					cm.gainItem(2100002, 1); // Topaz Ore
				}
				else if (rand == 3) {
					cm.gainItem(2100003, 1); // Opal Ore
				}
				else if (rand == 4) {
					cm.gainItem(2100004, 1); // Amethyst Ore
				}
				else if (rand == 5) {
					cm.gainItem(2100005, 1); // Emerald Ore
				}
				else if (rand == 6) {
					cm.gainItem(2100006, 1); // Garnet Ore
	                      }
				cm.warp(920010300, 0);
                                  cm.gainMeso(-1000000000)
	            
				} else {
					cm.sendOk("OOOOPS! It appears you don't have 1billion.");
		}
                 } else if (selection == 4) {
	        if(cm.getMeso() >= 2000000000){
                                
                                   cm.gainItem(2101054,1);
 
				var rand = 1 + Math.floor(Math.random() * 7);
				if (rand == 1) {
					cm.gainItem(2100001, 1); // Sapphire Ore
				}
				else if (rand == 2) {
					cm.gainItem(2100002, 1); // Topaz Ore
				}
				else if (rand == 3) {
					cm.gainItem(2100003, 1); // Opal Ore
				}
				else if (rand == 4) {
					cm.gainItem(2100004, 1); // Amethyst Ore
				}
				else if (rand == 5) {
					cm.gainItem(2100005, 1); // Emerald Ore
				}
				else if (rand == 6) {
					cm.gainItem(2100006, 1); // Garnet Ore
	                      }
				cm.warp(920010300, 0);
                                  cm.gainMeso(-2000000000)
	            
				} else {
					cm.sendOk("OOOOPS! It appears you don't have 2bil.");
		}
                 } else if (selection == 5) {
	        if (cm.haveItem(4000038, 5) == true){
                                
                                  cm.gainItem(2101055,1);
 
				var rand = 1 + Math.floor(Math.random() * 7);
				if (rand == 1) {
					cm.gainItem(2100001, 1); // Sapphire Ore
				}
				else if (rand == 2) {
					cm.gainItem(2100002, 1); // Topaz Ore
				}
				else if (rand == 3) {
					cm.gainItem(2100003, 1); // Opal Ore
				}
				else if (rand == 4) {
					cm.gainItem(2100004, 1); // Amethyst Ore
				}
				else if (rand == 5) {
					cm.gainItem(2100005, 1); // Emerald Ore
				}
				else if (rand == 6) {
					cm.gainItem(2100006, 1); // Garnet Ore
	                      }
				cm.warp(920010300, 0);
                                  cm.gainItem(4000038,-5);

                
                                  
				} else {
					cm.sendOk("OOOOPS! It appears you don't have 5 event trophies.");
          }
                 } else if (selection == 6) {
                
	} else {
		cm.dispose();
	}
}
