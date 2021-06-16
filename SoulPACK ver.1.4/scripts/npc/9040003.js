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
 * Sharen III's Soul, Sharenian: Sharen III's Grave (990000700)
 * 
 * Guild Quest - end of stage 4
 */

function start() {
	if (cm.getPlayer().getEventInstance().getProperty("leader").equals(cm.getPlayer().getName())) {
                if (cm.getPlayer().getEventInstance().getProperty("stage4clear") != null && cm.getPlayer().getEventInstance().getProperty("stage4clear").equals("true")){
                        cm.sendOk("�� ���� ��� ������ �и��մϴ�. ������ ��κ��� ������ ������ ������ �̸�...");
                }
                else {
                        var prev = cm.getPlayer().getEventInstance().setProperty("stage4clear","true",true);
                        if (prev == null) { 
                                cm.getGuild().gainGP(30);
                                cm.sendOk("���� ����� ��θ� �����մϴ�. �, �׸��� �й踦 �յΰ� �Ǹ��� �ẹ...");
                                cm.getPlayer().getMap().getReactorByName("ghostgate").hitReactor(cm.getC());
                        }
                        else { //�� �׷��� ������ �����ϱ� ����, �׸��� �Ϲ��� �̹� ���� 

                                cm.sendOk("�� ���� ��� ������ �и��մϴ�. ������ ��κ��� ������ ������ ������ �̸�...");
                        }
                }

        }
        else {
                cm.sendOk("���� ����� �ʿ� ������ �����ڰ� ���� ��ȭ�ϰ�, �ƹ��� �ٸ� ����մϴ�.");
        }
        cm.dispose();
}

function action(mode, type, selection) {
}
