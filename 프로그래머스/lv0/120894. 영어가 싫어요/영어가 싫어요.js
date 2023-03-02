function solution(numbers) {
    let en_num = {zero:'0',one:'1',two:'2',three:'3',four:'4',five:'5',six:'6',seven:'7',eight:'8',nine:'9'}
    let key = Object.keys(en_num)
    let answer = ''
    let total_answer = ''
    for(let i = 0; i < numbers.length;i++){
        answer+=numbers[i]
        if(key.includes(answer)){
            total_answer += en_num[answer]
            answer = ''
        }
    }
    return Number(total_answer)
}