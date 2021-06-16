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
   cm.sendOk("하하 사진을 많이 찍었군. 재밋게 놀아 그러나 너가 떠날때되면 말해!"); 
   cm.dispose(); 
   return; 
  } 
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("여기서 사진 많이 찍었나? 음..내가 나가게해주지! 너가 떠나기 전에 모든것을 다 준비해둬~");
    } else if (status == 1) {
        cm.warp(680000500,0);
        cm.dispose();
        }            
    }
}