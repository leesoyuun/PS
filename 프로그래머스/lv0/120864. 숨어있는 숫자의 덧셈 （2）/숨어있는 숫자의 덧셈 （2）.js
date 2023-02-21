function solution(my_string) {
    let answer = 0;
    let sub_num = 0;
    for(let i of my_string){
        if(!isNaN(i))
            sub_num+=i;
        else{
            answer+=Number(sub_num)
            sub_num = 0;
        }
    }
    answer+=Number(sub_num)
    return answer
}