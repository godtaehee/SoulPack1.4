/*
 * made by gkskehls
 * 2008.6.24
 * 오토마타를 이용한 영어 -> 한글 변환 제작 by gkskehls
 * 
 * 2008.6.26
 * ? 표시되던것 수정 by gkskehls
 * 
 * 
 * 이 소스에 대한 무단 수정 배포를 허용합니다
 * 단, 제작자와 제작정보는 수정을 금지합니다.
 */

package net.sf.odinms.net.channel.handler;

/**
 *
 * @author Owner
 */
public class KorConvertHandler {

    enum CodeType{chosung, chosung1, jungsung, jongsung, spctext}
    
    public static String KorConvert(String str) {
        StringBuffer sb = new StringBuffer();
        String text = str;
        String temp_str = "";
        for(int i = 0;text.length() > i;i++) {
                 if(text.substring(i, i+1).equals("Y")) { temp_str += "y"; }
            else if(text.substring(i, i+1).equals("U")) { temp_str += "u"; }
            else if(text.substring(i, i+1).equals("I")) { temp_str += "i"; }
            else if(text.substring(i, i+1).equals("A")) { temp_str += "a"; }
            else if(text.substring(i, i+1).equals("S")) { temp_str += "s"; }
            else if(text.substring(i, i+1).equals("D")) { temp_str += "d"; }
            else if(text.substring(i, i+1).equals("F")) { temp_str += "f"; }
            else if(text.substring(i, i+1).equals("G")) { temp_str += "g"; }
            else if(text.substring(i, i+1).equals("H")) { temp_str += "h"; }
            else if(text.substring(i, i+1).equals("J")) { temp_str += "j"; }
            else if(text.substring(i, i+1).equals("K")) { temp_str += "k"; }
            else if(text.substring(i, i+1).equals("L")) { temp_str += "l"; }
            else if(text.substring(i, i+1).equals("Z")) { temp_str += "z"; }
            else if(text.substring(i, i+1).equals("X")) { temp_str += "x"; }
            else if(text.substring(i, i+1).equals("C")) { temp_str += "c"; }
            else if(text.substring(i, i+1).equals("V")) { temp_str += "v"; }
            else if(text.substring(i, i+1).equals("B")) { temp_str += "b"; }
            else if(text.substring(i, i+1).equals("N")) { temp_str += "n"; }
            else if(text.substring(i, i+1).equals("M")) { temp_str += "m"; }
            else { temp_str += (text.substring(i, i+1)); }
        }
        
//        for(int i = 0 ; temp_str.length() > 0 ; i++) {
//            String spcText
//        }

        
        String finText = engToKor(temp_str);    
        for (int i=0;text.length() > i;i++){
            finText += " ";
        }
        return finText;
    }
    /** 
    * 영어를 한글로... 
    */ 
    static String engToKor(String eng) {
        StringBuffer sb = new StringBuffer();
        int initialCode = 0, initialCode1 = 0, medialCode = 0, finalCode = 0, tempCode = 0;
        int tempMedialCode, tempFinalCode;
        for(int i = 0; i < eng.length(); i++){
            //특수문자 추출
            tempCode = getCode(CodeType.spctext, eng.substring(i, i+1));
            if(tempCode == -1){ //초성부분에 자음이 오지 않으면 오면 외자다
                     if(eng.substring(i, i+1).equals("y")) { sb.append("ㅛ"); }
                else if(eng.substring(i, i+1).equals("u")) { sb.append("ㅕ"); }
                else if(eng.substring(i, i+1).equals("i")) { sb.append("ㅑ"); }
                else if(eng.substring(i, i+1).equals("o")) { sb.append("ㅐ"); }
                else if(eng.substring(i, i+1).equals("O")) { sb.append("ㅒ"); }
                else if(eng.substring(i, i+1).equals("p")) { sb.append("ㅔ"); }
                else if(eng.substring(i, i+1).equals("P")) { sb.append("ㅖ"); }
                else if(eng.substring(i, i+1).equals("h")) { sb.append("ㅗ"); }
                else if(eng.substring(i, i+1).equals("j")) { sb.append("ㅓ"); }
                else if(eng.substring(i, i+1).equals("k")) { sb.append("ㅏ"); }
                else if(eng.substring(i, i+1).equals("l")) { sb.append("ㅣ"); }
                else if(eng.substring(i, i+1).equals("b")) { sb.append("ㅠ"); }
                else if(eng.substring(i, i+1).equals("n")) { sb.append("ㅜ"); }
                else if(eng.substring(i, i+1).equals("m")) { sb.append("ㅡ"); }
                else { sb.append(eng.substring(i, i+1)); }
            } else {
                // 외자체크
                if(eng.length() > i+1){ //초성부분에 자음이 오면서 다음부분이 자음이면 외자다
                    //현재 수정해야할부분 
                    //초성부분이 자음이면서 다음부분이 모음이 아니면 외자로 수정한다.
                    //initialCode1 = getCode(eng.substring(i+1, i+2));   
                    initialCode1 = getCode1(eng.substring(i+1, i+2));   
                } else if(eng.length() == i+1){ //마지막 부분이 자음이면 외자다
                    initialCode1 = getCode(eng.substring(i, i+1));   
                }
                if (initialCode1 == 1) {
                    //외자다
                    if(eng.substring(i, i+1).equals("q")) { sb.append("ㅂ"); }
                    else if(eng.substring(i, i+1).equals("Q")) { sb.append("ㅃ"); }
                    else if(eng.substring(i, i+1).equals("w")) { sb.append("ㅈ"); }
                    else if(eng.substring(i, i+1).equals("W")) { sb.append("ㅉ"); }
                    else if(eng.substring(i, i+1).equals("e")) { sb.append("ㄷ"); }
                    else if(eng.substring(i, i+1).equals("E")) { sb.append("ㄸ"); }
                    else if(eng.substring(i, i+1).equals("r")) { sb.append("ㄱ"); }
                    else if(eng.substring(i, i+1).equals("R")) { sb.append("ㄲ"); }
                    else if(eng.substring(i, i+1).equals("t")) { sb.append("ㅅ"); }
                    else if(eng.substring(i, i+1).equals("T")) { sb.append("ㅆ"); }
                    else if(eng.substring(i, i+1).equals("a")) { sb.append("ㅁ"); }
                    else if(eng.substring(i, i+1).equals("s")) { sb.append("ㄴ"); }
                    else if(eng.substring(i, i+1).equals("d")) { sb.append("ㅇ"); }
                    else if(eng.substring(i, i+1).equals("f")) { sb.append("ㄹ"); }
                    else if(eng.substring(i, i+1).equals("g")) { sb.append("ㅎ"); }
                    else if(eng.substring(i, i+1).equals("z")) { sb.append("ㅋ"); }
                    else if(eng.substring(i, i+1).equals("x")) { sb.append("ㅌ"); }
                    else if(eng.substring(i, i+1).equals("c")) { sb.append("ㅊ"); }
                    else if(eng.substring(i, i+1).equals("v")) { sb.append("ㅍ"); }
                } else {
                    if(1==1){
                        // 초성코드 추출
                        initialCode = getCode(CodeType.chosung, eng.substring(i, i+1));   
                        i++; // 다음문자로
                        // 중성코드 추출
                        tempMedialCode = getDoubleMedial(i, eng);   // 두 자로 이루어진 중성코드 추출
                        if(tempMedialCode != -1){       
                            medialCode = tempMedialCode;
                            i += 2;
                        }else{            // 없다면,
                            medialCode = getSingleMedial(i, eng);   // 한 자로 이루어진 중성코드 추출
                            i++;
                        }
                        // 종성코드 추출
                        tempFinalCode = getDoubleFinal(i, eng);    // 두 자로 이루어진 종성코드 추출    
                        if(tempFinalCode != -1){
                            finalCode = tempFinalCode;
                            // 그 다음의 중성 문자에 대한 코드를 추출한다. 
                            tempMedialCode = getSingleMedial(i+2, eng);
                            if( tempMedialCode != -1 ){      // 코드 값이 있을 경우 
                                finalCode = getSingleFinal(i, eng);   // 종성 코드 값을 저장한다.
                            }else{
                                i++;
                            }
                        }else{            // 코드 값이 없을 경우 ,
                            tempMedialCode = getSingleMedial(i+1, eng);  // 그 다음의 중성 문자에 대한 코드 추출. 
                            if(tempMedialCode != -1){      // 그 다음에 중성 문자가 존재할 경우,     
                                finalCode = 0;        // 종성 문자는 없음.
                                i--;     
                            }else{
                                finalCode = getSingleFinal(i, eng);   // 종성 문자 추출
                                if( finalCode == -1 ) {
                                    finalCode = 0;
                                    i--;
                                }
                            }
                        }
                        // 추출한 초성 문자 코드, 중성 문자 코드, 종성 문자 코드를 합한 후 변환하여 스트링버퍼에 넘김
                        sb.append((char)(0xAC00 + initialCode + medialCode + finalCode));
                        //sb.append(" ");
                    }
                }
            }
        }  
        return sb.toString();
    }

    /** 
    * 해당 문자에 따른 코드를 추출한다. 
    * @param type 초성 : chosung, 중성 : jungsung, 종성 : jongsung 구분 
    * @param char 해당 문자 
    */ 
    static int getCode(CodeType type, String c){
    // 초성
    String init = "rRseEfaqQtTdwWczxvg";
    // 중성
    String[] mid = {"k","o","i","O","j","p","u","P","h","hk", "ho","hl","y","n","nj","np", "nl", "b", "m", "ml", "l"};
    // 종성
    String[] fin = {"r", "R", "rt", "s", "sw", "sg", "e", "f", "fr", "fa", "fq", "ft", "fx", "fv", "fg", "a", "q", "qt", "t", "T", "d", "w", "c", "z", "x", "v", "g"};

    switch(type){

        case spctext:
        int spcchk = init.indexOf(c);
        if( spcchk == -1 ) {
            return -1;
        } else {
            return 0;
        }

        case chosung :
            int index = init.indexOf(c);
            if( index != -1 ){
                return index * 21 * 28;
            }
        break;

        case jungsung :
        for(int i = 0; i < mid.length; i++){
            if(mid[i].equals(c)){
                return i * 28;
            }
        }
        break;
        
        case jongsung :
            for(int i = 0; i < fin.length; i++){
                if(fin[i].equals(c)){
                    return i + 1;
                }
            }
            break;
            default:
            System.out.println("잘못된 타입 입니다");
        }
        return -1;
    }

    static int getCode(String c){
        // 외자체크(마지막이 자음)
        String init = "rRseEfaqQtTdwWczxvg";
        int index_solo = init.indexOf(c);
        if( index_solo != -1 ){
            return 1;
        }
    return -1;
    }

    static int getCode1(String c){
        // 외자체크(자음다음 모음이 아님)
        String[] mid = {"k","o","i","O","j","p","u","P","h","hk", "ho","hl","y","n","nj","np", "nl", "b", "m", "ml", "l"};
        int chk_mid = 1;
        for(int i = 0; i < mid.length; i++){
            if(mid[i].equals(c)){
                chk_mid = 0;
            }
        }
        return chk_mid; //있으면 0, 없으면 1을 보낸다
    }

    // 한 자로 된 중성값을 리턴한다
    // 인덱스를 벗어낫다면 -1을 리턴
    static int getSingleMedial(int i, String eng){
        if((i+1) <= eng.length()){
            return getCode(CodeType.jungsung, eng.substring(i, i+1));
            
        }else{
            return -1;
        }
    }
    // 두 자로 된 중성을 체크하고, 있다면 값을 리턴한다.
    // 없으면 리턴값은 -1
    static int getDoubleMedial(int i, String eng){
        int result;
        if((i+2) > eng.length()){
            return -1;
        }else{
            result = getCode(CodeType.jungsung, eng.substring(i, i+2));
            if(result != -1){
                return result;
            }else{
                return -1;
            }
        }
    }
    // 한 자로된 종성값을 리턴한다
    // 인덱스를 벗어낫다면 -1을 리턴
    static int getSingleFinal(int i, String eng){
        if((i+1) <= eng.length()){
            return getCode(CodeType.jongsung, eng.substring(i, i+1));
        }else{
            return -1;
        }
    }

    // 두 자로된 종성을 체크하고, 있다면 값을 리턴한다.
    // 없으면 리턴값은 -1
    static int getDoubleFinal(int i, String eng){
        if((i+2) > eng.length()){
            return -1;
        }else{
            return getCode(CodeType.jongsung, eng.substring(i, i+2));
        }
    }    
    
}
