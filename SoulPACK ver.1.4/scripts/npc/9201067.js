/*
����:����ũ
*/
function start() {
 var tmp_str = "#r���ҿ#k���� [�Խ���'s]\r\n";
 tmp_str += "�Խ����� #rŬ��#k�Ͽ� �ּ���.\r\n#b";
 tmp_str += "#L0##r���ҿ#k�� #d[��������]#k#l\r\n";
 tmp_str += "#L1##r���ҿ#k�� #d[�Ѵа���]#k#l\r\n";
 tmp_str += "#L2##r���ҿ#k�� #d[��������]#k#l\r\n";
 tmp_str += "#L3##r���ҿ#k�� #d[���Ģ's]#k#l\r\n";
 tmp_str += "#L4##r���ҿ#k�� #d[��������]#k#l\r\n";
 tmp_str += "#L5##r���ҿ#k�� #d[���½ð�]#k#l\r\n";
 tmp_str += "#L6##r���ҿ#k�� #d[���'s]#k#l\r\n";
 tmp_str += "#L7##r���ҿ#k�� #d[��������]#k#l\r\n";
 tmp_str += "#L8##r���ҿ#k�� #d[������]#k#l\r\n";
 tmp_str += "#L9##r���ҿ#k�� #d[�����亯]#k#l\r\n";
 cm.sendSimple (tmp_str);
}

function action(mode, type, selection) {
 cm.dispose();
 if (selection == 0) {
  var str = "#r���ҿ#k�� #d[��������]#k\r\n";
  str += "�Ϸ翡 �ѹ��� �� �о���ּ���.\r\n";
  str += "1. ī�� ������ ���� ���Ӱ� ������!\r\n";
  str += "2. �����ϱ����� �� �����亯&ī�信 �� ã�ƺ��ŵ� ����.\r\n";
  str += "#r[�����߰�]���ҿGM#k";
  cm.sendNext(str)
 } else if (selection == 1) {
  var str = "#r���ҿ#k�� #d[�Ѵа���]#k\r\n";
  str += "1. �Ѵ� = �ѱ� �г����� ���� ���Դϴ�.\r\n";
  str += "2. �Ѵ��� ī�� �Խ��ǿ� ��û���ֽø� �����ϰڽ��ϴ�.";
  str += "#r[�����Ϸ�]���ҿGM#k";
  cm.sendNext(str)
 } else if (selection == 2) {
  var str = "#r���ҿ#k�� #d[��������]#k\r\n";
  str += "�� �Խ����� ī�信�� ��������� ���� Ȱ������.\r\n";
  str += "#r[�������]���ҿGM#k";
  cm.sendNext(str)
 } else if (selection == 3) {
  var str = "#r���ҿ#k�� #d[���Ģ]#k\r\n";
  str += "1. ������ �������ø� �ٸ��е��� �������� �ʽ��ϴ�.\r\n";
  str += "2. �������� �ú� ���� �ʽ��ϴ�.\r\n";
  str += "3. ���״� �پ˼������Ƿ� ���� �ʽ��ϴ�.\r\n";
  cm.sendNext(str)
 } else if (selection == 4) {
  var str = "#r���ҿ#k�� #d[��������]#k\r\n";
  str += "1. ��&�ο�&��&������ӱ� ���� ���մϴ�.\r\n";
  str += "2. ��� ��Ī�� ���� �볳���� �ʰڽ��ϴ�.\r\n";
  str += "3. ������ ��¥ �𸣰ڴ� �ϴ°͸� �Ͻñ�..";
  cm.sendNext(str)
 } else if (selection == 5) {
  var str = "#r���ҿ#k�� #d[���½ð�]#k\r\n";
  str += "���񼭹��� �ڡڽð����� �������Դϴ�..\r\n";
  str += "����-[�Ŵޡڹ�° �ڹ�°�� �����]\r\n";
  str += "����-[�Ŵ� �ڹ�° �ڹ�°�ָ� ������ �����]\r\n";
  str += "����-[����]PM 04:30 [����]PM 11:00\r\n";
  str += "����-[����]AM 10:30 [����]PM 11:00\r\n";
  str += "����-[����]PM 02:30 [����]PM 11:00\r\n";
  str += "�ָ�-[����]AM 10:30 [����]PM 11:00\r\n";
  cm.sendNext(str)
 } else if (selection == 6) {
  var str = "#r���ҿ#k�� #d[���]#k\r\n";
  str += "[��]��� - ���ҿGM \r\n";
  cm.sendNext(str)
 } else if (selection == 7) {
  var str = "#r���ҿ#k�� #d[��������]#k\r\n";
  str += "������ ����ġ �Դϴ�\r\n";
  str += "1~10     - 20��\r\n";
  str += "10~30    - 40��\r\n";
  str += "30~70    - 100��\r\n";
  str += "70~120   - 150��\r\n";
  str += "120~200  - 200��";
  cm.sendNext(str)
 } else if (selection == 8) {
  var str = "#r��N.C.S��#k�� #d[������]#k\r\n";
  str += "1. ����̸� �ѱ۽�û�� ī�信�� �Ͻñ� �ٶ��ϴ�.\r\n";
  str += "2. ī�信 �� ������� �Խ��� ���� �ص帳�ϴ�.\r\n";
  cm.sendNext(str)
 } else if (selection == 9) {
  var str = "#r��N.C.S��#k�� #d[�����亯]#k\r\n";
  str += "���� - ���������ý��丮��?.\r\n";
  str += "�亯 - ���������ý��丮���� ���� ���� ��̸� ���������ؼ� �ϴ°��Դϴ�.\r\n";
  str += "���� - ���� ������?\r\n";
  str += "�亯 - ���������� �������˱���!\r\n";
  cm.sendNext(str)
 }
}
