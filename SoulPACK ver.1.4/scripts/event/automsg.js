/*
    This file is part of the OdinMS Maple Story Server
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

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 1);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 60 * 50 * 50 * 1; // Every 1 hour.
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
var Message = new Array
("소울서버에 오신것을 환영합니다!",
"소울 서버는 피작이 가능합니다(HP,MP가 찍힙니다.)",
"모든 전직은 헤네시스 코크베어 운영자가 해줍니다.",
"저희서버의 카페주소는 [http://cafe.naver.com/poksoulplus] 입니다.",
"케시충전은 헤네시스의 Yuse 엔피시가 해줍니다. (20만원>>1000케시)",
"케시샵 옆에 TRADE 버튼을 누루면 여러가지 편의기능이 나옵니다",
"케시샵에서 펫저울 아이템은 사지마시기 바랍니다. 케릭터가 초기화됩니다.",
"라이딩 스킬은 헤네시스의 묘묘한테 배울수있습니다",
"라이딩 안장,몬스터는 헤네시스의 운영자 NPC가 판매합니다. 더불어 , 신비 라이딩(케시라이딩)도 판매를 합니다.",
"채팅을 할시 약간씩 느리게 써질텐데 렉이 아니라 말을쓰면 1.4 초후에 다음말이 입력되는거라 렉처럼 느껴지는겁니다.",
"NPC 클릭이 안될시엔 게임을 재접속하지마시고 채널을 옮기시기 바랍니다.",
"길드이름 한글화를 원하시는분은 카페에 '한글길드신청' 게시판을 이용해주세요",
"소환의돌,마법의돌은 운영자 NPC 에게 팝니다",
"파워 엘릭서는 운영자 엔피시가 판매를합니다."
);

    em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(6, "[TIP] " + Message[Math.floor(Math.random() * Message.length)]));
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
    }
}