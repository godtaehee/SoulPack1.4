/*
	봉인된아이템 봉인헤제하기
	MADE BY 소희 (jantnic)
*/
importPackage(net.sf.odinms.client);

var slot;
var item;
var qty;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status <= 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendNext("봉인된아이템이있다면 언제든지 헤제가가능하지.");
            cm.dispose();
            return;
        }
    if (mode == 1)
            status++;
    else
            status--;
        if (status == 0) {
            cm.sendGetNumber("※잠금해제할 아이템의 번호를 입력하세요. 잠금상태인아이템만 가능합니다.\r\n[사용법]\r\n잠금상태인 아이템이 3번째에있으면 3을입력, 5번째에있으면 5입력하시면됩니다.",1,1,100);
        } else if (status == 1) {
            slot = selection;
            item = cm.getChar().itemid(slot);
            if (item==0){
                cm.sendOk("죄송하지만, 아이템이 존재하지 않습니다.")
                cm.dispose();
            }
            else
                cm.sendYesNo("이 아이템을 잠금헤제 하시겠습니까? 잠금헤제하셔도 봉인의자물쇠만있다면 몽땅따에게 다시 잠금설정을 하실수있습니다.\r\n#i"+item+"# #b#t"+item+"#")
        } else if (status == 2) {
            cm.getChar().lockitem(slot,false)
            cm.sendOk("#i"+item+"##b#t"+item+"##k\r\n이 아이템이 잠금상태에서 헤제되었습니다.");
            cm.dispose();
        }
    }
}  
