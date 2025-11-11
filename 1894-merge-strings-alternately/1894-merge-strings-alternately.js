/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 
var mergeAlternately = function(word1, word2) {
    const smallWord = word1.length <= word2.length ? word1 : word2;
    const largeWord = word1.length > word2.length ? word1 : word2;
    let answer = "";

    for(let i = 0 ; i < smallWord.length ; i++){
        answer += word1[i] + word2[i];
    }

    if(word1.length !== word2.length){
        answer += largeWord.slice(smallWord.length);
    }

    return answer;
};