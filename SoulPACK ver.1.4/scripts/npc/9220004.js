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

/* Mos
	Leafre : Leafre (240000000)
	
	Refining NPC: 
	* Level 110 weapons - Stimulator allowed
*/

importPackage(net.sf.odinms.client);

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var stimulator = false;
var item;
var mats;
var matQty;
var cost;
var stimID;

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
		var selStr = "�ȳ�? �� �����⸦ ������ִ� #r����#k�����, ���ϴ� �׸��� �����غ�#b"
		var options = new Array("�巡�﹫�� ����¹��","���繫�� �����","�����繫�� �����","�ü����� �����","�������� �����","�������� �����","Ÿ�Ӹ��� ���� �����(����)","Ÿ�Ӹ��� ���� �����(����)");
		for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
			
		cm.sendSimple(selStr);
	}
	else if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType > 7)
		{
			stimulator = true;
			selectedType -= 7;
		}
		else
			stimulator = false;
		if (selectedType == 0) { //�巡�� ���� ����¹�~!! ?
			cm.sendNext("�巹�﹫���,Ÿ�Ӹ������� ����¹���, ��ῡ�´� �����, #r�巹���Ǻ��#k#v4000245# �� #r�巹���ǿ�ȥ#k#v4000244# #rũ����Ż#k�� �ʿ���, ��Ӹ��� ���̷��� ,������̹� �̶���. ������ �����!")
			cm.dispose();
		}
		else if (selectedType == 1){ //���繫�� �����
			var selStr = "������ ������ٱ�?#b";
			var weapon = new Array ("�巡�� ī�����#k - Lv. 110 �Ѽհ�#b","�巡�� ����#k - Lv. 110 �Ѽյ���#b","�巡�� ���̽�#k - Lv. 110 �Ѽյб�#b","�巡�� Ŭ���̸��#k - Lv. 110 �μհ�#b","�巡�� ��Ʋ����#k - Lv. 110 �μյ���#b","�巡�� �÷���#k - Lv. 110 �μյб�#b",
				"�巡�� ��Ƽ��#k - Lv. 110 â#b","�巡�� �����#k - Lv. 110 ����#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 3){ //�ü����� �����
			var selStr = "������ ������ٱ�?#b";
			var weapon = new Array ("�巡�� ���� ����#k - Lv. 110 Ȱ#b","�巡�� ���� ũ�ν�#k - Lv. 110 ����#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 2){ //�����繫�� �����
			var selStr = "������ ������ٱ�?#b";
			var weapon = new Array ("�巡�� �ϵ�#k - Lv. 108 �ϵ�#b","�巡�� ������#k - Lv. 110 ������#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 4){ //�������� �����
			var selStr = "������ ������ٱ�?#b";
			var weapon = new Array ("�巡�� ũ����#k - Lv. 110 �� �ܰ�#b","�巡�� ĭ�ڸ�#k - Lv. 110 �� �ܰ�#b","�巡�� �׸� �����̺�#k - Lv. 110 �ƴ�#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 5){ //�������� �����
			var selStr = "������ ������ٱ�?#b";
			var weapon = new Array ("�������#k - Lv. 110 ��Ŭ#b","�巡�� ����Ʈ#k - Lv. 110 ��#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 6){ //Ÿ�Ӹ��� ���� �����(����)
			var selStr = "������ ������ٱ�?#b";
			var weapon = new Array ("Ÿ�Ӹ��� ����ť���ʽ�#k - Lv. 120 �Ѽհ�#b","Ÿ�Ӹ��� ����#k - Lv. 120 �Ѽյ���#b","Ÿ�Ӹ��� �˶󸣰���#k - Lv. �Ѽյб�#b","Ÿ�Ӹ��� ��������#k - Lv. 120 �μհ�#b","Ÿ�Ӹ��� Ÿ�ٸ���#k - Lv. 120 �μյ���#b","Ÿ�Ӹ��� ����ü#k - Lv. 120 �μյб�#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 7){ //Ÿ�Ӹ��� ���� �����(����)
			var selStr = "������ ������ٱ�?#b";
			var weapon = new Array ("Ÿ�Ӹ��� �����콺#k - Lv. 120 ��Ŭ#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
	}
	else if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (selectedType == 1){ //���繫�� �����
			var itemSet = new Array(1302059,1312031,1322052,1402036,1412026,1422028,1432038,1442045);
			var matSet = new Array(new Array(1302056,4000244,4000245,4005000),new Array(1312030,4000244,4000245,4005000),new Array(1322045,4000244,4000245,4005000),new Array(1402035,4000244,4000245,4005000),
				new Array(1412021,4000244,4000245,4005000),new Array(1422027,4000244,4000245,4005000),new Array(1432030,4000244,4000245,4005000),new Array(1442044,4000244,4000245,4005000));
			var matQtySet = new Array(new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8));
			var costSet = new Array(120000,120000,120000,120000,120000,120000,120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 3){ //�ü����� �����
			var itemSet = new Array(1452044,1462039);
			var matSet = new Array(new Array(1452019,4000244,4000245,4005000,4005002),new Array(1462015,4000244,4000245,4005000,4005002));
			var matQtySet = new Array(new Array(1,20,25,3,5),new Array(1,20,25,5,3));
			var costSet = new Array(120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 2){ //�����繫�� �����
			var itemSet = new Array(1372032,1382036);
			var matSet = new Array(new Array(1372010,4000244,4000245,4005001,4005003),new Array(1382035,4000244,4000245,4005001,4005003));
			var matQtySet = new Array(new Array(1,20,25,6,2),new Array(1,20,25,6,2));
			var costSet = new Array(120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 4){ //�������� �����
			var itemSet = new Array(1332049,1332050,1472051);
			var matSet = new Array(new Array(1332051,4000244,4000245,4005000,4005002),new Array(1332052,4000244,4000245,4005002,4005003),new Array(1472053,4000244,4000245,4005002,4005003));
			var matQtySet = new Array(new Array(1,20,25,5,3),new Array(1,20,25,3,5),new Array(1,20,25,2,6));
			var costSet = new Array(120000,120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 5){ //�������� �����
			var itemSet = new Array(1482013,1492013);
			var matSet = new Array(new Array(1482012,4000244,4000245),new Array(1492012,4000244,4000245));
			var matQtySet = new Array(new Array(1,20,25),new Array(1,20,25));
			var costSet = new Array(1000000,1000000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
                }
		else if (selectedType == 6){ //Ÿ�Ӹ��� ���� �����(����)
			var itemSet = new Array(1302081,1312037,1322060,1402046,1412033,1422037);
			var matSet = new Array(new Array(1302059,4000244,4000245,4005000),new Array(1312031,4000244,4000245,4005000),new Array(1322052,4000244,4000245,4005000),new Array(1402036,4000244,4000245,4005000),
				new Array(1412026,4000244,4000245,4005000),new Array(1422028,4000244,4000245,4005000));
			var matQtySet = new Array(new Array(1,100,100,8),new Array(1,100,100,8),new Array(1,100,100,8),new Array(1,100,100,8),new Array(1,100,100,8),new Array(1,100,100,8),new Array(1,100,100,8),new Array(1,100,100,8));
			var costSet = new Array(1000000,1000000,1000000,1000000,1000000,1000000,1000000,1000000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}				
		else if (selectedType == 7){ //Ÿ�Ӹ��� ���� �����(����)
			var itemSet = new Array(1482023);
			var matSet = new Array(new Array(1482013,4000244,4000245));
			var matQtySet = new Array(new Array(1,60,60));
			var costSet = new Array(10000000,10000000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
	
		var prompt = "You want me to make a #t" + item + "#? In that case, I'm going to need specific items from you in order to make it. Make sure you have room in your inventory, though!#b";
		
		if(stimulator){
			stimID = getStimID(item);
			prompt += "\r\n#i"+stimID+"# 1 #t" + stimID + "#";
		}

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
				cm.sendOk("My fee is for the good of all of Leafre. If you cannot pay it, then begone.")
			}
			else
			{
				if (mats instanceof Array) {
					for(var i = 0; complete && i < mats.length; i++)
					{
						if (matQty[i] == 1)	{
							if (!cm.haveItem(mats[i]))
							{
								complete = false;
							}
						}
						else {
							var count = 0;
							var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(mats[i]).iterator();
							while (iter.hasNext()) {
								count += iter.next().getQuantity();
							}
							if (count < matQty[i])
								complete = false;
						}					
					}
				}
				else {
					var count = 0;
					var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(mats).iterator();
					while (iter.hasNext()) {
						count += iter.next().getQuantity();
					}
					if (count < matQty)
						complete = false;
				}
			}
			
			if (stimulator){ //check for stimulator
				if (!cm.haveItem(stimID))
				{
					complete = false;
				}
			}
			
			if (!complete) 
				cm.sendOk("I'm afraid that without the correct items, the dragon's essence would... not make for a very reliable weapon. Please bring the correct items next time.");
			else {
				if (mats instanceof Array) {
					for (var i = 0; i < mats.length; i++){
						cm.gainItem(mats[i], -matQty[i]);
					}
				}
				else
					cm.gainItem(mats, -matQty);
					
				cm.gainMeso(-cost);
				if (stimulator){ //check for stimulator
					cm.gainItem(stimID, -1);
					var deleted = Math.floor(Math.random() * 10);
					if (deleted != 0)
					{
						var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
						var newItem = ii.randomizeStats(ii.getEquipById(item));
						net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), newItem, "Created " + item  + " at Mos (2080000, map 240000000) using a stimulator");
						cm.sendOk("The process is complete. Treat your weapon well, lest you bring the wrath of the dragons upon you.");
					}
					else
					{
						cm.sendOk("Unfortunately, the dragon's essence has... conflicted with your weapon. My apologies for your loss.");
					}
				}
				else //just give basic item
				{
					cm.gainItem(item, 1);
					cm.sendOk("The process is complete. Treat your weapon well, lest you bring the wrath of the dragons upon you.");
				}
			}
		cm.dispose();
	}
}

function getStimID(equipID){
	var cat = Math.floor(equipID / 10000);
	var stimBase = 4130002; //stim for 1h sword
	
	switch (cat){
		case 130: //1h sword, do nothing
			break;
		case 131: //1h axe
			stimBase++;
			break;
		case 132: //1h bw
			stimBase += 2;
			break;
		case 140: //2h sword
			stimBase += 3;
			break;
		case 141: //2h axe
			stimBase += 4;
			break;
		case 142: //2h bw
			stimBase += 5;
			break;
		case 143: //spear
			stimBase += 6;
			break;
		case 144: //polearm
			stimBase += 7;
			break;
		case 137: //wand
			stimBase += 8;
			break;
		case 138: //staff
			stimBase += 9;
			break;
		case 145: //bow
			stimBase += 10;
			break;
		case 146: //xbow
			stimBase += 11;
			break;
		case 133: //dagger
			stimBase += 12;
			break;
		case 147: //claw
			stimBase += 13;
			break;
	}
	
	return stimBase;
}