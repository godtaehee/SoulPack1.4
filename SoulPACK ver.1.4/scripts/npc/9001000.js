/*
 made by gkskehls
 2008.06.17
*/

/*
	selection number (it's not job code)
	
  1st job list
	 0 : Warrior
	 1 : Magician
	 2 : Bowman
	 3 : Thief
	34 : Pirate 
	
        2nd job list
	 4 : Fighter
	 5 : Page
	 6 : Spearman
	 7 : Ice Lightning Wizard
	 8 : Fire Poison Wizard
	 9 : Cleric
	10 : Hunter
	11 : Crossbowman
	12 : Assassin
	13 : Bandit
        35 : Brawler
	36 : Gunslinger
        
        3rd job list
	14 : Crusader          
	15 : White Knight      
	16 : Dragon Knight     
	17 : Ice Lightning Mage
	18 : Fire Poison Mage  
	19 : Priest            
	20 : Ranger            
	21 : Sniper            
	22 : Hermit            
	23 : Chief Bandit      
	37 : Maruner 
        38 : Outlaw

	4th job list
	24 : Hero                                   
	25 : Paladin                                
	26 : Knight                                 
	27 : Ice Lightning Archmage                 
	28 : Fire Poison Archmage                   
	29 : Bishop                                 
	30 : Bowmaster                              
	31 : Cross-Bowmaster                        
	32 : Nightlord                              
	33 : Shadower
        39 : Buccuneer
        40 : Corsair                          
	
*/
/* Nana(H)
 Job npc
*/
importPackage(net.sf.odinms.client);

var status = 0;
var job;
// to Korean 
// 0�� ��ų�ְ� 1�� ��ų ���ݴϴ�.
// give_riding_skill  ���̵� ��ų  2�� ������ ��� �˴ϴ�
// give_1_skill       1�� ��ų
// give_2_skill       2�� ��ų
// give_3_skill       3�� ��ų
// give_4_skill       4�� ��ų
var give_riding_skill = 0; // 0 : give riding skill, 1 : dont give riding skill   at get 2nd job
var give_1_skill = 0;      // 0 : give 1th skill,    1 : dont give 1th skill
var give_2_skill = 0;      // 0 : give 2th skill,    1 : dont give 2th skill
var give_3_skill = 0;      // 0 : give 3th skill,    1 : dont give 3th skill
var give_4_skill = 0;      // 0 : give 4th skill,    1 : dont give 4th skill

function start() {
 status = -1;
 action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		status++;
		if(status == 0) { // 1st msg : npc start
	   	if(cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) { // from BEGINNER
				if (cm.getLevel() >= 10) { // Level check : all 1st job
					cm.sendSimple("1�� ������ ������. #b\r\n#L0#����#l\r\n#L1#������#l\r\n#L2#�ü�#l\r\n#L3#����#l\r\n#L34#����#l#k                ");
				} else if (cm.getLevel() >= 8) { // Level check : only Magician
					cm.sendSimple("1�� ������ ������. #b\r\n#L1#������#l#k          ");
				} else { // Level check fail
					cm.sendOk("���� 8 �̻� �����ϴٱ� ~ �� ���� ������?                                  ")
					cm.dispose();
				}
			} else if ( cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR )
                ||cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)
                ||cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN  )
                ||cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF   )
                ||cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE  )) { // from 1st job
      	if (cm.getLevel() >= 30) { // Level check
      		if(cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR        )) { // from WARRIOR
      			cm.sendSimple("2�� ������ �������ּ���. #b\r\n#L4#������#l\r\n#L5#������#l\r\n#L6#���Ǿ��#l#k                ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) { // from MAGICIAN
      			cm.sendSimple("2�� ������ �������ּ���. #b\r\n#L7#���ڵ�(����,�ñ�)#l\r\n#L8#���ڵ�(��,��)#l\r\n#L9#Ŭ����#l#k                     ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN  )) { // from BOWMAN
      			cm.sendSimple("2�� ������ �������ּ���. #b\r\n#L10#����#l\r\n#L11#���#l#k           ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF   )) { // from THIEF
      			cm.sendSimple("2�� ������ �������ּ���. #b\r\n#L12#����#l\r\n#L13#����#l#k            ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE  )) { // from PIRATE
      			cm.sendSimple("2�� ������ �������ּ���. #b\r\n#L35#��������#l\r\n#L36#�ǽ�����#l#k            ");
                } else {
      			cm.dispose();
      		}
      	} else { // Level check fail
      		cm.sendOk("���� 30�̻� 2�������� �Ҽ��ֽ��ϴ�.                     ")
      		cm.dispose();
      	}
      } else if( cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER    )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE       )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN   )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD  )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD  )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC     )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER     )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN   )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT     )
                                 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER  )
                                 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER )) { // from 2nd job
      	if(cm.getLevel() >= 70) { // Level check
      		if(cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER           )) { // from FIGHTER
      			cm.sendSimple("ũ�缼�̴� �� �Ͻðڽ��ϱ�? #b\r\n#L14#ũ�缼�̴�#l#k          ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE       )) { // from PAGE       
      			cm.sendSimple(" ����Ʈ �� �Ͻðڽ��ϱ�? #b\r\n#L15#����Ʈ#l#k                                                         ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN   )) { // from SPEARMAN   
      			cm.sendSimple("�巡�ﳪ��Ʈ �� �Ͻðڽ��ϱ�? #b\r\n#L16#�巡�ﳪ��Ʈ#l#k                                                         ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD  )) { // from IL_WIZARD  
      			cm.sendSimple("������(����,�ñ�) �� �Ͻðڽ��ϱ�? #b\r\n#L17#������(����,�ñ�)#l#k                                                         ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD  )) { // from FP_WIZARD  
      			cm.sendSimple("������(��,��) �� �Ͻðڽ��ϱ�? #b\r\n#L18#������(��,��)#l#k                                                         ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC     )) { // from CLERIC     
      			cm.sendSimple("������Ʈ �� �Ͻðڽ��ϱ�? #b\r\n#L19#������Ʈ#l#k                                                         ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER     )) { // from HUNTER     
      			cm.sendSimple("������ �� �Ͻðڽ��ϱ�? #b\r\n#L20#������#l#k                                                         ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) { // from CROSSBOWMAN
      			cm.sendSimple("���ݼ� �� �Ͻðڽ��ϱ�? #b\r\n#L21#���ݼ�#l#k                                                         ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN   )) { // from ASSASSIN   
      			cm.sendSimple("��� �� �Ͻðڽ��ϱ�? #b\r\n#L22#���#l#k                                                         ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT     )) { // from BANDIT     
      			cm.sendSimple("���������� �� �Ͻðڽ��ϱ�? #b\r\n#L23#����������#l#k                                                         ");
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER  )) { // from BRAWLER    
      			cm.sendSimple("��Ŀ�Ͼ� �� �Ͻðڽ��ϱ�? #b\r\n#L37#��Ŀ�Ͼ�#l#k                                                         ");      		
      		} else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER )) { // from GUNSLINGER     
      			cm.sendSimple("��Ű�� �� �Ͻðڽ��ϱ�? #b\r\n#L38#��Ű��#l#k                                                         ");                
                } else {
      			cm.dispose();
      		}
      	} else { // Level check fail
      		cm.sendOk("���� 70�̻� 3�������� �Ҽ��ֽ��ϴ�.                             ")
      		cm.dispose();
      	}
      } else if( cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER    )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE     )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE     )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST      )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER      )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER      )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT      )
      				 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT )
                                 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER   )
                                 ||cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW    )) { // from 3rd job
      	if(cm.getLevel() >= 120) { // Level check
		      if(cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER                 )) { // from CRUSADER
		      	cm.sendSimple("����� �� �Ͻðڽ��ϱ�? #b\r\n#L24#�����#l#k                                                         ");
		      } else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT       )) { // from WHITEKNIGHT 
		      	cm.sendSimple("�ȶ�� �� �Ͻðڽ��ϱ�? #b\r\n#L25#�ȶ��#l#k                                                         ");
		      } else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT      )) { // from DRAGONKNIGHT
		      	cm.sendSimple("��ũ����Ʈ �� �Ͻðڽ��ϱ�? #b\r\n#L26#��ũ����Ʈ#l#k                                                         ");
		      } else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE           )) { // from IL_MAGE     
		      	cm.sendSimple("��ũ������(����,�ñ�) �� �Ͻðڽ��ϱ�? #b\r\n#L27#��ũ������(����,�ñ�)#l#k                                                         ");
		      } else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE           )) { // from FP_MAGE     
		      	cm.sendSimple("��ũ������(��,��) �� �Ͻðڽ��ϱ�? #b\r\n#L28#��ũ������(��,��)#l#k                                                         ");
		      } else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST            )) { // from PRIEST      
		      	cm.sendSimple("��� �� �Ͻðڽ��ϱ�? #b\r\n#L29#���#l#k                                                         ");
		      } else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER            )) { // from RANGER      
		      	cm.sendSimple("���츶���� �� �Ͻðڽ��ϱ�? #b\r\n#L30#���츶����#l#k                                                         ");
		      } else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER            )) { // from SNIPER      
		      	cm.sendSimple("�ű��� �Ͻðڽ��ϱ�? #b\r\n#L31#�ű�#l#k                                                         ");
		      } else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT            )) { // from HERMIT      
		      	cm.sendSimple("����Ʈ�ε� �� �Ͻðڽ��ϱ�? #b\r\n#L32#����Ʈ�ε�#l#k                                                         ");
		      } else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT       )) { // from CHIEFBANDIT 
		      	cm.sendSimple("������ �� �Ͻðڽ��ϱ�? #b\r\n#L33#������#l#k                                                         ");
                      } else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER         )) { // from MARAUDER 
		      	cm.sendSimple("������ �� �Ͻðڽ��ϱ�? #b\r\n#L39#������#l#k                                                         ");
                      } else if(cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW          )) { // from OUTLAW 
		      	cm.sendSimple("ĸƾ �� �Ͻðڽ��ϱ�? #b\r\n#L40#ĸƾ#l#k                                                         ");
			   	} else {
			   		cm.dispose();
			   	}
      	} else { // Level check fail
      		cm.sendOk("���� 120�̻� 4�������� �ϽǼ��ֽ��ϴ�.                           ")
      		cm.dispose();
      	}
      } else {
     		cm.sendOk("���� �������ִ� NPC�Դϴ�.                   ")
      	cm.dispose();
      }
	  } else if(status == 1) { // 2nd msg : job change and give skill
			if(selection == 0) { cm.changeJob(net.sf.odinms.client.MapleJob.WARRIOR               ); // 1st job
				if(give_1_skill == 0) {
					cm.teachSkill(1000000,0,0);
					cm.teachSkill(1000001,0,0);
					cm.teachSkill(1000002,0,0);
					cm.teachSkill(1001003,0,0);
					cm.teachSkill(1001004,0,0);
					cm.teachSkill(1001005,0,0);
				}
			} else if(selection ==  1) { cm.changeJob(net.sf.odinms.client.MapleJob.MAGICIAN      ); // 1st job
				if(give_1_skill == 0) {
					cm.teachSkill(2000000,0,0);
					cm.teachSkill(2000001,0,0);
					cm.teachSkill(2001002,0,0);
					cm.teachSkill(2001003,0,0);
					cm.teachSkill(2001004,0,0);
					cm.teachSkill(2001005,0,0);
				}
			} else if(selection ==  2) { cm.changeJob(net.sf.odinms.client.MapleJob.BOWMAN        ); // 1st job
				if(give_1_skill == 0) {
					cm.teachSkill(3000000,0,0);
					cm.teachSkill(3000001,0,0);
					cm.teachSkill(3000002,0,0);
					cm.teachSkill(3001003,0,0);
					cm.teachSkill(3001004,0,0);
					cm.teachSkill(3001005,0,0);
				}
			} else if(selection ==  3) { cm.changeJob(net.sf.odinms.client.MapleJob.THIEF         ); // 1st job
				if(give_1_skill == 0) {
					cm.teachSkill(4000000,0,0);
					cm.teachSkill(4000001,0,0);
					cm.teachSkill(4001002,0,0);
					cm.teachSkill(4001003,0,0);
					cm.teachSkill(4001334,0,0);
					cm.teachSkill(4001344,0,0);
				}
			} else if(selection ==  34) { cm.changeJob(net.sf.odinms.client.MapleJob.PIRATE        ); // 1st job
				if(give_1_skill == 0) {
					cm.teachSkill(5001000,0,0);
					cm.teachSkill(5001001,0,0);
					cm.teachSkill(5001002,0,0);
					cm.teachSkill(5001003,0,0);
					cm.teachSkill(5001004,0,0);
					cm.teachSkill(5001005,0,0);
				}
			} else if(selection ==  4) { cm.changeJob(net.sf.odinms.client.MapleJob.FIGHTER       ); // 2nd job
				if(give_riding_skill == 0) {
					cm.teachSkill(1004,1,1);
				}
				if(give_2_skill == 0) {
					cm.teachSkill(1100000,20,0); //	�� �����͸�        
					cm.teachSkill(1100001,20,0); //	���� �����͸�      
					cm.teachSkill(1100002,30,0); //	���̳ξ��� : ��    
					cm.teachSkill(1100003,30,0); //	���̳� ���� : ���� 
					cm.teachSkill(1101004,20,0); //	�� �ν���          
					cm.teachSkill(1101005,20,0); //	���� �ν���        
					cm.teachSkill(1101006,20,0); //	�г�               
					cm.teachSkill(1101007,30,0); //	�Ŀ� ����          
				}
			} else if(selection ==  5) { cm.changeJob(net.sf.odinms.client.MapleJob.PAGE          ); // 2nd job
				if(give_riding_skill == 0) {
					cm.teachSkill(1004,1,1);
				}
				if(give_2_skill == 0) {
					cm.teachSkill(1200000,20,0);; // 	�� �����͸�          
					cm.teachSkill(1200001,20,0);; // 	�б� �����͸�        
					cm.teachSkill(1200002,30,0);; // 	���̳� ���� : ��     
					cm.teachSkill(1200003,30,0);; // 	���̳� ���� : �б�   
					cm.teachSkill(1201004,20,0);; // 	�� �ν���            
					cm.teachSkill(1201005,20,0);; // 	�б� �ν���          
					cm.teachSkill(1201006,20,0);; // 	Threaten             
					cm.teachSkill(1201007,30,0);; // 	�Ŀ� ����            
				}
			} else if(selection ==  6) { cm.changeJob(net.sf.odinms.client.MapleJob.SPEARMAN      ); // 2nd job
				if(give_riding_skill == 0) {
					cm.teachSkill(1004,1,1);
				}
				if(give_2_skill == 0) {
					cm.teachSkill(1300000,20,0);; //	���Ǿ� �����͸�        
					cm.teachSkill(1300001,20,0);; //	���� �����͸�          
					cm.teachSkill(1300002,30,0);; //	���̳� ���� : ���Ǿ�   
					cm.teachSkill(1300003,30,0);; //	���̳� ���� : ����     
					cm.teachSkill(1301004,20,0);; //	���Ǿ� �ν���          
					cm.teachSkill(1301005,20,0);; //	���� �ν���            
					cm.teachSkill(1301006,20,0);; //	���̾� ��              
					cm.teachSkill(1301007,30,0);; //	������ �ٵ�            
				}
			} else if(selection ==  7) { cm.changeJob(net.sf.odinms.client.MapleJob.IL_WIZARD     ); // 2nd job
				if(give_riding_skill == 0) {
					cm.teachSkill(1004,1,1);
				}
				if(give_2_skill == 0) {
					cm.teachSkill(2201004,30,0);; // �ݵ� ��      
					cm.teachSkill(2201001,20,0);; // Meditation   
					cm.teachSkill(2200000,20,0);; // MP ����      
					cm.teachSkill(2201003,20,0);; // ���ο�       
					cm.teachSkill(2201002,20,0);; // �ڷ���Ʈ     
					cm.teachSkill(2201005,30,0);; // ���� ��Ʈ    
				}
			} else if(selection ==  8) { cm.changeJob(net.sf.odinms.client.MapleJob.FP_WIZARD     ); // 2nd job
				if(give_riding_skill == 0) {
					cm.teachSkill(1004,1,1);
				}
				if(give_2_skill == 0) {
					cm.teachSkill(2101004,30,0);; // 	���̾� �ַο�  
					cm.teachSkill(2101001,20,0);; // 	Meditation     
					cm.teachSkill(2100000,20,0);; // 	MP ����        
					cm.teachSkill(2101005,30,0);; // 	������ �극��  
					cm.teachSkill(2101003,20,0);; // 	���ο�         
					cm.teachSkill(2101002,20,0);; // 	�ڷ���Ʈ       
				}
			} else if(selection ==  9) { cm.changeJob(net.sf.odinms.client.MapleJob.CLERIC        ); // 2nd job
				if(give_riding_skill == 0) {
					cm.teachSkill(1004,1,1);
				}
				if(give_2_skill == 0) {
					cm.teachSkill(2301004,20,0);; // ����     
					cm.teachSkill(2301002,30,0);; // ��         
					cm.teachSkill(2301005,30,0);; // Ȧ�� ���ο�
					cm.teachSkill(2301003,20,0);; // �κ󼭺�   
					cm.teachSkill(2300000,20,0);; // MP ����    
					cm.teachSkill(2301001,20,0);; // �ڷ���Ʈ   
				}
			} else if(selection == 10) { cm.changeJob(net.sf.odinms.client.MapleJob.HUNTER        ); // 2nd job
				if(give_riding_skill == 0) {
					cm.teachSkill(1004,1,1);
				}
				if(give_2_skill == 0) {
					cm.teachSkill(3101005,30,0);; // 	���ο� �� : Ȱ    
					cm.teachSkill(3101002,20,0);; // 	Ȱ �ν���         
					cm.teachSkill(3100000,20,0);; // 	Ȱ �����͸�       
					cm.teachSkill(3100001,30,0);; // 	���̳� ���� : Ȱ  
					cm.teachSkill(3101003,20,0);; // 	�Ŀ� �˹�         
					cm.teachSkill(3101004,20,0);; // 	�ҿ� ���ο� : Ȱ  
				}
			} else if(selection == 11) { cm.changeJob(net.sf.odinms.client.MapleJob.CROSSBOWMAN   ); // 2nd job
				if(give_riding_skill == 0) {
					cm.teachSkill(1004,1,1);
				}
				if(give_2_skill == 0) {
					cm.teachSkill(3201002,20,0);; // Crossbow Booster       
					cm.teachSkill(3200000,20,0);; // Crossbow Mastery       
					cm.teachSkill(3200001,30,0);; // Final Attack : Crossbow
					cm.teachSkill(3201005,30,0);; // Iron Arrow : Crossbow  
					cm.teachSkill(3201003,20,0);; // Power Knock-Back       
					cm.teachSkill(3201004,20,0);; // Soul Arrow : Crossbow  
				}
			} else if(selection == 12) { cm.changeJob(net.sf.odinms.client.MapleJob.ASSASSIN      ); // 2nd job
				if(give_riding_skill == 0) {
					cm.teachSkill(1004,1,1);
				}
				if(give_2_skill == 0) {
					cm.teachSkill(4101003,20,0);; // Claw Booster  
					cm.teachSkill(4100000,20,0);; // Claw Mastery  
					cm.teachSkill(4100001,30,0);; // Critical Throw
					cm.teachSkill(4101005,30,0);; // Drain         
					cm.teachSkill(4100002,20,0);; // Endure        
					cm.teachSkill(4101004,20,0);; // Haste   
				}
			} else if(selection == 13) { cm.changeJob(net.sf.odinms.client.MapleJob.BANDIT        ); // 2nd job
				if(give_riding_skill == 0) {
					cm.teachSkill(1004,1,1);
				}
				if(give_2_skill == 0) {
					cm.teachSkill(4201002,20,0);; // Dagger Booster 
					cm.teachSkill(4200000,20,0);; // Dagger Mastery 
					cm.teachSkill(4200001,20,0);; // Endure         
					cm.teachSkill(4201003,20,0);; // Haste          
					cm.teachSkill(4201005,30,0);; // Savage Blow    
					cm.teachSkill(4201004,30,0);; // Steal 
				}
                        } else if(selection == 35) { cm.changeJob(net.sf.odinms.client.MapleJob.BRAWLER     ); // 2nd job
				if(give_riding_skill == 0) {
					cm.teachSkill(1004,1,1);
				}
				if(give_2_skill == 0) {
					cm.teachSkill(5100000,10,10);; // HP������ ���
					cm.teachSkill(5100001,20,20);; // ��Ŭ �����͸� 
					cm.teachSkill(5101006,20,20);; // ��Ŭ �ν���        
					cm.teachSkill(5101002,20,20);; // �齺�� ��ο�         
					cm.teachSkill(5101003,20,20);; // ���� ����
					cm.teachSkill(5101004,20,20);; // ��ũ�� ��ġ 
				}       
                        } else if(selection == 36) { cm.changeJob(net.sf.odinms.client.MapleJob.GUNSLINGER     ); // 2nd job
				if(give_riding_skill == 0) {
					cm.teachSkill(1004,1,1);
				}
				if(give_2_skill == 0) {
					cm.teachSkill(5200000,20,20);; //  
					cm.teachSkill(5201001,20,20);; //  
					cm.teachSkill(5201002,20,20);; //          
					cm.teachSkill(5201003,20,20);; //           
					cm.teachSkill(5201004,20,20);; //     
					cm.teachSkill(5201005,10,10);; //  
					cm.teachSkill(5201006,20,20);; //  
				}
			} else if(selection == 14) { cm.changeJob(net.sf.odinms.client.MapleJob.CRUSADER      ); // 3rd job
				if(give_3_skill == 0) {
					cm.teachSkill(1111007,20,0);; //Armor Crash           
					cm.teachSkill(1111006,30,0);; //Coma: Axe             
					cm.teachSkill(1111005,30,0);; //Coma: Sword           
					cm.teachSkill(1111002,30,0);; //Combo Attack          
					cm.teachSkill(1110000,20,0);; //Improving MP recovery 
					cm.teachSkill(1111004,30,0);; //Panic: Axe            
					cm.teachSkill(1111003,30,0);; //Panic: Sword          
					cm.teachSkill(1110001,20,0);; //Shield Mastery        
					cm.teachSkill(1111008,30,0);; //Shout                 
				}
			} else if(selection == 15) { cm.changeJob(net.sf.odinms.client.MapleJob.WHITEKNIGHT   ); // 3rd job
				if(give_3_skill == 0) {
					cm.teachSkill(1211006,30,0);; // Blizzard Charge: BW     
					cm.teachSkill(1211002,30,0);; // Charged Blow            
					cm.teachSkill(1211004,30,0);; // Fire Charge: BW         
					cm.teachSkill(1211003,30,0);; // Fire Charge: Sword      
					cm.teachSkill(1211005,30,0);; // Ice Charge: Sword       
					cm.teachSkill(1210000,20,0);; // Improving MP recovery   
					cm.teachSkill(1211008,30,0);; // Lightning Charge: BW    
					cm.teachSkill(1211009,20,0);; // Magic Crash             
					cm.teachSkill(1210001,20,0);; // Shield Mastery          
					cm.teachSkill(1211007,30,0);; // Thunder Charge: Sword   
				}               
			} else if(selection == 16) { cm.changeJob(net.sf.odinms.client.MapleJob.DRAGONKNIGHT  ); // 3rd job
				if(give_3_skill == 0) {
					cm.teachSkill(1311008,20,0);; //Dragon Blood          
					cm.teachSkill(1311004,30,0);; //Dragon Fury: Pole Arm 
					cm.teachSkill(1311003,30,0);; //Dragon Fury: Spear    
					cm.teachSkill(1311006,30,0);; //Dragon Roar           
					cm.teachSkill(1310000,20,0);; //Elemental Resistance  
					cm.teachSkill(1311002,30,0);; //Pole Arm Crusher      
					cm.teachSkill(1311007,20,0);; //Power Crash           
					cm.teachSkill(1311005,30,0);; //Sacrifice             
					cm.teachSkill(1311001,30,0);; //Spear Crusher         
				}
			} else if(selection == 17) { cm.changeJob(net.sf.odinms.client.MapleJob.IL_MAGE       ); // 3rd job
				if(give_3_skill == 0) {
					cm.teachSkill(2210001,30,0);; //Element Amplification
					cm.teachSkill(2211006,30,0);; //Element Composition  
					cm.teachSkill(2211002,30,0);; //Ice Strike           
					cm.teachSkill(2210000,20,0);; //Partial Resistance   
					cm.teachSkill(2211004,20,0);; //Seal                 
					cm.teachSkill(2211005,20,0);; //Spell Booster        
					cm.teachSkill(2211003,30,0);; //Thunder Spear        
				}
			} else if(selection == 18) { cm.changeJob(net.sf.odinms.client.MapleJob.FP_MAGE       ); // 3rd job
				if(give_3_skill == 0) {
					cm.teachSkill(2110001,30,0);; //Element Amplification
					cm.teachSkill(2111006,30,0);; //Element Composition  
					cm.teachSkill(2111002,30,0);; //Explosion            
					cm.teachSkill(2110000,20,0);; //Partial Resistance   
					cm.teachSkill(2111003,30,0);; //Poison Mist          
					cm.teachSkill(2111004,20,0);; //Seal                 
					cm.teachSkill(2111005,20,0);; //Spell Booster        
				}
			} else if(selection == 19) { cm.changeJob(net.sf.odinms.client.MapleJob.PRIEST        ); // 3rd job
				if(give_3_skill == 0) {
					cm.teachSkill(2311001,20,0);; //Dispel                
					cm.teachSkill(2311005,30,0);; //Doom                  
					cm.teachSkill(2310000,20,0);; //Elemental Resistance  
					cm.teachSkill(2311003,30,0);; //Holy Symbol           
					cm.teachSkill(2311002,20,0);; //Mystic Door           
					cm.teachSkill(2311004,30,0);; //Shining Ray           
					cm.teachSkill(2311006,30,0);; //Summon Dragon         
				}
			} else if(selection == 20) { cm.changeJob(net.sf.odinms.client.MapleJob.RANGER        ); // 3rd job
				if(give_3_skill == 0) {
					cm.teachSkill(3111004,30,0);; //Arrow Rain    
					cm.teachSkill(3111003,30,0);; //Inferno       
					cm.teachSkill(3110001,20,0);; //Mortal Blow   
					cm.teachSkill(3111002,20,0);; //Puppet        
					cm.teachSkill(3111005,30,0);; //Silver Hawk   
					cm.teachSkill(3111006,30,0);; //Strafe        
					cm.teachSkill(3110000,20,0);; //Thrust        
				}
			} else if(selection == 21) { cm.changeJob(net.sf.odinms.client.MapleJob.SNIPER        ); // 3rd job
				if(give_3_skill == 0) {
					cm.teachSkill(3211004,30,0);; //Arrow Eruption
					cm.teachSkill(3211003,30,0);; //Blizzard      
					cm.teachSkill(3211005,30,0);; //Golden Eagle  
					cm.teachSkill(3210001,20,0);; //Mortal Blow   
					cm.teachSkill(3211002,20,0);; //Puppet        
					cm.teachSkill(3211006,30,0);; //Strafe        
					cm.teachSkill(3210000,20,0);; //Thrust        
				}
			} else if(selection == 22) { cm.changeJob(net.sf.odinms.client.MapleJob.HERMIT        ); // 3rd job
				if(give_3_skill == 0) {
					cm.teachSkill(4110000,20,0);; //Alchemist      
					cm.teachSkill(4111005,30,0);; //Avenger        
					cm.teachSkill(4111006,20,0);; //Flash Jump     
					cm.teachSkill(4111001,20,0);; //Meso Up        
					cm.teachSkill(4111004,30,0);; //Shadow Meso    
					cm.teachSkill(4111002,30,0);; //Shadow Partner 
					cm.teachSkill(4111003,20,0);; //Shadow Web     
				}
			} else if(selection == 23) { cm.changeJob(net.sf.odinms.client.MapleJob.CHIEFBANDIT   ); // 3rd job
				if(give_3_skill == 0) {
					cm.teachSkill(4211002,30,0);; //Assaulter      
					cm.teachSkill(4211004,30,0);; //Band of Thieves
					cm.teachSkill(4211001,30,0);; //Chakra         
					cm.teachSkill(4211006,30,0);; //Meso Explosion 
					cm.teachSkill(4211005,20,0);; //Meso Guard     
					cm.teachSkill(4211003,20,0);; //Pickpocket     
					cm.teachSkill(4210000,20,0);; //Shield Mastery 
				}
                        } else if(selection == 37) { cm.changeJob(net.sf.odinms.client.MapleJob.MARAUDER     ); // 3rd job
				if(give_3_skill == 0) {
					cm.teachSkill(5110000,20,20);; //    
					cm.teachSkill(5110001,40,40);; //
					cm.teachSkill(5111002,30,30);; //        
					cm.teachSkill(5111004,20,20);; // 
					cm.teachSkill(5111005,20,20);; //
					cm.teachSkill(5111006,30,30);; //    
				}
                        } else if(selection == 38) { cm.changeJob(net.sf.odinms.client.MapleJob.OUTLAW      ); // 3rd job
				if(give_3_skill == 0) {
					cm.teachSkill(5210000,20,20);; //      
					cm.teachSkill(5211001,30,30);; //
					cm.teachSkill(5211002,30,30);; //        
					cm.teachSkill(5211004,30,30);; // 
					cm.teachSkill(5211005,30,30);; //    
					cm.teachSkill(5211006,30,30);; //     
				}
			} else if(selection == 24) { cm.changeJob(net.sf.odinms.client.MapleJob.HERO          ); // 4th job
				if(give_4_skill == 0) {
				  cm.teachSkill(1121000,20,20);
				  cm.teachSkill(1121008,30,30);
				  cm.teachSkill(1120003,30,30);
				  cm.teachSkill(1120004,30,30);
				  cm.teachSkill(1120003,30,30);
				  cm.teachSkill(1121001,30,30);
				  cm.teachSkill(1121002,30,30);
				  cm.teachSkill(1121006,30,30);
				  cm.teachSkill(1121010,30,30);
				  cm.teachSkill(1121011,1,1);
				}
			} else if(selection == 25) { cm.changeJob(net.sf.odinms.client.MapleJob.PALADIN       ); // 4th job
				if(give_4_skill == 0) {
					cm.teachSkill(1220010,30,30);
					cm.teachSkill(1220005,30,30);
					cm.teachSkill(1220006,30,30);
					cm.teachSkill(1221009,30,30);
					cm.teachSkill(1221004,20,20);
					cm.teachSkill(1221003,20,20);
					cm.teachSkill(1221000,20,20);
					cm.teachSkill(1221001,20,20);
					cm.teachSkill(1221002,20,20);
					cm.teachSkill(1221007,30,30);
					cm.teachSkill(1221011,30,30);
					cm.teachSkill(1221012,1,1);
				}
			} else if(selection == 26) { cm.changeJob(net.sf.odinms.client.MapleJob.DARKKNIGHT    ); // 4th job
				if(give_4_skill == 0) {
				  cm.teachSkill(1320005,30,30);
				  cm.teachSkill(1321007,10,10);
				  cm.teachSkill(1320008,25,25);
				  cm.teachSkill(1320009,25,25);
				  cm.teachSkill(1320006,30,30);
				  cm.teachSkill(1321000,20,20);
				  cm.teachSkill(1321010,1,1);
				  cm.teachSkill(1321001,30,30);
				  cm.teachSkill(1321003,30,30);
				  cm.teachSkill(1321002,30,30);
				}
			} else if(selection == 27) { cm.changeJob(net.sf.odinms.client.MapleJob.IL_ARCHMAGE   ); // 4th job
				if(give_4_skill == 0) {
				  cm.teachSkill(2221001,30,30);
				  cm.teachSkill(2221007,30,30);
				  cm.teachSkill(2221006,30,30);
				  cm.teachSkill(2221003,30,30);
				  cm.teachSkill(2221005,30,30);
				  cm.teachSkill(2221002,30,30);
				  cm.teachSkill(2221008,1,1);
				  cm.teachSkill(2221004,20,20);
				  cm.teachSkill(2221000,20,20);
				}
			} else if(selection == 28) { cm.changeJob(net.sf.odinms.client.MapleJob.FP_ARCHMAGE   ); // 4th job
				if(give_4_skill == 0) {
					cm.teachSkill(2121001,30,30);
					cm.teachSkill(2121003,30,30);
					cm.teachSkill(2121004,20,20);
					cm.teachSkill(2121000,20,20);
					cm.teachSkill(2121005,30,30);
					cm.teachSkill(2121008,1,1);
					cm.teachSkill(2121002,30,30);
					cm.teachSkill(2121001,30,30);
					cm.teachSkill(2121007,30,30);
					cm.teachSkill(2121006,30,30);
				}
			} else if(selection == 29) { cm.changeJob(net.sf.odinms.client.MapleJob.BISHOP        ); // 4th job
				if(give_4_skill == 0) {
					cm.teachSkill(2321007,30,30);
					cm.teachSkill(2321001,30,30);
					cm.teachSkill(2321003,30,30);
					cm.teachSkill(2321005,30,30);
					cm.teachSkill(2321006,10,10);
					cm.teachSkill(2321002,30,30);
					cm.teachSkill(2321008,30,30);
					cm.teachSkill(2321009,1,1);
					cm.teachSkill(2321004,30,30);
					cm.teachSkill(2321000,20,20);
				}
			} else if(selection == 30) { cm.changeJob(net.sf.odinms.client.MapleJob.BOWMASTER     ); // 4th job
				if(give_4_skill == 0) {
					cm.teachSkill(3120005,30,30);
					cm.teachSkill(3121006,30,30);
					cm.teachSkill(3121008,20,20);
					cm.teachSkill(3121003,30,30);
					cm.teachSkill(3121009,1,1);
					cm.teachSkill(3121007,30,30);
					cm.teachSkill(3121000,20,20);
					cm.teachSkill(3121002,30,30);
					cm.teachSkill(3121004,30,30);
				}
			} else if(selection == 31) { cm.changeJob(net.sf.odinms.client.MapleJob.CROSSBOWMASTER); // 4th job
				if(give_4_skill == 0) {
					cm.teachSkill(3221006,20,20);
					cm.teachSkill(3220004,30,30);
					cm.teachSkill(3221001,30,30);
					cm.teachSkill(3221003,30,30);
					cm.teachSkill(3221000,20,20);
					cm.teachSkill(3221008,1,1);
					cm.teachSkill(3221002,30,30);
					cm.teachSkill(3221005,30,30);
					cm.teachSkill(3221007,0,0);
				}
			} else if(selection == 32) { cm.changeJob(net.sf.odinms.client.MapleJob.NIGHTLORD     ); // 4th job
				if(give_4_skill == 0) {
			   cm.teachSkill(4120002,0,0);
			   cm.teachSkill(4121000,20,20);
			   cm.teachSkill(4121006,30,30);
			   cm.teachSkill(4121007,20,20);
			   cm.teachSkill(4120005,30,30);
			   cm.teachSkill(4121009,1,1);
			   cm.teachSkill(4121004,1,1);
			   cm.teachSkill(4121008,30,30);
				}
			} else if(selection == 33) { cm.changeJob(net.sf.odinms.client.MapleJob.SHADOWER      ); // 4th job
				if(give_4_skill == 0) {
			   cm.teachSkill(4221001,30,30);
			   cm.teachSkill(4221007,30,30);
			   cm.teachSkill(4220002,20,20);
			   cm.teachSkill(4221000,20,20);
			   cm.teachSkill(4220005,30,30);
			   cm.teachSkill(4221003,30,30);
			   cm.teachSkill(4221004,30,30);
			   cm.teachSkill(4221006,30,30);
			   cm.teachSkill(4221008,30,30);
				}
                        } else if(selection == 39) { cm.changeJob(net.sf.odinms.client.MapleJob.BUCCANEER         ); // 4th job
				if(give_4_skill == 0) {
			   cm.teachSkill(5121001,30,30);
			   cm.teachSkill(5121002,30,30);
			   cm.teachSkill(5121003,20,20);
			   cm.teachSkill(5121004,30,30);
			   cm.teachSkill(5121005,30,30);
			   cm.teachSkill(5121007,30,30);
			   cm.teachSkill(5121008,1,1);
			   cm.teachSkill(5121009,20,20);
			   cm.teachSkill(5121010,30,30);
				}
                        } else if(selection == 40) { cm.changeJob(net.sf.odinms.client.MapleJob.CORSAIR       ); // 4th job
				if(give_4_skill == 0) {
			   cm.teachSkill(5220001,30,30);
			   cm.teachSkill(5220002,20,20);
			   cm.teachSkill(5221003,30,30);
			   cm.teachSkill(5221004,30,30);
			   cm.teachSkill(5221006,10,10);
			   cm.teachSkill(5221007,30,30);
			   cm.teachSkill(5221008,30,30);
			   cm.teachSkill(5221009,20,20);
			   cm.teachSkill(5221008,1,1);
				}
		  } else {
		  	cm.dispose();
		  }
			cm.sendOk("���������� ������ �Ǿ����ϴ�.                         ");
      cm.dispose();
	  } else if(status == 2) { // 3rd msg : end
	  	cm.dispose();
	  } 
	}			
}