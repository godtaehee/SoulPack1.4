/*
	Made By : 소희 (jantnic)
	NPC Name: 		Cloy
	NPC Code :		1012005
	Map: 		Victoria Road : Henesys Park 
	Map Code : 	100000200
	Description: 		Pet Master
	Language : Korean
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
	if ((status == 1 && mode == 0) || (status == 5 && mode == 1) || (status == 10 && mode == 1) || (status == 13 && mode == 1) || (status == 15 && mode == 0)) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendNext("펫에 대해 궁금한 것이 있나? 무엇이든지 나에게 물어보게나.");
	} else if (status == 1) {
		cm.sendSimple("#L0#펫에대해 설명해주세요.#l\r\n#L1#펫은 어떻게 키우죠?#l\r\n#L2#펫도 죽나요?#l\r\n#L3#갈색,검은고양이의 명령어는 뭐죠?#l\r\n#L4#갈색강아지의 명령어는 뭐죠?#l\r\n#L5#분홍,흰색토끼의 명령어는 뭐죠?#l\r\n#L6#미니카고의 명령어는 뭐죠?#l\r\n#L7#루돌프의 명령어는 뭐죠?#l\r\n#L8#검은색돼지의 명령어는 뭐죠?#l\r\n#L9#판다의 명령어는 뭐죠?#l\r\n#L10#허스키의 명령어는 뭐죠?#l\r\n#L11#디노보이,디노걸의 명령어는 뭐죠?#l\r\n#L12#원숭이의 명령어는 뭐죠?#l\r\n#L13#터키의 명령어는 뭐죠?#l\r\n#L14#흰색호랑이의 명령어는 뭐죠?#l\r\n#L15#펭귄의 명령어는 뭐죠?#l\r\n#L16#황금색돼지의 명령어는 뭐죠?#l\r\n#L17#로봇의 명령어는 뭐죠?#l\r\n#L18#미니예티의 명령어는 뭐죠?#l\r\n#L19#주니어발록의 명령어는 뭐죠?#l\r\n#L20#아기드래곤의 명령어는 뭐죠?#l\r\n#L21#그린,레드,블루드래곤의 명령어는 뭐죠?#l\r\n#L22#블랙드래곤의 명령어는 뭐죠?#l\r\n#L23#주니어리퍼의 명령어는 뭐죠?#l\r\n#L24#포쿠핀의 명령어는 뭐죠?#l\r\n#L25#스노우맨의 명령어는 뭐죠?#l\r\n#L26#스컹크의 명령어는 뭐죠?#l\r\n#L27#펫 능력치 이전하는법좀 가르쳐주세요.#l");
	} else if (status == 2) {
		if (selection == 0) {
			status = 3;
			cm.sendNext("우선, 펫이란 캐시샵에서 구입할수있지. 펫은 마법의시간으로 90일동안만 살수있다네. 90일이지나면 돌이되버리지. 90일이 지나서 인형이되버리지. 인형이되면 펫은 더이상움직일수가없어. 그리고 펫을 함부로대하면 안되네. 펫이라도 먹이는 꼬박꼬박주며 사랑스럽게 대해줘야한다네 펫을사놓고 무관심하게 대하면 펫도 살고싶지않을게야...");
		} else if (selection == 1) {
			status = 6;
			cm.sendNext("펫을 키우려면 우선 펫먹이란 아이템을 구입해야하네. 펫도 먹이를 먹으면서 움직인다네. 펫에게 먹이를안줄경우 집으로 돌아가버리지.. 집으로돌아가면 나올생각을 안하네. 배가고프니 움직일수가없겠지.. 펫먹이는 헤네시스시장 에가면 Doofus 라는펫상인이있네. 그가 펫먹이를 판다네...");
		} else if (selection == 2) {
			status = 11;
			cm.sendNext("죽음이라... 펫도 마법의시간이 지나면 죽는법이지.. 펫은 구입후 펫을 꺼냇을경우 그시간부터 90일간만 살수있다네. 90일이지나면 인형이되버리지. 인형이되면 펫은 더이상움직일수가없어. 펫이한번죽으면 어떤 신비한 아이템으로 되살릴수있다던데, 하지만 그아이템은 요정만 사용가능하다더군, 그요정은 엘리니아에살고있다던데 나도아직 그요정은 보지를못했네...");
		} else if (selection == 3) {
			cm.sendNext("T#r갈색고양이,검은색고양이#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1~30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#btalk, say, chat#k (Level 10 ~ 30)\r\n#bcutie#k (Level 10 ~ 30)\r\n#bup, stand, rise#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 4) {
			cm.sendNext("#r갈색강아지#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, baddog, dummy#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1~30)\r\n#bpee#k (Level 1 ~ 30)\r\n#btalk, say, chat#k (Level 10 ~ 30)\r\n#bdown#k (Level 10 ~ 30)\r\n#bup, stand, rise#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 5) {
			cm.sendNext("#r분홍색토끼,흰색토끼#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bup, stand, rise#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1~30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#btalk, say, chat#k (Level 10 ~ 30)\r\n#bhug#k (Level 10 ~ 30)\r\n#bsleep, sleepy, gotobed#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 6) {
			cm.sendNext("#r미니카고#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bup, stand, rise#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1~30)\r\n#bpee#k (Level 1 ~ 30)\r\n#btalk, say, chat#k (Level 10 ~ 30)\r\n#bthelook, charisma#k (Level 10 ~ 30)\r\n#bdown#k (Level 10 ~ 30)\r\n#bgoodboy, goodgirl#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 7) {
			cm.sendNext("#r루돌프#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bup, stand#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#bmerryxmas, merrychristmas#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1~30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#btalk, say, chat#k (Level 11 ~ 30)\r\n#blonely, alone#k (Level 11 ~ 30)\r\n#bcutie#k (Level 11 ~ 30)\r\n#bmush, go#k (Level 21 ~ 30)");
			cm.dispose();
		} else if (selection == 8) {
			cm.sendNext("#r검은색돼지#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1~30)\r\n#bhand#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bsmile#k (Level 10 ~ 30)\r\n#bthelook, charisma#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 9) {
			cm.sendNext("#r판다#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bchill, relax#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bup, stand, rise#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bletsplay#k (Level 10 ~ 30)\r\n#bmeh, bleh#k (Level 10 ~ 30)\r\n#bsleep#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 10) {
			cm.sendNext("#r허스키#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, baddog, dummy#k (Level 1 ~ 30)\r\n#bhand#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bdown#k (Level 10 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bup, stand, rise#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 11) {
			cm.sendNext("#r디노보이,디노걸#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#bsmile, laugh#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bcutie#k (Level 10 ~ 30)\r\n#bsleep, nap, sleepy#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 12) {
			cm.sendNext("#r원숭이#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#brest#k (Level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (Level 1 ~ 30)\r\n#bpee#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bup, stand#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bplay#k (Level 10 ~ 30)\r\n#bmelong#k (Level 10 ~ 30)\r\n#bsleep, gotobed, sleepy#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 13) {
			cm.sendNext("#r터키#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bno, rudeboy, mischief#k (Level 1 ~ 30)\r\n#bstupid#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bup, stand#k (Level 1 ~ 30)\r\n#btalk, chat, gobble#k (Level 10 ~ 30)\r\n#byes, goodboy#k (Level 10 ~ 30)\r\n#bsleepy, birdnap, doze#k (Level 20 ~ 30)\r\n#bbirdeye, thanksgiving, fly, friedbird, imhungry#k (Level 30)");
			cm.dispose();
		} else if (selection == 14) {
			cm.sendNext("#r흰색호랑이#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#brest, chill#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bactsad, sadlook#k (Level 10 ~ 30)\r\n#bwait#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 15) {
			cm.sendNext("#r펭귄#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#bup, stand, rise#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 10 ~ 30)\r\n#bhug, hugme#k (Level 10 ~ 30)\r\n#bwing, hand#k (Level 10 ~ 30)\r\n#bsleep#k (Level 20 ~ 30)\r\n#bkiss, smooch, muah#k (Level 20 ~ 30)\r\n#bfly#k (Level 20 ~ 30)\r\n#bcute, adorable#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 16) {
			cm.sendNext("#r황금색돼지#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 11 ~ 30)\r\n#bloveme, hugme#k (Level 11 ~ 30)\r\n#bsleep, sleepy, gotobed#k (Level 21 ~ 30)\r\n#bignore / impressed / outofhere#k (Level 21 ~ 30)\r\n#broll, showmethemoney#k (Level 21 ~ 30)");
			cm.dispose();
		} else if (selection == 17) {
			cm.sendNext("#r로봇#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bup, stand, rise#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#bbad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#battack, charge#k (Level 1 ~ 30)\r\n#biloveyou#k (Level 1 ~ 30)\r\n#bgood, thelook, charisma#k (Level 11 ~ 30)\r\n#bspeack, talk, chat, say#k (Level 11 ~ 30)\r\n#bdisguise, change, transform#k (Level 11 ~ 30)");
			cm.dispose();
		} else if (selection == 18) {
			cm.sendNext("#r미니예티#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad, no, badboy, badgirl#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#bdance, boogie, shakeit#k (Level 1 ~ 30)\r\n#bcute, cutie, pretty, adorable#k (Level 1 ~ 30)\r\n#biloveyou, likeyou, mylove#k (Level 1 ~ 30)\r\n#btalk, chat, say#k (Level 11 ~ 30)\r\n#bsleep, nap, sleepy, gotobed#k (Level 11 ~ 30)");
			cm.dispose();
		} else if (selection == 19) {
			cm.sendNext("#r주니어발록#k의 명령어를 알려주세요.\r\n#bliedown#k (Level 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (Level 1 ~ 30)\r\n#biloveyou|mylove|likeyou#k (Level 1 ~ 30)\r\n#bcute|cutie|pretty|adorable#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#bsmirk|crooked|laugh#k (Level 1 ~ 30)\r\n#bmelong#k (Level 11 ~ 30)\r\n#bgood|thelook|charisma#k (Level 11 ~ 30)\r\n#bspeak|talk|chat|say#k (Level 11 ~ 30)\r\n#bsleep|nap|sleepy#k (Level 11 ~ 30)\r\n#bgas#k (Level 21 ~ 30)");
			cm.dispose();
		} else if (selection == 20) {
			cm.sendNext("#r아기드래곤#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (Level 1 ~ 30)\r\n#biloveyou|loveyou#k (Level 1 ~ 30)\r\n#bpoop#k (Level 1 ~ 30)\r\n#bstupid|ihateyou|dummy#k (Level 1 ~ 30)\r\n#bcutie#k (Level 11 ~ 30)\r\n#btalk|chat|say#k (Level 11 ~ 30)\r\n#bsleep|sleepy|gotobed#k (Level 11 ~ 30)");
			cm.dispose();
		} else if (selection == 21) {
			cm.sendNext("#r레드,블루,그린드래곤#k의 명령어를 알려주세요.\r\n#bsit#k (Level 15 ~ 30)\r\n#bno|bad|badgirl|badboy#k (Level 15 ~ 30)\r\n#biloveyou|loveyou#k (Level 15 ~ 30)\r\n#bpoop#k (Level 15 ~ 30)\r\n#bstupid|ihateyou|dummy#k (Level 15 ~ 30)\r\n#btalk|chat|say#k (Level 15 ~ 30)\r\n#bsleep|sleepy|gotobed#k (Level 15 ~ 30)\r\n#bchange#k (Level 21 ~ 30)");
			cm.dispose();
		} else if (selection == 22) {
			cm.sendNext("#r블랙드래곤#k의 명령어를 알려주세요.\r\n#bsit#k (Level 15 ~ 30)\r\n#bno|bad|badgirl|badboy#k (Level 15 ~ 30)\r\n#biloveyou|loveyou#k (Level 15 ~ 30)\r\n#bpoop#k (Level 15 ~ 30)\r\n#bstupid|ihateyou|dummy#k (Level 15 ~ 30)\r\n#btalk|chat|say#k (Level 15 ~ 30)\r\n#bsleep|sleepy|gotobed#k (Level 15 ~ 30)\r\n#bcutie, change#k (Level 21 ~ 30)");
			cm.dispose();
		} else if (selection == 23) {
			cm.sendNext("#r주니어리퍼#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (Level 1 ~ 30)\r\n#bplaydead, poop#k (Level 1 ~ 30)\r\n#btalk|chat|say#k (Level 1 ~ 30)\r\n#biloveyou, hug#k (Level 1 ~ 30)\r\n#bsmellmyfeet, rockout, boo#k (Level 1 ~ 30)\r\n#btrickortreat#k (Level 1 ~ 30)\r\n#bmonstermash#k (Level 1 ~ 30)");
			cm.dispose();
		} else if (selection == 24) {
			cm.sendNext("#r포쿠핀#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bno|bad|badgirl|badboy#k (Level 1 ~ 30)\r\n#biloveyou|hug|goodboy#k (Level 1 ~ 30)\r\n#btalk|chat|say#k (Level 1 ~ 30)\r\n#bcushion|sleep|knit|poop#k (Level 1 ~ 30)\r\n#bcomb|beach#k (Level 10 ~ 30)\r\n#btreeninja#k (Level 20 ~ 30)\r\n#bdart#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 25) {
			cm.sendNext("#r스노우맨#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bstupid, ihateyou, dummy#k (Level 1 ~ 30)\r\n#bloveyou, mylove, ilikeyou#k (Level 1 ~ 30)\r\n#bmerrychristmas#k (Level 1 ~ 30)\r\n#bcutie, adorable, cute, pretty#k (Level 1 ~ 30)\r\n#bcomb, beach/bad, no, badgirl, badboy#k (Level 1 ~ 30)\r\n#btalk, chat, say/sleep, sleepy, gotobed#k (Level 10 ~ 30)\r\n#bchang#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 26) {
			cm.sendNext("#r스컹크#k의 명령어를 알려주세요.\r\n#bsit#k (Level 1 ~ 30)\r\n#bbad/no/badgirl/badboy#k (Level 1 ~ 30)\r\n#brestandrelax, poop#k (Level 1 ~ 30)\r\n#btalk/chat/say, iloveyou#k (Level 1 ~ 30)\r\n#bsnuggle/hug, sleep, goodboy#k (Level 1 ~ 30)\r\n#bfatty, blind, badbreath#k (Level 10 ~ 30)\r\n#bsuitup, bringthefunk#k (Level 20 ~ 30)");
			cm.dispose();
		} else if (selection == 27) {
			status = 14;
			cm.sendNext("펫 능력치 이전하는법을 알고싶은게냐? 펫의레벨,스텟포인트를 이전할수있지. 250,000메소만 낸다면 주문서를 건내주지. 잊은게있었네. 이주문서는 새펫에게만 가능한걸로 알고있다만...");
		}
	} else if (status == 3) {
		cm.sendNext("이제 알겠나? 펫에대해 궁금한게있다면 뭐든물어보라고!");
	} else if (status == 4) {
		cm.sendNextPrev("이제 알겠나? 펫에대해 궁금한게있다면 뭐든물어보라고!");
	} else if (status == 5) {
		cm.sendNextPrev("이제 알겠나? 펫에대해 궁금한게있다면 뭐든물어보라고!");
	} else if (status == 6) {
		cm.sendNext("이제 알겠나? 펫에대해 궁금한게있다면 뭐든물어보라고!");
	} else if (status == 7) {
		cm.sendNextPrev("이제 알겠나? 펫에대해 궁금한게있다면 뭐든물어보라고!");
	} else if (status == 8) {
		cm.sendNextPrev("이제 알겠나? 펫에대해 궁금한게있다면 뭐든물어보라고!");
	} else if (status == 9) {
		cm.sendNextPrev("이제 알겠나? 펫에대해 궁금한게있다면 뭐든물어보라고!");
	} else if (status == 10) {
		cm.sendNextPrev("이제 알겠나? 펫에대해 궁금한게있다면 뭐든물어보라고!");
	} else if (status == 11) {
		cm.sendNext("이제 알겠나? 펫에대해 궁금한게있다면 뭐든물어보라고!");
	} else if (status == 12) {
		cm.sendNextPrev("이제 알겠나? 펫에대해 궁금한게있다면 뭐든물어보라고!");
	} else if (status == 13) {
		cm.sendNextPrev("이제 알겠나? 펫에대해 궁금한게있다면 뭐든물어보라고!");
	} else if (status == 15) {
		cm.sendYesNo("펫능력치 이전주문서를 갖고싶다면 250,000 메소만 낸다면 건내주지. 펫능력치 이전주문서를 살건가?");
	} else if (status == 16) {
		if (cm.getMeso() < 250000) {
			cm.sendOk("메소가부족한거같구려, 인벤토리에 250,000메소가 있는지 확인해보시게나.");
		} else {
			cm.gainMeso(-250000);
			cm.gainItem(4160011, 1);
			}
			cm.dispose();
		}
	}
}