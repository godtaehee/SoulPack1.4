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
                        var prompt = "\r\n#b#L0# �����Ͼ���  �����ΰ���#l\r\n#b#L1# #t4001024#�����������ΰ���#l\r\n#b#L2#��� �������� �����ΰ���?#l\r\n#b#L3#���� �׷��� �� ���ɾ����ϴ�#l";
                        if (selectedOption == -1) {
                                prompt = "�츮�� �뵿������ ������ ��ȣ���� �ص��Ϸ����ߴ�'���޶����º�,'�� ������ ����������, �ð��� ��������ϴ�. �װ��, �츮�� �ߴµ� sharenian, ������ �ź� ����, ���� �ڰ��ִ� �ִ°��Դϴ�. ���� �ܼ��� ã�Ҵµ�#t4001024#��������, ��ȭ ����, sharenian�� ������ ���⿡ �־����ϴ� �̰��� �� ��� ����Ʈ�� ������ �ñ������� ���� ���� ã�� �����ϴ�#t4001024#." + prompt;
                        } else {
                                prompt = "Ȥ������ �����ϱ�?" + prompt;
                        }
                        cm.sendSimple(prompt);
                } 
                else if (status == 1) {
                        selectedOption = selection;
                        if (selectedOption == 0) {
                                cm.sendNext("sharenian�� ������ ������ �ٷ糪 �� ��� ������ ������ ���� ���丮�� ���Դϴ�. ������ ��, �Ż��� ���� ���� ������ �Ϻ� �� ��Ÿ �� ���� ���� �Ǽ��� ��� �ƹ��� �𸥴� �װ��� ������ sharenian �ð� ���� ��������ϴ�");
                        }
                        else if (selectedOption == 1) {
                                cm.sendNext("#t4001024# �� �������� ���� ������ �� ������ ������ ���� �� ����� �ٷ� �װ�. ���� ���̰Ե�, ��� ������Ͻ� �� ������ �ᱹ��t4001024#downtrodden�� ������ sharenian ������ �����߽��ϴ�");
                                status = -1;
                        }
                        else if (selectedOption == 2) {
                                cm.sendNext("���� Ž�谡�� ���� �׷��� sharenian ����,������ �ƹ��� �׵��� ��� ���ƿ԰�, �츮���� � �޽��� ��� ����Ʈ�� �����մϴ�. �츮�� ��ٸ��� ������ ������ ���� ������ ��� ������Ʈ�ϰ�, ���� �Ȱ����ϴ�");
                        }
                        else if (selectedOption == 3) {
                                cm.sendOk("������? ��쿡�� �ƹ��͵� �ٸ� ������� ���� ��� �������� ���񿡰� ���մϴ�.);
                                cm.dispose();
                        }
                        else {
                                cm.dispose();
                        }
                }
                else if (status == 2) { //should only be available for options 0 and 2
                        if (selectedOption == 0) {
                                cm.sendNextPrev("��� �̸��� ������ ŷ ���� sharen 3 sharenian�� �Ż�, �׸��� �и����� ����� ���� �����ϰ� �ڻ��� ���մϴ�. �׷��� �����, ��ü �ձ��� �ر�, �׸��� ������ ���� ������ ������.);
                        }
                        else if (selectedOption == 2) {
                                cm.sendNextPrev("�ñ����� ��ǥ�� �̰��� Ž�� ��� ����Ʈ sharenian�� ã��#t4001024#�̰��� ��� �۾��� ��� ������ �ذ��մϴ�. ������ ���⿡ �� �߿��մϴ�.");
                        }
                        else {
                                cm.dispose();
                        }
                }
        }
}
