importPackage(net.sf.odinms.client);


var status = 0;
var quiz = new Array(  


   "Brindisi������ ����ġ ������?%100",
   "���� ������ ä���ִ� HP�� ����?%50",
   "�츮������ ���µȳ��� 12�� �����ΰ���?%24",
   "TRADE ��ư�� ����� ���� �̵��� �˴ϱ�?%wkdbtlwkddlqrn",
   "�기���� ������ ������� ����ΰ���?%3",
   "�̹��� �ʼ����� �Դϴ�.\r\n�������������� ��Ʈ:5�а�����10���� %rhahrskandmltndor",
   "�̹��� �ʼ����� �Դϴ�.\r\n������ ��Ʈ:�������� �ʿ��� �� %rudgjacl",
   "�̹��� �ʼ����� �Դϴ�.\r\n������������ ��Ʈ:�ʺ��� ��ų %ekfvoddltpakfl",
   "�̹��� �ʼ����� �Դϴ�.\r\n������ ��Ʈ:���� %qjqmffld",
   "�̹��� �ʼ����� �Դϴ�.\r\n���� ��Ʈ:���� %ehowl",
   "�̹��� �ʼ����� �Դϴ�.\r\n������������ ��Ʈ:��ų(����) %tpqlwlqmffhdn",
   "�̹��� �ʼ����� �Դϴ�.\r\n�������������� ��Ʈ:���� %dlzkfntmdmlakdxh",
   "�̹��� �ʼ����� �Դϴ�.\r\n���������� ��Ʈ:�Һ������ %ghkdghsdmldltmf",
   "�̹��� �ʼ����� �Դϴ�.\r\n�������� ��Ʈ:�ܰ� %xormrqnco",
   "�̹��� �ʼ����� �Դϴ�.\r\n����������  ��Ʈ:ǥâ %shlwjstnflrja",
   "�̹��� �ʼ����� �Դϴ�.\r\n������ ��Ʈ:���� %ghsxpdlf",
   "�̹��� �ʼ����� �Դϴ�.\r\n�������������� ��Ʈ:�Ͱ��� %apxkfgkxmdldjfld",
   "�̹��� �ʼ����� �Դϴ�.\r\n�������� ��Ʈ:�ϵ� %gkxmdhksem"



);
var prize = new Array(1442012, 1442013, 1442014, 1442015); //���� ������ �ڵ�
var qty = new Array(1,1,1,1,1,1); // ���� ������ ����
var Answer;//��������
var correctAnswer;//��������
var now = 0; //��������
var rewardtext = "\r\n\r\n #fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n #fUI/UIWindow.img/QuestIcon/5/0#\r\n\r\n #fUI/UIWindow.img/QuestIcon/8/0# ";


function start() {
 status = -1;
 action(1, 0, 0);
}

function action(mode, type, selection) {
 if (mode == -1) {
  cm.dispose();
 } else {
  if (mode == 0 && (status == 0 || status == 1 || status == 2)) {
   cm.sendOk("�̷��� ��մ� ��� �����ϴ� �ž�?");
   cm.dispose();
   return;
  }
  else if (mode == 0) {
   cm.sendOk("��մµ� �� �߰��� �׸���?");
   cm.dispose();
   return;
  }
  else if (mode == 1)
   status++;
  else
   status--;
  if (status == 0) {
   cm.sendSimple("�ȳ�? ���� ��� ���� ���߸� ����캸�带 �����ϰ� �ٲ� ?\r\n�ܿ��ε� ����캸��Ÿ�� ��ƾ��� �ȱ׷�?\r\n\r\n#b#L0#����!� ��� �������!#l\r\n#L1#�״���.. ��Ű�� �ʴ°�.#l#k");
  } else if (status == 1) {
      if (selection == 0) {
    cm.sendYesNo("����! ���� ��� �����ϰ� ���´� ��� ��� ���߸� ����캸�带 �����ϰ� �ٲ��� �˾���?");
    } else {
    cm.sendOk("��.. �����Ѱ�? �׷��� ������ �ٲ�� �ٽ� ã�ƿ��ֱ� �ٷ�.");
    cm.dispose();
    }
  } else if (status == 2) {
    cm.sendGetText("ù��° ���� : \r\n"+getQuestion(quiz[Math.floor(Math.random() * quiz.length)]));
  } else if (status == 3) {
    Answer = cm.getText();
   if (Answer == correctAnswer) {
    cm.sendYesNo("#b#h ##k! �¾ұ���! ���� ������ Ǯ���?");
   } else {
    now = (status - 2);
    cm.sendOk("��. #b"+now+"#k��° �������� Ʋ�ȱ���. �ٽ� �����غ����� ���� ���� �ɾ���.");
    cm.dispose();
   }
  } else if (status == 4) {
    cm.sendGetText("�ι�° ���� : \r\n"+getQuestion(quiz[Math.floor(Math.random() * quiz.length)]));
  } else if (status == 5) {Answer = cm.getText();
   if (Answer == correctAnswer) {
    cm.sendYesNo("#b#h ##k! �¾ұ���! ���� ������ Ǯ���?");
   } else {
    now = (status - 2);
    cm.sendOk("��. #b"+now+"#k��° �������� Ʋ�ȱ���. �ٽ� �����غ����� ���� ���� �ɾ���.");
    cm.dispose();
   }
  } else if (status == 6) {
    cm.sendGetText("����° ���� : \r\n"+getQuestion(quiz[Math.floor(Math.random() * quiz.length)]));
          } else if (status == 7) {Answer = cm.getText();
   if (Answer == correctAnswer) {
    cm.sendYesNo("#b#h ##k! �¾ұ���! ���� ������ Ǯ���?");
   } else {
    now = (status - 2);
    cm.sendOk("��. #b"+now+"#k��° �������� Ʋ�ȱ���. �ٽ� �����غ����� ���� ���� �ɾ���.");
    cm.dispose();
   }
  } else if (status == 8) {
    cm.sendGetText("�׹�° ���� : \r\n"+getQuestion(quiz[Math.floor(Math.random() * quiz.length)]));
  } else if (status == 9) {Answer = cm.getText();
   if (Answer == correctAnswer) {
    cm.sendYesNo("#b#h ##k! �¾ұ���! ���� ������ Ǯ���?");
   } else {
    now = (status - 2);
    cm.sendOk("��. #b"+now+"#k��° �������� Ʋ�ȱ���. �ٽ� �����غ����� ���� ���� �ɾ���.");
    cm.dispose();
   }
  } else if (status == 10) {
   cm.sendGetText("�ټ���° ���� : \r\n"+getQuestion(quiz[Math.floor(Math.random() * quiz.length)]));
                 } else if (status == 11) {Answer = cm.getText();
   if (Answer == correctAnswer) {
     cm.sendOk("��� ���豸��! ������ ��߰ڳ�.. ���� ������?"+rewardtext+"100,000 exp\r\n\r\n");
                
   } else {
    
    cm.sendOk("��. �������������� Ʋ�ȱ���. �ƽ����.. �ٽ� �����غ����� ���� ���� �ɾ���.");
    cm.dispose();
   }










  } else if (status == 12) {
     
     var sel = Math.floor(Math.random()*prize.length);
     cm.gainItem(prize[sel],qty[sel]);
     cm.gainExp(1000);
     cm.sendOk("�׷�! �̰� ���ڴ�! \r\n\r\n#i"+prize[sel]+"# #t"+prize[sel]+"#\r\n\r\n��. �? �Ǹ��� ��������?");
     cm.dispose();
  }
 }
}

function getQuestion(Input){
  var quest = Input.split("%");
  var talk = quest[0];
  correctAnswer = quest[1];
  return talk;
}
function getAnswer(Input){
  var quest = Input.split("%");
  var correctAnswer = quest[1];
  return correctAnswer;
}