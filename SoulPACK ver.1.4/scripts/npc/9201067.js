/*
제작:케이크
*/
function start() {
 var tmp_str = "#r『소울』#k서버 [게시판's]\r\n";
 tmp_str += "게시판을 #r클릭#k하여 주세요.\r\n#b";
 tmp_str += "#L0##r『소울』#k♥ #d[공지사항]#k#l\r\n";
 tmp_str += "#L1##r『소울』#k♥ #d[한닉공지]#k#l\r\n";
 tmp_str += "#L2##r『소울』#k♥ #d[자유공지]#k#l\r\n";
 tmp_str += "#L3##r『소울』#k♥ #d[썹규칙's]#k#l\r\n";
 tmp_str += "#L4##r『소울』#k♥ #d[서버규정]#k#l\r\n";
 tmp_str += "#L5##r『소울』#k♥ #d[오픈시간]#k#l\r\n";
 tmp_str += "#L6##r『소울』#k♥ #d[운영진's]#k#l\r\n";
 tmp_str += "#L7##r『소울』#k♥ #d[서버배율]#k#l\r\n";
 tmp_str += "#L8##r『소울』#k♥ #d[길드공지]#k#l\r\n";
 tmp_str += "#L9##r『소울』#k♥ #d[질문답변]#k#l\r\n";
 cm.sendSimple (tmp_str);
}

function action(mode, type, selection) {
 cm.dispose();
 if (selection == 0) {
  var str = "#r『소울』#k♥ #d[공지사항]#k\r\n";
  str += "하루에 한번씩 꼭 읽어봐주세요.\r\n";
  str += "1. 카페 접속은 게임 접속과 같은것!\r\n";
  str += "2. 질문하기전에 꼭 질문답변&카페에 꼭 찾아보신뒤 질문.\r\n";
  str += "#r[차후추가]『소울』GM#k";
  cm.sendNext(str)
 } else if (selection == 1) {
  var str = "#r『소울』#k♥ #d[한닉공지]#k\r\n";
  str += "1. 한닉 = 한글 닉네임을 줄인 말입니다.\r\n";
  str += "2. 한닉은 카페 게시판에 신청해주시면 감사하겠습니다.";
  str += "#r[좋은하루]『소울』GM#k";
  cm.sendNext(str)
 } else if (selection == 2) {
  var str = "#r『소울』#k♥ #d[자유공지]#k\r\n";
  str += "이 게시판은 카페에서 프리보드와 같은 활동공간.\r\n";
  str += "#r[내용없음]『소울』GM#k";
  cm.sendNext(str)
 } else if (selection == 3) {
  var str = "#r『소울』#k♥ #d[썹규칙]#k\r\n";
  str += "1. 레벨이 높아지시면 다른분들을 무시하지 않습니다.\r\n";
  str += "2. 이유없이 시비를 걸지 않습니다.\r\n";
  str += "3. 버그는 다알수있으므로 쓰지 않습니다.\r\n";
  cm.sendNext(str)
 } else if (selection == 4) {
  var str = "#r『소울』#k♥ #d[서버규정]#k\r\n";
  str += "1. 욕&싸움&핵&운영자접속기 절대 금합니다.\r\n";
  str += "2. 운영자 사칭도 절대 용납하지 않겠습니다.\r\n";
  str += "3. 질문은 진짜 모르겠다 하는것만 하시길..";
  cm.sendNext(str)
 } else if (selection == 5) {
  var str = "#r『소울』#k♥ #d[오픈시간]#k\r\n";
  str += "저희서버는 ★★시간동안 서버온입니다..\r\n";
  str += "놀토-[매달★번째 ★번째주 토요일]\r\n";
  str += "일토-[매달 ★번째 ★번째주를 제외한 토요일]\r\n";
  str += "평일-[시작]PM 04:30 [종료]PM 11:00\r\n";
  str += "놀토-[시작]AM 10:30 [종료]PM 11:00\r\n";
  str += "일토-[시작]PM 02:30 [종료]PM 11:00\r\n";
  str += "주말-[시작]AM 10:30 [종료]PM 11:00\r\n";
  cm.sendNext(str)
 } else if (selection == 6) {
  var str = "#r『소울』#k♥ #d[운영진]#k\r\n";
  str += "[총]운영자 - 『소울』GM \r\n";
  cm.sendNext(str)
 } else if (selection == 7) {
  var str = "#r『소울』#k♥ #d[서버배율]#k\r\n";
  str += "레벨별 겸험치 입니다\r\n";
  str += "1~10     - 20배\r\n";
  str += "10~30    - 40배\r\n";
  str += "30~70    - 100배\r\n";
  str += "70~120   - 150배\r\n";
  str += "120~200  - 200배";
  cm.sendNext(str)
 } else if (selection == 8) {
  var str = "#r『N.C.S』#k♥ #d[길드공지]#k\r\n";
  str += "1. 길드이름 한글신청은 카페에서 하시길 바랍니다.\r\n";
  str += "2. 카페에 각 길드전용 게시판 제작 해드립니다.\r\n";
  cm.sendNext(str)
 } else if (selection == 9) {
  var str = "#r『N.C.S』#k♥ #d[질문답변]#k\r\n";
  str += "질문 - 프리메이플스토리란?.\r\n";
  str += "답변 - 본섭메이플스토리보다 좀더 쉽고 재미를 느끼기위해서 하는것입니다.\r\n";
  str += "질문 - 서버 배율은?\r\n";
  str += "답변 - 공지사항을 안읽으셧군요!\r\n";
  cm.sendNext(str)
 }
}
