/* 
    아이템봉인 NPC
    제작 : 지레프 (rlaehdwns4@naver.com)
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
            cm.dispose();
            return;
        }
    if (mode == 1)
            status++;
    else
            status--;
        if (status == 0) {
            cm.sendGetNumber("※잠구기는 장비아이템에만 잠금설정이 가능하게되어있습니다. 또한 잠금헤제를하시려면 몽땅따에게 잠금헤제를 부탁하면됩니다.\r\n[사용법]\r\n잠그고 싶은아이템이 3번째에있으면 3입력, 4번째에있으면 4입력",1,1,100);
        } else if (status == 1) {
            slot = selection;
            item = cm.getChar().itemid(slot);
            if (item==0){
                cm.sendOk("죄송하지만, 아이템이 존재하지 않습니다.")
                cm.dispose();
            }
            else
                cm.sendYesNo("이 아이템을 잠그시겠습니까? \r\n#i"+item+"# #b#t"+item+"#")
        } else if (status == 2) {
            cm.getChar().lockitem(slot,true)
            cm.sendOk("#i"+item+"##b#t"+item+"##k \r\n이 아이템이 잠금상태가 되었습니다.");
            cm.gainItem(5060001, -1);
            cm.dispose();
        }
    }
}  
