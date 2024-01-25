function solution(wallpaper) {
    let answer = [0,0,0,0];
    let min = 100;
    let max = -100;
    let sharpMin = 100;
    let sharpMax = -100;
    for(let i = 0 ; i < wallpaper.length ; i++){
        if(wallpaper[i].includes('#')){
            if(sharpMin > i) sharpMin = i;
            if(sharpMax < i) sharpMax = i;
        }
        for(let j = 0 ; j < wallpaper[i].length ; j++){
            if(wallpaper[i][j] == '#'){
                if(min > j) min = j;
                if(max < j) max = j;
            }
        }
    }
    return [sharpMin,min,sharpMax+1,max+1];
}