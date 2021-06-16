importPackage(net.sf.odinms.client);

var status = 0; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else { 
        if (mode == 0 && status == 0) { 
            cm.dispose(); 
            return; 
        } 
         
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 
  cm.sendSimple("안녕하시게...좀 정신이 좀 간 토기라고 한다네... \r\n올리기가 귀찮다고?? \r\n그러면 내가 레벨업을 해주겠네...\r\n\r\n#L0#레벨업을 하겠습니다(30까지)#l");
    }
  if (status == 1) {
   if (selection == 0) {
   if(cm.getLevel() <= 30) {
   var b = cm.getLevel() + 1;
   cm.sendNext("#b레벨"+b+"(으)로 레벨업을 하셨습니다#k");
   cm.c.getPlayer().levelUp();
   cm.dispose();
   }
   else {
   cm.sendOk("레벨업은 #r레벨 30#k까지만 해주고 있다네.");
        }
      }
    }
  }
}