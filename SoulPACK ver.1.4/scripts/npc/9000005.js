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

Halloween PQ NPC

*/

function start() {
			if (cm.haveItem(3994017,1)) {
				cm.sendSimple ("Welcome to the first Stage! First get #b#i4000035# 50 Tableclothes.#k");
				cm.dispose();
		} else {
			if (cm.haveItem(3994017,1)) {
			if (cm.haveItem(4000035,50)) {
				cm.sendSimple ("Great! You are ready for the next stage.");
				cm.dispose();
				cm.warp(103000105,0);
				cm.gainItem(3994017,-1);
				cm.gainItem(3994018,1);
		} else {
			if (cm.haveItem(3994018,1)) {
				cm.sendSimple ("Welcome to the second stage! Get me #b#i4000036# 30 Medicine With Weird Vibes.#k");
				cm.dispose();
		} else {
			if (cm.haveItem(3994018,1)) {
			if (cm.haveItem(4000036,30)) {
				cm.sendSimple ("Great! You are ready for the next stage.");
				cm.dispose();
				cm.warp(682000100,0);
				cm.gainItem(3994018,-1);
				cm.gainItem(3994019,1);
		} else {
			if (cm.haveItem(3994019,1)) {
				cm.sendSimple ("Welcome to the third stage. I need #b#i4032030# 20 Stretchy Material.#k");
				cm.dispose();
		} else {
			if (cm.haveItem(3994019,1)) {
			if (cm.haveItem(4032030,20)) {
				cm.sendSimple ("Great! You are ready for the next stage.");
				cm.dispose();
				cm.warp(682000800,0);
				cm.gainItem(3994019,-1);
				cm.gainItem(3994020,1);
		} else {
			if (cm.haveItem(3994020,1)) {
				cm.sendSimple ("Wow! You have made it this far to the 4th stage! Now go get me #b#i4032027# 20 Coat Hangers.#k");
				cm.dispose();
		} else {
			if (cm.haveItem(3994020,1)) {
			if (cm.haveItem(4032027,20)) {
				cm.sendSimple ("Great! You are ready for the next stage.");
				cm.dispose();
				cm.warp(682000304,0);
				cm.gainItem(3994020,-1);
				cm.gainItem(3994021,1);
		} else {
			if (cm.haveItem(3994021,1)) {
				cm.sendSimple ("Another stage... The fith stage! Now you have to collect #b#i4000018# 30 Firewoods.#k");
				cm.dispose();
		} else {
			if (cm.haveItem(3994021,1)) {
			if (cm.haveItem(4000018,30)) {
				cm.sendSimple ("Great! You are ready for the next stage.");
				cm.dispose();
				cm.warp(682000100,0);
				cm.gainItem(3994021,-1);
				cm.gainItem(3994022,1);
		} else {
			if (cm.haveItem(3994022,1)) {
				cm.sendSimple ("Here we are! The sixth stage! This stage is very easy. Now you have to obtain #b#i4000399# 40 Loaded Springs#k");
				cm.dispose();
		} else {
			if (cm.haveItem(3994022,1)) {
			if (cm.haveItem(4000399,40)) {
				cm.sendSimple ("Great! You are ready for the next stage.");
				cm.dispose();
				cm.warp(682000501,0);
				cm.gainItem(3994022,-1);
				cm.gainItem(3994023,1);
		} else {
			if (cm.haveItem(3994023,1)) {
				cm.sendSimple ("Welcome to the 7th stage! This one is kind of hard. Kill Voodoos to get #b#i2022245# 10 Heartstoppers.#k Good Luck!");
				cm.dispose();
		} else {
			if (cm.haveItem(3994023,1)) {
			if (cm.haveItem(2022245,10)) {
				cm.sendSimple ("Great! You are ready for the next stage.");
				cm.dispose();
				cm.warp(682000502,0);
				cm.gainItem(3994023,-1);
				cm.gainItem(3994024,1);
		} else {
			if (cm.haveItem(3994024,1)) {
				cm.sendSimple ("Welcome to the 8th stage! This one is also kind of hard. Kill Hoodoos to get #b#i2022247# 10 Red Gummy Slimes.#k Good Luck!");
				cm.dispose();
		} else {
			if (cm.haveItem(3994024,1)) {
			if (cm.haveItem(2022247,10)) {
				cm.sendSimple ("WOW! You are ready for the #bBonus Stage!#k You will have 1 minute there. #bBe aware that the snail there is the reactor, and be carful there because I will leave you there alone.");
				cm.dispose();
				cm.warp(682000700,0);
				cm.gainItem(3994024,-1);

		} else {

				cm.sendSimple ("You are not a part of the Halloween PQ, or you are in the bonus stage.");
				cm.dispose();