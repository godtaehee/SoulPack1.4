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
   cm.sendOk("결혼은 좋은거야~"); 
   cm.dispose(); 
   return; 
  } 
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("아모리아로 가고싶어?");
    } else if (status == 1) {
        cm.warp(680000000,0);
        cm.dispose();
        }            
    }
}