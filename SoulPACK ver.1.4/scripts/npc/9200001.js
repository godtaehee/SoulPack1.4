importPackage(net.sf.odinms.client);

var status = 0; 

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
  cm.sendSimple("�ȳ��Ͻð�...�� ������ �� �� ����� �Ѵٳ�... \r\n�ø��Ⱑ �����ٰ�?? \r\n�׷��� ���� �������� ���ְڳ�...\r\n\r\n#L0#�������� �ϰڽ��ϴ�(30����)#l");
    }
  if (status == 1) {
   if (selection == 0) {
   if(cm.getLevel() <= 30) {
   var b = cm.getLevel() + 1;
   cm.sendNext("#b����"+b+"(��)�� �������� �ϼ̽��ϴ�#k");
   cm.c.getPlayer().levelUp();
   cm.dispose();
   }
   else {
   cm.sendOk("�������� #r���� 30#k������ ���ְ� �ִٳ�.");
        }
      }
    }
  }
}