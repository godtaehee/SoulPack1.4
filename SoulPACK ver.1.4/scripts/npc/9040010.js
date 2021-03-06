/*
	This file is part of the OdinMS Maple Story Server
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
 * Tiger Statue (990000900)
 * 
 * Guild Quest - end of boss
 */

importPackage(java.lang);

function start() {
        var eim = cm.getPlayer().getEventInstance();
	if (eim != null) {
                if (eim.getProperty("leader").equals(cm.getPlayer().getName())) {
                        if (cm.haveItem(4001024)) {
                                cm.removeAll(4001024);
                                var prev = eim.setProperty("bossclear","true",true);
                                if (prev == null) {
                                        var start = parseInt(eim.getProperty("entryTimestamp"));
                                        var diff = System.currentTimeMillis() - start;
                                        var points = 1000 - Math.floor(diff / (100 * 60));
                                        cm.getGuild().gainGP(points);
                                }
                                eim.finishPQ();
                        }
                        else {
                                cm.sendOk("?????? ??????????????.... ?????????? ???? ???? ???????? ???? ????????... ?????? ????????...");
                        }
                }
        }
        else {
                cm.warp(990001100);
        }
        cm.dispose();
}

function action(mode, type, selection) {
}
