// 수정자 단테(qkfka32@naver.com)
var status = 0;
var beauty = 0;
var mface = Array(20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024);
var fface = Array(21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21012, 21013, 21020, 21021, 21022, 21023, 21024);
var mhair = Array(30000, 30020, 30030, 30040, 30050, 30060, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30700, 30710, 30720, 30780, 30790, 30800, 30810, 30730, 30760, 30690, 30770, 30750, 30740);
//var fhair = Array(31010, 31020, 31030, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31400, 31410, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31590, 31610, 31620, 31630, 31640, 31650, 31680, 31690, 31710, 31720, 31730, 31740, 31750, 31760);
var fhair = Array(31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31410, 31420, 31430, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31570, 31580, 31590, 31600, 31610, 31620, 31630, 31640, 31650, 31670, 31680, 31690, 31700, 31710, 31720, 31730, 31740, 31750, 31760, 31770, 31790, 31800);
var skin = Array(0, 1, 2, 3, 4);
var mcolors = Array();
var fcolors = Array();
var mhairnew = Array();
var fhairnew = Array();
var mfacenew = Array();
var ffacenew = Array();
var mhaircolor = Array();
var fhaircolor = Array();
var mbeauty = 0;
var fbeauty = 0;



function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if(cm.getPlayer() == false) {
							cm.dispose();
						} else {
                cm.sendSimple ("선택해 주세요\r\n#L0#인종 바꾸기#l\r\n#L5#성별 바꾸기#l\r\n#L1##b머리 모양#k 바꾸기#l\r\n#L2##b머리 색상#k 바꾸기#l\r\n#L3##r눈 모양#k 바꾸기#l\r\n#L4##r눈 색상#k 바꾸기#l");
            }
        } else if (status == 1) {
          if (selection == 0) {
            beauty = 1;
						cm.sendStyle("선택해 주세요", skin);
          } else if (selection == 1) {
              if(cm.getChar().getGender() == 0) {
              	mbeauty = 2;
								mfacenew = Array();
								for(var i = 0; i < mhair.length; i++) {
									mhairnew.push(mhair[i] + parseInt(cm.getChar().getHair() % 10));
								}
								cm.sendStyle("선택해 주세요", mhair);                  
              }
              else {
              	fbeauty = 2;
								ffacenew = Array();
								for(var i2 = 0; i2 < fhair.length; i2++) {
									fhairnew.push(fhair[i2] + parseInt(cm.getChar().getHair() % 10));
								}
								cm.sendStyle("선택해 주세요", fhair);                   
              }
       } else if (selection == 2) {
             if(cm.getChar().getGender() == 0) {
                 mbeauty = 3;
                 mhaircolor = Array();
								 var current = parseInt(cm.getChar().getHair() /10)*10;
								 for(var i = 0; i < 8; i++) {
								 	mhaircolor.push(current + i);
								 }
								 cm.sendStyle("선택해 주세요", mhaircolor);
             } 
             else {
                 fbeauty = 3;
                 fhaircolor = Array();
								 var current = parseInt(cm.getChar().getHair() /10)*10;
								 for(var i2 = 0; i2 < 8; i2++) {
								 	fhaircolor.push(current + i2);
								 }
								 cm.sendStyle("선택해 주세요", fhaircolor);                 
             }
          }
          else if (selection == 3) {
              if(cm.getChar().getGender() == 0) {
              	mbeauty = 4;
								mfacenew = Array();
								for(var i = 0; i < mface.length; i++) {
									mfacenew.push(mface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
								}
								cm.sendStyle("선택해 주세요", mfacenew);                  
              } else {
              	fbeauty = 4;
								ffacenew = Array();
								for(var i2 = 0; i2 < fface.length; i2++) {
									ffacenew.push(fface[i2] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
								}
								cm.sendStyle("선택해 주세요", ffacenew);                   
              }
          } else if (selection == 4) {
              if(cm.getChar().getGender() == 0) {
                    mbeauty = 5;
                    var current = cm.getChar().getFace() % 100 + 20000;
                    mcolors = Array();
                    mcolors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                    cm.sendStyle("선택해 주세요", mcolors);   
              }
              else {
                    fbeauty = 5;
                    var current = cm.getChar().getFace() % 100 + 21000;
                    fcolors = Array();
                    fcolors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                    cm.sendStyle("선택해 주세요", fcolors);                     
              }
          } else if (selection == 5) {
          	cm.changeSex();
          	if(cm.getGender() == 0) {
          		cm.setHair(30080);
          		cm.setFace(20001);
          	} else {
          		cm.setHair(31000);
          		cm.setFace(21001);
          	}
          	cm.reloadChar();
          	cm.dispose();
          }
       }
       else if (status == 2) {
           cm.dispose();
           if (beauty == 1) {
               cm.setSkin(skin[selection]);
           }
           if (mbeauty == 2) {
               cm.setHair(mhairnew[selection]);               
           }
           if (fbeauty == 2) {
               cm.setHair(fhairnew[selection]);               
           }
           if (mbeauty == 3) {
               cm.setHair(mhaircolor[selection]);
           }
           if (fbeauty == 3) {
               cm.setHair(fhaircolor[selection]);
           }
           if (mbeauty == 4) {
               cm.setFace(mfacenew[selection]);
           }
           if (fbeauty == 4) {
               cm.setFace(ffacenew[selection]);               
           }
           if (mbeauty == 5) {
               cm.setFace(mcolors[selection]);
           }
           if (fbeauty == 5) {
               cm.setFace(fcolors[selection]);               
           }
       }
    }
  }