/* 
	Mos
	Leafre
	MADE BY ���� (JANTNIC)
	DO : MAKE DRAGON WEAPON 
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
		var selStr = "�巡�﹫�⸦ ���鷯���˳�������."
		var options = new Array("������������ ����","���繫��","�ü�����","���繫��","��������",
			"���繫��(������)","�ü�����(������)","���繫��(������)","��������(������)");
		for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
			
		cm.sendSimple(selStr);
	}
	else if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType > 4)
		{
			stimulator = true;
			selectedType -= 4;
		}
		else
			stimulator = false;
		if (selectedType == 0) {
			cm.sendNext("�������� �������� ���鶧 ���ø� ���⿡ �ɷ�ġ�� ���ݴ� ����Ҽ��ֽ��ϴ�. �׷��� 10%��Ȯ���� �ı��ȴٴ��� ���������ּ���. �������� ����Ͽ� �������� ����°͵� ���۰��� �ƴϴ� ���ش����������ֽð��. �������� ���Ǹ�� ���Ϳ��� ���� ����մϴ�.")
			cm.dispose();
		}
		else if (selectedType == 1){ //����
			var selStr = "���Ͻô� ���⸦ ����ּ���.";
			var weapon = new Array(1302059,1312031,1322052,1402036,1412026,1422028,1432038,1442045);
			var suffix = new Array (" - Lv. 110 �Ѽհ�"," - Lv. 110 �Ѽյ���"," - Lv. 110 �Ѽյб�"," - Lv. 110 �μհ�"," - Lv. 110 �μվ׽�"," - Lv. 110 �μյб�",
				" - Lv. 110 ���Ǿ�"," - Lv. 110 ����");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "##z" + weapon[i] + "##k" + suffix[i] + "#l#b";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 2){ //�ü�
			var selStr = "���Ͻô� ���⸦ ����ּ���.";
			var weapon = new Array(1452044,1462039);
			var suffix = new Array (" - Lv. 110 Ȱ"," - Lv. 110 ����");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "##z" + weapon[i] + "##k" + suffix[i] + "#l#b";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 3){ //������
			var selStr = "���Ͻô� ���⸦ ����ּ���.";
			var weapon = new Array(1372032,1382036);
			var suffix = new Array (" - Lv. 108 �ϵ�"," - Lv. 110 ������");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "##z" + weapon[i] + "##k" + suffix[i] + "#l#b";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 4){ //����
			var selStr = "���Ͻô� ���⸦ ����ּ���.";
			var weapon = new Array(1332049,1332050,1472051);
			var suffix = new Array (" - Lv. 110 [��]�ܰ�"," - Lv. 110 [��]�ܰ�"," - Lv. 110 �ƴ�");
			for (var i = 0; i < weapon.length; i++){
				selStr += "\r\n#L" + i + "##z" + weapon[i] + "##k" + suffix[i] + "#l#b";
			}
			cm.sendSimple(selStr);
		}
	}
	else if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (selectedType == 1){ //����
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
		else if (selectedType == 2){ //�ü�
			var itemSet = new Array(1452044,1462039);
			var matSet = new Array(new Array(1452019,4000244,4000245,4005000,4005002),new Array(1462015,4000244,4000245,4005000,4005002));
			var matQtySet = new Array(new Array(1,20,25,3,5),new Array(1,20,25,5,3));
			var costSet = new Array(120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 3){ //������
			var itemSet = new Array(1372032,1382036);
			var matSet = new Array(new Array(1372010,4000244,4000245,4005001,4005003),new Array(1382035,4000244,4000245,4005001,4005003));
			var matQtySet = new Array(new Array(1,20,25,6,2),new Array(1,20,25,6,2));
			var costSet = new Array(120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 4){ //����
			var itemSet = new Array(1332049,1332050,1472051);
			var matSet = new Array(new Array(1332051,4000244,4000245,4005000,4005002),new Array(1332052,4000244,4000245,4005002,4005003),new Array(1472053,4000244,4000245,4005002,4005003));
			var matQtySet = new Array(new Array(1,20,25,5,3),new Array(1,20,25,3,5),new Array(1,20,25,2,6));
			var costSet = new Array(120000,120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = " ����� #t" + item + "# �������� ���������Ű���? �������� ������� ��ᰡ�ʿ��մϴ�. ��Ḧ ��ƿ��ּ���.";
		
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
				cm.sendOk("�˼�������, ������â�� ����������������� ����ѵ����������� Ȯ���� ��Ź�帳�ϴ�.")
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
			
			if (stimulator){ //check for stimulator
				if (!cm.haveItem(stimID))
				{
					complete = false;
				}
			}
			
			if (!complete) 
				cm.sendOk("�˼�������, ������â�� ����������������� �������ᰡ�������� Ȯ���� ��Ź�帳�ϴ�.");
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
					if (stimulator){ //check for stimulator
						cm.gainItem(stimID, -1);
						var deleted = Math.floor(Math.random() * 10);
						if (deleted != 0)
						{
							var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
							var newItem = ii.randomizeStats(ii.getEquipById(item));
							net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), newItem, "Created " + item  + " at Mos (2080000, map 240000000) using a stimulator");
							cm.sendOk("�������� �ϼ��Ͽ����ϴ�.");
						}
						else
						{
							cm.sendOk("�˼�������, �������� ����ϼ����� �����Ͽ� �������� �������ǽ��ϴ�.");
						}
					}
					else //just give basic item
					{
						cm.gainItem(item, 1);
						cm.sendOk("�������� �ϼ��Ͽ����ϴ�.");
					}
				}
				else {
					cm.sendOk("�˼�������, �κ��丮�����ð� ���â�� ������������ �������ΰ��ִ��� Ȯ���� ��Ź�帳�ϴ�.");
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
