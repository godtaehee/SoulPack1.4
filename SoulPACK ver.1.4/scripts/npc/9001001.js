/*
 made by gkskehls
 2008.06.07
 	������ �÷��ش�.
 	�� ���ݺ��� +10, +50, +100, +500 ���� �÷��ش�
 2008.06.08
 	������ �����ش�.
 	�� ���ݺ��� -100 �߰�
 	ȭ�鿡 �������� ���� ���� ���ϰ� ����ȭ.
 2008.07.08
  ������ �ѹ��� �� �÷��ְ� �� �����ִ� ����߰�
*/

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

/* Regular Cab
	Warp NPC
	- Henesys edition (100000000)
*/

var status = 0;
var getStatus = 0;
importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		status++;
		if(status == 0) { //1�� �޼��� :  ���� ����
			var stat_msg = "#b";
			stat_msg = stat_msg + "#L11#��+10   #l#L21#����+10  #l#L31#��Ʈ+10  #l#L41#��+10 #l\r\n";
			stat_msg = stat_msg + "#L12#��+50   #l#L22#����+50  #l#L32#��Ʈ+50  #l#L42#��+50 #l\r\n";
			stat_msg = stat_msg + "#L13#��+100  #l#L23#����+100#l#L33#��Ʈ+100#l#L43#��+100#l\r\n";
			stat_msg = stat_msg + "#L15#��-100  #l#L25#����-100 #l#L35#��Ʈ-100 #l#L45#��-100#l\r\n";
			stat_msg = stat_msg + "#L14#��+All   #l#L24#����+All   #l#L34#��Ʈ+All  #l#L44#��+All#l\r\n";
			stat_msg = stat_msg + "#L16#��-All    #l#L26#����-All    #l#L36#��Ʈ-All   #l#L46#��-All#l\r\n";
			stat_msg = stat_msg + "#k";
			cm.sendSimple(stat_msg);
		} else if(status == 1) { //2�� �޼���  
			var statup = new java.util.ArrayList();
			var p = cm.c.getPlayer();
			var set_Str = p.getStr();
			var set_Dex = p.getDex();
			var set_Int = p.getInt();
			var set_Luk = p.getLuk();
			var set_Ap  = p.getRemainingAp();

			if(selection == 11) { //STR+10
				if(p.getRemainingAp() >= 10) {  set_Str = p.getStr()+10;  set_Ap = p.getRemainingAp()-10;  }
			} else if(selection == 12) { //STR+50
				if(p.getRemainingAp() >= 50) {  set_Str = p.getStr()+50;  set_Ap = p.getRemainingAp()-50;  }
			} else if(selection == 13) { //STR+100
				if(p.getRemainingAp() >= 100) { set_Str = p.getStr()+100; set_Ap = p.getRemainingAp()-100; }
			} else if(selection == 21) { //DEX+10
				if(p.getRemainingAp() >= 10) {  set_Dex = p.getDex()+10;  set_Ap = p.getRemainingAp()-10;  }
			} else if(selection == 22) { //DEX+50
				if(p.getRemainingAp() >= 50) {  set_Dex = p.getDex()+50;  set_Ap = p.getRemainingAp()-50;  }
			} else if(selection == 23) { //DEX+100
				if(p.getRemainingAp() >= 100) { set_Dex = p.getDex()+100; set_Ap = p.getRemainingAp()-100; }
			} else if(selection == 31) { //INT+10
				if(p.getRemainingAp() >= 10) {  set_Int = p.getInt()+10;  set_Ap = p.getRemainingAp()-10;  }
			} else if(selection == 32) { //INT+50
				if(p.getRemainingAp() >= 50) {  set_Int = p.getInt()+50;  set_Ap = p.getRemainingAp()-50;  }
			} else if(selection == 33) { //INT+100
				if(p.getRemainingAp() >= 100) { set_Int = p.getInt()+100; set_Ap = p.getRemainingAp()-100; }
			} else if(selection == 41) { //LUK+10
				if(p.getRemainingAp() >= 10) {  set_Luk = p.getLuk()+10;  set_Ap = p.getRemainingAp()-10;  }
			} else if(selection == 42) { //LUK+50
				if(p.getRemainingAp() >= 50) {  set_Luk = p.getLuk()+50;  set_Ap = p.getRemainingAp()-50;  }
			} else if(selection == 43) { //LUK+100
				if(p.getRemainingAp() >= 100) { set_Luk = p.getLuk()+100; set_Ap = p.getRemainingAp()-100; }

			} else if(selection == 14) { //STR+all
				if(p.getRemainingAp() >= 1) { set_Str = p.getStr()+p.getRemainingAp(); set_Ap = p.getRemainingAp()-p.getRemainingAp(); }
			} else if(selection == 24) { //DEX+all
				if(p.getRemainingAp() >= 1) { set_Dex = p.getDex()+p.getRemainingAp(); set_Ap = p.getRemainingAp()-p.getRemainingAp(); }
			} else if(selection == 34) { //INT+all
				if(p.getRemainingAp() >= 1) { set_Int = p.getInt()+p.getRemainingAp(); set_Ap = p.getRemainingAp()-p.getRemainingAp(); }
			} else if(selection == 44) { //LUK+all
				if(p.getRemainingAp() >= 1) { set_Luk = p.getLuk()+p.getRemainingAp(); set_Ap = p.getRemainingAp()-p.getRemainingAp(); }

			} else if(selection == 15) { //STR-100
				if(set_Str >= 104) { set_Str = set_Str-100; set_Ap = p.getRemainingAp()+100; }
			} else if(selection == 25) { //DEX-100
				if(set_Dex >= 104) { set_Dex = set_Dex-100; set_Ap = p.getRemainingAp()+100; }
			} else if(selection == 35) { //INT-100
				if(set_Int >= 104) { set_Int = set_Int-100; set_Ap = p.getRemainingAp()+100; }
			} else if(selection == 45) { //LUK-100
				if(set_Luk >= 104) { set_Luk = set_Luk-100; set_Ap = p.getRemainingAp()+100; }

			} else if(selection == 16) { //STR-all
				if(set_Str > 4) { set_Ap = p.getRemainingAp()+set_Str-4; set_Str = 4; }
			} else if(selection == 26) { //DEX-all
				if(set_Dex > 4) { set_Ap = p.getRemainingAp()+set_Dex-4; set_Dex = 4; }
			} else if(selection == 36) { //INT-all
				if(set_Int > 4) { set_Ap = p.getRemainingAp()+set_Int-4; set_Int = 4; }
			} else if(selection == 46) { //LUK-all
				if(set_Luk > 4) { set_Ap = p.getRemainingAp()+set_Luk-4; set_Luk = 4; }

			}
			p.setStr (set_Str);
			p.setDex (set_Dex);
			p.setInt (set_Int);
			p.setLuk (set_Luk);
			p.setRemainingAp (set_Ap);
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(set_Str)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(set_Dex)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(set_Int)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(set_Luk)));
			statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(set_Ap)));
			p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
			cm.dispose();
		} else if(status == 2) { //3�� �޼��� 
			cm.dispose();
		}
	}
}	