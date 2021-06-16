/* Kyrin
	Pirate Job Advancement
	Victoria Road : Nautilus Harbor (120000000)
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
					cm.sendNext("#r해적#k이 되기위해서 찾아왔느냐?");
				else {
					cm.sendOk("#r해적#k이 되기위해서는 레벨10이상 힘35이상 이어야합니다.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 && cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {
					status = 10;
					cm.sendNext("몰라보게컸구나! 너에게맞는 새로운직업을 선사해야겠다.");
				} else if (cm.getLevel() >= 70 && (cm.getJob().equals(net.sf.odinms.client.MapleJob.INFIGHTER) || cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER))) {
					cm.sendOk("#b미지정#k에게 가보거라. 그가 너에게 새로운직업을 얻게해줄게다. 그는 #b엘나스#k에 살고있다. ");
					cm.dispose();
				} else if (cm.getLevel() < 30 && cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {
					cm.sendOk("좀더 강해진후에 다시찾아오거라.");
					cm.dispose();
				} else if (cm.getLevel() >= 120 && (cm.getJob().equals(net.sf.odinms.client.MapleJob.BUCCANEER) || cm.getJob().equals(net.sf.odinms.client.MapleJob.VALKYRIE))) {
					cm.sendOk("#b미지정.#k에게 가보거라. 그가 너에게 새로운직업을 얻게해줄게다. 그는 #b리프레#k에 살고있다.");
					cm.dispose();
				} else {
					cm.sendOk("진정한 메이플에 용사가되려면 어떠한역경도 이겨내야하노라.");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("한번직업을 가지면 다시는바꿀수없다네. 명심하시게.");
		} else if (status == 2) {
			cm.sendYesNo("진정 #r해적#k가 되기를 원하는가?");
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.changeJob(net.sf.odinms.client.MapleJob.PIRATE);
			}
			cm.sendOk("자네는 이제 진정한 해적이되었다네.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("2차전직에는 #r건슬링거#k, #b인파이터#k가 있다네. 건슬링거는 총을쓰며 블릿을 쏘는 해적이며, 인파이터는 너클을착용하여 가까이에서 공격하는 해적이네.");
		} else if (status == 12) {
			cm.sendSimple("어느직업을 고르겠느냐?#b\r\n#L1#건슬링거#l\r\n#L2#인파이터#l");
		} else if (status == 13) {
			var jobName;
			if (selection == 1) {
				jobName = "건슬링거";
				job = net.sf.odinms.client.MapleJob.GUNSLINGER;
			} else if (selection == 2) {
				jobName = "인파이터";
				job = net.sf.odinms.client.MapleJob.BRAWLER;
			}
			cm.sendYesNo("자네는 #r" + jobName + "#k 을 선택하였네. 정말로 이직업으로 하겠나?");
		} else if (status == 14) {
			cm.changeJob(job);
			cm.sendOk("자네는 이제 진정한 용사가되었다네. 메이플세계를 이끌어주시게나.");
			cm.dispose();
		}
	}
}	
