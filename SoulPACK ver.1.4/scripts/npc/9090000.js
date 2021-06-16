/*
      ※ give about  NO NO NO NO NO NO NO NO NO ※
      ※ Scripts Maker is Rudolph => DanPungSsy ※
*/

/*
      NPC  : Ace of Heart
      explanation : TeachSkill
      Maker : Rudolph(gwangyun1)
*/
function start() { 
        cm.sendSimple("안녕하세요. 저는 당신에게 없는 #r새로운 스킬#k을 부여해 드린답니다.#k\r\n#L0# #b1000만 메소로 장인의 혼 배우기#k#k\r\n#L1# #b500만 메소로 라이딩 배우기#k#k\r\n#L2##b 5000만 메소로 영웅의 메아리 배우기#b")
    } 
function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
            if (cm.getMeso() >= 10000000) {
	    cm.gainMeso(-10000000);
            cm.teachSkill(1003, 1, 1)
            cm.dispose();
            }
            cm.sendOk("#b장인의혼#k을 획득하셨습니다.\r\n#b초보자 스킬창#k을 확인해주요.");
        } else if (selection == 1) { 
            if (cm.getMeso() >= 5000000) {
	    cm.gainMeso(-5000000);
            cm.teachSkill(1004, 1, 1)
            cm.sendOk("#b라이딩#k을 획득하셨습니다.\r\n#b초보자 스킬창#k을 확인해주세요.");
            cm.dispose(); 
        } 
        } else if (selection == 2) { 
            if (cm.getMeso() >= 50000000) {
	    cm.gainMeso(-50000000);
            cm.teachSkill(1004, 1, 1)
            cm.sendOk("#b영웅의 메아리#k을 획득하셨습니다.\r\n#b초보자 스킬창#k을 확인해주세요.");
            cm.dispose(); 
        } 
       }  
      }