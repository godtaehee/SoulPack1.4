/*
@	Author : Raz
@
@	NPC = 9103003 - Rolly
@	Map =  Ludibrium - <Exit of the Maze> [LEFT SIDE]
@	NPC MapId = 809050017
@	Function = LMPQ - Quit NPC
@
*/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {
		cm.dispose();
	
	} else if (mode == 0) {
		cm.dispose();

	} else {
		if (mode == 1)
			status++;
		else
			status--;
		
                 if (status == 0) {
		cm.sendNext("See you again~!");

		} else if (status == 1) {
		cm.warpRandom(220000000);
		cm.removeAll(4001106);
	        cm.dispose();
	 	}      
      }
}