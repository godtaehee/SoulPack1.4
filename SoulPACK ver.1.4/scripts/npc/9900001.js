/*
Base Script by Luke(Roamer in RaGEZONE)
Shit done by RaptorJesus, go ahead and claim it as your own cause i made this in like 3 mins while chatting to Supi, Airflow, Steve and my other faggots on IRC.

한글화 : hihihye3_s (단드)
내장 메소드 : w3aries (리프), hihihye3_s (단드)
*/

importPackage(net.sf.odinms.client);

var status = 0;
var fee;
var chance = Math.floor(Math.random()*6+1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("안녕하시오.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("러시안 룰렛이란 게임을 해본적있니? 돈을거는 도박같은건데.. 수수료는 5,000메소야..");
        } else if (status == 1) {
            cm.sendGetText("얼마나 걸래? 이기면 돈을2배로받고 지면 돈을잃지! 수수료 5,000메소는 이기건지건 빠져나간다는걸 잊지마!");
        } else if (status == 2) {
            fee = cm.getText();
            cm.sendYesNo("#r" + fee + "#k 메소를 걸거니?");
        } else if (status == 3) {
            if (cm.getMeso() < fee) {
                cm.sendOk("인벤토리안에 있는돈보다 건돈이 더많아 장난하지말자.");
                cm.dispose();
            } else if (cm.getText() < 0) {
                cm.sendOk("0메소걸면 안되는거 몰라?");
                cm.dispose();
            } else {
                if (chance <= 1) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-5000);
			cm.getPlayer().setHp(0);
			cm.getPlayer().updateSingleStat(MapleStat.HP, 0);
			cm.getPlayer().setMp(0);
			cm.getPlayer().updateSingleStat(MapleStat.MP, 0);
                    cm.sendNext("총알이 당신에머리를 관통하였습니다.");
                    cm.dispose();
                }
                else if (chance == 2) {
                    cm.gainMeso(fee * 2);
                    cm.gainMeso(-5000);
                    cm.sendNext("축하합니다. 이겼습니다.");
                    cm.dispose();
                }
                else if (chance == 3) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-5000);
			cm.getPlayer().setHp(0);
			cm.getPlayer().updateSingleStat(MapleStat.HP, 0);
			cm.getPlayer().setMp(0);
			cm.getPlayer().updateSingleStat(MapleStat.MP, 0);
                    cm.sendNext("총알이 당신에머리를 관통하였습니다.");
                    cm.dispose();
                }
else if (chance == 4) {
                    cm.gainMeso(fee * 2);
                    cm.gainMeso(-5000);
                    cm.sendNext("축하합니다. 이겼습니다.");
                    cm.dispose();
                }
else if (chance == 5) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-5000);
			cm.getPlayer().setHp(0);
			cm.getPlayer().updateSingleStat(MapleStat.HP, 0);
			cm.getPlayer().setMp(0);
			cm.getPlayer().updateSingleStat(MapleStat.MP, 0);
                    cm.sendNext("총알이 당신에머리를 관통하였습니다.");
                    cm.dispose();
                }
                else if (chance >= 6) {
                    cm.gainMeso(fee * 2);
                    cm.gainMeso(-5000);
                    cm.sendNext("축하합니다. 이겼습니다.");
                    cm.dispose();
                }
            }
        }
    }
}  