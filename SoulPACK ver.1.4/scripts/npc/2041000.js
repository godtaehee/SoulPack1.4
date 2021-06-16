/*
	MADE BY 소희 (jantnic)
*/
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
		if (mode == 0) {
			cm.sendOk("");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("어서오세요. 매표소안내원에게 티켓을 사시고온거 맞으시죠? 오르비스행 티켓이있어야 오르비스로 가실수있다는거 잊지마세요. 오르비스행 티켓은 5,000메소에 팔고있죠! 안사오셧다면 얼른사오세요!");
		} else if (status == 1) {
			cm.sendSimple("#L0#오르비스행 배 타기#l");
			status=1;
		} else if (status == 2) {
				if (selection == 0){ 
				        if (cm.haveItem(4031045)){
				        	cm.sendNext("오시리아대륙, 오르비스로 출발합니다! 배를타신후 정확히5분후에 오르비스에 도착합니다!");
				        	cm.gainItem(4031045,-1);
					status = 9;
				         }else{
					cm.sendOk("오르비스행 티켓을 가지고있지않네요. 티켓은 매표소안내원에게 구입할수있답니다.");
					cm.dispose();
					return;
				         }		
				} 
				if (selection == 1){ 
				        if (cm.haveItem(4031047)){
				        	cm.sendNext("빅토리아 아일랜드, 엘리니아으로 보내드리겠습니다.정거장통로를 이용하셔서 엘리니아행 정거장까지 가시길바랍니다. 혹시라도 잘못들어가셧다면 표를 재구입하신뒤 다시저에게 말을걸어주시면 원하는곳으로 보내드릴수있습니다, 티켓은 반드시 재구입해야합니다.");
				        	cm.gainItem(4031047,-1);
					status = 9;
				         }else{
					cm.sendOk("엘리니아행 티켓을 가지고있지않네요. 티켓은 매표소안내원 아가사에게 구입할수있답니다.");
					cm.dispose();
					return;
				         }		
				} 
				if (selection == 2){
				         if (cm.haveItem(4031073)){
					cm.sendNext("루디브리엄으로 보내드리겠습니다.정거장통로를 이용하셔서 루디브리엄행 정거장까지 가시길바랍니다. 혹시라도 잘못들어가셧다면 표를 재구입하신뒤 다시저에게 말을걸어주시면 원하는곳으로 보내드릴수있습니다, 티켓은 반드시 재구입해야합니다.");
				        	cm.gainItem(4031073,-1);
					status = 19;
				          }else{
					cm.sendOk("루디브리엄행 티켓을 가지고있지않네요. 티켓은 매표소안내원 아가사에게 구입할수있답니다.");
					cm.dispose();	 
					return;
				          }	
				}
				if (selection == 3){
				         if (cm.haveItem(4031074)){
					cm.sendNext("루디브리엄으로 보내드리겠습니다.정거장통로를 이용하셔서 루디브리엄행 정거장까지 가시길바랍니다. 혹시라도 잘못들어가셧다면 표를 재구입하신뒤 다시저에게 말을걸어주시면 원하는곳으로 보내드릴수있습니다, 티켓은 반드시 재구입해야합니다.");
				        	cm.gainItem(4031074,-1);
					status = 19;
				          }else{
					cm.sendOk("루디브리엄행 티켓을 가지고있지않네요. 티켓은 매표소안내원 아가사에게 구입할수있답니다.");
					cm.dispose();	 
					return;
				          }	
				}
				if (selection == 4){
				          if (cm.getMeso() > 5000) {
				        	 cm.sendNext("무릉으로 보내드리겠습니다.정거장통로를 이용하셔서 무릉행 정거장까지 가시길바랍니다. 혹시라도 잘못들어가셧다면 다시저에게 말을걸어주시면 원하는곳으로 보내드릴수있습니다.");
				       	 status = 29;
				          }else{
					  cm.sendOk("무릉으로 가시려면 최소한 5,000 메소는 가지고있으셔야합니다.");
					  cm.dispose();
					  return;
				          }
				}	
				if (selection == 5){
				          if (cm.haveItem(4031330)){
				        	 cm.sendNext("리프레로 보내드리겠습니다.정거장통로를 이용하셔서 리프레행 정거장까지 가시길바랍니다. 혹시라도 잘못들어가셧다면 표를 재구입하신뒤 다시저에게 말을걸어주시면 원하는곳으로 보내드릴수있습니다, 티켓은 반드시 재구입해야합니다.");
					 cm.gainItem(4031330,-1);
				       	 status = 39;
				          }else{
					  cm.sendOk("리프레행 티켓을 가지고있지않네요. 티켓은 매표소안내원 아가사에게 구입할수있답니다.");
					  cm.dispose();
					  return;
				          }	
				}
				if (selection == 6){
				          if (cm.haveItem(4031331)){
				        	 cm.sendNext("리프레로 보내드리겠습니다.정거장통로를 이용하셔서 리프레행 정거장까지 가시길바랍니다. 혹시라도 잘못들어가셧다면 표를 재구입하신뒤 다시저에게 말을걸어주시면 원하는곳으로 보내드릴수있습니다, 티켓은 반드시 재구입해야합니다.");
					 cm.gainItem(4031331,-1);
				       	 status = 39;
				          }else{
					  cm.sendOk("리프레행 티켓을 가지고있지않네요. 티켓은 매표소안내원 아가사에게 구입할수있답니다.");
					  cm.dispose();
					  return;
				          }	
				}
				if (selection == 7){
				          if (cm.haveItem(4031575)){
				        	 cm.sendNext("아리안트로 보내드리겠습니다.정거장통로를 이용하셔서 아리안트행 정거장까지 가시길바랍니다. 혹시라도 잘못들어가셧다면 표를 재구입하신뒤 다시저에게 말을걸어주시면 원하는곳으로 보내드릴수있습니다, 티켓은 반드시 재구입해야합니다.");
					 cm.gainItem(4031575,-1);
				       	 status = 49;
				          }else{
					  cm.sendOk("아리안트행 티켓을 가지고있지않네요. 티켓은 매표소안내원 아가사에게 구입할수있답니다.");
					  cm.dispose();
					  return;
				          }	
				}
				if (selection == 8){
				          if (cm.haveItem(4031576)){
				        	 cm.sendNext("아리안트로 보내드리겠습니다.정거장통로를 이용하셔서 아리안트행 정거장까지 가시길바랍니다. 혹시라도 잘못들어가셧다면 표를 재구입하신뒤 다시저에게 말을걸어주시면 원하는곳으로 보내드릴수있습니다, 티켓은 반드시 재구입해야합니다.");
					 cm.gainItem(4031576,-1);
				       	 status = 49;
				          }else{
					  cm.sendOk("아리안트행 티켓을 가지고있지않네요. 티켓은 매표소안내원 아가사에게 구입할수있답니다.");
					  cm.dispose();
					  return;
				          }	
				}
		} else if(status == 10){
			cm.warp(200090110, 0);
			cm.dispose();
		} else if (status==20){
			cm.warp(200000120, 0);
			cm.dispose();
		} else if (status==30){
			cm.warp(200000140, 0);
			cm.dispose();
		} else if (status==40){
			cm.warp(200000130, 0);
			cm.dispose();
		} else if (status==50){
			cm.warp(200000150, 0);
			cm.dispose();
		}
	}
}