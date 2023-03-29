function solution(numbers) {
    let max_num = -9999999999;
    for(let i = 0 ; i <numbers.length;i++){
       for(let j = i+1; j <numbers.length ; j++){
           if(numbers[i]*numbers[j]>max_num)
               max_num = numbers[i]*numbers[j]
       }
    }
    return max_num;
}