/*
제작자 : 민 하율(hayul_socool)
본 파일은 무단수정, 무단배포를 금합니다.
주 활동카페 : 서든어택㈜pp
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
		var selStr = "무슨퀘스트를 하시겠습니까?\r\n\r\n#r빨강색#k 초급퀘스트\r\n#b파랑색#k 중급퀘스트\r\n#d보라색#k 고급퀘스트"
		var options = new Array("#r[SQ]#k 초급퀘스트 (1)","#r[SQ]#k 초급퀘스트 (2)","#b[MQ]#k 중급퀘스트 (1)","#b[MQ]#k 중급퀘스트 (2)","#d[HQ]#k 고급퀘스트 #e#dLast#k#n");
		for (var i = 0; i < options.length; i++) {
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}
			
		cm.sendSimple(selStr);
	}
	else if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType == 0) { //초급퀘스트 1
			var selStr = "#r[SQ]#k 초급퀘스트 (1)\r\n\r\n보상아이탬 : #r첫번째 열쇠#k\r\n밑에 퀘스트 목록에서 퀘스트를 골라주세요.#b";
			var items = new Array(4001087, 4001087, 4001087);
			var suffix = new Array (" - 적응훈련"," - 개미굴 탐험(1)"," - 맷돼지 사냥");
			equip = true;
			for (var i = 0; i < items.length; i++) {
				selStr += "\r\n#L" + i + "##z" + items[i] + "##k" + suffix[i] + "#l#b";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 1) { //초급퀘스트 2
			var selStr = "#r[SQ]#k 초급퀘스트 (2)\r\n\r\n보상아이탬 : #r첫번째 열쇠#k\r\n밑에 퀘스트 목록에서 퀘스트를 골라주세요.#b";
			var items = new Array(4001087, 4001087, 4001087);
			var suffix = new Array (" - 지하철 탐험"," - 장작 모으기"," - 개미굴 탐험(2)");
			equip = true;
			for (var i = 0; i < items.length; i++) {
				selStr += "\r\n#L" + i + "##z" + items[i] + "##k" + suffix[i] + "#l#b";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 2) { //중급퀘스트 1
			var selStr = "#b[MQ]#k 중급퀘스트 (1)\r\n\r\n보상아이탬 : #r두번째 열쇠#k\r\n밑에 퀘스트 목록에서 퀘스트를 골라주세요.#b";
			var items = new Array(4001088,4001088,4001088,4001088);
			var suffix = new Array (" - 오르비스"," - 바다탐험"," - 동계훈련(1)"," - 동계훈련(2)");
			equip = true;
			for (var i = 0; i < items.length; i++) {
				selStr += "\r\n#L" + i + "##z" + items[i] + "##k" + suffix[i] + "#l#b";
			}
			cm.sendSimple(selStr);
		}
		else if (selectedType == 3) { //중급퀘스트 2
			var selStr = "#b[MQ]#k 중급퀘스트 (2)\r\n\r\n보상아이탬 : #r두번째 열쇠#k\r\n밑에 퀘스트 목록에서 퀘스트를 골라주세요.#b";
			var items = new Array (4001088,4001088,4001088,4001088);
			var suffix = new Array (" - 루디브리엄"," - 루디브리엄(2)"," - 동계훈련(3)"," - 게미굴 탐험(3)");
			for (var i = 0; i < items.length; i++) {
				selStr += "\r\n#L" + i + "##z" + items[i] + "##k" + suffix[i] + "#l#b";
			}
			equip = true;
			cm.sendSimple(selStr);
		}

		else if (selectedType == 4) { //고급퀘스트 1
			var selStr = "#d[HQ]#k 고급퀘스트 #d#eLast#k#n\r\n\r\n보상아이탬 : #r세번째 열쇠#k\r\n밑에 퀘스트 목록에서 퀘스트를 골라주세요.#b";
			var arrows = new Array ("리프레(1)","리프레(2)","리프레(3)","리프레(4)","리프레(5)","리프레(6)");
			for (var i = 0; i < arrows.length; i++) {
				selStr += "\r\n#L" + i + "# " + arrows[i] + "#l";
			}
			equip = true;
			cm.sendSimple(selStr);
		}
		if (equip)
			status++;
	}
	else if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (selectedType == 4) { //material refine
			var itemSet = new Array (4003001,4003001,4003000);
			var matSet = new Array(4000003,4000018,new Array (4011000,4011001));
			var matQtySet = new Array (10,5,new Array (1,1));
			var costSet = new Array (0,0,0)
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "하율이는 졸립니다.";
		
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

		if (selectedType == 0) { //초급 퀘스트 (1)
			var itemSet = new Array(4001087,4001087,4001087);
			var matSet = new Array(new Array(4000000,4000016),new Array(4000034 ,4000006),new Array(4000020, 4000024));
			var matQtySet = new Array(new Array(30,30),new Array(30,30),new Array(30,30));
			var costSet = new Array();
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 1) { //초급 퀘스트 (2)
			var itemSet = new Array(4001087,4001087,4001087,4001087);
			var matSet = new Array(new Array(4000037,4000042),new Array(4000003,4000005,4000018),new Array(4000012,4000015,4000008));
			var matQtySet = new Array(new Array(30,30),new Array(20,30,30),new Array(20,30,30));
			var costSet = new Array ();
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 2) { //중급 퀘스트 (1)
			var itemSet = new Array(4001088,4001088,4001088,4001088);
			var matSet = new Array(new Array(4000142,4000063),new Array(4000154,4000157,4000156),new Array(4000086,4000087,4000088),new Array(4000048,4000050,4000049));
			var matQtySet = new Array(new Array(30,30),new Array(30,15,30),new Array(30,30,30),new Array(30,30,30));
			var costSet = new Array();
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 3) { //중급 퀘스트 (2)
			var itemSet = new Array(4001088,4001088,4001088,4001088);
			var matSet = new Array(new Array(4000111,4000112),new Array(4000113,4000114),new Array(4000057,4000056),new Array(4000025, 4000177 ));
			var matQtySet = new Array (new Array(30,30),new Array(30,30),new Array(50,50),new Array(100,100));
			var costSet = new Array ();
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 4) { //고급 퀘스트 Last
			var itemSet = new Array(4001089,4001089,4001089,4001089,4001089,4001089);
			var matSet = new Array(new Array (4000237,4000236),new Array (4000274,4000273),new Array (4000268,4000269,4000270),new Array (4000262,4000263,4000267),
				new Array (4000266,4000264,4000265 ),new Array (4000271,4000272,4000274));
			var matQtySet = new Array (new Array (100,100),new Array (100,100),new Array (50,50,50),new Array (50,50,50),new Array (50,50,50),new Array (50,50,50));
			var costSet = new Array ()
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "";
		if (qty == 1)
			prompt += "";
		else
			prompt += qty + " #t" + item + "#?";
			
		prompt += "밑에 재료를 모아오세요.\r\n#b";
		
		if (mats instanceof Array) {
			for(var i = 0; i < mats.length; i++) {
				prompt += "\r\n#i"+mats[i]+"# " + matQty[i] * qty + " #t" + mats[i] + "#";
			}
		}
		else {
			prompt += "\r\n#i"+mats+"# " + matQty * qty + " #t" + mats + "#";
		}
		
		if (cost > 0)
			prompt += "";
		
		cm.sendYesNo(prompt);
	}
	else if (status == 4 && mode == 1) {
		var complete = true;		
		if (cm.getMeso() < cost * qty)
			{
				cm.sendOk("Sorry, but this is how I make my living. No meso, no item.")
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
				cm.sendOk("재료를 다 못모으신거같네요.");
			else {
				if (cm.canHold(item)) {
					if (mats instanceof Array) {
						for (var i = 0; i < mats.length; i++) {
							cm.gainItem(mats[i], -matQty[i] * qty);
						}
					}
					else
						cm.gainItem(mats, -matQty * qty);
						
					if (cost > 0)
						cm.gainMeso(-cost * qty);
					
					if (item >= 2060000 && item <= 2060002) //bow arrows
						cm.gainItem(item, 1000 - (item - 2060000) * 100);
					else if (item >= 2061000 && item <= 2061002) //xbow arrows
						cm.gainItem(item, 1000 - (item - 2061000) * 100);
					else if (item == 4003000)//screws
						cm.gainItem(4003000, 15 * qty);
					else
						cm.gainItem(item, qty);
					cm.sendOk("퀘스트가 완료되었습니다.\r\n#rcoco #rNPC#k한테 말을걸어보세요.");
				}
				else {
					cm.sendOk("#b#h ##k님, 인벤토리가 꽉찼는지 확인해주시길바랍니다.");
				}
			}
		cm.dispose();
	}
}