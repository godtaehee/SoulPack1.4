importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

/*
만든이:민 하율
본 파일을 무단배포를 허가하지않습니다.
그리고, 만든이의 이름은 수정하지마세요.
*/
var status = 0;
var price = 2000000;
var map = Array(211000100);

function start() {
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
		if (status == 0) {
			cm.sendSimple("어멋! 인간이 나한테 무슨볼일이지?\r\n#L1##b고든할아버지의 소개로왔습니다.#k#l\r\n\#L2##b가지고왔습니다.#k#l");
			} else if (status == 1) {
			if (selection == 1) {
                                cm.sendSimple("어머..고든할아버지의 소개를받고 오신분이시군요..!\r\n...고든할아버지께서 #b#v4001001##k#r10개#k를 저한테 받아오라하셨다구요?\r\n할아버지도 참.. 좋습니다!\r\n드리는데신 #b#v1092021##k#r미스틱 쉴드#k를 구해오시면 드리겠습니다.\r\n#r미스틱 쉴드#k는 #b크로노스#k라는 유령이 가지고있단말을 들은적이 있습니다.")
			} else if (status == 2) {
			} else if (selection == 2) { 
				if(cm.haveItem(1092021, 1) == false) {
					cm.sendOk("역시! 인간은 믿으면 안됬었어!");
				} else {
					cm.sendOk("정말 구해오셨군요..약속이니 #b#v4001001##k#r10개#k를 드리겠습니다.\r\n빨리 #b고든할아버지#k께 가보세요~");
			                cm.gainItem(1092021,-1);
					cm.gainItem(4001001, 10);
                                        cm.gainExp(8000000);
				}
			        cm.dispose();



			}
		}
	}
}
