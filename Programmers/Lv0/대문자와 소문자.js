/*function solution(my_string) {
    var answer = '';
    for(let i of my_string){
        if(i == i.toUpperCase()){
            answer+=i.toLowerCase()
        }else{
            answer+=i.toUpperCase()
        }
    }
    return answer;
}*/

function solution(my_string) {
    return my_string.split('').map(n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()).join('')
}