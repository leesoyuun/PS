function solution(myString, pat) {
    let new_str = '';
    for(let i of myString){
        if(i === 'A')
            new_str += 'B';
        if(i === 'B')
            new_str += 'A';
    }
    return new_str.includes(pat) ? 1 : 0;
}