function solution(my_string) {
    let blank_ar = new Array(52).fill(0); // 26
    let BASIC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',"Q",'R','S','T','U','V','W','X','Y','Z'];
    let basic = BASIC.join(',').toLowerCase().split(',');
    
    for(let i = 0 ; i < my_string.length ; i++){
        if(my_string[i] === my_string[i].toLowerCase()){
            //소문자일때는 인덱스 26번째 부터
            ++blank_ar[basic.indexOf(my_string[i])+26];
        }else{
            ++blank_ar[BASIC.indexOf(my_string[i])];
        }
    }
    return blank_ar
    
}