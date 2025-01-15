function findIndex(number){
    const KEY_PAID_NUM = {
        1: [0,0],
        2: [0,1],
        3: [0,2],
        4: [1,0],
        5: [1,1],
        6: [1,2],
        7: [2,0],
        8: [2,1],
        9: [2,2],
        0: [3,1],
        '*': [3,0],
        '#': [3,2]
    }
    return KEY_PAID_NUM[number]
}

function solution(numbers, hand) {
    let answer = [];
    let left_hand_position = '*';
    let right_hand_position = '#';
    for(let i = 0 ; i < numbers.length ; i++ ){
        if ([1, 4, 7].includes(numbers[i])){
            left_hand_position = numbers[i];
            answer.push('L');
        }else if([3, 6, 9].includes(numbers[i])){
            right_hand_position = numbers[i];
            answer.push('R');
        }else{
            const findNumPosition = findIndex(numbers[i]);
            const findLeftPosition = findIndex(left_hand_position);
            const findRightPosition = findIndex(right_hand_position);
            
            const leftDistance = Math.abs(findNumPosition[0] - findLeftPosition[0]) + Math.abs(findNumPosition[1] - findLeftPosition[1]);
            const rightDistance = Math.abs(Number(findNumPosition[0]) - Number(findRightPosition[0])) + Math.abs(Number(findNumPosition[1]) -Number(findRightPosition[1]));
            
            if(leftDistance === rightDistance){
                if(hand === "right"){
                    right_hand_position = numbers[i];
                    answer.push('R');
                } else{
                    left_hand_position = numbers[i];
                    answer.push('L');
                }    
            }
            
            if(leftDistance > rightDistance){
                right_hand_position = numbers[i];
                 answer.push('R');
            }else if(leftDistance < rightDistance){
                left_hand_position = numbers[i];
                answer.push('L');
            }
           
        }
    }
    return answer.join('')
}