function solution(food) {
    let first = '';
    for(let i = 1 ; i <food.length ; i++){
        first+=String(i).repeat(Math.floor(food[i]/2));
    }
    return first+'0'+[...first].reverse().join('');
}