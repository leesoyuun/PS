function solution(spell, dic) {
    let cnt = 0;
    for(let i = 0 ; i< dic.length; i++){
        spell.map((ele)=> dic[i].includes(ele) ? cnt++ : 0);
        if(cnt === spell.length){
            return 1;
        }
        else
            cnt = 0;
    }
    return 2;

}