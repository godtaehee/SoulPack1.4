importPackage(net.sf.odinms.client);

var status = -1;
var selectedList = -1;
var selectedOne = 1;
var selectedTwo = 1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
	} else {
                status++;
                selectedList = selection;
                selectedOne = selection;
                selectedTwo = selection;
                if (status == 0) {
                        var String = "어떤 것을 원하십니까?\r\n\r\n";
                        String += "#L1##b물품보기#k#l\r\n";
                        String += "#L2##b물품등록#k#l\r\n";
                        cm.sendSimple(String);
                } else if (status == 1) {
                        if (selectedList == 1) {
                                var String = "경매장에 #b물품보기#k\r\n\r\n";
                                String += "이것은 회원들간의 간단한 경매를 즐길수 있는 공간입니다.";
                                String += "방법은 판매자와 해당 물품의 정보를 보고 #b구매하기#k 를 누르시면";
                                String += "물품을 얻는동시에 일정량의 돈이 빠져나갑니다. 이제, 경매에 올라온";
                                String += "#b물품들을 확인하시겠습니까?";
                                cm.sendYesNo(String);status = 9; // 보기
                        } else if (selectedList == 2) {
                                var String = "경매장에 #b물품등록#k 하기\r\n\r\n";
                                String += "이것은 회원들간의 간단한 경매를 즐길수 있는 공간입니다.";
                                String += "방법은 소지한 물품중 매출하고싶은 물품을 클릭하고 가격을 적습니다.";
                                String += "이상 끝나시면 #b물품보기#k로 확인 하실수있습니다. #b물품들을 올리시겠습니까?";
                                cm.sendYesNo(String);status = 19; // 등록
                        }
                /* 물품 보기 시작 */
                } else if (status == 10) { // 목록보기
                        var String = "현재 진행중인 물품 목록입니다.\r\n\r\n";
                        cm.sendSimple(String+cm.ItemList());
                } else if (status == 11) { // 옵션보기
                        cm.sendSimple(cm.ItemInfo(selectedOne));
                } else if (status == 12) { // 물품구매
                        cm.ItemSale(selectedOne);
                        cm.dispose();
                /* 물품 보기 끝 */
                /* 물품 등록 시작 */
                } else if (status == 20) { // 선정하기
                        var String = "현재 소지하고 계신 물품 목록입니다.\r\n\r\n";
                        String += "물품 선택후 #b직접입력#k 혹은 #b권장가격#k을 선택하시면 소지하시던 물품은";
                        String += "경매목록에 올라갑니다. 한번 올린 #r경매물품은 다시 가져올수 없으므로#k";
                        String += "신중하게 선택하시기 바랍니다.\r\n\r\n";
                        cm.sendSimple(String+cm.ItemList(cm.getC()));
                } else if (status == 21) { // 옵션보기
                        cm.sendSimple(cm.ItemInfo(cm.getC(), selectedTwo));
                } else if (status == 22) { // 등록
                        cm.ItemAddList(selectedTwo);
                        cm.dispose();
                /* 물품 등록 끝 */
                } else {
                        cm.sendSimple("다음에 또 뵙겠습니다.");
                        cm.dispose();
                }
	}
}