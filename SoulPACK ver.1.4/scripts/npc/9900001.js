/*
Base Script by Luke(Roamer in RaGEZONE)
Shit done by RaptorJesus, go ahead and claim it as your own cause i made this in like 3 mins while chatting to Supi, Airflow, Steve and my other faggots on IRC.

�ѱ�ȭ : hihihye3_s (�ܵ�)
���� �޼ҵ� : w3aries (����), hihihye3_s (�ܵ�)
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
            cm.sendOk("�ȳ��Ͻÿ�.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("���þ� �귿�̶� ������ �غ����ִ�? �����Ŵ� ���ڰ����ǵ�.. ������� 5,000�޼Ҿ�..");
        } else if (status == 1) {
            cm.sendGetText("�󸶳� �ɷ�? �̱�� ����2��ιް� ���� ��������! ������ 5,000�޼Ҵ� �̱������ ���������ٴ°� ������!");
        } else if (status == 2) {
            fee = cm.getText();
            cm.sendYesNo("#r" + fee + "#k �޼Ҹ� �ɰŴ�?");
        } else if (status == 3) {
            if (cm.getMeso() < fee) {
                cm.sendOk("�κ��丮�ȿ� �ִµ����� �ǵ��� ������ �峭��������.");
                cm.dispose();
            } else if (cm.getText() < 0) {
                cm.sendOk("0�޼Ұɸ� �ȵǴ°� ����?");
                cm.dispose();
            } else {
                if (chance <= 1) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-5000);
			cm.getPlayer().setHp(0);
			cm.getPlayer().updateSingleStat(MapleStat.HP, 0);
			cm.getPlayer().setMp(0);
			cm.getPlayer().updateSingleStat(MapleStat.MP, 0);
                    cm.sendNext("�Ѿ��� ��ſ��Ӹ��� �����Ͽ����ϴ�.");
                    cm.dispose();
                }
                else if (chance == 2) {
                    cm.gainMeso(fee * 2);
                    cm.gainMeso(-5000);
                    cm.sendNext("�����մϴ�. �̰���ϴ�.");
                    cm.dispose();
                }
                else if (chance == 3) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-5000);
			cm.getPlayer().setHp(0);
			cm.getPlayer().updateSingleStat(MapleStat.HP, 0);
			cm.getPlayer().setMp(0);
			cm.getPlayer().updateSingleStat(MapleStat.MP, 0);
                    cm.sendNext("�Ѿ��� ��ſ��Ӹ��� �����Ͽ����ϴ�.");
                    cm.dispose();
                }
else if (chance == 4) {
                    cm.gainMeso(fee * 2);
                    cm.gainMeso(-5000);
                    cm.sendNext("�����մϴ�. �̰���ϴ�.");
                    cm.dispose();
                }
else if (chance == 5) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-5000);
			cm.getPlayer().setHp(0);
			cm.getPlayer().updateSingleStat(MapleStat.HP, 0);
			cm.getPlayer().setMp(0);
			cm.getPlayer().updateSingleStat(MapleStat.MP, 0);
                    cm.sendNext("�Ѿ��� ��ſ��Ӹ��� �����Ͽ����ϴ�.");
                    cm.dispose();
                }
                else if (chance >= 6) {
                    cm.gainMeso(fee * 2);
                    cm.gainMeso(-5000);
                    cm.sendNext("�����մϴ�. �̰���ϴ�.");
                    cm.dispose();
                }
            }
        }
    }
}  