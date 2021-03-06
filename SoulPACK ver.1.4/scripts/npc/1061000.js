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

/* Chrishrama
	Dungeon: Sleepywood (105040300)
	
	Refining NPC: 
	* Shoes - All classes, 25 (20 for magicians)-60
*/

importPackage(net.sf.odinms.client);

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;

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
		var selStr = "어서오시게나. 나는이곳에서 아이템을 제작하고있네. 무엇을 만들건가?#b"
		var options = new Array("전사신발","궁수신발","마법사신발","도적신발");
		for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
			
		cm.sendSimple(selStr);
	}
	else if (status == 1 && mode == 1) {
		selectedType = selection;
		var selStr;
		var shoes;
		var suffix;
		if (selectedType == 0){ //warrior shoe
			selStr = "전사신발을 만들건가?#b";
			shoes = new Array(1072051,1072053,1072052,1072003,1072039,1072040,1072041,1072002,1072112,1072113,1072000,1072126,1072127,1072132,1072133,1072134,1072135,1072147,1072148,1072149);
			suffix = new Array (" - 전사 Lv. 25"," - 전사 Lv. 25"," - 전사 Lv. 25",
				" - 전사 Lv. 30"," - 전사 Lv. 30"," - 전사 Lv. 30"," - 전사 Lv. 30",
				" - 전사 Lv. 35"," - 전사 Lv. 35"," - 전사 Lv. 35",
				" - 전사 Lv. 40"," - 전사 Lv. 40"," - 전사 Lv. 40",
				" - 전사 Lv. 50"," - 전사 Lv. 50"," - 전사 Lv. 50"," - 전사 Lv. 50",
				" - 전사 Lv. 60"," - 전사 Lv. 60"," - 전사 Lv. 60");;
		}
		else if (selectedType == 1){ //bowman shoe
			selStr = "궁수신발을 만들건가?#b";
			shoes = new Array(1072027,1072034,1072069,1072079,1072080,1072081,1072082,1072083,1072101,1072102,1072103,1072118,1072119,1072120,1072121,1072122,1072123,1072124,1072125,1072144,1072145,1072146);
			suffix = new Array (" - 궁수 Lv. 25"," - 궁수 Lv. 25"," - 궁수 Lv. 25",
				" - 궁수 Lv. 30"," - 궁수 Lv. 30"," - 궁수 Lv. 30"," - 궁수 Lv. 30"," - 궁수 Lv. 30",
				" - 궁수 Lv. 35"," - 궁수 Lv. 35"," - 궁수 Lv. 35",
				" - 궁수 Lv. 40"," - 궁수 Lv. 40"," - 궁수 Lv. 40"," - 궁수 Lv. 40",
				" - 궁수 Lv. 50"," - 궁수 Lv. 50"," - 궁수 Lv. 50"," - 궁수 Lv. 50",
				" - 궁수 Lv. 60"," - 궁수 Lv. 60"," - 궁수 Lv. 60");
		}
		else if (selectedType == 2){ //magician shoe
			selStr = "마법사신발을 만들건가?#b";
			shoes = new Array(1072019,1072020,1072021,1072072,1072073,1072074,1072075,1072076,1072077,1072078,1072089,1072090,1072091,1072114,1072115,1072116,1072117,1072140,1072141,1072142,1072143,1072136,1072137,1072138,1072139);
			suffix = new Array (" - 마법사 Lv. 20"," - 마법사 Lv. 20"," - 마법사 Lv. 20",
				" - 마법사 Lv. 25"," - 마법사 Lv. 25","- 마법사 Lv. 25",
				" - 마법사 Lv. 30"," - 마법사 Lv. 30"," - 마법사 Lv. 30"," - 마법사 Lv. 30",
				" - 마법사 Lv. 35"," - 마법사 Lv. 35"," - 마법사 Lv. 35",
				" - 마법사 Lv. 40"," - 마법사 Lv. 40"," - 마법사 Lv. 40"," - 마법사 Lv. 40",
				" - 마법사 Lv. 50"," - 마법사 Lv. 50"," - 마법사 Lv. 50"," - 마법사 Lv. 50",
				" - 마법사 Lv. 60"," - 마법사 Lv. 60"," - 마법사 Lv. 60"," - 마법사 Lv. 60");
		}
		else if (selectedType == 3){ //thief shoe
			selStr = "도적신발을 만들건가?#b";
			shoes = new Array(1072084,1072085,1072086,1072087,1072032,1072033,1072035,1072036,1072104,1072105,1072106,1072107,1072108,1072109,1072110,1072128,1072130,1072129,1072131,1072150,1072151,1072152);
			suffix = new Array (" - 도적 Lv. 25"," - 도적 Lv. 25"," - 도적 Lv. 25"," - 도적 Lv. 25",
				" - 도적 Lv. 30"," - 도적 Lv. 30"," - 도적 Lv. 30"," - 도적 Lv. 30",
				" - 도적 Lv. 35"," - 도적 Lv. 35"," - 도적 Lv. 35",
				" - 도적 Lv. 40"," - 도적 Lv. 40"," - 도적 Lv. 40"," - 도적 Lv. 40",
				" - 도적 Lv. 50"," - 도적 Lv. 50"," - 도적 Lv. 50"," - 도적 Lv. 50",
				" - 도적 Lv. 60"," - 도적 Lv. 60"," - 도적 Lv. 60");
		}
		
		for (var i = 0; i < shoes.length; i++){
			selStr += "\r\n#L" + i + "##z" + shoes[i] + "##k" + suffix[i] + "#l#b";
		}
		cm.sendSimple(selStr);
	}
	else if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (selectedType == 0){ //warrior shoe
			var itemSet = new Array(1072051,1072053,1072052,1072003,1072039,1072040,1072041,1072002,1072112,1072113,1072000,1072126,1072127,1072132,1072133,1072134,1072135,1072147,1072148,1072149);
			var matSet = new Array(new Array(4011004,4011001,4000021,4003000),new Array(4011006,4011001,4000021,4003000),new Array(4021008,4011001,4000021,4003000),new Array(4021003,4011001,4000021,4003000),new Array(4011002,4011001,4000021,4003000),
				new Array(4011004,4011001,4000021,4003000),new Array(4021000,4011001,4000021,4003000),new Array(4011001,4021004,4000021,4000030,4003000),new Array(4011002,4021004,4000021,4000030,4003000),new Array(4021008,4021004,4000021,4000030,4003000),
				new Array(4011003,4000021,4000030,4003000,4000033),new Array(4011005,4021007,4000030,4003000,4000042),new Array(4011002,4021007,4000030,4003000,4000041),new Array(4021008,4011001,4021003,4000030,4003000),
				new Array(4021008,4011001,4011002,4000030,4003000),new Array(4021008,4011001,4011005,4000030,4003000),new Array(4021008,4011001,4011006,4000030,4003000),new Array(4021008,4011007,4021005,4000030,4003000),
				new Array(4021008,4011007,4011005,4000030,4003000),new Array(4021008,4011007,4021000,4000030,4003000));
			var matQtySet = new Array(new Array(2,1,15,10),new Array(2,1,15,10),new Array(1,2,20,10),new Array(4,2,45,15),new Array(4,2,45,15),new Array(4,2,45,15),new Array(4,2,45,15),new Array(3,1,30,20,25),new Array(3,1,30,20,25),new Array(2,1,30,20,25),
				new Array(4,100,40,30,100),new Array(4,1,40,30,250),new Array(4,1,40,30,120),new Array(1,3,6,65,45),new Array(1,3,6,65,45),new Array(1,3,6,65,45),new Array(1,3,6,65,45),new Array(1,1,8,80,55),new Array(1,1,8,80,55),new Array(1,1,8,80,55));
			var costSet = new Array(10000,10000,12000,20000,20000,20000,20000,22000,22000,25000,38000,38000,38000,50000,50000,50000,50000,60000,60000,60000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 1){ //bowman shoe
			var itemSet = new Array(1072027,1072034,1072069,1072079,1072080,1072081,1072082,1072083,1072101,1072102,1072103,1072118,1072119,1072120,1072121,1072122,1072123,1072124,1072125,1072144,1072145,1072146);
			var matSet = new Array(new Array(4000021,4011000,4003000),new Array(4000021,4021003,4003000),new Array(4000021,4021000,4003000),new Array(4000021,4021000,4003000),new Array(4000021,4021005,4003000),new Array(4000021,4021003,4003000),
				new Array(4000021,4021004,4003000),new Array(4000021,4021006,4003000),new Array(4021002,4021006,4000030,4000021,4003000),new Array(4021003,4021006,4000030,4000021,4003000),new Array(4021000,4021006,4000030,4000021,4003000),
				new Array(4021000,4003000,4000030,4000024),new Array(4021006,4003000,4000030,4000027),new Array(4011003,4003000,4000030,4000044),new Array(4021002,4003000,4000030,4000009),new Array(4011001,4021006,4021008,4000030,4003000,4000033),
				new Array(4011001,4021006,4021008,4000030,4003000,4000032),new Array(4011001,4021006,4021008,4000030,4003000,4000041),new Array(4011001,4021006,4021008,4000030,4003000,4000042),new Array(4011006,4021000,4021007,4000030,4003000),
				new Array(4011006,4021005,4021007,4000030,4003000),new Array(4011006,4021003,4021007,4000030,4003000));
			var matQtySet = new Array(new Array(35,3,10),new Array(35,1,10),new Array(35,1,10),new Array(50,2,15),new Array(50,2,15),new Array(50,2,15),new Array(50,2,15),new Array(50,2,15),
				new Array(3,1,15,30,20),new Array(3,1,15,30,20),new Array(3,1,15,30,20),new Array(4,30,45,20),new Array(4,30,45,20),new Array(5,30,45,40),new Array(5,30,45,120),
				new Array(3,3,1,60,35,80),new Array(3,3,1,60,35,150),new Array(3,3,1,60,35,100),new Array(3,3,1,60,35,250),new Array(5,8,1,75,50),new Array(5,8,1,75,50),new Array(5,8,1,75,50));
			var costSet = new Array(9000,9000,9000,19000,19000,19000,19000,19000,19000,20000,20000,20000,32000,32000,40000,40000,50000,50000,50000,50000,60000,60000,60000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 2){ //magician shoe
			var itemSet = new Array(1072019,1072020,1072021,1072072,1072073,1072074,1072075,1072076,1072077,1072078,1072089,1072090,1072091,1072114,1072115,1072116,1072117,1072140,1072141,1072142,1072143,1072136,1072137,1072138,1072139);
			var matSet = new Array(new Array(4021005,4000021,4003000),new Array(4021001,4000021,4003000),new Array(4021000,4000021,4003000),new Array(4011004,4000021,4003000),new Array(4021006,4000021,4003000),new Array(4021004,4000021,4003000),
				new Array(4021000,4000021,4003000),new Array(4021002,4000021,4003000),new Array(4011004,4000021,4003000),new Array(4021008,4000021,4003000),new Array(4021001,4021006,4000021,4000030,4003000),new Array(4021000,4021006,4000021,4000030,4003000),
				new Array(4021008,4021006,4000021,4000030,4003000),new Array(4021000,4000030,4000043,4003000),new Array(4021005,4000030,4000037,4003000),new Array(4011006,4021007,4000030,4000027,4003000),new Array(4021008,4021007,4000030,4000014,4003000),
				new Array(4021009,4011006,4021000,4000030,4003000),new Array(4021009,4011006,4021005,4000030,4003000),new Array(4021009,4011006,4021001,4000030,4003000),new Array(4021009,4011006,4021003,4000030,4003000),
				new Array(4021009,4011006,4011005,4000030,4003000),new Array(4021009,4011006,4021003,4000030,4003000),new Array(4021009,4011006,4011003,4000030,4003000),new Array(4021009,4011006,4021002,4000030,4003000));
			var matQtySet = new Array(new Array(1,30,5),new Array(1,30,5),new Array(1,30,5),new Array(1,35,10),new Array(1,35,10),new Array(1,35,10),new Array(2,50,15),new Array(2,50,15),new Array(2,50,15),
				new Array(1,50,15),new Array(3,1,30,15,20),new Array(3,1,30,15,20),new Array(2,1,40,25,20),new Array(4,40,35,25),new Array(4,40,70,25),new Array(2,1,40,20,25),new Array(2,1,40,30,30),
				new Array(1,3,3,60,40),new Array(1,3,3,60,40),new Array(1,3,3,60,40),new Array(1,3,3,60,40),new Array(1,4,5,70,50),new Array(1,4,5,70,50),new Array(1,4,5,70,50),new Array(1,4,5,70,50));
			var costSet = new Array(3000,3000,3000,8000,8000,8000,18000,18000,18000,18000,20000,20000,22000,30000,30000,35000,40000,50000,50000,50000,50000,60000,60000,60000,60000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 3){ //thief shoe
			var itemSet = new Array(1072084,1072085,1072086,1072087,1072032,1072033,1072035,1072036,1072104,1072105,1072106,1072107,1072108,1072109,1072110,1072128,1072130,1072129,1072131,1072150,1072151,1072152);
			var matSet = new Array(new Array(4021005,4000021,4003000),new Array(4021000,4000021,4003000),new Array(4021003,4000021,4003000),new Array(4021004,4000021,4003000),new Array(4011000,4000021,4003000),new Array(4011001,4000021,4003000),new Array(4011004,4000021,4003000),new Array(4011006,4000021,4003000),new Array(4021000,4021004,4000021,4000030,4003000),new Array(4021003,4021004,4000021,4000030,4003000),new Array(4021002,4021004,4000021,4000030,4003000),new Array(4021000,4000030,4000033,4003000),new Array(4021003,4000030,4000032,4003000),new Array(4021006,4000030,4000040,4003000),new Array(4021005,4000030,4000037,4003000),new Array(4011007,4021005,4000030,4000037,4003000),new Array(4011007,4021000,4000030,4000043,4003000),new Array(4011007,4021003,4000030,4000045,4003000),new Array(4011007,4021001,4000030,4000036,4003000),new Array(4021008,4011007,4021005,4000030,4003000),new Array(4021008,4011007,4011005,4000030,4003000),new Array(4021008,4011007,4021000,4000030,4003000));
			var matQtySet = new Array(new Array(1,35,10),new Array(1,35,10),new Array(1,35,10),new Array(1,35,10),new Array(3,50,15),new Array(3,50,15),new Array(2,50,15),new Array(2,50,15),new Array(3,1,30,15,20),new Array(3,1,30,15,20),new Array(3,1,30,15,20),
				new Array(5,45,50,30),new Array(4,45,30,30),new Array(4,45,3,30),new Array(4,45,70,30),new Array(2,3,50,200,35),new Array(2,3,50,150,35),new Array(2,3,50,80,35),new Array(2,3,50,80,35),new Array(1,1,8,75,50),new Array(1,1,5,75,50),new Array(1,1,1,75,50));
			var costSet = new Array(9000,9000,9000,9000,19000,19000,19000,21000,20000,20000,20000,40000,32000,35000,35000,50000,50000,50000,50000,60000,60000,60000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "자네는 나에게 #t" + item + "# 를원하는가? 다음과 같은 재료가 필요하다네.#b";

		if (mats instanceof Array){
			for(var i = 0; i < mats.length; i++){
				prompt += "\r\n#i"+mats[i]+"# " + matQty[i] + " #t" + mats[i] + "#";
			}
		}
		else {
			prompt += "\r\n#i"+mats+"# " + matQty + " #t" + mats + "#";
		}
		
		if (cost > 0)
			prompt += "\r\n#i4031138# " + cost + " meso";
		
		cm.sendYesNo(prompt);
	}
	else if (status == 3 && mode == 1) {
		var complete = true;
			
		if (cm.getMeso() < cost)
			{
				cm.sendOk("아이템을 만드려면 그만큼에 메소가필요한법이지...")
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
				cm.sendOk("재료가 한개라도 빠진건 아닌지 살펴보시게나.");
			else {
				if (cm.canHold(item)) {
					if (mats instanceof Array) {
						for (var i = 0; i < mats.length; i++){
							cm.gainItem(mats[i], -matQty[i]);
						}
					}
					else
						cm.gainItem(mats, -matQty);
						
					cm.gainMeso(-cost);
					cm.gainItem(item, 1);
					
					cm.sendOk("아이템이 완성되었다네...");
				}
				else {
					cm.sendOk("자네, 장비창이 모자란것같군, 한개비우고 다시찾아오시게나.");
				}
			}
		cm.dispose();
	}
}
