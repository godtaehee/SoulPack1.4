/*
   �� ���� �� �ҽ������� �����մϴ�.
   ������ : ����(w3aries@naver.com)
   ������ : ����(w3aries@naver.com)

 ĳ������ ��ũ��Ʈ
*/

importPackage(net.sf.odinms.client);

var status = 0;
var selectedType = -1;
var cash = 0;
var meso = 0;

function start() {
 status = -1;
 action(1, 0, 0);
}

function action(mode, type, selection) {
 if (mode == -1 || mode == 0) {
  cm.dispose();
 } else {
  status++;
  if (status == 0) {
   var selStr = "�����Ͻ� ĳ�ñݾ��� ������ �������ּ���.#b����������������������������������������������(20�� �޼Ҵ� 1õ ĳ��)";
   var options = new Array("��������");
   for (var i = 0; i < options.length; i++) {
    selStr += "\r\n#L" + i + "#" + options[i] + "#l";
   }
   cm.sendSimple(selStr);
  } else if (status == 1) {
   selectedType = selection;
   if (selectedType == 0) {
    var selStr = "�����Ͻ� ĳ�ñݾ��� �Է����ּ���. \r\n#b��ex)1�Է� �� 1���ɽ� ���� ��100���޼� ����";
    cm.sendGetNumber(selStr,1,1,9);
   } else if (selectedType == 1) {
    var selStr = "�����Ͻ� ĳ�ñݾ��� �Է����ּ���. #b�� 1~99 �Է� �� 1~99 ����";
    cm.sendGetNumber(selStr,1,1,99);
   }
  } else if (status == 2) {
   cash = selection;
   if (selectedType == 0) {
    cm.sendYesNo("�����Ͻ� ĳ�ñݾ��� #b" + cash + "õ��#k�ΰ���?");
   } else if (selectedType == 1) {
    cm.sendYesNo("�����Ͻ� ĳ�ñݾ��� #b" + cash + "����#k�ΰ���?");
   }
  } else if (status == 3) {
   if (selectedType == 0) {
    meso = 1000000 * cash;
    cash = 10000 * cash;
    if (cm.getMeso() >= meso) {
     cm.sendNext("ĳ�������� �Ϸ�Ǿ����ϴ�.");
     cm.gainMeso(-meso);
     cm.gainnxCash(parseInt(cash));
     cm.dispose();
    } else {
     cm.sendNext("�޼Ұ� �����ϽŰ� ��������?");
     cm.dispose();
    }
   } else if (selectedType == 1) {
    meso = 1000000 * paypalNX;
    cash = 10000 * paypalNX;
    if (cm.getMeso() >= meso) {
     cm.sendNext("ĳ�������� �Ϸ�Ǿ����ϴ�.");
     cm.gainMeso(-meso);
     cm.gainnxCash(modifyCSPoints(cash));
     cm.dispose();
    } else {
     cm.sendNext("�޼Ұ� �����ϽŰ� ��������?");
     cm.dispose();
    }
   }
  }
 }
}