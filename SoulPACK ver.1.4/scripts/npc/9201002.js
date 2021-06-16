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
   cm.sendOk("#b결혼할 준비가 된다면 다시 말을 해주게#k"); 
   cm.dispose(); 
   return; 
  } 
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("다음은 웨딩박스맵으로 가는거야! 상자를 부셔봐 인생의 한번만 있는곳인데~! 떠날준비가 되면 로빈을 클릭하라구~!");
    } else if (status == 1) {
        cm.warp(680000401,0);
        cm.dispose();
        }            
    }
}