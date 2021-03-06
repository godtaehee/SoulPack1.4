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
 * @Author Stereo 
 *  
 * Kerning City Party Quest  
 */ 
// Significant maps 
// 103000000 - Kerning City 
// 103000800 - 1st Stage - next00 
// ... (1-3 = 2nd-4th stage)  
// 103000804 - Last Stage 
// 103000805 - Bonus 
// 103000890 - Exit 
// Significant items 
// 4001008 - Pass 
// 4001007 - Coupon 
// Significant monsters 
// 9300000 - Jr. Necki 
// 9300001 - Ligator 
// 9300002 - Curse Eye 
// 9300003 - King Slime 
// Significant NPCs 
// 9020000 - Lakelis 
// 9020001 - Cloto 
// 9020002 - Nella 
// map effects 
// Map/Obj/Effect/quest/gate/3 - warp activation glow 
// quest/party/clear - CLEAR text 
// quest/party/wrong - WRONG text 
// Party1/Clear - clear sound 
// Party1/Failed - wrong sound 
/* INSERT monsterdrops (monsterid,itemid,chance) VALUES (9300001,4001007,5); 
INSERT monsterdrops (monsterid,itemid,chance) VALUES (9300000,4001008,1); 
INSERT monsterdrops (monsterid,itemid,chance) VALUES (9300002,4001008,1); 
INSERT monsterdrops (monsterid,itemid,chance) VALUES (9300003,4001008,1); */ 

importPackage(net.sf.odinms.world); 

var exitMap; 
var instanceId; 
var minPlayers = 3; 

function init() { 
    instanceId = 1; 
} 

function monsterValue(eim, mobId) { 
    return 1; 
} 

function setup() { 
    exitMap = em.getChannelServer().getMapFactory().getMap(103000890); // <exit> 
    var instanceName = "KerningPQ" + instanceId; 

    var eim = em.newInstance(instanceName); 
     
    var mf = eim.getMapFactory(); 
     
    instanceId++; 
     
    var map = mf.getMap(103000800); 
    map.shuffleReactors(); 
    eim.addMapInstance(103000800,map); 
    var firstPortal = eim.getMapInstance(103000800).getPortal("next00"); 
    firstPortal.setScriptName("kpq1"); 
    //no time limit yet unless it becomes necessary 
    //em.schedule("timeOut", 30 * 60000); 
     
    return eim; 
} 

function playerEntry(eim, player) { 
    var map = eim.getMapInstance(103000800); 
    player.changeMap(map, map.getPortal(0)); 
     
    //TODO: hold time across map changes 
    //player.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.getClock(1800)); 
} 

function playerDead(eim, player) { 
    if (player.isAlive()) { //don't trigger on death, trigger on manual revive 
        if (eim.isLeader(player)) { //check for party leader 
            //boot whole party and end 
            var party = eim.getPlayers(); 
            for (var i = 0; i < party.size(); i++) { 
                playerExit(eim, party.get(i)); 
            } 
            eim.dispose(); 
        } 
        else { //boot dead player 
            // If only 2 players are left, uncompletable: 
            var party = eim.getPlayers(); 
            if (party.size() < minPlayers) {  
                for (var i = 0; i < party.size(); i++) { 
                    playerExit(eim,party.get(i)); 
                } 
                eim.dispose(); 
            } 
            else 
                playerExit(eim, player); 
        } 
    } 
} 

function playerDisconnected(eim, player) { 
    if (eim.isLeader(player)) { //check for party leader 
        //boot whole party and end 
        var party = eim.getPlayers(); 
        for (var i = 0; i < party.size(); i++) { 
            if (party.get(i).equals(player)) { 
                removePlayer(eim, player); 
            }             
            else { 
                playerExit(eim, party.get(i)); 
            } 
        } 
        eim.dispose(); 
    } 
    else { //boot d/ced player 
        // If only 2 players are left, uncompletable: 
        var party = eim.getPlayers(); 
        if (party.size() < minPlayers) { 
            for (var i = 0; i < party.size(); i++) { 
                playerExit(eim,party.get(i)); 
            } 
            eim.dispose(); 
        } 
        else 
            playerExit(eim, player); 
    } 
} 

function leftParty(eim, player) {             
    // If only 2 players are left, uncompletable: 
    var party = eim.getPlayers(); 
    if (party.size() < minPlayers) { 
        for (var i = 0; i < party.size(); i++) { 
            playerExit(eim,party.get(i)); 
        } 
        eim.dispose(); 
    } 
    else 
        playerExit(eim, player); 
} 

function disbandParty(eim) { 
    //boot whole party and end 
    var party = eim.getPlayers(); 
    for (var i = 0; i < party.size(); i++) { 
        playerExit(eim, party.get(i)); 
    } 
    eim.dispose(); 
} 

function playerExit(eim, player) { 
    eim.unregisterPlayer(player); 
    player.changeMap(exitMap, exitMap.getPortal(0)); 
} 

//for offline players 
function removePlayer(eim, player) { 
    eim.unregisterPlayer(player); 
    player.getMap().removePlayer(player); 
    player.setMap(exitMap); 
} 

function clearPQ(eim) { 
    //KPQ does nothing special with winners 
    var party = eim.getPlayers(); 
    for (var i = 0; i < party.size(); i++) { 
        playerExit(eim, party.get(i)); 
    } 
    eim.dispose(); 
} 

function allMonstersDead(eim) { 
        //do nothing; KPQ has nothing to do with monster killing 
} 

function cancelSchedule() { 
} 

function timeOut() { 
    var iter = em.getInstances().iterator(); 
    while (iter.hasNext()) { 
        var eim = iter.next(); 
        if (eim.getPlayerCount() > 0) { 
            var pIter = eim.getPlayers().iterator(); 
            while (pIter.hasNext()) { 
                playerExit(eim, pIter.next()); 
            } 
        } 
        eim.dispose(); 
    } 
} 
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
 * @Author Stereo 
 *  
 * Kerning City Party Quest  
 */ 
// Significant maps 
// 103000000 - Kerning City 
// 103000800 - 1st Stage - next00 
// ... (1-3 = 2nd-4th stage)  
// 103000804 - Last Stage 
// 103000805 - Bonus 
// 103000890 - Exit 
// Significant items 
// 4001008 - Pass 
// 4001007 - Coupon 
// Significant monsters 
// 9300000 - Jr. Necki 
// 9300001 - Ligator 
// 9300002 - Curse Eye 
// 9300003 - King Slime 
// Significant NPCs 
// 9020000 - Lakelis 
// 9020001 - Cloto 
// 9020002 - Nella 
// map effects 
// Map/Obj/Effect/quest/gate/3 - warp activation glow 
// quest/party/clear - CLEAR text 
// quest/party/wrong - WRONG text 
// Party1/Clear - clear sound 
// Party1/Failed - wrong sound 
/* INSERT monsterdrops (monsterid,itemid,chance) VALUES (9300001,4001007,5); 
INSERT monsterdrops (monsterid,itemid,chance) VALUES (9300000,4001008,1); 
INSERT monsterdrops (monsterid,itemid,chance) VALUES (9300002,4001008,1); 
INSERT monsterdrops (monsterid,itemid,chance) VALUES (9300003,4001008,1); */ 

importPackage(net.sf.odinms.world); 

var exitMap; 
var instanceId; 
var minPlayers = 3; 

function init() { 
    instanceId = 1; 
} 

function monsterValue(eim, mobId) { 
    return 1; 
} 

function setup() { 
    exitMap = em.getChannelServer().getMapFactory().getMap(103000890); // <exit> 
    var instanceName = "KerningPQ" + instanceId; 

    var eim = em.newInstance(instanceName); 
     
    var mf = eim.getMapFactory(); 
     
    instanceId++; 
     
    var map = mf.getMap(103000800); 
    map.shuffleReactors(); 
    // eim.addMapInstance(103000800,map); 
    var firstPortal = eim.getMapInstance(103000800).getPortal("next00"); 
    firstPortal.setScriptName("kpq1"); 
    //no time limit yet unless it becomes necessary 
    //em.schedule("timeOut", 30 * 60000); 
     
    return eim; 
} 

function playerEntry(eim, player) { 
    var map = eim.getMapInstance(103000800); 
    player.changeMap(map, map.getPortal(0)); 
     
    //TODO: hold time across map changes 
    //player.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.getClock(1800)); 
} 

function playerDead(eim, player) { 
} 

function playerRevive(eim, player) { 
    if (eim.isLeader(player)) { //check for party leader 
        //boot whole party and end 
        var party = eim.getPlayers(); 
        for (var i = 0; i < party.size(); i++) { 
            playerExit(eim, party.get(i)); 
        } 
        eim.dispose(); 
    } 
    else { //boot dead player 
        // If only 2 players are left, uncompletable: 
        var party = eim.getPlayers(); 
        if (party.size() <= minPlayers) { 
            for (var i = 0; i < party.size(); i++) { 
                playerExit(eim,party.get(i)); 
            } 
            eim.dispose(); 
        } 
        else 
            playerExit(eim, player); 
    } 
} 

function playerDisconnected(eim, player) { 
    if (eim.isLeader(player)) { //check for party leader 
        //boot whole party and end 
        var party = eim.getPlayers(); 
        for (var i = 0; i < party.size(); i++) { 
            if (party.get(i).equals(player)) { 
                removePlayer(eim, player); 
            }             
            else { 
                playerExit(eim, party.get(i)); 
            } 
        } 
        eim.dispose(); 
    } 
    else { //boot d/ced player 
        // If only 2 players are left, uncompletable: 
        var party = eim.getPlayers(); 
        if (party.size() < minPlayers) { 
            for (var i = 0; i < party.size(); i++) { 
                playerExit(eim,party.get(i)); 
            } 
            eim.dispose(); 
        } 
        else 
            playerExit(eim, player); 
    } 
} 

function leftParty(eim, player) {             
    // If only 2 players are left, uncompletable: 
    var party = eim.getPlayers(); 
    if (party.size() <= minPlayers) { 
        for (var i = 0; i < party.size(); i++) { 
            playerExit(eim,party.get(i)); 
        } 
        eim.dispose(); 
    } 
    else 
        playerExit(eim, player); 
} 

function disbandParty(eim) { 
    //boot whole party and end 
    var party = eim.getPlayers(); 
    for (var i = 0; i < party.size(); i++) { 
        playerExit(eim, party.get(i)); 
    } 
    eim.dispose(); 
} 

function playerExit(eim, player) { 
    eim.unregisterPlayer(player); 
    player.changeMap(exitMap, exitMap.getPortal(0)); 
} 

//for offline players 
function removePlayer(eim, player) { 
    eim.unregisterPlayer(player); 
    player.getMap().removePlayer(player); 
    player.setMap(exitMap); 
} 

function clearPQ(eim) { 
    //KPQ does nothing special with winners 
    var party = eim.getPlayers(); 
    for (var i = 0; i < party.size(); i++) { 
        playerExit(eim, party.get(i)); 
    } 
    eim.dispose(); 
} 

function allMonstersDead(eim) { 
        //do nothing; KPQ has nothing to do with monster killing 
} 

function cancelSchedule() { 
} 

function timeOut() { 
    var iter = em.getInstances().iterator(); 
    while (iter.hasNext()) { 
        var eim = iter.next(); 
        if (eim.getPlayerCount() > 0) { 
            var pIter = eim.getPlayers().iterator(); 
            while (pIter.hasNext()) { 
                playerExit(eim, pIter.next()); 
            } 
        } 
        eim.dispose(); 
    } 
}