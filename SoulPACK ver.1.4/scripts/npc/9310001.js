/* 99% Made By: XiiaoCurd
 * Made For: StoryCube Private Server
 * Fixed up some bugs and added (require Evolution Rock): RICEstuff (aka. zezokicker from RaGEZONE)
 * DO NOT RIP
* ������ : �� ��,�ҿﾾ
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
      cm.sendOk("�ȳ��ϼ��� ? ���� �ҿＭ���� �������� ������ִ� ���̵� �� ��� �մϴ� #v5000048##k and #v5380000##k. \r\n\r\n��������� �ʿ��� ����Դϴ�. ������ ������.!!!.");
   } else if (status == 1) {
      if (cm.haveItem(5000048)) {
      } if (cm.haveItem(5380000)){
         cm.sendYesNo(" #v5000048##k ��  #v5380000##k ����� �������̶� �ٲٰڽ��ϱ�?");
      } else {
         cm.sendOk("�̾��ؿ�,  #v5000048##k �� #v5380000##k����� �ʿ��� ����Դϴ�");
         cm.dispose();
      } 
   } else if (status == 2) {
      cm.sendSimple("�������� ��ȭ�ҷ��� �����غ�����.( #v5000048##k ����������?)\r\n#L1# #v5000049##b ��� �κ�#l\r\n#L2# #v5000050##b ���� �κ�#l\r\n#L3# #v5000051##b �׸� �κ�#l\r\n#L4# #v5000052##b ��� �κ�#l\r\n#L5# #v5000053##b ���� �κ�#l");
   } else if (status == 3) {
      if (selection == 1) {
         cm.gainItem(5000048,-1);
         cm.gainItem(5380000,-1);
         cm.gainItem(5000049,1);
         cm.sendOk("��ȭ�� �Ϸ� �Ǿ����ϴ�. #v5000049##k ���κ�  ź�� �ϼ̽��ϴ�.");
         cm.dispose();
      } else if (selection == 2) {
         cm.gainItem(5000048,-1);
         cm.gainItem(5380000,-1);
         cm.gainItem(5000050,1);
         cm.sendOk("��ȭ�� �Ϸ� �Ǿ����ϴ�. #v5000050##k ����κ�  ź�� �ϼ̽��ϴ�.");
         cm.dispose();
      } else if (selection == 3) {
         cm.gainItem(5000048,-1);
         cm.gainItem(5380000,-1);
         cm.gainItem(5000051,1);
         cm.sendOk("��ȭ�� �Ϸ� �Ǿ����ϴ� #v5000051##k �׸��κ��� ź�� �ϼ̽��ϴ�.");
         cm.dispose();
      } else if (selection == 4) {
         cm.gainItem(5000048,-1);
         cm.gainItem(5380000,-1);
         cm.gainItem(5000052,1);
         cm.sendOk("��ȭ�� �Ϸ� �Ǿ����ϴ� #v5000052##k �׸��κ��� ź�� �ϼ̽��ϴ�.");
         cm.dispose();
      } else if (selection == 5) {
         cm.gainItem(5000048,-1);
         cm.gainItem(5380000,-1);
         cm.gainItem(5000053,1);
         cm.sendOk("��ȭ�� �Ϸ� �Ǿ����ϴ� #v5000053##k����κ��� ź�� �ϼ̽��ϴ�.");
         cm.dispose();
      } 
   } 
 
    } 
}  
