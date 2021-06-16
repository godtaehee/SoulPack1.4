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

/* @Author Lerk
 *
 * Guardian Statue - Sharenian: Fountain of the Wiseman (990000500)
 * 
 * Guild Quest Stage 3
 */

importPackage(net.sf.odinms.server.maps);

function start() {
        //everything can be done in one status, so let's do it here.
        var eim = cm.getPlayer().getEventInstance();
        if (eim == null) {
                cm.warp(990001100);
        } else {
                if (eim.getProperty("leader").equals(cm.getPlayer().getName())) {
                        if (cm.getPlayer().getMap().getReactorByName("watergate").getState() > 0){
                                cm.sendOk("You may proceed.");
                        } else {
                                var currentCombo = eim.getProperty("stage3combo");
                                if (currentCombo == null || currentCombo.equals("reset")) {
                                        var newCombo = makeCombo();
                                        eim.setProperty("stage3combo",newCombo);
                                        //cm.playerMessage("Debug: " + newCombo);
                                        eim.setProperty("stage3attempt","1");
                                        cm.sendOk("이 분수를 지키고있다가 비밀 통로 알현 실. vassals을 제공하여 계속 진행 항목의 영역을합니다. the vassals한다 서비스가 허용되는지 여부를 말씀, 그리고 만약 아니라면, 어느 vassals이 불쾌합니다. 당신은 7 개의 하려고 시도합니다. 행운을 빕니다.")
                                } else {
                                        var attempt = parseInt(eim.getProperty("stage3attempt"));
                                        var combo = parseInt(currentCombo);
                                        var guess = getGroundItems();
                                        if (guess != null) {
                                                if (combo == guess) {
                                                        cm.getPlayer().getMap().getReactorByName("watergate").hitReactor(cm.getC());
                                                        cm.sendOk("You may proceed.");
                                                        cm.showEffect("퀘스트 / 파티 / 취소");
                                                        cm.playSound("Party1/Clear");
                                                        var prev = eim.setProperty("stage3clear","true",true);
                                                        if (prev == null) {
                                                                cm.getGuild().gainGP(25);
                                                        }
                                                } else {
                                                        var black = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9300036);
                                                        var myst = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9300037);
                                                        if (attempt < 7) {
                                                                //cm.playerMessage("Combo : " + combo);
                                                                //cm.playerMessage("Guess : " + guess);
                                                                var parsedCombo = parsePattern(combo);
                                                                var parsedGuess = parsePattern(guess);
                                                                var results = compare(parsedCombo, parsedGuess);
                                                                var string = "";
                                                                //cm.playerMessage("Results - Correct: " + results[0] + " | Incorrect: " + results[1] + " | Unknown: " + results[2]);
                                                                if (results[0] != 0) {
                                                                        if (results[0] == 1) {
                                                                                string += "1 노예 제도는 그들의 제안을 기쁘게 생각합니다..\r\n";
                                                                        } else {
                                                                                string += results[0] + " vassals 은 그들의 서비스 만족합니다.\r\n";
                                                                        }
                                                                }
                                                                if (results[1] != 0) {
                                                                        if (results[1] == 1) {
                                                                                string += "1 노예 제도가 올바르지 않은 제안 받았다.\r\n";
                                                                        } else {
                                                                                string += results[1] + " vassals 잘못된 제품이 접수되었습니다.\r\n";
                                                                        }
                                                                }
                                                                if (results[2] != 0) {
                                                                        if (results[2] == 1) {
                                                                                string += "1 노예 제도는 알 수없는 제안을 받았습니다.\r\n";
                                                                        } else {
                                                                                string += results[2] + " vassals 알 수없는 제품이 접수되었습니다.\r\n";
                                                                        }
                                                                }
                                                                string += "This is your ";
                                                                switch (attempt) {
                                                                        case 1:
                                                                                string += "1st";
                                                                                break;
                                                                        case 2:
                                                                                string += "2nd";
                                                                                break;
                                                                        case 3:
                                                                                string += "3rd";
                                                                                break;
                                                                        default:
                                                                                string += attempt + "th";
                                                                                break;
                                                                }
                                                                string += " attempt.";

                                                                //spawn one black and one myst knight
                                                                cm.getPlayer().getMap().spawnMonsterOnGroundBelow(black, new java.awt.Point(-350, 150));
                                                                cm.getPlayer().getMap().spawnMonsterOnGroundBelow(myst, new java.awt.Point(400, 150));

                                                                cm.sendOk(string);
                                                                eim.setProperty("stage3attempt",attempt + 1);
                                                        } else {
                                                                //reset the combo and mass spawn monsters
                                                                eim.setProperty("stage3combo","reset");
                                                                cm.sendOk("당신이 테스트가 실패합니다.하시기 바랍니다 스스로 작성하고 나중에 다시 시도하십시오.");

                                                                for (var i = 0; i < 5; i++) {
                                                                        //keep getting new monsters, lest we spawn the same monster five times o.o!
                                                                        black = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9300036);
                                                                        myst = net.sf.odinms.server.life.MapleLifeFactory.getMonster(9300037);
                                                                        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(black, new java.awt.Point(randX(), 150));
                                                                        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(myst, new java.awt.Point(randX(), 150));
                                                                }
                                                        }
                                                }
                                        } else {
                                                cm.sendOk("하시기 바랍니다 시도가 올바르게 설정되었는지 확인하십시오 앞에 vassals 나를 다시 얘기하고있습니다.");
                                        }
                                }
                        }
                } else {
                        cm.sendOk("당신의 지도자들이 나에게 얘기하시기 바랍니다");
                }
        }
        cm.dispose();
}

function action(mode, type, selection) {
}

function makeCombo() {
        var combo = 0;
        
        for (var i = 0; i < 4; i++) {
                combo += Math.floor(Math.random() * 4) * Math.pow(10, i);
        }
        
        return combo;
}

//check the items on ground and convert into an applicable string; null if items aren't proper
function getGroundItems() {
        var items = cm.getPlayer().getMap().getItemsInRange(cm.getPlayer().getPosition(), java.lang.Double.POSITIVE_INFINITY);
        var itemInArea = new Array(-1, -1, -1, -1);
        
        if (items.size() != 4) {
                //cm.playerMessage("Debug: Attempt failed due to lack of items: " + items.size());
                return null;
        }
        
        var iter = items.iterator();
        while (iter.hasNext()) {
                var item = iter.next();
                var id = item.getItem().getItemId();
                if (id < 4001027 || id > 4001030) {
                        //cm.playerMessage("Debug: Attempt failed due to improper ID: " + id);
                        return null;
                } else {
                        //check item location
                        for (var i = 0; i < 4; i++) {
                                if (cm.getPlayer().getMap().getArea(i).contains(item.getPosition())) {
                                        itemInArea[i] = id - 4001027;
                                        //cm.playerMessage("Item in area "+i+": " + id);
                                        break;
                                }
                        }
                }
        }
        
        //guaranteed four items that are part of the stage 3 item set by this point, check to see if each area has an item
        if (itemInArea[0] == -1 || itemInArea[1] == -1 || itemInArea[2] == -1 || itemInArea[3] == -1) {
                /*cm.playerMessage("Debug: Attempt failed due to improper location.");
                for (var i = 0; i < 4; i++) {
                        cm.playerMessage("Item in area "+i+": " + itemInArea[i]);
                }*/
                return null;
        }
        
        return (itemInArea[0] * 1000 + itemInArea[1] * 100 + itemInArea[2] * 10 + itemInArea[3]);
}

//convert an integer for answer or guess into int array for comparison
function parsePattern(pattern) {
        var tempPattern = pattern;
        var items = new Array(-1, -1, -1, -1);
        for (var i = 0; i < 4; i++) {
                items[i] = Math.floor(tempPattern / Math.pow(10, 3-i));
                tempPattern = tempPattern % Math.pow(10, 3-i);
        }
        return items;
}

// compare two int arrays for the puzzle
function compare(answer, guess) {
        var correct = 0;
        var incorrect = 0;
        /*var debugAnswer = "Combo : ";
        var debugGuess = "Guess : ";
        
        for (var d = 0; d < answer.length; d++) {
                debugAnswer += answer[d] + " ";
                debugGuess += guess[d] + " ";
        }
        
        cm.playerMessage(debugAnswer);
        cm.playerMessage(debugGuess);*/
        
        for (var i = 0; i < answer.length; i) {
                if (answer[i] == guess[i]) {
                        correct++;
                        //cm.playerMessage("Item match : " + answer[i]);
                        
                        //pop the answer/guess at i
                        if (i != answer.length - 1) {
                                answer[i] = answer[answer.length - 1];
                                guess[i] = guess[guess.length - 1];
                        }
                        
                        answer.pop();
                        guess.pop();
                        
                        /*/debugAnswer = "Combo : ";
                        debugGuess = "Guess : ";

                        for (var d = 0; d < answer.length; d++) {
                                debugAnswer += answer[d] + " ";
                                debugGuess += guess[d] + " ";
                        }

                        cm.playerMessage(debugAnswer);
                        cm.playerMessage(debugGuess);*/
                }
                else {
                        i++;
                }
        }
        
        //check remaining answers for "incorrect": correct item in incorrect position
        var answerItems = new Array(0, 0, 0, 0);
        var guessItems = new Array(0, 0, 0, 0);
        
        for (var j = 0; j < answer.length; j++) {
                var aItem = answer[j];
                var gItem = guess[j]
                answerItems[aItem]++;
                guessItems[gItem]++;
        }
        
        /*for (var d = 0; d < answer.length; d++) {
                cm.playerMessage("Item " + d + " in combo: " + answerItems[d] + " | in guess: " + guessItems[d]);
        }*/
        
        for (var k = 0; k < answerItems.length; k++) {
                var inc = Math.min(answerItems[k], guessItems[k]);
                //cm.playerMessage("Incorrect for item " + k + ": " + inc);
                incorrect += inc;
        }
        
        return new Array(correct, incorrect, (4 - correct - incorrect));
}

//for mass spawn
function randX() {
	return -350 + Math.floor(Math.random() * 750);
}
