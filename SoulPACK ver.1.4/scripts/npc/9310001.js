/* 99% Made By: XiiaoCurd
 * Made For: StoryCube Private Server
 * Fixed up some bugs and added (require Evolution Rock): RICEstuff (aka. zezokicker from RaGEZONE)
 * DO NOT RIP
* 수정자 : 웃 자,소울씨
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
        if (status >= 4 && mode == 0) {
            cm.sendOk("Come back later after you get your baby robo.");
            cm.dispose();
        }  

        if (mode == 1) {
            status++;
        } else {
            status--;
        } 



   if (status == 0) {
      cm.sendOk("안녕하세요 ? 저는 소울서버에 인조펫을 만들어주는 레이디 리 라고 합니다 #v5000048##k and #v5380000##k. \r\n\r\n만들기위해 필요한 재료입니다. 가지고 오세요.!!!.");
   } else if (status == 1) {
      if (cm.haveItem(5000048)) {
      } if (cm.haveItem(5380000)){
         cm.sendYesNo(" #v5000048##k 랑  #v5380000##k 당신은 인조펫이랑 바꾸겠습니까?");
      } else {
         cm.sendOk("미안해요,  #v5000048##k 랑 #v5380000##k당신이 필요한 재료입니다");
         cm.dispose();
      } 
   } else if (status == 2) {
      cm.sendSimple("인조펫을 진화할려고 선택해보세요.( #v5000048##k 가지고계시죠?)\r\n#L1# #v5000049##b 블루 로봇#l\r\n#L2# #v5000050##b 레드 로봇#l\r\n#L3# #v5000051##b 그린 로봇#l\r\n#L4# #v5000052##b 골드 로봇#l\r\n#L5# #v5000053##b 릴라 로봇#l");
   } else if (status == 3) {
      if (selection == 1) {
         cm.gainItem(5000048,-1);
         cm.gainItem(5380000,-1);
         cm.gainItem(5000049,1);
         cm.sendOk("진화가 완료 되었습니다. #v5000049##k 블루로봇  탄생 하셨습니다.");
         cm.dispose();
      } else if (selection == 2) {
         cm.gainItem(5000048,-1);
         cm.gainItem(5380000,-1);
         cm.gainItem(5000050,1);
         cm.sendOk("진화가 완료 되었습니다. #v5000050##k 레드로봇  탄생 하셨습니다.");
         cm.dispose();
      } else if (selection == 3) {
         cm.gainItem(5000048,-1);
         cm.gainItem(5380000,-1);
         cm.gainItem(5000051,1);
         cm.sendOk("진화가 완료 되었습니다 #v5000051##k 그린로봇이 탄생 하셨습니다.");
         cm.dispose();
      } else if (selection == 4) {
         cm.gainItem(5000048,-1);
         cm.gainItem(5380000,-1);
         cm.gainItem(5000052,1);
         cm.sendOk("진화가 완료 되었습니다 #v5000052##k 그린로봇이 탄생 하셨습니다.");
         cm.dispose();
      } else if (selection == 5) {
         cm.gainItem(5000048,-1);
         cm.gainItem(5380000,-1);
         cm.gainItem(5000053,1);
         cm.sendOk("진화가 완료 되었습니다 #v5000053##k릴라로봇이 탄생 하셨습니다.");
         cm.dispose();
      } 
   } 
 
    } 
}  
