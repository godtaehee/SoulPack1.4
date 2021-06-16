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
("�ҿＭ���� ���Ű��� ȯ���մϴ�!",
"�ҿ� ������ ������ �����մϴ�(HP,MP�� �����ϴ�.)",
"��� ������ ��׽ý� ��ũ���� ��ڰ� ���ݴϴ�.",
"���񼭹��� ī���ּҴ� [http://cafe.naver.com/poksoulplus] �Դϴ�.",
"�ɽ������� ��׽ý��� Yuse ���ǽð� ���ݴϴ�. (20����>>1000�ɽ�)",
"�ɽü� ���� TRADE ��ư�� ����� �������� ���Ǳ���� ���ɴϴ�",
"�ɽü����� ������ �������� �������ñ� �ٶ��ϴ�. �ɸ��Ͱ� �ʱ�ȭ�˴ϴ�.",
"���̵� ��ų�� ��׽ý��� �������� �����ֽ��ϴ�",
"���̵� ����,���ʹ� ��׽ý��� ��� NPC�� �Ǹ��մϴ�. ���Ҿ� , �ź� ���̵�(�ɽö��̵�)�� �ǸŸ� �մϴ�.",
"ä���� �ҽ� �ణ�� ������ �����ٵ� ���� �ƴ϶� �������� 1.4 ���Ŀ� �������� �ԷµǴ°Ŷ� ��ó�� �������°̴ϴ�.",
"NPC Ŭ���� �ȵɽÿ� ������ �������������ð� ä���� �ű�ñ� �ٶ��ϴ�.",
"����̸� �ѱ�ȭ�� ���Ͻôº��� ī�信 '�ѱ۱���û' �Խ����� �̿����ּ���",
"��ȯ�ǵ�,�����ǵ��� ��� NPC ���� �˴ϴ�",
"�Ŀ� �������� ��� ���ǽð� �ǸŸ��մϴ�."
);

    em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(6, "[TIP] " + Message[Math.floor(Math.random() * Message.length)]));
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
    }
}