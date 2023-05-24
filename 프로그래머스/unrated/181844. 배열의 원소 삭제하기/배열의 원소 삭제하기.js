function solution(arr, delete_list) {
    let tr_fal = arr.map((cur) => delete_list.includes(cur))
    let answer = [];
    for(let i = 0 ; i <tr_fal.length ; i++){
        if(tr_fal[i] === false)
            answer.push(arr[i])
            
    }
    
    
    return answer;
}