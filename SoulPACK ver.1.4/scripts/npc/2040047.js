/*
@	Author : Raz
@
@	NPC = Sgt.Anderson
@	Map =  Abandoned Tower <Stage 1>
@	NPC MapId = 922010100
@	NPC Exit-MapId = 221024500
@
*/

//4001022 - PASS OF DIMENSION

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
		cm.dispose();
	
	}else if (mode == 0){//No
		cm.sendOk("�����ðڽ��ϱ�?");
		cm.dispose();

	}else{		    //Regular Talk
		if (mode == 1)
			status++;
		else
			status--;
		if(cm.getChar().getMap().getId() == 922010000){
		if(status == 0){
		cm.sendNext("�ȳ���������.");
		}else if (status == 1){
		cm.warp(221024500);
		cm.dispose();
		}


		}else{
                 if (status == 0) {
		cm.sendYesNo("�����Ƽ����Ʈ�� �����ðڽ��ϱ�?";
		}else if (status == 1) {
		cm.sendNext("�ȳ���������.");
	 	}else if (status == 2) {
		var eim = cm.getChar().getEventInstance();  
		if(eim == null){
		cm.sendOk("�ȳ���������.");
		}else{
		if(isLeader() == true){
		eim.disbandParty();
		cm.removeFromParty(4001008, eim.getPlayers());
		}else{
		eim.leftParty(cm.getChar());
		cm.removeAll(4001022);
		}
		cm.dispose();
		}
	    }else if (status == 3){
	    	cm.warp(221024500);
		cm.removeAll(4001022);
		cm.dispose();
	    }
	}
    }
}

function isLeader(){
if(cm.getParty() == null){
return false;
}else{
return cm.isLeader();
}
}
