/* 한글화:휴나
＊이주석까지 지우려고?
*/
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status == 0 && mode == 0) {
			cm.dispose();
			return;
		} else if (status >= 1 && mode == 0) {
			cm.sendNext("뭐. 싫다고? 어쩔수없지.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("무슨일이냐?\r\n#L0##b펫과함께 산책을하고싶습니다..#l\r\n#L1#여기는무엇을하는곳인가요?#k#l");
		} else if (status == 1) {
			if (selection == 0) {
				if (cm.haveItem(4031035,1)) {
					cm.sendNext("이봐...지금있지않나?");
					cm.dispose();
				} else {
					cm.sendYesNo("음..펫과함께 산책을하고싶다고? 좋아. 이편지를받아. 맨위에있는 내동생에게 건내주면 펫의친밀도를 200올려줄꺼야. yes를눌르면 편지를줄게.");
				}
			} else {
				cm.sendOk("여기말이야? 펫과함께 산책을할수도있고.. 쥐엠님들이 경기를벌인다고도하더군.");
				cm.dispose();
			}
		} else if (status == 2) {
			cm.gainItem(4031035, 1);
			cm.sendNext("편지는 기타템창에있을거야! 가다가 잊어버리지말고 끝까지올라가서 내동생에게주라고~");
			cm.dispose();
		}
	}
}