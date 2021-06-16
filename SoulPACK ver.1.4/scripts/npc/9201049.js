/*
@    Author : Snow
@
@    NPC = NAME
@    Map =  MAP
@    NPC MapId = MAPID
@    Function = Rebirth Player
@
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
 } else { 
  if (status >= 2 && mode == 0) { 
   cm.sendOk("너가 가고싶을때 내가 맛있는 음식을 주지!"); 
   cm.dispose(); 
   return; 
  } 
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("너가 내가 주는 케이크를 잘 보관하리라 생각한다! 잘가게!");
   cm.gainItem(2020020,10); 
    } else if (status == 1) {
        cm.warp(680000000,0);
        cm.dispose();
        }            
    }
}