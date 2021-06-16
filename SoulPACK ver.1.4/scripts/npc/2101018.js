/*

	Aesir Team
	제작 : 리프
	수정 : 지레프 <rlaehdwns4@naver.com>

*/

importPackage(net.sf.odinms.client);

var status = 0;
var selectedType = -1;
var selectedType2 = -1;
var selectedType3 = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
	} else {
		status++;
		if (status == 0) {
			var selStr = "무얼 하겠나? 만약 투기장을 해본적이 없다면 꼭 설명을 듣고 하는게 좋지.#b";
			var options = new Array("투기장 필드로 이동한다.", "투기장에 대한 설명을 듣는다.", "메이플 코인을 교환한다.");
			for (var i = 0; i < options.length; i++) {
				selStr += "\r\n#L" + i + "#" + options[i] + "#l";
			}
			cm.sendSimple(selStr);
		} else if (status == 1) {
			selectedType = selection;
			if (selectedType == 0) {
				cm.warp(980010000, 3);
				cm.SavedLocationCarnival();
				cm.dispose();
			} else if (selectedType == 1) {
				var selStr = "무얼 하겠나?#b";
				var options = new Array("투기장이란?", "기본 게임 방법", "세부 게임 방법", "아무것도 하지 않는다.");
				for (var i = 0; i < options.length; i++) {
					selStr += "\r\n#L" + i + "#" + options[i] + "#l";
				}
				cm.sendSimple(selStr);
			} else if (selectedType == 2) {
				var selStr = "교환하고 싶은 아이템을 선택하게나.#b";
				var options = new Array("슈피겔만의 목걸이(코인 50개)", "슈피겔만의 구슬(코인 40개)", "전사용 무기", "마법사용 무기", "궁수용 무기", "도적용 무기", "해적용 무기");
				for (var i = 0; i < options.length; i++) {
					selStr += "\r\n#L" + i + "#" + options[i] + "#l";
				}
				cm.sendSimple(selStr);
			}
		} else if (status == 2) {
			selectedType2 = selection;
			if (selectedType == 1) {
				if (selectedType2 == 0) {
					cm.sendNext("크크크.. 나는 투기장 용병인 세자르 라내. 이번에 제 1회 #b투기장#k을 개최하여 자네같은 모험가들을 모시고 있지.");
				} else if (selectedType2 == 1) {
					cm.sendNext("#b투기장#k은 몬스터를 소환해서 마음껏 사냥할수 있는 시스템이지~");
				} else if (selectedType2 == 2) {
					cm.sendNext("투기장에 입장하면, 아주멋진 NPC? 가 있을꺼야 그분을 눌러서 투기장필드에 입장하고, 몬스터를 소환해서 사냥하면된다네, 레벨별로 다양한 몬스터들이 많기때문에 사냥터를 옮겨다닐 필요도없지, 그리고 투기장과는 달리 물약을 마음껏 쓸수있다구!");
				} else if (selectedType2 == 3) {
					cm.dispose();
				}
			} else if (selectedType == 2) {
				if (selectedType2 == 0) {
					if (cm.haveItem(4001129, 50)) {
						cm.gainItem(4001129, -50);
						cm.gainItem(1122007, 1);
						cm.dispose();
					} else {
						cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
						cm.dispose();
					}
				} else if (selectedType2 == 1) {
					if (cm.haveItem(4001129, 40)) {
						cm.gainItem(4001129, -40);
						cm.gainItem(2041211, 1);
						cm.dispose();
					} else {
						cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
						cm.dispose();
					}
				} else if (selectedType2 == 2) {
					var selStr = "교환하고 싶은 무기를 선택해보라구. 내가 주는 무기는 기본보다 좋은 경우가 많지.#b";
					var weaponNames = new Array("커틀러스", "하이랜더", "트라우스", "쟈드", "쥬얼 쿠아다라", "호검", "당커", "니암", "블루 카운터", "버드빌", "벅", "라이징", "호크맨즈", "빅해머", "젝커", "타이탄", "너클메이스", "골든 모울", "나카마키", "도끼 폴암", "제코", "크레센트", "구룡도", "장팔사모");
					var coin = new Array(7, 7, 10, 10, 20, 20, 7, 7, 10, 10, 20, 20, 7, 7, 10, 10, 20, 20, 7, 7, 10, 10, 20, 20);
					for (var i = 0; i < weaponNames.length; i++) {
						selStr += "\r\n#L" + i + "#" + weaponNames[i] + "(코인 " + coin[i] + "개)#l"
					}
					cm.sendSimple(selStr);
				} else if (selectedType2 == 3) {
					var selStr = "교환하고 싶은 무기를 선택해보라구. 내가 주는 무기는 기본보다 좋은 경우가 많지.#b";
					var weaponNames = new Array("위저드 완드", "페탈 스태프", "크리스탈 완드", "홀 스태프", "아크 스태프", "크로미");
					var coin = new Array(7, 7, 10, 10, 20, 20);
					for (var i = 0; i < weaponNames.length; i++) {
						selStr += "\r\n#L" + i + "#" + weaponNames[i] + "(코인 " + coin[i] + "개)#l"
					}
					cm.sendSimple(selStr);
				} else if (selectedType2 == 4) {
					var selStr = "교환하고 싶은 무기를 선택해보라구. 내가 주는 무기는 기본보다 좋은 경우가 많지.#b";
					var weaponNames = new Array("레드 바이퍼", "발터2000", "올림푸스", "헤클러", "실버 크로우", "로우어");
					var coin = new Array(7, 10, 20, 7, 10, 20);
					for (var i = 0; i < weaponNames.length; i++) {
						selStr += "\r\n#L" + i + "#" + weaponNames[i] + "(코인 " + coin[i] + "개)#l"
					}
					cm.sendSimple(selStr);
				} else if (selectedType2 == 5) {
					var selStr = "교환하고 싶은 무기를 선택해보라구. 내가 주는 무기는 기본보다 좋은 경우가 많지.#b";
					var weaponNames = new Array("다크 가디언", "다크 보닌", "다크 슬레인", "게파트", "드래곤 토네일", "베즐러드", "차", "신기타");
					var coin = new Array(7, 10, 20, 7, 10, 10, 20, 20);
					for (var i = 0; i < weaponNames.length; i++) {
						selStr += "\r\n#L" + i + "#" + weaponNames[i] + "(코인 " + coin[i] + "개)#l"
					}
					cm.sendSimple(selStr);
				} else if (selectedType2 == 6) {
					var selStr = "교환하고 싶은 무기를 선택해보라구. 내가 주는 무기는 기본보다 좋은 경우가 많지.#b";
					var weaponNames = new Array("실버 메이든", "네오자드", "데빌클로", "슈팅 스타", "루나 슈터", "라스펠트건");
					var coin = new Array(7, 10, 20, 7, 10, 20);
					for (var i = 0; i < weaponNames.length; i++) {
						selStr += "\r\n#L" + i + "#" + weaponNames[i] + "(코인 " + coin[i] + "개)#l"
					}
					cm.sendSimple(selStr);
				}
			}
		} else if (status == 3) {
			selectedType3 = selection;
			if (selectedType == 1) {
				if (selectedType2 == 0) {
					cm.sendNextPrev("#b투기장#k이 뭐냐고? 크크크... 지금 자네가 생각하는 것보다 훨신 대단한 것이라고 말해두지. 바로 #b모든 몬스터들과의 대결#k이니까 말이야!");
				} else if (selectedType2 == 1) {
					cm.sendNextPrev("투기장 필드에 입장하면 #b아주멋진NPC?#k인 분을 눌러서 투기장 필드에 입장해서, 몬스터를 소환해서 다양한 레벨별 몬스터를 사냥할수있지!");
				} else if (selectedType2 == 2) {
					cm.sendNextPrev("하지만, 투기장필드에 입장하면 물약(포션)을 쓸수있다내");
				}
			} else if (selectedType == 2) { 
				if (selectedType2 == 2) {
					if (selectedType3 == 0) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1302004, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 1) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1402006, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 2) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1302009, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 3) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1402007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 4) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1302051, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 5) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1402003, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 6) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1312006, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 7) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1412004, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 8) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1312007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 9) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1412005, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 10) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1312022, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 11) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1412003, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 12) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1322015, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 13) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1422008, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 14) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1322016, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 15) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1322007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 16) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1322041, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 17) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1322005, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 18) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1432003, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 19) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1442003, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 20) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1432005, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 21) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1442009, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 22) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1442031, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 23) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1432032, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					}
				} else if (selectedType2 == 3) {
					if (selectedType3 == 0) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1372022, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 1) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1382018, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 2) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1372012, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 3) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1382019, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 4) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1382020, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 5) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1372023, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					}
				} else if (selectedType2 == 4) {
					if (selectedType3 == 0) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1452006, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 1) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1452007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 2) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1452008, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 3) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1462005, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 4) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1462006, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 5) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1462007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					}
				} else if (selectedType2 == 5) {
					if (selectedType3 == 0) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1472013, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 1) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1472017, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 2) {
					if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1472021, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 3) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1332014, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 4) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1332031, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 5) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1332011, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 6) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1332016, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 7) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1332034, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					}
				} else if (selectedType2 == 6) {
					if (selectedType3 == 0) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1482005, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 1) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1482006, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 2) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1482007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 3) {
						if (cm.haveItem(4001129, 7)) {
							cm.gainItem(4001129, -7);
							cm.gainItem(1492005, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
							}
					} else if (selectedType3 == 4) {
						if (cm.haveItem(4001129, 10)) {
							cm.gainItem(4001129, -10);
							cm.gainItem(1492006, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					} else if (selectedType3 == 5) {
						if (cm.haveItem(4001129, 20)) {
							cm.gainItem(4001129, -20);
							cm.gainItem(1492007, 1);
							cm.dispose();
						} else {
							cm.sendNext("#b메이플 코인#k이 부족하거나, 장비창에 빈 칸이 없는건 아닌가?");
							cm.dispose();
						}
					}
				}
			}
		} else if (status == 5) {
			if (selectedType == 1) {
				if (selectedType2 == 0) {
					cm.sendNextPrev("원래 이곳에는 몬스터가 많이 나오는데\r\n코인을 주는 몬스터\r\n 는 따로 지정되 있으니 참고하시게.");
				} else if (selectedType2 == 1) {
					cm.sendNextPrev("몬스터를 소환하는방법은 먼저 슈피겔만님께 말을 건다음\r\n원하는 몬스터를 소환하면된다네.");
				} else if (selectedType2 == 2) {
					cm.sendNextPrev("아참! 너무많이 몬스터를 소환하면 렉을 유발하고 팅기니까 조심하길..");
				}
			}
		} else if (status == 6) {
			if (selectedType == 1) {
				if (selectedType2 == 0) {
					cm.sendNextPrev("이곳에서는 도적,궁수같은 다수공격이 별로없는 직업은 좋지않아\r\n전사,마법사 같은 다수공격 직업이 유리하지");
					cm.dispose();
				} else if (selectedType2 == 1) {
					cm.sendNextPrev("그리고 나갈땐 #r MOM and DAD(코디)NPC #k를 누르면 된다네");
				} else if (selectedType2 == 2) {
					cm.sendNextPrev("알겟지?");
				}
			}
		} else if (status == 7) {
			if (selectedType == 1) {
				if (selectedType2 == 1) {
					cm.sendNextPrev("이곳에선 죽어도 경험치가 깍이지않는다네.");
					cm.dispose();
				} else if (selectedType2 == 2) {
					cm.sendNextPrev("알겟나?");
				}
			}
		} else if (status == 8) {
			if (selectedType == 1) {
				if (selectedType2 == 2) {
					cm.sendNextPrev("이곳 몬스터도 드랍템을 떨구니 참고해줘. 그럼 즐거운 시간되길~ by. T.K pack3.0 version");
					cm.dispose();
				}
			}
		}
	}
}