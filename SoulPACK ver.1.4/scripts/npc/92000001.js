/*
	Cody Job Advancer plus Pirate Jobs by proleecher
*/
importPackage(net.sf.odinms.client);


var status = 0;
var job;

function start() 
{
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) 
{
    if (mode == -1) 
    {
        cm.dispose();
    } 
    else 
    {
        if (mode == 1)
        {
            status++;
        }
        else 
        {
            status--;
        }
        if (status == 0) 
        {
            if (cm.getLevel() < 30) 
            {
                status = 98;
                cm.sendNext("Sorry, but you have to be at least level 30 to get a 2nd job advance.");
            	cm.dispose();
	     }
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)
                || cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)
                || cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)
                || cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)
				|| cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE))
            {
                cm.sendNext("Hello #b#h ##k, I'm in charge of Job Advancing.");

		}
            else if (cm.getLevel() >= 30 && cm.getLevel() < 70) 
            {
                if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)
                    || cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)
                    || cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)
                    || cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)
                    || cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob. FP_WIZARD)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob. IL_WIZARD)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob.INFIGHTER)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)	)
                {
                    cm.sendOk("Hello, I'm sorry but you need to be lvl70 for your next job advance");
                    cm.dispose();
                }
                else 
                {
                    cm.sendNext("Hello #b#h ##k, I'm Cody and I'm in charge of Job Advancing.");
}            
}
            else if (cm.getLevel() >= 70 && cm.getLevel() < 120) 
            {
               if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)
				    || cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT) 
                    || cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)
                    || cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER) 
                    || cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)
				    || cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)
				    || cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)
                    || cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)
				    || cm.getJob().equals(net.sf.odinms.client.MapleJob. FP_MAGE)
				    || cm.getJob().equals(net.sf.odinms.client.MapleJob. IL_MAGE)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob.BUCCANEER)
				    || cm.getJob().equals(net.sf.odinms.client.MapleJob.VALKYRIE) )   
                {
                    cm.sendOk("Hello, I'm sorry but you need to be lvl120 for your next job advance");
                    cm.dispose();
                }
              
                else 
                {
                    status = 60;
                    cm.sendNext("Hello #b#h ##k, I'm Cody and I'm in charge of Job Advancing.");
		}
                            
            } 
            else if (cm.getLevel() >=120) 
            {
                if (cm.getJob().equals(net.sf.odinms.client.MapleJob.NIGHTLORD)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob.SHADOWER) 
                    || cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMASTER)
                    || cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMASTER) 
                    || cm.getJob().equals(net.sf.odinms.client.MapleJob.PALADIN)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob.HERO)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob.DARKKNIGHT)
                    || cm.getJob().equals(net.sf.odinms.client.MapleJob.BISHOP)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob. FP_ARCHMAGE)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob. IL_ARCHMAGE)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob.VIPER)
					|| cm.getJob().equals(net.sf.odinms.client.MapleJob.CAPTAIN) )
                {
                    cm.sendOk("Hello #b#h ##k, \r\n#dYou are already at the highest job of MapleStory. Go test you're 4th job skills out instead or hunt some strong bosses.#k");
                    cm.dispose();
                }
                else 
                {
                    status = 101;
                    cm.sendNext("Hello #b#h ##k, I'm Cody and I'm in charge of Job Advancing.");    
		}
            }
        }
        else if (status == 1) 
        {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) 
            {
                cm.sendSimple("Congrats on reaching level 30! Which would you like to be? #b\r\n#L0#Assassin#l\r\n#L1#Bandit#l#k");
            }
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) 
            {
                cm.sendSimple("Congrats on reaching level 30! Which would you like to be? #b\r\n#L2#Fighter#l\r\n#L3#Page#l\r\n#L4#Spearman#l#k");
            }
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) 
            {
                cm.sendSimple("Congrats on reaching level 30! Which would you like to be? #b\r\n#L5#Ice Lightning Wizard#l\r\n#L6#Fire Poison Wizard#l\r\n#L7#Cleric#l#k");
            }
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) 
            {
                cm.sendSimple("Congrats on reaching level 30! Which would you like to be? #b\r\n#L8#Hunter#l\r\n#L9#Crossbowman#l#k");
            }
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) 
            {
                cm.sendSimple("Congrats on reaching level 30! Which would you like to be? #b\r\n#L10#Infighter#l\r\n#L11#Gunslinger#l#k");
            }
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) 
            {
                cm.sendNext("Congrats on reaching level 30! However, you must've already undergone the First Job Advancement before you can use my services.");
                cm.dispose();
            }
        } 
        else if (status == 2) 
        {
            var jobName;
            if (selection == 0) 
            {
                jobName = "Assassin";
                job = net.sf.odinms.client.MapleJob.ASSASSIN;
            }
            if (selection == 1) 
            {
                jobName = "Bandit";
                job = net.sf.odinms.client.MapleJob.BANDIT;
            }
            if (selection == 2) 
            {
                jobName = "Fighter";
                job = net.sf.odinms.client.MapleJob.FIGHTER;
            }
            if (selection == 3) 
            {
                jobName = "Page";
                job = net.sf.odinms.client.MapleJob.PAGE;
            }
            if (selection == 4) 
            {
                jobName = "Spearman";
                job = net.sf.odinms.client.MapleJob.SPEARMAN;
            }
            if (selection == 5) 
            {
                jobName = "Ice Lightning Wizard";
                job = net.sf.odinms.client.MapleJob.IL_WIZARD;
            }
            if (selection == 6) 
            {
                jobName = "Fire Poison Wizard";
                job = net.sf.odinms.client.MapleJob.FP_WIZARD;
            }
            if (selection == 7) 
            {
                jobName = "Cleric";
                job = net.sf.odinms.client.MapleJob.CLERIC;
            }
            if (selection == 8) 
            {
                jobName = "Hunter";
                job = net.sf.odinms.client.MapleJob.HUNTER;
            }
            if (selection == 9) 
            {
                jobName = "Crossbowman";
                job = net.sf.odinms.client.MapleJob.CROSSBOWMAN;
            }
			if (selection == 10) 
            {
                jobName = "Infighter";
                job = net.sf.odinms.client.MapleJob.INFIGHTER;
            }
			if (selection == 11) 
            {
                jobName = "Gunslinger";
                job = net.sf.odinms.client.MapleJob.GUNSLINGER;
            }
            cm.sendYesNo("Do you want to become a #r" + jobName + "#k?");
        } 
        else if (status == 3) 
        {
            cm.changeJob(job);
            cm.sendOk("You have successfully taken you're job advancement. Hope to see you again in the future.");
            cm.dispose();
        } 
        else if (status == 61) 
        {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) 
            {
                status = 63;
                cm.sendYesNo("Congrats on reaching level 70 #b#h ##k! Do you want to advance to a Hermit?");
            } 
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) 
            {
                status = 66;
                cm.sendYesNo("Congrats on reaching level 70 #b#h ##k! Do you want to advance to a Chief Bandit?");
            } 
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) 
            {
                status = 69;
                cm.sendYesNo("Congrats on reaching level 70 #b#h ##k! Do you want to advance to a Ranger?");
            } 
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) 
            {
                status = 72;
                cm.sendYesNo("Congrats on reaching level 70 #b#h ##k! Do you want to advance to a Sniper?");
            } 
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) 
            {
                status = 75;
                cm.sendYesNo("Congrats on reaching level 70 #b#h ##k! Do you want to advance to a F/P Mage?");
            } 
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) 
            {
                status = 78;
                cm.sendYesNo("Congrats on reaching level 70 #b#h ##k! Do you want to advance to a I/L Mage?");
            } 
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) 
            {
                status = 81;
                cm.sendYesNo("Congrats on reaching level 70 #b#h ##k! Do you want to advance to a Priest?");
            }
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) 
            {
                status = 84;
                cm.sendYesNo("Congrats on reaching level 70 #b#h ##k! Do you want to advance to a Crusader?");
            } 
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) 
            {
                status = 87;
                cm.sendYesNo("Congrats on reaching level 70 #b#h ##k! Do you want to advance to a White Knight?");
            } 
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) 
            {
                status = 90;
                cm.sendYesNo("Congrats on reaching level 70 #b#h ##k! Do you want to advance to a Dragon Knight?");
            } 
			else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.INFIGHTER)) 
            {
                status = 93;
                cm.sendYesNo("Congrats on reaching level 70 #b#h ##k! Do you want to advance to a BUCCANEER?");
            }
			else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) 
            {
                status = 96;
                cm.sendYesNo("Congrats on reaching level 70 #b#h ##k! Do you want to advance to a VALKYRIE?");
            }
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) 
            {
                cm.sendNext("Such a high level #bBeginner#k #b#h ##k! Amazing! You must love being a SuperBeginner.");
            }
        } 
        else if (status == 64) 
        {
            cm.changeJob(MapleJob.HERMIT);
            cm.sendOk("You have successfully taken your 3rd job advance.");
            cm.dispose();
        } 
        else if (status == 67) 
        {
            cm.changeJob(MapleJob.CHIEFBANDIT);
            cm.sendOk("You have successfully taken your 3rd job advance.");
            cm.dispose();
        } 
        else if (status == 70) 
        {
            cm.changeJob(MapleJob.RANGER);
            cm.sendOk("You have successfully taken your 3rd job advance.");
            cm.dispose();
        } 
        else if (status == 73) 
        {
            cm.changeJob(MapleJob.SNIPER);
            cm.sendOk("You have successfully taken your 3rd job advance.");
            cm.dispose();
        } 
        else if (status == 76) 
        {
            cm.changeJob(MapleJob.FP_MAGE);
            cm.sendOk("You have successfully taken your 3rd job advance.");
            cm.dispose();
        } 
        else if (status == 79) 
        {
            cm.changeJob(MapleJob.IL_MAGE);
            cm.sendOk("You have successfully taken your 3rd job advance.");
            cm.dispose();
        } 
        else if (status == 82) 
        {
            cm.changeJob(MapleJob.PRIEST);
            cm.sendOk("You have successfully taken your 3rd job advance.");
            cm.dispose();
        } 
        else if (status == 85) 
        {
            cm.changeJob(MapleJob.CRUSADER);
            cm.sendOk("You have successfully taken your 3rd job advance.");
            cm.dispose();
        }
        else if (status == 88) 
        {
            cm.changeJob(MapleJob.WHITEKNIGHT);
            cm.sendOk("You have successfully taken your 3rd job advance.");
            cm.dispose();
        } 
        else if (status == 91) 
        {
            cm.changeJob(MapleJob.DRAGONKNIGHT);
            cm.sendOk("You have successfully taken your 3rd job advance.");
            cm.dispose();
        }
		else if (status == 94) 
        {
            cm.changeJob(MapleJob.BUCCANEER);
            cm.sendOk("You have successfully taken your 3rd job advance.");
            cm.dispose();
        }
		else if (status == 97) 
        {
            cm.changeJob(MapleJob.VALKYRIE);
            cm.sendOk("You have successfully taken your 3rd job advance.");
            cm.dispose();
        }
        else if (status == 99) 
        {
            cm.sendOk("Good luck on your training.");
            cm.dispose();
        } 
        else if (status == 102) 
        {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) 
            {
                status = 105;
                cm.sendYesNo("Congrats on reaching level 120 #g#h ##k Do you want to advance to a Nightlord now?");
            } 
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) 
            {
                status = 108;
                cm.sendYesNo("Congrats on reaching level 120 #g#h ##k Do you want to advance to a Shadower now?");
            }
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) 
            {
                status = 111;
                cm.sendYesNo("Congrats on reaching level 120 #g#h ##k Do you want to advance to a Bowmaster now?");
            }
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) 
            {
                status = 114;
                cm.sendYesNo("Congrats on reaching level 120 #g#h ##k Do you want to advance to a MarksMan now?");
            } 
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) 
            {
                status = 117;
                cm.sendYesNo("Congrats on reaching level 120 #g#h ##k Do you want to advance to a F/P Archmage now?");
            } 
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) 
            {
                status = 120;
                cm.sendYesNo("Congrats on reaching level 120 #g#h ##k Do you want to advance to an I/L Archmage now?");
            } 
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) 
            {
                status = 123;
                cm.sendYesNo("Congrats on reaching level 120 #g#h ##k Do you want to advance to a Bishop now?");
            }
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) 
            {
                status = 126;
                cm.sendYesNo("Congrats on reaching level 120 #g#h ##k Do you want to advance to a Hero now?");
            }
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) 
            {
                status = 129;
                cm.sendYesNo("Congrats on reaching level 120 #g#h ##k Do you want to advance to a Paladin now?");
            }
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) 
            {
                status = 132;
                cm.sendYesNo("Congrats on reaching level 120 #g#h ##k Do you want to advance to a Dark Knight now?");
            }
			else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BUCCANEER)) 
            {
                status = 135;
                cm.sendYesNo("Congrats on reaching level 120 #g#h ##k Do you want to advance to a VIPER now?");
            }
			else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.VALKYRIE)) 
            {
                status = 138;
                cm.sendYesNo("Congrats on reaching level 120 #g#h ##k Do you want to advance to a CAPTAIN now?");
            }
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) 
            {
                cm.sendNext("Such a high level #bBeginner#k #g#h ##k Amazing! You must love being a SuperBeginner.");
                cm.dispose();
            }
        }
        else if (status == 106) 
        {
            cm.changeJob(MapleJob.NIGHTLORD);
            cm.teachSkill(4121000,1,20); //MW
            cm.teachSkill(4120002,1,30); //fake
            cm.teachSkill(4120005,1,30); //venom
            cm.teachSkill(4121006,1,30); //Spirit Claw
            cm.teachSkill(4121003,1,30); //Showdown
			cm.teachSkill(4121004,1,30); //Ninja Ambush
			cm.teachSkill(4121007,1,30); //Triple Throw
			cm.teachSkill(4121008,1,30); //Ninja Storm
            cm.sendOk("You have successfully taken your 4th Job advance #b#h ##k. I provided you a full sets of skills aswell. Keep up the good work.");
            cm.dispose();
        } 
        else if (status == 109)
        {
            cm.changeJob(MapleJob.SHADOWER);
            cm.teachSkill(4221000,1,20); //MW
		    cm.teachSkill(4221007,1,30); //Boomerang Step
			cm.teachSkill(4221005,1,30); //venom
            cm.teachSkill(4220002,1,30); //fake
            cm.teachSkill(4221008,1,1); //Awakening
            cm.teachSkill(4221001,1,30); //Assassinate
			cm.teachSkill(4221003,1,30); //Showdown
			cm.teachSkill(4221004,1,30); //Ninja Ambush
			cm.teachSkill(4221006,1,30); //Smoke Shell
            cm.sendOk("You have successfully taken your 4th Job advance #b#h ##k. I provided you a full sets of skills aswell. Keep up the good work.");
            cm.dispose();
        } 
        else if (status == 112) 
        {
            cm.changeJob(MapleJob.BOWMASTER);
            cm.teachSkill(3121000,0,10); //MW
            cm.teachSkill(3121002,0,10); //Sharp Eyes
            cm.teachSkill(3120005,0,10); //Bow Expert
            cm.teachSkill(3121007,0,10); //Hamstring
            cm.teachSkill(3121009,0,1); //Awakening
            cm.teachSkill(3121003,0,10); //Dragon Pulse - Dragon's Breath
			cm.teachSkill(3121004,0,10); //Storm Arrow - Hurricane
			cm.teachSkill(3121006,0,10); //Phoenix
			cm.teachSkill(3121008,0,10); //Concentration
            cm.sendOk("You have successfully taken your 4th Job advance #b#h ##k. I provided you a full sets of skills aswell. Keep up the good work.");
            cm.dispose();
        } 
        else if (status == 115) 
        {
            cm.changeJob(MapleJob.CROSSBOWMASTER);
           cm.teachSkill(3221000,1,20); //MW
			cm.teachSkill(3221002,1,30); //Sharp Eyes
			cm.teachSkill(3220004,1,30); //Crossbow Expert
			cm.teachSkill(3221006,1,30); //Blind
			cm.teachSkill(3221008,1,1); //Awakening
			cm.teachSkill(3221001,1,30); //Piercing
			cm.teachSkill(3221003,1,30); //Dragon Pulse
			cm.teachSkill(3221005,1,30); //Freezer
            cm.sendOk("You have successfully taken your 4th Job advance #b#h ##k. I provided you a full sets of skills aswell. Keep up the good work.");
            cm.dispose();
        } 
        else if (status == 118)
        {
            cm.changeJob(MapleJob.FP_ARCHMAGE);
            cm.teachSkill(2121000,1,20); //MW
			cm.teachSkill(2121001,1,30); //Big Bang
			cm.teachSkill(2121002,1,30); //Mana Reflection
			cm.teachSkill(2121006,1,30); //Paralyze
			cm.teachSkill(2121008,1,1); //Awakening - Hero's Will
			cm.teachSkill(2121003,1,30); //Fire Demon
			cm.teachSkill(2121004,1,30); //Infinity
			cm.teachSkill(2121005,1,30); //Elquines
			cm.teachSkill(2121007,1,30); //Meteo
            cm.sendOk("You have successfully taken your 4th Job advance #b#h ##k. I provided you a full sets of skills aswell. Keep up the good work.");
            cm.dispose();
        }
        else if(status == 121) 
        {
            cm.changeJob(MapleJob.IL_ARCHMAGE);
            cm.teachSkill(2221000,1,20); //MW
			cm.teachSkill(2221001,1,30); //Big Bang
			cm.teachSkill(2221002,1,30); //Mana Reflection
			cm.teachSkill(2221006,1,30); //Chain Lightning
			cm.teachSkill(2221008,1,1); //Awakening
			cm.teachSkill(2221003,1,30); //Ice Demon
			cm.teachSkill(2221004,1,30); //Infinity
			cm.teachSkill(2221005,1,30); //Ifrit
			cm.teachSkill(2221007,1,30); //Blizzard
            cm.sendOk("You have successfully taken your 4th Job advance #b#h ##k. I provided you a full sets of skills aswell. Keep up the good work.");
            cm.dispose();
        }
        else if (status == 124) 
        {
            cm.changeJob(MapleJob.BISHOP);
            cm.teachSkill(2321000,1,20); //MW
			cm.teachSkill(2321001,1,30); //Big Bang
			cm.teachSkill(2321002,1,30); //Mana Reflection
			cm.teachSkill(2321005,1,30); //Holy Shield
			cm.teachSkill(2321009,1,1); //Awakening
			cm.teachSkill(2321003,1,30); //Bahamut
			cm.teachSkill(2321004,1,30); //Infinity
			cm.teachSkill(2321006,1,10); //Resurrection
			cm.teachSkill(2321007,1,30); //Angels Ray
			cm.teachSkill(2321008,1,30); //Genesis
            cm.sendOk("You have successfully taken your 4th Job advance #b#h ##k. I provided you a full sets of skills aswell. Keep up the good work.");
            cm.dispose();
        } 
        else if (status == 127) 
        {
            cm.changeJob(MapleJob.HERO);
            cm.teachSkill(1120004,1,30); //Achilles
			cm.teachSkill(1121011,1,1); //Awakening - Hero's Will
			cm.teachSkill(1121008,1,30); //Brandish
			cm.teachSkill(1121000,1,20); //MW
			cm.teachSkill(1121001,1,29); //Monster Magnet
			cm.teachSkill(1121002,1,30); //Stance
			cm.teachSkill(1120003,1,30); //Advanced Combo
			cm.teachSkill(1120005,1,30); //blocking
			cm.teachSkill(1121006,1,30); //Rush
			cm.teachSkill(1121010,1,30); //Enrage
			
            cm.sendOk("You have successfully taken your 4th Job advance #b#h ##k. I provided you a full sets of skills aswell. Keep up the good work.");
            cm.dispose();
        } 
        else if (status == 130)
        {
            cm.changeJob(MapleJob.PALADIN);
            cm.teachSkill(1221000,1,20); //MW
			cm.teachSkill(1221001,1,29); //Monster Magnet
			cm.teachSkill(1220005,1,30); //Achilles
			cm.teachSkill(1221012,1,1); //Awakening - Hero's Will
			cm.teachSkill(1221002,1,30); //Stance
			cm.teachSkill(1221003,1,19); //Holy Charge: Sword
			cm.teachSkill(1221004,1,19); //Divine Charge: Mace
			cm.teachSkill(1220006,1,30); //blocking
			cm.teachSkill(1221007,1,30); //Rush
			cm.teachSkill(1221009,1,30); //Blast
			cm.teachSkill(1220010,1,10); //Advanced Charge
			cm.teachSkill(1221011,1,30); //Sanctuary - Heaven's Hammer
            cm.sendOk("You have successfully taken your 4th Job advance #b#h ##k. I provided you a full sets of skills aswell. Keep up the good work.");
            cm.dispose();
        } 
        else if (status == 133)
        {
            cm.changeJob(MapleJob.DARKKNIGHT);
            cm.teachSkill(1321000,1,20); //MW
			cm.teachSkill(1321001,1,29); //Monster Magnet
			cm.teachSkill(1320005,1,30); //Achilles
			cm.teachSkill(1320009,1,25); //Beholder's Buff
			cm.teachSkill(1321010,1,1); //Awakening - Hero's Will
			cm.teachSkill(1321002,1,30); //Stance
			cm.teachSkill(1321003,1,30); //Rush
			cm.teachSkill(1320006,1,30); //Berserk
			cm.teachSkill(1321007,1,10); //Beholder
			cm.teachSkill(1320008,1,25); //Beholder's Healing
            cm.sendOk("You have successfully taken your 4th Job advance #b#h ##k. I provided you a full sets of skills aswell. Keep up the good work.");
            cm.dispose();
        }
		else if (status == 136)
        {
            cm.changeJob(MapleJob.VIPER);
  		cm.teachSkill(5121000,30,30);
		cm.teachSkill(5121001,30,30);
		cm.teachSkill(5121002,30,30);
		cm.teachSkill(5121003,30,30);
		cm.teachSkill(5121004,30,30);
		cm.teachSkill(5121005,30,30);
		cm.teachSkill(5121007,30,30);
		cm.teachSkill(5121008,30,30);
		cm.teachSkill(5121009,30,30);
		cm.teachSkill(5121010,30,30);
            cm.sendOk("You have successfully taken your 4th Job advance #b#h ##k. I provided you a full sets of skills aswell. Keep up the good work.");
            cm.dispose();
        }
		else if (status == 139)
        {
            cm.changeJob(MapleJob.CAPTAIN);
 		cm.teachSkill(5221000,20,20); //MW
		cm.teachSkill(5220001,30,30); //gun
		cm.teachSkill(5220002,20,20); //octopus
		cm.teachSkill(5221003,30,30); //bird
		cm.teachSkill(5221004,30,30); //bullet
	//	cm.teachSkill(5221005,30,30); //dont have tis o.0
	//	cm.teachSkill(5221006,10,10); //pirate ship  bugs-dc
		cm.teachSkill(5221007,30,30); //pirate ship shoot
		cm.teachSkill(5221008,30,30); //fish
		cm.teachSkill(5221009,20,20); //batman
		cm.teachSkill(5221010,1,1); //awakening
		cm.teachSkill(5220011,20,20); //flag
            cm.sendOk("You have successfully taken your 4th Job advance #b#h ##k. I provided you a full sets of skills aswell. Keep up the good work.");
            cm.dispose();
        }
    }
}    
