/*
	Orbis - Leafre Cabin
	MADE BY º“»Ò (jantnic)
	HELP : Odin Script
*/

//Note :
//We still dont have the ship show and the ship sound currently

importPackage(net.sf.odinms.tools);

//Time Setting is in millisecond
var closeTime = 30000; //The time to close the gate
var beginTime = 30000; //The time to begin the ride
var rideTime = 299000; //The time that require move to destination
var Orbis_btf;
var Cabin_to_Orbis;
var Orbis_docked;
var Leafre_btf;
var Cabin_to_Leafre;
var Leafre_docked;

function init() {
	Orbis_btf = em.getChannelServer().getMapFactory().getMap(200000132);
	Leafre_btf = em.getChannelServer().getMapFactory().getMap(240000111);
	Cabin_to_Orbis = em.getChannelServer().getMapFactory().getMap(200090210);
	Cabin_to_Leafre = em.getChannelServer().getMapFactory().getMap(200090200);
	Orbis_docked = em.getChannelServer().getMapFactory().getMap(200000100);
	Leafre_docked = em.getChannelServer().getMapFactory().getMap(240000100);
	Orbis_Station = em.getChannelServer().getMapFactory().getMap(200000131);
	scheduleNew();
}

function scheduleNew() {
	Leafre_docked.setDocked(true);
	Orbis_Station.setDocked(true);
	Leafre_docked.broadcastMessage(MaplePacketCreator.boatPacket(true));
	Orbis_Station.broadcastMessage(MaplePacketCreator.boatPacket(true));
	em.setProperty("docked", "true");
	em.setProperty("entry", "true");
	em.schedule("stopEntry", closeTime);
	em.schedule("takeoff", beginTime);
}

function stopEntry() {
	em.setProperty("entry","false");
}

function takeoff() {
	Leafre_docked.setDocked(false);
	Orbis_Station.setDocked(false);
	Leafre_docked.broadcastMessage(MaplePacketCreator.boatPacket(false));
	Orbis_Station.broadcastMessage(MaplePacketCreator.boatPacket(false));
	em.setProperty("docked","false");
	var temp1 = Orbis_btf.getCharacters().iterator();
	while(temp1.hasNext()) {
		temp1.next().changeMap(Cabin_to_Leafre, Cabin_to_Leafre.getPortal(0));
	}
	var temp2 = Leafre_btf.getCharacters().iterator();
	while(temp2.hasNext()) {
		temp2.next().changeMap(Cabin_to_Orbis, Cabin_to_Orbis.getPortal(0));
	}
	em.schedule("arrived", rideTime);
}

function arrived() {
	var temp1 = Cabin_to_Orbis.getCharacters().iterator();
	while(temp1.hasNext()) {
		temp1.next().changeMap(Orbis_docked, Orbis_docked.getPortal(0));
	}
	var temp2 = Cabin_to_Leafre.getCharacters().iterator();
	while(temp2.hasNext()) {
		temp2.next().changeMap(Leafre_docked, Leafre_docked.getPortal(0));
	}
	scheduleNew();
}
