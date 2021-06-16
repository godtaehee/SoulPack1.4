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
		var selStr = "안녕? 난 고랩무기를 만들어주는 #r해피#k라고해, 원하는 항목을 선택해봐#b"
		var options = new Array("드래곤무기 만드는방법","전사무기 만들기","마법사무기 만들기","궁수무기 만들기","도적무기 만들기","해적무기 만들기","타임리스 무기 만들기(전사)","타임리스 무기 만들기(해적)");
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
		if (selectedType == 0) { //드래곤 무기 만드는법~!! ?
			cm.sendNext("드레곤무기와,타임리스무기 만드는법은, 재료에맞는 무기와, #r드레곤의비늘#k#v4000245# 과 #r드레곤의영혼#k#v4000244# #r크리스탈#k이 필요해, 드롭몹은 스켈레곤 ,레드와이번 이란다. 열심히 모아줘!")
			cm.dispose();
		}
		else if (selectedType == 1){ //전사무기 만들기
			var selStr = "무엇을 만들어줄까?#b";
			var weapon = new Array ("드래곤 카파펠라#k - Lv. 110 한손검#b","드래곤 엑스#k - Lv. 110 한손도끼#b","드래곤 메이스#k - Lv. 110 한손둔기#b","드래곤 클레이모어#k - Lv. 110 두손검#b","드래곤 배틀엑스#k - Lv. 110 두손도끼#b","드래곤 플레임#k - Lv. 110 두손둔기#b",
				"드래곤 팔티잔#k - Lv. 110 창#b","드래곤 헬버드#k - Lv. 110 폴암#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 3){ //궁수무기 만들기
			var selStr = "무엇을 만들어줄까?#b";
			var weapon = new Array ("드래곤 샤인 보두#k - Lv. 110 활#b","드래곤 샤인 크로스#k - Lv. 110 석궁#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 2){ //마법사무기 만들기
			var selStr = "무엇을 만들어줄까?#b";
			var weapon = new Array ("드래곤 완드#k - Lv. 108 완드#b","드래곤 스태프#k - Lv. 110 스태프#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 4){ //도적무기 만들기
			var selStr = "무엇을 만들어줄까?#b";
			var weapon = new Array ("드래곤 크리스#k - Lv. 110 힘 단검#b","드래곤 칸자르#k - Lv. 110 럭 단검#b","드래곤 그린 슬레이브#k - Lv. 110 아대#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 5){ //해적무기 만들기
			var selStr = "무엇을 만들어줄까?#b";
			var weapon = new Array ("용아주조#k - Lv. 110 너클#b","드래곤 세인트#k - Lv. 110 건#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 6){ //타임리스 무기 만들기(전사)
			var selStr = "무엇을 만들어줄까?#b";
			var weapon = new Array ("타임리스 엑서큐서너스#k - Lv. 120 한손검#b","타임리스 버디슈#k - Lv. 120 한손도끼#b","타임리스 알라르간도#k - Lv. 한손둔기#b","타임리스 니폴하임#k - Lv. 120 두손검#b","타임리스 타바르진#k - Lv. 120 두손도끼#b","타임리스 벨로체#k - Lv. 120 두손둔기#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 7){ //타임리스 무기 만들기(해적)
			var selStr = "무엇을 만들어줄까?#b";
			var weapon = new Array ("타임리스 에퀴녹스#k - Lv. 120 너클#b");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
			}
			cm.sendSimple(selStr);
		}
	}
	else if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (selectedType == 1){ //전사무기 만들기
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
		else if (selectedType == 3){ //궁수무기 만들기
			var itemSet = new Array(1452044,1462039);
			var matSet = new Array(new Array(1452019,4000244,4000245,4005000,4005002),new Array(1462015,4000244,4000245,4005000,4005002));
			var matQtySet = new Array(new Array(1,20,25,3,5),new Array(1,20,25,5,3));
			var costSet = new Array(120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 2){ //마법사무기 만들기
			var itemSet = new Array(1372032,1382036);
			var matSet = new Array(new Array(1372010,4000244,4000245,4005001,4005003),new Array(1382035,4000244,4000245,4005001,4005003));
			var matQtySet = new Array(new Array(1,20,25,6,2),new Array(1,20,25,6,2));
			var costSet = new Array(120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 4){ //도적무기 만들기
			var itemSet = new Array(1332049,1332050,1472051);
			var matSet = new Array(new Array(1332051,4000244,4000245,4005000,4005002),new Array(1332052,4000244,4000245,4005002,4005003),new Array(1472053,4000244,4000245,4005002,4005003));
			var matQtySet = new Array(new Array(1,20,25,5,3),new Array(1,20,25,3,5),new Array(1,20,25,2,6));
			var costSet = new Array(120000,120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 5){ //해적무기 만들기
			var itemSet = new Array(1482013,1492013);
			var matSet = new Array(new Array(1482012,4000244,4000245),new Array(1492012,4000244,4000245));
			var matQtySet = new Array(new Array(1,20,25),new Array(1,20,25));
			var costSet = new Array(1000000,1000000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
                }
		else if (selectedType == 6){ //타임리스 무기 만들기(전사)
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
		else if (selectedType == 7){ //타임리스 무기 만들기(해적)
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