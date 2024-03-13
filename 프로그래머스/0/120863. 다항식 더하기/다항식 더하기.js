function solution(polynomial) {
    let split_polynomial = polynomial.split(' ');
    let num = 0;
    let x_num = 0;
    for(let i = 0 ; i < split_polynomial.length ; i++){
        //숫자면
        if(!isNaN(split_polynomial[i])){
            num+=Number(split_polynomial[i]);
        }else{
            if(split_polynomial[i] !== '+'){
                if(split_polynomial[i].split('x')[0]) x_num+=Number(split_polynomial[i].split('x')[0]);
                else x_num+=1;
            }
        }
    }
    if(num === 0){
        if(x_num ===1) return 'x';
        else return x_num + 'x';
    }else{
        if(x_num ===1) return 'x + ' + num;
        else if(x_num === 0) return String(num);
        else return x_num + 'x + ' + num;
    }
}