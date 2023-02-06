function solution(my_string) {
    let vowels = ['a','e','i','o','u'];
    for(let i of vowels){
        my_string = my_string.replaceAll(i,'')
    }
    return my_string;
}