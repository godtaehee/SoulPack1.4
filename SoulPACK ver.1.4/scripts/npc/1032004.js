/* 
	LOUIS
	MADE BY 소희 (jantnic)
*/

importPackage(net.sf.odinms.client);

var status = 0;
var zones = 0;
var selectedMap = -1;

function start() {
	cm.sendOk("그러길래 여긴 왜들어와~ 다음부터는 들어오지마라.");
	cm.warp(101000000, 0);
	cm.dispose();
}
