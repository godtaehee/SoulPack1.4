/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
					   Matthias Butz <matze@odinms.de>
					   Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* JM from tha Streetz
	Victoria Road: Kerning City (103000000)
	
	Refining NPC: 
	* Gloves
	* Glove Upgrade
	* Claw
	* Claw Upgrade
	* Processed Wood/Screws

	* Note: JM by default is used as a Megaphone shop. To move this shop to Frederick in the FM,
	* following MySQL command:
	* UPDATE `shops` SET `npcid`='9030000' WHERE (`shopid`='0')
*/

importPackage(net.sf.odinms.client);

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;
var equip;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		cm.dispose();
	if (status == 0 && mode == 1) {
		var selStr = "풋...나는 커닝시티의 제작가 뒷골목의 제이엠이지..예~"
		var options = new Array("장갑만들기","장갑합성하기","아대만들기","아대합성하기","재료만들기");
		for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
			
		cm.sendSimple(selStr);
	}
	else if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType == 0){ //glove refine
			var selStr = "원하는 장갑을 골라바.";
			var gloves = new Array ("노가다목장갑#k - 레벨제한 10#b","브라운듀오#k - 레벨제한 15#b","블루듀오#k - 레벨제한 15#b","블랙듀오#k - 레벨제한 15#b","브론즈미셀#k - 레벨제한 20#b","브론즈워프스킨#k - 레벨제한 25#b","스틸실비아#k - 레벨제한 30#b",
				"스틸아비온#k - 레벨제한 35#b","레드클리브#k - 레벨제한 40#b","블루클리브#k - 레벨제한 50#b","브론즈 파오#k - 레벨제한 60#b");
			for (var i = 0; i < gloves.length; i++){
				selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
		}
		else if (selectedType == 1){ //glove upgrade
			var selStr = "장갑을 합성하고 싶다고?골라바~.#b";
			var gloves = new Array ("미스릴미셀#k - 레벨제한 20#b","다크미셀#k - 레벨제한 20#b","미스릴워프스킨#k - 레벨제한 25#b",
				"다크워프스킨#k - 레벨제한 25#b","실버실비아#k - 레벨제한 30#b","골드실비아#k - 레벨제한 30#b","오리할콘아비온#k - 레벨제한 35#b","골드아비온#k - 레벨제한 35#b","골드클리브#k - 레벨제한 40#b",
				"다크클리브#k - 레벨제한 40#b","레드문글러브#k - 레벨제한 50#b","브라운문글러브#k - 레벨제한 50#b","실버파오#k - 레벨제한 60#b","골드파오#k - 레벨제한 60#b");
			for (var i = 0; i < gloves.length; i++){
				selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
		}
		else if (selectedType == 2){ //claw refine
			var selStr = "아대를 만들고 싶니?#b";
			var claws = new Array ("스틸티탄즈#k - 레벨제한 15#b","브론즈이고르#k - 레벨제한 20#b","메바#k - 레벨제한 25#b","스틸가디언#k - 레벨제한 30#b","브론즈 가디언#k - 레벨제한 35#b","스틸에버리스#k - 레벨제한 40#b","스틸슬레인#k - 레벨제한 50#b");
			for (var i = 0; i < claws.length; i++){
				selStr += "\r\n#L" + i + "# " + claws[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
		}
		else if (selectedType == 3){ //claw upgrade
			var selStr = "아대를 합성하고 싶다고? 골라바~!#b";
			var claws = new Array ("미스릴티탄즈#k - 레벨제한 15#b","골드티탄즈#k - 레벨제한 15#b","스틸이고르#k - 레벨제한 20#b","아다만티움이고르#k - 레벨제한 20#b","미스릴가디언#k - 레벨제한 30#b","아다만티움 가디언#k - 레벨제한 30#b",
			"실버가디언#k - 레벨제한 35#b","다크가디언#k - 레벨제한 35#b","블러드에버리스#k - 레벨제한 40#b","아다만티움에버리스#k - 레벨제한 40#b","다크에버리스#k - 레벨제한 40#b","블러드슬레인#k - 레벨제한 50#b","사파이어슬레인#k - 레벨제한 50#b");
			for (var i = 0; i < claws.length; i++){
				selStr += "\r\n#L" + i + "# " + claws[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
		}
		else if (selectedType == 4){ //material refine 
			var selStr = "재료를 만들고싶니? 난 너가 원하는 것을 만들 수 있지...#b";
			var materials = new Array ("나뭇가지로 가공된 나무만들기","장작으로 가공된 나무만들기","나사만들기(15개)");
			for (var i = 0; i < materials.length; i++){
				selStr += "\r\n#L" + i + "# " + materials[i] + "#l";
			}
			equip = false;
			cm.sendSimple(selStr);
		}
		if (equip)
			status++;
	}
	else if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (selectedType == 4){ //material refine
			var itemSet = new Array (4003001,4003001,4003000);
			var matSet = new Array(4000003,4000018,new Array (4011000,4011001));
			var matQtySet = new Array (10,5,new Array (1,1));
			var costSet = new Array (0,0,0);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "So, you want me to make some #t" + item + "#s? In that case, how many do you want me to make?";
		
		cm.sendGetNumber(prompt,1,1,100)
	}
	else if (status == 3 && mode == 1) {
		if (equip)
		{
			selectedItem = selection;
			qty = 1;
		}
		else
			qty = selection;

		if (selectedType == 0){ //glove refine
			var itemSet = new Array(1082002,1082029,1082030,1082031,1082032,1082037,1082042,1082046,1082075,1082065,1082092);
			var matSet = new Array(4000021,new Array(4000021,4000018),new Array(4000021,4000015),new Array(4000021,4000020),new Array(4011000,4000021),new Array(4011000,4011001,4000021),new Array(4011001,4000021,4003000),new Array(4011001,4011000,4000021,4003000),new Array(4021000,4000014,4000021,4003000),new Array(4021005,4021008,4000030,4003000),new Array(4011007,4011000,4021007,4000030,4003000));
			var matQtySet = new Array(15,new Array(30,20),new Array(30,20),new Array(30,20),new Array(2,40),new Array(2,1,10),new Array(2,50,10),new Array(3,1,60,15),new Array(3,200,80,30),new Array(3,1,40,30),new Array(1,8,1,50,50));
			var costSet = new Array(1000,7000,7000,7000,10000,15000,25000,30000,40000,50000,70000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 1){ //glove upgrade
			var itemSet = new Array(1082033,1082034,1082038,1082039,1082043,1082044,1082047,1082045,1082076,1082074,1082067,1082066,1082093,1082094);
			var matSet = new Array(new Array(1082032,4011002),new Array(1082032,4021004),new Array(1082037,4011002),new Array(1082037,4021004),new Array(1082042,4011004),new Array(1082042,4011006),new Array(1082046,4011005),new Array(1082046,4011006),new Array(1082075,4011006),new Array(1082075,4021008),new Array(1082065,4021000),new Array(1082065,4011006,4021008),new Array(1082092,4011001,4000014),new Array(1082092,4011006,4000027));
			var matQtySet = new Array(new Array(1,1),new Array(1,1),new Array(1,2),new Array(1,2),new Array(1,2),new Array(1,1),new Array(1,3),new Array(1,2),new Array(1,4),new Array(1,2),new Array(1,5),new Array(1,2,1),new Array(1,7,200),new Array(1,7,150));
			var costSet = new Array (5000,7000,10000,12000,15000,20000,22000,25000,40000,50000,55000,60000,70000,80000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 2){ //claw refine
			var itemSet = new Array(1472001,1472004,1472007,1472008,1472011,1472014,1472018);
			var matSet = new Array(new Array(4011001,4000021,4003000),new Array(4011000,4011001,4000021,4003000),new Array(1472000,4011001,4000021,4003001),new Array(4011000,4011001,4000021,4003000),new Array(4011000,4011001,4000021,4003000),new Array(4011000,4011001,4000021,4003000),new Array(4011000,4011001,4000030,4003000));
			var matQtySet = new Array(new Array(1,20,5),new Array(2,1,30,10),new Array(1,3,20,30),new Array(3,2,50,20),new Array(4,2,80,25),new Array(3,2,100,30),new Array(4,2,40,35));
			var costSet = new Array(2000,3000,5000,15000,30000,40000,50000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 3){ //claw upgrade
			var itemSet = new Array (1472002,1472003,1472005,1472006,1472009,1472010,1472012,1472013,1472015,1472016,1472017,1472019,1472020);
			var matSet = new Array(new Array(1472001,4011002),new Array(1472001,4011006),new Array(1472004,4011001),new Array(1472004,4011003),new Array(1472008,4011002),new Array(1472008,4011003),new Array(1472011,4011004),new Array(1472011,4021008),new Array(1472014,4021000),new Array(1472014,4011003),new Array(1472014,4021008),new Array(1472018,4021000),new Array(1472018,4021005));
			var matQtySet = new Array (new Array(1,1),new Array(1,1),new Array(1,2),new Array(1,2),new Array(1,3),new Array(1,3),new Array(1,4),new Array(1,1),new Array(1,5),new Array(1,5),new Array(1,2),new Array(1,6),new Array(1,6));
			var costSet = new Array (1000,2000,3000,5000,10000,15000,20000,25000,30000,30000,35000,40000,40000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "You want me to make ";
		if (qty == 1)
			prompt += "a #t" + item + "#?";
		else
			prompt += qty + " #t" + item + "#?";
			
		prompt += " In that case, I'm going to need specific items from you in order to make it. Make sure you have room in your inventory, though!#b";
		
		if (mats instanceof Array){
			for(var i = 0; i < mats.length; i++){
				prompt += "\r\n#i"+mats[i]+"# " + matQty[i] * qty + " #t" + mats[i] + "#";
			}
		}
		else {
			prompt += "\r\n#i"+mats+"# " + matQty * qty + " #t" + mats + "#";
		}
		
		if (cost > 0)
			prompt += "\r\n#i4031138# " + cost * qty + " meso";
		
		cm.sendYesNo(prompt);
	}
	else if (status == 4 && mode == 1) {
		var complete = true;
		
		if (cm.getMeso() < cost * qty)
			{
				cm.sendOk("I'm afraid you cannot afford my services.")
			}
			else
			{
				if (mats instanceof Array) {
					for(var i = 0; complete && i < mats.length; i++)
					{
						if (!cm.haveItem(mats[i], matQty[i]))
						{
								complete = false;
						}					
					}
				}
				else {
					if (!cm.haveItem(mats, matQty))
					{
							complete = false;
					}
				}
			}
			
			if (!complete) 
				cm.sendOk("What are you tyring to pull? I can't make anything unless you bring me what I ask for.");
			else {
				if (cm.canHold(item)) {
					if (mats instanceof Array) {
						for (var i = 0; i < mats.length; i++){
							cm.gainItem(mats[i], -matQty[i] * qty);
						}
					}
					else
						cm.gainItem(mats, -matQty * qty);
						
					if (cost > 0)
						cm.gainMeso(-cost * qty);
					
					if (item == 4003000)//screws
						cm.gainItem(4003000, 15 * qty);
					else
						cm.gainItem(item, qty);
					cm.sendOk("All done. If you need anything else... Well, I'm not going anywhere.");
				}
				else {
					cm.sendOk("Please make sure you have room in your inventory, and talk to me again.");
				}
			}
		cm.dispose();
	}
}
