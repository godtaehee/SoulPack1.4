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

/* Mr. Thunder
	Victoria Road: Perion (102000000)
	
	Refining NPC: 
	* Minerals
	* Jewels
	* Shields
	* Helmets
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
		var selStr = "�ȳ�? �� ��������, ������ ��� ������ �������� �ָ�����Ͼ���� ���ø� �ް� ������ ���ۿ� �����ְ� �־�. ������ �Ҳ���?#b"
		var options = new Array("�����ǿ������� ��ü� �����","�����ǿ������� ��ü� �����","��� ���׷��̵�","���� ���׷��̵�");
		for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
			
		cm.sendSimple(selStr);
	}
	else if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType == 0){ //mineral refine
			var selStr = "� �����ǿ������� ��ü��� ����Ŵ�?#b";
			var minerals = new Array ("Bronze","Steel","Mithril","Adamantium","Silver","Orihalcon","Gold");
			for (var i = 0; i < minerals.length; i++){
				selStr += "\r\n#L" + i + "# " + minerals[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = false;
		}
		else if (selectedType == 1){ //jewel refine
			var selStr = "� �����ǿ������� ��ü��� ����Ŵ�?#b";
			var jewels = new Array ("Garnet","Amethyst","Aquamarine","Emerald","Opal","Sapphire","Topaz","Diamond","Black Crystal");
			for (var i = 0; i < jewels.length; i++){
				selStr += "\r\n#L" + i + "# " + jewels[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = false;
		}
		else if (selectedType == 2){ //helmet refine
			var selStr = "���? ����������! ������ ���׷��̵� �ҰŴ�?#b";
			var items = new Array(1002042,1002041,1002002,1002044,1002003,1002040,1002007,1002052,1002011,1002058,1002009,1002056,1002087,1002088,1002049,1002050,1002047,1002048,1002099,1002098,1002085,1002028,1002022,1002101);
			var suffix = new Array (" - Common Lv. 15"," - Common Lv. 15"," - Warrior Lv. 10"," - Warrior Lv. 10"," - Warrior Lv. 12"," - Warrior Lv. 12"," - Warrior Lv. 15",
				" - Warrior Lv. 15"," - Warrior Lv. 20"," - Warrior Lv. 20"," - Warrior Lv. 20"," - Warrior Lv. 20"," - Warrior Lv. 22"," - Warrior Lv. 22",
				" - Warrior Lv. 25"," - Warrior Lv. 25"," - Warrior Lv. 35"," - Warrior Lv. 35"," - Warrior Lv. 40"," - Warrior Lv. 40"," - Warrior Lv. 50",
				" - Warrior Lv. 50"," - Warrior Lv. 55"," - Warrior Lv. 55");
			for (var i = 0; i < items.length; i++){
				selStr += "\r\n#L" + i + "##z" + items[i] + "##k" + suffix[i] + "#l#b";
			}
			cm.sendSimple(selStr);
			equip = true;
		}
		else if (selectedType == 3){ //shield refine
			var selStr = "����? ����������! ����и� ���׷��̵� �ҰŴ�?#b";
			var items = new Array (1092014,1092013,1092010,1092011);
			var suffix = new Array (" - Warrior Lv. 40"," - Warrior Lv. 40"," - Warrior Lv. 60"," - Warrior Lv. 60");
			for (var i = 0; i < items.length; i++){
				selStr += "\r\n#L" + i + "##z" + items[i] + "##k" + suffix[i] + "#l#b";
			}
			cm.sendSimple(selStr);
			equip = true;
		}
		if (equip)
			status++;
	}
	else if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (selectedType == 0){ //mineral refine
			var itemSet = new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006);
			var matSet = new Array(4010000,4010001,4010002,4010003,4010004,4010005,4010006);
			var matQtySet = new Array(10,10,10,10,10,10,10);
			var costSet = new Array(300,300,300,500,500,500,800);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 1){ //jewel refine
			var itemSet = new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008);
			var matSet = new Array(4020000,4020001,4020002,4020003,4020004,4020005,4020006,4020007,4020008);
			var matQtySet = new Array(10,10,10,10,10,10,10,10,10);
			var costSet = new Array (500,500,500,500,500,500,500,1000,3000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "��.. �󸶳� ���鲨��?";
		
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

		if (selectedType == 2){ //helmet refine
			var itemSet = new Array(1002042,1002041,1002002,1002044,1002003,1002040,1002007,1002052,1002011,1002058,1002009,1002056,1002087,1002088,1002049,1002050,1002047,1002048,1002099,1002098,1002085,1002028,1002022,1002101);
			var matSet = new Array(new Array(1002001,4011002),new Array(1002001,4021006),new Array(1002043,4011001),new Array(1002043,4011002),new Array(1002039,4011001),new Array(1002039,4011002),new Array(1002051,4011001),new Array(1002051,4011002),new Array(1002059,4011001),new Array(1002059,4011002),
				new Array(1002055,4011001),new Array(1002055,4011002),new Array(1002027,4011002),new Array(1002027,4011006),new Array(1002005,4011006),new Array(1002005,4011005),new Array(1002004,4021000),new Array(1002004,4021005),new Array(1002021,4011002),new Array(1002021,4011006),new Array(1002086,4011002),
				new Array(1002086,4011004),new Array(1002100,4011007,4011001),new Array(1002100,4011007,4011002));
			var matQtySet = new Array(new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,1),new Array(1,2),new Array(1,2),new Array(1,3),new Array(1,3),new Array(1,3),new Array(1,3),new Array(1,4),new Array(1,4),new Array(1,5),new Array(1,5),new Array(1,3),new Array(1,3),
				new Array(1,5),new Array(1,6),new Array(1,5),new Array(1,4),new Array(1,1,7),new Array(1,1,7));
			var costSet = new Array(500,300,500,800,500,800,1000,1500,1500,2000,1500,2000,2000,4000,4000,5000,8000,10000,12000,15000,20000,25000,30000,30000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 3){ //shield refine
			var itemSet = new Array (1092014,1092013,1092010,1092011);
			var matSet = new Array(new Array (1092012,4011003),new Array (1092012,4011002),new Array (1092009,4011007,4011004),new Array (1092009,4011007,4011003));
			var matQtySet = new Array (new Array (1,10),new Array (1,10),new Array (1,1,15),new Array (1,1,15));
			var costSet = new Array (100000,100000,120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "�ʴ� ������ ";
		if (qty == 1)
			prompt += "a #z" + item + "#?";
		else
			prompt += qty + " #z" + item + "#?";
			
		prompt += " �� ��û����? ������ ���� ��ᰡ �ʿ���.#b";
		
		if (mats instanceof Array){
			for(var i = 0; i < mats.length; i++){
				prompt += "\r\n#v"+mats[i]+"# " + matQty[i] * qty + " #t" + mats[i] + "#";
			}
		}
		else {
			prompt += "\r\n#v"+mats+"# " + matQty * qty + " #t" + mats + "#";
		}
		
		if (cost > 0)
			prompt += "\r\n#v4031138# " + cost * qty + " meso";
		
		cm.sendYesNo(prompt);
	}
	else if (status == 4 && mode == 1) {
		var complete = true;
		
		if (cm.getMeso() < cost * qty)
			{
				cm.sendOk("�پ ���� ������ ���ؼ� �ڽ��� �޼� �ϳ��ϳ� �Ʊ���ؼ� �ȵ�.")
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
				cm.sendOk("��ᰡ �Ѱ��� ������ �ƴ��� �����");
			else {
				if (cm.canHold(item)) {
					if (mats instanceof Array) {
						for (var i = 0; i < mats.length; i++){
							cm.gainItem(mats[i], -matQty[i] * qty);
						}
					}
					else
						cm.gainItem(mats, -matQty * qty);
						
					cm.gainMeso(-cost * qty);
					cm.gainItem(item,qty);
					cm.sendOk("���������� ������������ �Ϸ���.");
				}
				else {
					cm.sendOk("�κ��丮â�� ������ ������? ��ĭ ���� ���� �ٽ� ���� ������?");
				}
			}
		cm.dispose();
	}
}
