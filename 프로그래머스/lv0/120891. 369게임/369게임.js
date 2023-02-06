function solution(order) {
    var answer = 0;
    var test = []
    var order_num = [...String(order)];
    for(let i of order_num){
        if(i.includes('3') || i.includes('6') || i.includes('9')){
            answer++;
        }
    }
    return answer;
    
}