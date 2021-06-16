importPackage(net.sf.odinms.client);


var status = 0;
var quiz = new Array(  


   "Brindisi서버의 경험치 배율은?%100",
   "빨간 포션이 채워주는 HP의 양은?%50",
   "우리서버가 오픈된날은 12월 몇일인가요?%24",
   "TRADE 버튼을 누루면 어디로 이동이 됩니까?%wkdbtlwkddlqrn",
   "브린디지 서버의 드랍률은 몇배인가요?%3",
   "이번엔 초성퀴즈 입니다.\r\nㄱㅁㄴㅁㅇㅅㅇ 힌트:5분간마력10증가 %rhahrskandmltndor",
   "이번엔 초성퀴즈 입니다.\r\nㄱㅎㅊ 힌트:레벨업시 필요한 것 %rudgjacl",
   "이번엔 초성퀴즈 입니다.\r\nㄷㅍㅇㅅㅁㄹ 힌트:초보자 스킬 %ekfvoddltpakfl",
   "이번엔 초성퀴즈 입니다.\r\nㅂㅂㄹ 힌트:몬스터 %qjqmffld",
   "이번엔 초성퀴즈 입니다.\r\nㄷㅈ 힌트:몬스터 %ehowl",
   "이번엔 초성퀴즈 입니다.\r\nㅅㅂㅈㅂㄹㅇ 힌트:스킬(시프) %tpqlwlqmffhdn",
   "이번엔 초성퀴즈 입니다.\r\nㅇㅋㄹㅅㅇㅁㅌ 힌트:망토 %dlzkfntmdmlakdxh",
   "이번엔 초성퀴즈 입니다.\r\nㅎㅎㅇㅇㅅ 힌트:소비아이템 %ghkdghsdmldltmf",
   "이번엔 초성퀴즈 입니다.\r\nㅌㄱㅂㅊ 힌트:단검 %xormrqnco",
   "이번엔 초성퀴즈 입니다.\r\nㄴㅈㅅㄹㄱ  힌트:표창 %shlwjstnflrja",
   "이번엔 초성퀴즈 입니다.\r\nㅎㅌㅇ 힌트:몬스터 %ghsxpdlf",
   "이번엔 초성퀴즈 입니다.\r\nㅁㅌㅎㅌㅇㅇㄹ 힌트:귀걸이 %apxkfgkxmdldjfld",
   "이번엔 초성퀴즈 입니다.\r\nㅎㅌㅇㄷ 힌트:완드 %gkxmdhksem"



);
var prize = new Array(1442012, 1442013, 1442014, 1442015); //보상 아이템 코드
var qty = new Array(1,1,1,1,1,1); // 보상 아이템 갯수
var Answer;//변수정의
var correctAnswer;//변수정의
var now = 0; //변수정의
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
   cm.sendOk("이렇게 재밌는 퀴즈를 포기하는 거야?");
   cm.dispose();
   return;
  }
  else if (mode == 0) {
   cm.sendOk("재밌는데 왜 중간에 그만둬?");
   cm.dispose();
   return;
  }
  else if (mode == 1)
   status++;
  else
   status--;
  if (status == 0) {
   cm.sendSimple("안녕? 내가 퀴즈를 내서 맞추면 스노우보드를 랜덤하게 줄께 ?\r\n겨울인데 스노우보드타고 놀아야지 안그래?\r\n\r\n#b#L0#좋아!어서 퀴즈를 내보라고!#l\r\n#L1#그다지.. 내키지 않는걸.#l#k");
  } else if (status == 1) {
      if (selection == 0) {
    cm.sendYesNo("좋아! 내가 퀴즈를 랜덤하게 낼태니 퀴즈를 모두 맞추면 스노우보드를 랜덤하게 줄꺼야 알았지?");
    } else {
    cm.sendOk("음.. 서운한걸? 그래두 마음이 바뀌면 다시 찾아와주길 바래.");
    cm.dispose();
    }
  } else if (status == 2) {
    cm.sendGetText("첫번째 문제 : \r\n"+getQuestion(quiz[Math.floor(Math.random() * quiz.length)]));
  } else if (status == 3) {
    Answer = cm.getText();
   if (Answer == correctAnswer) {
    cm.sendYesNo("#b#h ##k! 맞았구나! 다음 문제를 풀어볼래?");
   } else {
    now = (status - 2);
    cm.sendOk("음. #b"+now+"#k번째 문제에서 틀렸구나. 다시 도전해보려면 내게 말을 걸어줘.");
    cm.dispose();
   }
  } else if (status == 4) {
    cm.sendGetText("두번째 문제 : \r\n"+getQuestion(quiz[Math.floor(Math.random() * quiz.length)]));
  } else if (status == 5) {Answer = cm.getText();
   if (Answer == correctAnswer) {
    cm.sendYesNo("#b#h ##k! 맞았구나! 다음 문제를 풀어볼래?");
   } else {
    now = (status - 2);
    cm.sendOk("음. #b"+now+"#k번째 문제에서 틀렸구나. 다시 도전해보려면 내게 말을 걸어줘.");
    cm.dispose();
   }
  } else if (status == 6) {
    cm.sendGetText("세번째 문제 : \r\n"+getQuestion(quiz[Math.floor(Math.random() * quiz.length)]));
          } else if (status == 7) {Answer = cm.getText();
   if (Answer == correctAnswer) {
    cm.sendYesNo("#b#h ##k! 맞았구나! 다음 문제를 풀어볼래?");
   } else {
    now = (status - 2);
    cm.sendOk("음. #b"+now+"#k번째 문제에서 틀렸구나. 다시 도전해보려면 내게 말을 걸어줘.");
    cm.dispose();
   }
  } else if (status == 8) {
    cm.sendGetText("네번째 문제 : \r\n"+getQuestion(quiz[Math.floor(Math.random() * quiz.length)]));
  } else if (status == 9) {Answer = cm.getText();
   if (Answer == correctAnswer) {
    cm.sendYesNo("#b#h ##k! 맞았구나! 다음 문제를 풀어볼래?");
   } else {
    now = (status - 2);
    cm.sendOk("음. #b"+now+"#k번째 문제에서 틀렸구나. 다시 도전해보려면 내게 말을 걸어줘.");
    cm.dispose();
   }
  } else if (status == 10) {
   cm.sendGetText("다섯번째 문제 : \r\n"+getQuestion(quiz[Math.floor(Math.random() * quiz.length)]));
                 } else if (status == 11) {Answer = cm.getText();
   if (Answer == correctAnswer) {
     cm.sendOk("모두 맞췄구나! 보상을 줘야겠네.. 뭐가 좋을까?"+rewardtext+"100,000 exp\r\n\r\n");
                
   } else {
    
    cm.sendOk("음. 마지막문제에서 틀렸구나. 아쉬운걸.. 다시 도전해보려면 내게 말을 걸어줘.");
    cm.dispose();
   }










  } else if (status == 12) {
     
     var sel = Math.floor(Math.random()*prize.length);
     cm.gainItem(prize[sel],qty[sel]);
     cm.gainExp(1000);
     cm.sendOk("그래! 이게 좋겠다! \r\n\r\n#i"+prize[sel]+"# #t"+prize[sel]+"#\r\n\r\n자. 어때? 훌륭한 물건이지?");
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