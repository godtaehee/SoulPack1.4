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

/* Mr. Smith
	Victoria Road: Perion (102000000)
	
	Refining NPC: 
	* Warrior Gloves - 10-60 + upgrades
	* Processed Wood/Screws
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
		var selStr = "안녕! 난 썬더의 수제자 스미스라고해! 어떤 아이템을 만들거니?#b"
		var options = new Array("장갑 만들기","장갑 업그레이드","재료 제작");
		for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
			
		cm.sendSimple(selStr);
	}
	else if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType == 0){ //glove refine
			var selStr = "어느 글러브를 만들거니?#b";
			var items = new Array(1082003,1082000,1082004,1082001,1082007,1082008,1082023,1082009,1082059);
			var suffix = new Array (" - Warrior Lv. 10"," - Warrior Lv. 15"," - Warrior Lv. 20"," - Warrior Lv. 25",
				" - Warrior Lv. 30"," - Warrior Lv. 35"," - Warrior Lv. 40"," - Warrior Lv. 50"," - Warrior Lv. 60");
			for (var i = 0; i < items.length; i++){
				selStr += "\r\n#L" + i + "##z" + items[i] + "##k" + suffix[i] + "#l#b";
			}
			cm.sendSimple(selStr);
			equip = true;
		}
		else if (selectedType == 1){ //glove upgrade
			var selStr = "어느 글러브를 업그레이드 할거니?#b";
			var items = new Array(1082005,1082006,1082035,1082036,1082024,1082025,1082010,1082011,1082060,1082061);
			var suffix = new Array (" - Warrior Lv. 30"," - Warrior Lv. 30"," - Warrior Lv. 35"," - Warrior Lv. 35",
				" - Warrior Lv. 40"," - Warrior Lv. 40"," - Warrior Lv. 50"," - Warrior Lv. 50"," - Warrior Lv. 60"," - Warrior Lv. 60");
			for (var i = 0; i < items.length; i++){
				selStr += "\r\n#L" + i + "##z" + items[i] + "##k" + suffix[i] + "#l#b";
			}
			cm.sendSimple(selStr);
			equip = true;
		}
		else if (selectedType == 2){ //material refine
			var selStr = "어느 재료를 만들거니?#b";
			var materials = new Array ("나뭇가지로 가공된 나무 제작","장작으로 가공된 나무 제작","가공된 나사만들기(15개)");
			for (var i = 0; i < materials.length; i++){
				selStr += "\r\n#L" + i + "# " + materials[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = false;
		}
		if (equip)
			status++;
	}
	else if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (selectedType == 2){ //material refine
			var itemSet = new Array (4003001,4003001,4003000);
			var matSet = new Array(4000003,4000018,new Array (4011000,4011001));
			var matQtySet = new Array (10,5,new Array (1,1));
			var costSet = new Array (0,0,0)
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "음.. 얼마나 만들꺼냐?";
		
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
			var itemSet = new Array(1082003,1082000,1082004,1082001,1082007,1082008,1082023,1082009,1082059);
			var matSet = new Array(new Array(4000021,4011001),4011001,new Array(4000021,4011000),4011001,new Array(4011000,4011001,4003000),new Array(4000021,4011001,4003000),new Array(4000021,4011001,4003000),
				new Array(4011001,4021007,4000030,4003000),new Array(4011007,4011000,4011006,4000030,4003000));
			var matQtySet = new Array(new Array(15,1),2,new Array(40,2),2,new Array(3,2,15),new Array(30,4,15),new Array(50,5,40),new Array(3,2,30,45),new Array(1,8,2,50,50));
			var costSet = new Array(1000,2000,5000,10000,20000,30000,40000,50000,70000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 1){ //glove upgrade
			var itemSet = new Array(1082005,1082006,1082035,1082036,1082024,1082025,1082010,1082011,1082060,1082061);
			var matSet = new Array(new Array(1082007,4011001),new Array(1082007,4011005),new Array(1082008,4021006),new Array(1082008,4021008),new Array(1082023,4011003),new Array(1082023,4021008),
				new Array(1082009,4011002),new Array(1082009,4011006),new Array(1082059,4011002,4021005),new Array(1082059,4021007,4021008));
			var matQtySet = new Array (new Array(1,1),new Array(1,2),new Array(1,3),new Array(1,1),new Array(1,4),new Array(1,2),new Array(1,5),new Array(1,4),new Array(1,3,5),new Array(1,2,2));
			var costSet = new Array (20000,25000,30000,40000,45000,50000,55000,60000,70000,80000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "너는 나에게 ";
		if (qty == 1)
			prompt += "a #t" + item + "#?";
		else
			prompt += qty + " #t" + item + "#?";
			
		prompt += " 를 요청햇지? 다음과 같은 재료가 필요해.#b";
		
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
				cm.sendOk("뛰어난 무기 제작을 위해선 자신의 메소 하나하나 아까워해선 안돼.")
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
				cm.sendOk("재료가 한개라도 빠진건 아닌지 살펴봐");
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
					cm.sendOk("정상적으로 아이템제작이 완료됬어.");
				}
				else {
					cm.sendOk("인벤토리창이 꽉찬거 같은데? 한칸 비우고 내게 다시 말을 걸을래?");
				}
			}
		cm.dispose();
	}
}
