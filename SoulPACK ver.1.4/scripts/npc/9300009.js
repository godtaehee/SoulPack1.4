/* 
 ���� NPC - XoticStory 
 SMLS-�ѿ������� �� ��
*/ 

var status = -1; 

var correct = 0; 
var questions = Array("â��� �ϴ¹���� �����Դϱ�?","��ڵ� �տ��� �׻� ������ �ٽ��ϱ�?","������ ���� ������ ���ʹ� �����Դϱ�?[Ű���忡�ִ±״��ġ�ÿ�]","������ ������ 5~8�������ߴ� �������� �̸���?","HP.MP�� �ִ�� ����������մϱ�?","���� .��. ��� ���� ��Ե˴ϱ�?","��Ƽ���� �Ѹ���� ���� �ֽ��ϱ�?","�׻� �ѵξ���Ұ���?","�����̵� ���̿����� ������ �����Դϱ�?","�ʺ��ڶ� �����Ҽ��ִ� �ʺ����� ������ ������ ����ϱ��?","[yes,No�����϶�]���������ý��丮�� ��������� 1���� �Ѿ������?"); //Edit Questions If you Wish 
var answers = Array("Alt+Enter","GM","ghsxpdlf","wkznadmlxnrn","30000","dudrnxkfxhl","6","coxldqkd","aksh","5","yes"); // If edited questions, answers must be edited alont with the question position. 
var i; 
var done = Array(false,false,false,false,false,false,false,false,false,false,false); 
var nextq = 1; 

function start() { 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
        return; 
    } else { 
        if (mode == 0) { 
            cm.dispose(); 
        } 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 
                cm.sendNext("�ȳ�? ��?..�����Ǵ����� �ɰŶ�?  �׷� ���� �����״ϱ� ���纼��? ��ǰ?.. �׷��� �ٶ����� �ٸ��� ���� �˾ƺ� ..\r\n\r\n#r������ ����������� �Ǹ� �ִ±״�� ġ�ʽÿ�#k  "); 
                 }else if(status == 1){ 
                 i = Math.floor(Math.random() * 11); 
                  while(done[i] == true){ 
                    i = Math.floor(Math.random() * 11); 
                      if (i == 11) 
                      i = 0; 
                  } 
                  while(done[i] == false){ 
                       if(done[i] == false){ 
                        done[i] = true; 
                        cm.sendGetText(questions[i]); 
                        break; 
                       } 
                  } 
                }else if(status == 2){ 
                  if(cm.getText().equalsIgnoreCase(answers[i])){ 
                      correct++; 
                      nextq++; 
                    if(correct >= questions.length){ 
                      cm.sendOk("���?...�ʴ� ���� ������ �����̾� ..."); 
                      cm.showEffect("quest/party/clear"); 
                  cm.playSound("Party1/Clear"); 
                      cm.dispose(); 
                   }else{ 
                      cm.sendOk("��.. �� ���ϴ°�? ���� �׷��Ը��ϸ� ��..����"+ nextq); 
                      status = 0; 
                      return; 
                   } 
                  }else{ 
                      cm.sendOk("��.. ����Ʋ����? �ʴ� ���� ������ ������ �Ǳ� �۷���!"); 
              cm.showEffect("quest/party/wrong_kor"); 
              cm.playSound("Party1/Failed"); 
                      cm.dispose(); 
                  } 
                } 
       } 
}  