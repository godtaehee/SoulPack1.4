/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)
*/

var status = 0;
var job;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.sendOk("진정한 메이플에 용사가되려면 어떠한역경도 이겨내야하노라.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getLevel() >= 10 && cm.getChar().getStr() >= 35)
					cm.sendNext("#r전사#k가 되기위해서 찾아왔느냐?");
				else {
					cm.sendOk("#r전사#k가 되기위해서는 레벨10이상 힘35이상 이어야합니다.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 && cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
					status = 10;
					cm.sendNext("몰라보게컸구나! 너에게맞는 새로운직업을 선사해야겠다.");
				} else if (cm.getLevel() >= 70 && (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE) || cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER) || cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN))) {
					cm.sendOk("#bTylus#k에게 가보거라. 그가 너에게 새로운직업을 얻게해줄게다. 그는 #b엘나스#k에 살고있다. ");
					cm.dispose();
				} else if (cm.getLevel() < 30 && cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
					cm.sendOk("좀더 강해진후에 다시찾아오거라.");
					cm.dispose();
				} else if (cm.getLevel() >= 120 && (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER) || cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT) || cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT))) {
					cm.sendOk("#bHarmonia#k에게 가보거라. 그가 너에게 새로운직업을 얻게해줄게다. 그녀는 #b리프레#k에 살고있다.");
					cm.dispose();
				} else {
					cm.sendOk("진정한 메이플에 용사가되려면 어떠한역경도 이겨내야하노라.");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("한번직업을 가지면 다시는바꿀수없다네. 명심하시게.");
		} else if (status == 2) {
			cm.sendYesNo("진정 #r전사#k가 되기를 원하는가?");
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.changeJob(net.sf.odinms.client.MapleJob.WARRIOR);
			}
			cm.sendOk("자네는 이제 진정한 전사가되었다네.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("2차전직에는 #r페이지#k, #b파이터#k, #r스피어맨#k이 있다네. 페이지는 한손검과방패 또는두손검을,파이터는 두손도끼 또는두손검을, 스피어맨은 창을주로쓰는 직업이지.");
		} else if (status == 12) {
			cm.sendSimple("어느직업을 고르겠느냐?#b\r\n#L0#페이지#l\r\n#L1#파이터#l\r\n#L2#스피어맨#l#k");
		} else if (status == 13) {
			var jobName;
			if (selection == 0) {
				jobName = "페이지";
				job = net.sf.odinms.client.MapleJob.PAGE;
			} else if (selection == 1) {
				jobName = "파이터";
				job = net.sf.odinms.client.MapleJob.FIGHTER;
			} else {
				jobName = "스피어맨";
				job = net.sf.odinms.client.MapleJob.SPEARMAN;
			}
			cm.sendYesNo("자네는 #r" + jobName + "#k 을 선택하였네. 정말로 이직업으로 하겠나?");
		} else if (status == 14) {
			cm.changeJob(job);
			cm.sendOk("자네는 이제 진정한 용사가되었다네. 메이플세계를 이끌어주시게나.");
			cm.dispose();
		}
	}
}	
