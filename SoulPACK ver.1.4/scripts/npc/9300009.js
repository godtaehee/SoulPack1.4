/* 
 퀴즈 NPC - XoticStory 
 SMLS-한연연구소 웃 자
*/ 

var status = -1; 

var correct = 0; 
var questions = Array("창모드 하는방법은 무엇입니까?","운영자들 앞에는 항상 무엇이 붙습니까?","몬스터중 가장 강력한 몬스터는 무엇입니까?[키보드에있는그대로치시오]","자쿰을 잡으면 5~8개까지뜨는 아이템의 이름은?","HP.MP의 최대는 몇까지가능합니까?","버그 .핵. 비방 사용시 어떻게됩니까?","파티에는 총몇명이 들어갈수 있습니까?","항상 켜두어야할것은?","달팽이들 사이에서의 보스는 무엇입니까?","초보자때 선택할수있는 초보자의 직업의 개수는 몇가지일까요?","[yes,No응답하라]프리메이플스토리가 만들어진지 1년이 넘었을까요?"); //Edit Questions If you Wish 
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
                cm.sendNext("안녕? 뭐?..퀴즈의달인이 될거라구?  그럼 퀴즈 내줄테니깐 맞춰볼래? 상품?.. 그런거 바랄꺼면 다른대 가서 알아봐 ..\r\n\r\n#r문제는 램덤으로출시 되며 있는그대로 치십시오#k  "); 
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
                      cm.sendOk("우와?...너는 이제 퀴즈의 달인이야 ..."); 
                      cm.showEffect("quest/party/clear"); 
                  cm.playSound("Party1/Clear"); 
                      cm.dispose(); 
                   }else{ 
                      cm.sendOk("엄.. 좀 잘하는걸? 꼐속 그렇게만하면 돼..문제"+ nextq); 
                      status = 0; 
                      return; 
                   } 
                  }else{ 
                      cm.sendOk("땡.. 벌써틀리니? 너는 아직 퀴즈의 달인이 되기 글렀어!"); 
              cm.showEffect("quest/party/wrong_kor"); 
              cm.playSound("Party1/Failed"); 
                      cm.dispose(); 
                  } 
                } 
       } 
}  