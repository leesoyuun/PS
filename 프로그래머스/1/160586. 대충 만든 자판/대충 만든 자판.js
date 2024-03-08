function solution(keymap, targets) {
    let answer = [];
    targets.forEach((x)=>{
        let press = 0;
        for(let i = 0 ; i < x.length ; i++){
            let cnt = Infinity;
            keymap.forEach((k)=> {
                let idx = k.indexOf(x[i]);
                if(idx > -1){
                    cnt = Math.min(cnt,idx+1);
                }
            });
            press += cnt;
        }
        answer.push(press);
    })
    answer = answer.map(val => val === Infinity ? -1 : val);
    return answer;
}