/* 
 This file is part of the OdinMS Maple Story Server 
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>  
        Matthias Butz <matze@odinms.de> 
        Jan Christian Meyer <vimes@odinms.de> 
    This program is free software: you can redistribute it and/or modify 
    it under the terms of the GNU Affero General Public License as 
    published by the Free Software Foundation version 3 as published by 
    the Free Software Foundation. You may not use, modify or distribute 
    this program under any other version of the GNU Affero General Public 
    License. 
    This program is distributed in the hope that it will be useful, 
    but WITHOUT ANY WARRANTY; without even the implied warranty of 
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
    GNU Affero General Public License for more details. 
    You should have received a copy of the GNU Affero General Public License 
    along with this program.  If not, see <http://www.gnu.org/licenses/>. 
*/ 
/* Assistant Nancy 
 Warp to bottom (680000210) 
 located in Amoria (680000000) 
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
  if (status >= 2 && mode == 0) { 
   cm.sendOk("Peace out baby"); 
   cm.dispose(); 
   return; 
  } 
  if (mode == 1) 
   status++; 
  else 
   status--; 
  if (status == 0) { 
   cm.sendNext("안녕 결혼하기를 원하는사람같구나. 난 너가 원했으면 해 난 결혼으로 돈을 많이 벌거든~"); 
  } else if (status == 1) { 
   cm.sendNextPrev("음, 들어가려면 대성당 결혼 티켓이 필요해."); 
  } else if (status == 2) { 
   if (cm.haveItem(5251003)) { 
    cm.sendNext("좋아, 너는 티켓이 있구나. 내가 이 아래로 대려다주지.\r\n좋은 결혼식이 되라."); 
    cm.gainItem(5251003,-1); 
     
   } else { 
    cm.sendOk("미안 결혼티켓을 가지고 있지 않네. 캐시샾으로 가거나 지엠들에게 도와달라고 하렴"); 
    status = 9; 
   } 
  } else if (status == 3) { 
   cm.warp(680000210, 2); 
   cm.sendOk("슬픈일이건 기쁜일이건 모두 함께하여라. 서로의 반쪽이 되어라. 나는 너와 너의 아내 또는 남편은 결혼을 하였음을 선고한다.")
   cm.gainItem(1112803,1); 
   cm.gainItem(1050113,1); 
   cm.gainItem(1050114,1); 
   cm.gainItem(1000029,1); 
   cm.gainItem(1081002,1); 
   cm.dispose(); 
  } 
 } 
}
