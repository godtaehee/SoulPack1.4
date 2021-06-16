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
 * Bulletin Board, Victoria Road: Excavation Site<Camp> (101030104) AND Sharenian: Excavation Site (990000000)
 * 
 * Start of Guild Quest
 */

function start() {
	cm.sendOk("<길드 대항전 공지사항> \r\n 당신의 한 부분 길드를 발명하고 충분한 양의 용기와 신뢰? 그렇다면 너희 자신의 길드 퀘스트와 도전!\r\n\r\n#bTo Participate :#k\r\n1.  6명 이상의 길드가 구성되어야합니다!\r\n2. 중간에 파티나 길드가 헤체되면 자동으로 캠프로 돌아옴니다!\r\n3. 길드 퀘스트는 협동심하에 이루어집니다. 한유저라도 이탈하면 다음 퀘스트를 진행할수없습니다.");
        cm.dispose();
}

function action(mode, type, selection) {
        
}
