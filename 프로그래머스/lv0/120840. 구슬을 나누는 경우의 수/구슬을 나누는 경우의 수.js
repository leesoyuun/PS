function solution(balls, share) {
    let up = 1;
    let down1 = 1;
    let down2 = 1;
    for(let i = 1 ; i <= balls; i++){
        up*= i
    }
    for(let j = 1 ; j <= (balls-share); j++){
        down1*= j
    }
    for(let k = 1; k <= share; k++){
        down2*=k
    }
    return Math.round(up/(down1*down2))
}