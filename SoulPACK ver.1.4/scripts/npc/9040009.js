/* 
 * This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* 
 * @Author Lerk
 * 
 * Gatekeeper, Sharenian: Door to the Sharenian Castle (990000300)
 * 
 * Guild Quest - stage 1
 */

importPackage(net.sf.odinms.server.maps);

var status;
var stage;

function start() {
	status = -1;
        action (1, 0, 0);
}

function action(mode, type, selection) {
        if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
                var eim = cm.getPlayer().getEventInstance();
                if (eim == null) {
                        cm.warp(990001100);
                } else {
                        if (eim.getProperty("leader").equals(cm.getPlayer().getName())) {
                                if (cm.getPlayer().getMap().getReactorByName("statuegate").getState() > 0){
                                        cm.sendOk("Proceed.");
                                        cm.dispose();
                                } else {
                                        if (status == 0) {
                                                if (eim.getProperty("stage1status") == null || eim.getProperty("stage1status").equals("waiting")) {
                                                        if (eim.getProperty("stage1phase") == null) {
                                                                stage = 1;
                                                                eim.setProperty("stage1phase",stage);
                                                        } else {
                                                                stage = parseInt(eim.getProperty("stage1phase"));
                                                        }
                                                        if (stage == 1) {
                                                                cm.sendOk("이 도전 동상 나는 내 주위의 패턴을 보여주는합니다. 때 포기라는 단어를 반복하여 계속 진행 나의 패턴을합니다.");
                                                        }
                                                        else {
                                                                cm.sendOk("나는 이제 더 어려운 퍼즐을 제시합니다. 행운을 빕니다.")
                                                        }
                                                }
                                                else if (eim.getProperty("stage1status").equals("active")) {
                                                        stage = parseInt(eim.getProperty("stage1phase"));
                                                        if (eim.getProperty("stage1combo").equals(eim.getProperty("stage1guess"))) {
                                                                if (stage == 3) {
                                                                        cm.getPlayer().getMap().getReactorByName("statuegate").hitReactor(cm.getC());
                                                                        cm.sendOk("와우 정말 잘하시군여 다음 단계로 가세여 ");
                                                                        cm.showEffect("퀘스트 / 파티 / 취소");
                                                                        cm.playSound("Party1/Clear");
                                                                        var prev = eim.setProperty("stage1clear","true",true);
                                                                        if (prev == null) {
                                                                                cm.getGuild().gainGP(15);
                                                                        }
                                                                } else {
                                                                        
                                                                        cm.sendOk("아주 좋아합니다. 당신은 아직 더 많은을 완료, 그러나합니다. 나랑 다시 이야기를 준비가 되었으면합니다.");
                                                                        eim.setProperty("stage1phase", stage + 1);
                                                                        cm.mapMessage("You have completed part " + stage + " of the Gatekeeper Test.");
                                                                }
                                                                
                                                        } else {
                                                                cm.sendOk("당신은 테스트의 통과하지 못했습니다");
                                                                cm.mapMessage("당신의 문지기가 테스트를 실패하였습니다");
                                                                eim.setProperty("stage1phase","1")
                                                        }
                                                        eim.setProperty("stage1status", "waiting");
                                                        cm.dispose();
                                                }
                                                else {
                                                        cm.sendOk("Please wait.");
                                                        cm.dispose();
                                                }
                                        }
                                        else if (status == 1) {
                                                //only applicable for "waiting"
                                                var reactors = getReactors();
                                                var combo = makeCombo(reactors);
                                                /*/var reactorString = "Debug: Reactors in map: ";
                                                for (var i = 0; i < reactors.length; i++) {
                                                        reactorString += reactors[i] + " ";
                                                }
                                                cm.playerMessage(reactorString);
                                                reactorString = "Debug: Reactors in combo: ";
                                                for (var i = 0; i < combo.length; i++) {
                                                        reactorString += combo[i] + " ";
                                                }
                                                cm.playerMessage(reactorString);*/
                                                cm.mapMessage("Please wait while the combination is revealed.");
                                                
                                                var delay = 5000;
                                                for (var i = 0; i < combo.length; i++) {
                                                        cm.getPlayer().getMap().getReactorByOid(combo[i]).delayedHitReactor(cm.getC(), delay + 3500*i);
                                                }
                                                eim.setProperty("stage1status", "display");
                                                eim.setProperty("stage1combo","");       
                                                cm.dispose();
                                        }
                                }

                        } else {
                                cm.sendOk("는 당신의 정당의 지도자들과 통화할 필요합니다 날, 아무도 다른 사람합니다.");
                                cm.dispose();
                        }
                }
        }
}

//method for getting the statue reactors on the map by oid
function getReactors() {
        var reactors = new Array();
        
        var iter = cm.getPlayer().getMap().getMapObjects().iterator();
        while (iter.hasNext()) {
                var mo = iter.next();
                if (mo.getType() == MapleMapObjectType.REACTOR && !mo.getName().equals("statuegate")) {
                        reactors.push(mo.getObjectId());
                }
        }
        
        return reactors;
}

function makeCombo(reactors) {
        var combo = new Array();
        
        while (combo.length < (stage + 3)) {
                var chosenReactor = reactors[Math.floor(Math.random() * reactors.length)];
                //cm.log("Debug: Chosen Reactor " + chosenReactor)
                var repeat = false;
                
                if (combo.length > 0) {
                        for (var i = 0; i < combo.length; i++) {
                                if (combo[i] == chosenReactor) {
                                        repeat = true;
                                        //cm.log("Debug: repeat reactor: " + chosenReactor);
                                        break;
                                }
                        }
                }
                
                if (!repeat) {
                        //cm.log("Debug: unique reactor: " + chosenReactor);
                        combo.push(chosenReactor);
                }
        }
        
        return combo;
}
