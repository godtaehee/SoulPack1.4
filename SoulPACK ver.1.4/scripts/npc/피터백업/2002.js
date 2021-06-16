/*
	이 파일은 노리팩의 일부 파일입니다.
    Copyright (C) 2008 노리 <dulely@naver.com>
                       리프 <w3aries@naver.com>
                       키라씨 <blac2002@naver.com>
                       정씨 <gudjsgh6@naver.com>
                       지레프 <rlaehdwns4@naver.com>
                       블랙보이 <rlaeorjsrltk@naver.com>
                       전체 <vkdnjel23@naver.com>
                       필승 <aaaa9454@naver.com>
                       호동씨 <hodong_sea@naver.com>
                       윈터씨 <ab1239@naver.com>
                       구름군 <wkdtlguszoq@naver.com>

    이 파일은 제한없이 사용이 가능한 파일이며 재배포 가능합니다.
    이 파일의 주석을 수정 및 삭제할 시 위 제작자들의 동의가 필요합니다.
    이 파일의 저작권은 위 제작자들에게 있으며 위 제작자들의 동의없이
    무단수정 및 악용할 시 저작권법 위반으로 처벌 받으실 수 있습니다.
	저작권 및 법률정보 <http://likms.assembly.go.kr/law/jsp/main.jsp>
*/

var status = -1;
var cost;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 1 && mode == 0) {
			cm.sendNext("어서 가보는게 좋을텐데?");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("저희서버에 오신것을 환영합니다.\r\n여행자님 1차전직을 하고싶죠? 그럼 약간의 퀘스트를 진행하여야합니다.\r\n그럼 출발해보시겠습니까?");
		} else if (status == 1) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
	
cm.sendYesNo("제가 이동을 시켜주면 초보자 캠프마을 1로 이동을 하게됩니다.\r\n이동을 하게되면 옆으로 쭉쭉가셔서 초보자 캠프마을 2로 가보시기 바랍니다.");

				cost = 0;
			} else {
				cm.sendYesNo("제가 이동을 시켜주면 초보자 캠프마을 1로 이동을 하게됩니다.\r\n이동을 하게되면 옆으로 쭉쭉가셔서 초보자 캠프마을 2로 가보시기 바랍니다..");
				cost = 0;
			}
		} else if (status == 2) {
			if (cm.getMeso() < cost) {
				cm.sendNext("메소가 부족하시군요. 죄송하지만 요금을 지불하지 않으면 저희 모범택시를 이용하실 수 없습니다.")
				cm.dispose();
			} else {
				cm.gainMeso(-cost);
				cm.warp(1, 0);

				cm.dispose();
			}
		}
	}
}
