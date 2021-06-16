/* 
 * This file is part of the OdinMS Maple Story Server
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
 * @Author Lerk
 * 
 * Shawn, Victoria Road: Excavation Site<Camp> (101030104)
 * 
 * Guild Quest Info
 */

var status;
var selectedOption;

function start() {
        selectedOption = -1;
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
        if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
                if (mode == 1 && status == 3) {
                        status = 0;
                }
		if (status == 0) {
                        var prompt = "\r\n#b#L0# 샤레니안은  무엇인가여#l\r\n#b#L1# #t4001024#루비안은무엇인가요#l\r\n#b#L2#길드 대항전이 무엇인가여?#l\r\n#b#L3#저는 그런거 에 관심없습니다#l";
                        if (selectedOption == -1) {
                                prompt = "우리는 노동조합의 조합이 암호문을 해독하려고했던'에메랄드태블릿,'어 소중히 오래된유적, 시간이 오래됬습니다. 그결과, 우리는 했는데 sharenian, 나라의 신비 과거, 누워 자고있는 있는겄입니다. 또한 단서를 찾았는데#t4001024#전설적인, 신화 보석, sharenian의 유골이 여기에 있었습니다 이것은 왜 길드 퀘스트를 열었을 궁극적으로 조합 연맹 찾기 엿습니다#t4001024#." + prompt;
                        } else {
                                prompt = "혹시질문 없습니까?" + prompt;
                        }
                        cm.sendSimple(prompt);
                } 
                else if (status == 1) {
                        selectedOption = selection;
                        if (selectedOption == 0) {
                                cm.sendNext("sharenian는 과거의 문명을 다루나 그 모든 영역을 제어할 수는 빅토리아 섬입니다. 신전에 골렘, 신사의 깊은 지하 감옥의 일부 및 기타 옛 건축 공사 건설을 어디에 아무도 모른다 그것은 실제로 sharenian 시간 동안 만들었습니다");
                        }
                        else if (selectedOption == 1) {
                                cm.sendNext("#t4001024# 는 전설적인 보석 데려다 줄 영원한 젊음을 보유 한 사람이 바로 그것. 역설 적이게도, 모든 사람을하신 것 같은데 결국은t4001024#downtrodden그 정도의 sharenian 몰락을 설명했습니다");
                                status = -1;
                        }
                        else if (selectedOption == 2) {
                                cm.sendNext("나는 탐험가을 보낸 그룹의 sharenian 전에,하지만 아무도 그들을 계속 돌아왔고, 우리에게 어떤 메시지 길드 퀘스트를 시작합니다. 우리가 기다리던 조합이 강하지 힘든 도전을 계속 업데이트하고, 조합 똑같습니다");
                        }
                        else if (selectedOption == 3) {
                                cm.sendOk("정말로? 경우에는 아무것도 다른 사람에게 물어 경우 언제든지 저희에게 말합니다.);
                                cm.dispose();
                        }
                        else {
                                cm.dispose();
                        }
                }
                else if (status == 2) { //should only be available for options 0 and 2
                        if (selectedOption == 0) {
                                cm.sendNextPrev("라는 이름의 마지막 킹 오브 sharen 3 sharenian는 신사, 그리고 분명히저 사람은 아주 현명하고 자상한 왕합니다. 그러던 어느날, 전체 왕국이 붕괴, 그리고 설명을 위해 만든이 없었다.);
                        }
                        else if (selectedOption == 2) {
                                cm.sendNextPrev("궁극적인 목표는 이것을 탐구 길드 퀘스트 sharenian을 찾을#t4001024#이것은 모든 작업을 어디에 전력을 해결합니다. 팀웍은 여기에 더 중요합니다.");
                        }
                        else {
                                cm.dispose();
                        }
                }
        }
}
