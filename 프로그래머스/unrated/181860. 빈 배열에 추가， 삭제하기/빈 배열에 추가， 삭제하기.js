function solution(arr, flag) {
    var answer = [];
    for(let i = 0 ; i <arr.length ;i++){
        if(flag[i]==true){
            answer.push(...Array(arr[i]*2).fill(arr[i]))
        }else{
            answer.splice(answer.length-arr[i],arr[i])
        }
    }
    return answer;
}
