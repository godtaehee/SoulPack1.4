package net.sf.odinms.client;

import net.sf.odinms.database.*;
import net.sf.odinms.server.*;
import net.sf.odinms.tools.*;

import java.sql.*;
import java.util.*;

public class Auction {        
        public static String ItemInfo(int shopid) { // 물품 옵션을 읽어낸다.
                StringBuilder str = new StringBuilder();
                Connection con = DatabaseConnection.getConnection();
                try {
                        PreparedStatement ps = con.prepareStatement("SELECT * FROM auction WHERE shopid = ?"); // 어느 경매인지 선택한다
                        ps.setInt(1, shopid);
                        ResultSet rs = ps.executeQuery();
                        while (rs.next()) {
                                /* 아이템 옵션 시작 */
                                str.append("#i"+rs.getInt("item")+"# 의 옵션\r\n\r\n");
                                if (rs.getInt("str")     != 0) {str.append("#b레벨#k : "+rs.getInt("level")+" 등급\r\n");}
                                if (rs.getInt("str")     != 0) {str.append("#b힘#k : +"+rs.getInt("str")+"     \r\n");}
                                if (rs.getInt("dex")     != 0) {str.append("#b덱스#k : +"+rs.getInt("dex")+"     \r\n");}
                                if (rs.getInt("int")     != 0) {str.append("#b인트#k : +"+rs.getInt("int")+"     \r\n");}
                                if (rs.getInt("luk")     != 0) {str.append("#b럭#k : +"+rs.getInt("luk")+"     \r\n");}
                                if (rs.getInt("watk")    != 0) {str.append("#b물리 공격력#k : +"+rs.getInt("watk")+"\r\n");}
                                if (rs.getInt("wdef")    != 0) {str.append("#b물리 방어력#k : +"+rs.getInt("wdef")+"\r\n");}
                                if (rs.getInt("matk")    != 0) {str.append("#b마법 공격력#k : +"+rs.getInt("matk")+"\r\n");}
                                if (rs.getInt("mdef")    != 0) {str.append("#b마법 방어력#k : +"+rs.getInt("mdef")+"\r\n");}
                                if (rs.getInt("hp")      != 0) {str.append("#b체력#k : +"+rs.getInt("hp")+"     \r\n");}
                                if (rs.getInt("mp")      != 0) {str.append("#b마력#k : +"+rs.getInt("mp")+"     \r\n");}
                                if (rs.getInt("speed")   != 0) {str.append("#b이동속도#k : +"+rs.getInt("speed")+"  \r\n");}
                                if (rs.getInt("jump")    != 0) {str.append("#b점프력#k : +"+rs.getInt("jump")+"   \r\n");}
                                if (rs.getInt("acc")     != 0) {str.append("#b회피율#k : +"+rs.getInt("acc")+"  \r\n");}
                                if (rs.getInt("avoid")   != 0) {str.append("#b명중률#k : +"+rs.getInt("avoid")+"\r\n");}
                                /* 아이템 옵션 끝 */
                                /* 아이템 기타 시작 */
                                str.append("\r\n#i"+rs.getInt("item")+"# 의 기타정보\r\n\r\n");
                                str.append("#b남은 제련수#k : "+rs.getInt("slot")+"\r\n\r\n");
                                str.append("#b가격#k : "+rs.getInt("price")+"원\r\n");
                                /* 아이템 기타 끝 */
                                str.append("#L"+shopid+"##b구매하기#k");
                        }
                        rs.close();
                        ps.close();
                } catch (Exception e) {
                        
                }
                return str.toString();
        }
        
        public static String ItemList() { // 옥션 목록을 읽어낸다.
                StringBuilder str = new StringBuilder();
                Connection con = DatabaseConnection.getConnection();
                try {
                        PreparedStatement ps = con.prepareStatement("SELECT * FROM auction WHERE trade = 0 ORDER BY shopid DESC"); // 거래완료가 되지않았것만 뽑아온다
                        ResultSet rs = ps.executeQuery();
                        while (rs.next()) {
                                for (int i = 0; i < rs.toString().length(); i++) { // 목록을 뽑아온다
                                        if (i == 1) { // 물품 1 개당 1 개씩만 가져온다
                                                /* 물품의 간략정보 시작*/
                                                str.append("#L"+rs.getInt("shopid")+"#" +
                                                           "#b판매자#k : "+rs.getString("name")+" #b/#k " +
                                                           ""+rs.getInt("price")+"원 #b/#k " +
                                                           "#b분류#k : "+ItemTypeName(rs.getInt("item"))+"#l\r\n");
                                                /* 물품의 간략정보 끝*/
                                        }
                                }
                        }
                        rs.close();
                        ps.close();
                } catch (Exception e) {
                        
                }
                return str.toString();
        }
      
        public static void ItemSale(int shopid, MapleCharacter chr, int npc, MapleClient c) { // 물품을 판매한다
                MapleInventory equip = chr.getInventory(MapleInventoryType.EQUIP);
                Connection con = DatabaseConnection.getConnection();
                try {
                        PreparedStatement ps;
                        ResultSet rs;
                        
                        ps = con.prepareStatement("SELECT * FROM auction WHERE shopid = ?");
                        ps.setInt(1, shopid);
                        rs = ps.executeQuery();
                        while (rs.next()) {
                                Equip Item = new Equip(rs.getInt("item"), (byte) equip.getNextFreeSlot());
                                Item.setUpgradeSlots((byte) rs.getInt("slot"));
                                Item.setLevel((byte) rs.getInt("level"));
                                Item.setStr((short) rs.getInt("str"));
                                Item.setDex((short) rs.getInt("dex"));
                                Item.setInt((short) rs.getInt("int"));
                                Item.setLuk((short) rs.getInt("luk"));
                                Item.setHp((short) rs.getInt("hp"));
                                Item.setMp((short) rs.getInt("mp"));
                                Item.setWatk((short) rs.getInt("watk"));
                                Item.setMatk((short) rs.getInt("matk"));
                                Item.setWdef((short) rs.getInt("wdef"));
                                Item.setMdef((short) rs.getInt("mdef"));
                                Item.setAcc((short) rs.getInt("acc"));
                                Item.setAvoid((short) rs.getInt("avoid"));
                                Item.setHands((short) rs.getInt("hands"));
                                Item.setSpeed((short) rs.getInt("speed"));
                                Item.setJump((short) rs.getInt("jump"));
                                Item.setRingId(-1);

                                if (chr.getMeso() >= rs.getInt("price")) { // 메소가 물품가격보다 이상일때
                                        MapleCharacter seller = c.getChannelServer().getPlayerStorage().getCharacterByName(rs.getString("name")); // 판매자의 이름
                                        
                                        MapleInventoryManipulator.addFromDrop(chr.getClient(), Item, "", false);// 해당 옵션에 아이템을 준다.
                                        chr.gainMeso(- (rs.getInt("price")), true, false, true); // 물품가격만큼 메소를 감소시킨다.
                                        
                                        
                                        if (seller != null) { // 판매자가 온라인일시 실시간으로 메소를 지급
                                                seller.gainMeso(rs.getInt("price"), true);
                                                c.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(1,"경매장에서 아이템이 팔리셨습니다."));
                                        } else { // 판매자가 오프라인일시 DB로 실시간 업데이트
                                                ps = con.prepareStatement("UPDATE characters SET `meso` = `meso` + "+rs.getInt("price")+" WHERE name = '"+rs.getString("name")+"'");
                                                ps.executeUpdate();
                                        }
                                        
                                        ps = con.prepareStatement("UPDATE auction SET trade = 1 WHERE shopid = "+shopid); // 거래 체크를 1로 해서 목록에 못띄우게한다.
                                        ps.executeUpdate();
                                } else { // 메소가 부족할시
                                        String str  = "당신은 #b현재 "+(rs.getInt("price")-chr.getMeso())+"원이 부족#k하여\r\n";
                                               str += "현재 물품인 #r#t"+rs.getInt("item")+"#구매가 불가능#k 합니다.";
                                               str += "만약 이 물품의 가격을 낮추고 싶다면 #b판매자와 협상#k을 해보시기 바랍니다.";
                                        chr.getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 5, str, ""));
                                }
                        }
                        rs.close();
                        ps.close();
                } catch (Exception e) {
                        
                }
        }
        
        public static void ItemAddList(MapleCharacter player, int price, byte pos) { // 옥션에 등록한다.
                MapleInventory equip = player.getInventory(MapleInventoryType.EQUIP);
                IEquip Item = (IEquip) equip.getItem(pos);
                Connection con = DatabaseConnection.getConnection();
                MapleInventoryManipulator.removeById(player.getClient(), MapleInventoryType.EQUIP, Item.getItemId(), 1, true, false);
                try {
                        PreparedStatement ps;
                        ps = con.prepareStatement("INSERT INTO auction VALUES (" +
                                "DEFAULT, " +
                                "('"+player.getName()+"'), " +
                                ""+Item.getItemId()+", " +
                                ""+price+", " +
                                ""+Item.getUpgradeSlots()+", " +
                                ""+Item.getLevel()+", " +
                                ""+Item.getStr()+", " +
                                ""+Item.getDex()+", " +
                                ""+Item.getInt()+", " +
                                ""+Item.getLuk()+", " +
                                ""+Item.getHp()+", " +
                                ""+Item.getMp()+", " +
                                ""+Item.getWatk()+", " +
                                ""+Item.getMatk()+", " +
                                ""+Item.getWdef()+", " +
                                ""+Item.getMdef()+", " +
                                ""+Item.getAcc()+", " +
                                ""+Item.getAvoid()+", " +
                                ""+Item.getHands()+", " +
                                ""+Item.getSpeed()+", " +
                                ""+Item.getJump()+", " +
                                " 0)");
                        ps.executeUpdate();
                        ps.close();
                } catch (Exception e) {
                        
                }
        }
        
        public static String ItemList(MapleClient c) { 
                StringBuilder str = new StringBuilder();
		MapleInventory equip = c.getPlayer().getInventory(MapleInventoryType.EQUIP);
		List<String> stra = new LinkedList<String>();
		for (IItem item : equip.list()) {
			stra.add("#L"+item.getPosition()+"##v"+item.getItemId()+"##l");
		}
                for (String strb : stra) {
                        str.append(strb);
                }
                return str.toString();
        }

        public static int CommendPrice(MapleClient c, byte slot) {
                MapleInventory equip = c.getPlayer().getInventory(MapleInventoryType.EQUIP);
                IEquip Item = (IEquip) equip.getItem(slot);
                
                int stat = (Item.getStr() * 600)+ // 능력치
                           (Item.getDex() * 600)+
                           (Item.getInt() * 600)+
                           (Item.getLuk() * 600);
                
                int hmp = (Item.getHp() * 100)+ // 체력,마나
                          (Item.getMp() * 100);
                
                int def = (Item.getWdef() * 400)+ // 방어력
                          (Item.getMdef() * 400);
                
                int att = (Item.getWatk() * 200)+ // 공격력
                          (Item.getMatk() * 200);
                
                int more = (Item.getAcc()          *  50)+ // 기타
                           (Item.getAvoid()        *  50)+
                           (Item.getSpeed()        *  40)+
                           (Item.getJump()         *  23)+
                           (Item.getLevel()        * 600)+
                           (Item.getUpgradeSlots() * 1000);
                
                return (stat+hmp+def+att+more) * c.getChannelServer().getMesoRate(); // 최종적으로 경매가격을 출력 (시세는 메소배율에 의해 결정)
        }
        
        public static String ItemInfo(MapleClient c, byte slot) {
                StringBuilder str = new StringBuilder();
                MapleInventory equip = c.getPlayer().getInventory(MapleInventoryType.EQUIP);
                IEquip Item = (IEquip) equip.getItem(slot);
                
                str.append("#i"+Item.getItemId()+"# 의 효과\r\n\r\n");
                if (Item.getLevel() != 0) {str.append("#b레벨#k : "+Item.getLevel()+" 등급\r\n");}
                if (Item.getStr()   != 0) {str.append("#b힘#k : +"+Item.getStr()+"  \r\n");}
                if (Item.getDex()   != 0) {str.append("#b덱스#k : +"+Item.getDex()+"  \r\n");}
                if (Item.getInt()   != 0) {str.append("#b인트#k : +"+Item.getInt()+"  \r\n");}
                if (Item.getLuk()   != 0) {str.append("#b럭#k : +"+Item.getLuk()+"  \r\n");}
                if (Item.getWatk()  != 0) {str.append("#b물리 공격력#k : +"+Item.getWatk()+"\r\n");}
                if (Item.getWdef()  != 0) {str.append("#b물리 방어력#k : +"+Item.getWdef()+"\r\n");}
                if (Item.getMatk()  != 0) {str.append("#b마법 공격력#k : +"+Item.getMatk()+"\r\n");}
                if (Item.getMdef()  != 0) {str.append("#b마법 방어력#k : +"+Item.getMdef()+"\r\n");}
                if (Item.getHp()    != 0) {str.append("#b체력#k : +"+Item.getHp()+"    \r\n");}
                if (Item.getMp()    != 0) {str.append("#b마력#k : +"+Item.getMp()+"    \r\n");}
                if (Item.getSpeed() != 0) {str.append("#b이동속도#k : +"+Item.getSpeed()+" \r\n");}
                if (Item.getJump()  != 0) {str.append("#b점프력#k : +"+Item.getJump()+"  \r\n");}
                if (Item.getAcc()   != 0) {str.append("#b회피율#k : +"+Item.getAcc()+" \r\n");}
                if (Item.getAvoid() != 0) {str.append("#b명중률#k : +"+Item.getAvoid()+"\r\n\r\n");}
                /* 아이템 옵션 끝 */
                /* 아이템 기타 시작 */
                str.append("#i"+Item.getItemId()+"# 의 기타정보\r\n\r\n");
                str.append("#b남은 제련수#k : "+Item.getUpgradeSlots()+"\r\n");
                str.append("#b권장 가격#k : "+CommendPrice(c, slot)+"원\r\n\r\n");
                str.append("#L"+(int) slot+"##b물품등록#k#l");
                /* 아이템 기타 끝 */
                return str.toString();
        }
        
        public static String ItemTypeName(int id) {
                MapleItemInformationProvider Provider = MapleItemInformationProvider.getInstance();
                IItem Item = Provider.getEquipById(id);
                StringBuilder str = new StringBuilder();
                if ((Item.getItemId() >= 1000000 && Item.getItemId() < 1010000)) { 
                        str.append("모자");
                } else if ((Item.getItemId() >= 1050000 && Item.getItemId() < 1060000)) { 
                        str.append("전신");
                } else if ((Item.getItemId() >= 1040000 && Item.getItemId() < 1050000)) { 
                        str.append("상의");
                } else if ((Item.getItemId() >= 1060000 && Item.getItemId() < 1070000)) { 
                        str.append("하의");
                } else if ((Item.getItemId() >= 1070000 && Item.getItemId() < 1080000)) { 
                        str.append("신발");
                } else if ((Item.getItemId() >= 1080000 && Item.getItemId() < 1090000)) { 
                        str.append("장갑");
                } else if ((Item.getItemId() >= 1030000 && Item.getItemId() < 1040000)) { 
                        str.append("귀걸이");
                } else if ((Item.getItemId() >= 1090000 && Item.getItemId() < 1100000)) { 
                        str.append("방패");
                } else if ((Item.getItemId() >= 1010000 && Item.getItemId() < 1020000)) { 
                        str.append("얼굴장식");
                } else if ((Item.getItemId() >= 1100000 && Item.getItemId() < 1110000)) { 
                        str.append("망토");
                } else if ((Item.getItemId() >= 1120000 && Item.getItemId() < 1130000)) { 
                        str.append("목걸이");
                } else if ((Item.getItemId() >= 1300000 && Item.getItemId() < 1310000)) { 
                        str.append("한손 검");
                } else if ((Item.getItemId() >= 1310000 && Item.getItemId() < 1320000)) { 
                        str.append("한손 도끼");
                } else if ((Item.getItemId() >= 1320000 && Item.getItemId() < 1330000)) { 
                        str.append("한손 둔기");
                } else if ((Item.getItemId() >= 1400000 && Item.getItemId() < 1410000)) { 
                        str.append("두손 검");
                } else if ((Item.getItemId() >= 1410000 && Item.getItemId() < 1420000)) { 
                        str.append("두손 도끼");
                } else if ((Item.getItemId() >= 1420000 && Item.getItemId() < 1430000)) { 
                        str.append("두손 둔기");
                } else if ((Item.getItemId() >= 1430000 && Item.getItemId() < 1440000)) { 
                        str.append("창");
                } else if ((Item.getItemId() >= 1440000 && Item.getItemId() < 1450000)) { 
                        str.append("폴암");
                } else if ((Item.getItemId() >= 1470000 && Item.getItemId() < 1480000)) { 
                        str.append("아대");
                } else if ((Item.getItemId() >= 1330000 && Item.getItemId() < 1340000)) { 
                        str.append("단검");
                } else if ((Item.getItemId() >= 1450000 && Item.getItemId() < 1460000)) { 
                        str.append("활");
                } else if ((Item.getItemId() >= 1460000 && Item.getItemId() < 1470000)) { 
                        str.append("석궁");
                } else if ((Item.getItemId() >= 1370000 && Item.getItemId() < 1380000)) { 
                        str.append("완드");
                } else if ((Item.getItemId() >= 1380000 && Item.getItemId() < 1390000)) { 
                        str.append("스태프");
                } else {
                        str.append("미분류");
                }
                return str.toString();
        }
}