function solution(letter) {
    let answer = [];
    var morse = {
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'}
            
    let one_letter = letter.split(" ");
    let morse_index = Object.keys(morse);
    for(let i = 0 ; i<one_letter.length; i++){
        for(let j = 0 ; j <morse_index.length;j++){
            if(morse_index[j] === one_letter[i]){
                answer.push(Object.values(morse)[j])
            }
        }
    }

    return answer.join('')
}