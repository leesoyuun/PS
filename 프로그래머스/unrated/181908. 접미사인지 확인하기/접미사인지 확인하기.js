function solution(my_string, is_suffix) {
    let result = 0;
    let len = my_string.length;
    for(let i = 0; i <len;i++){
        if(my_string.slice(i,len) === is_suffix){
            result+=1;
        }
    }
    return result
}