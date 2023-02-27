function solution(n) {
            let num = Number(n)
            let divide = [];

            for(let i = 1 ; i <= num ; i++){
                if(num % i == 0 ){
                    divide.push(i)
                }
            }
            let total = isPrime(divide).sort((a,b)=>a-b)
            total.shift();
            return total
        }
        function isPrime(number){
            let cnt = 0;
            let answer = []
            for(let i = 0; i <number.length; i++){
                for(let j = 1; j<=number[i];j++){
                    if(number[i] % j == 0){
                        cnt++;
                    }
                }
                if(cnt<=2){
                    answer.push(number[i])
                }
                cnt = 0;
            }
            return answer;
        }