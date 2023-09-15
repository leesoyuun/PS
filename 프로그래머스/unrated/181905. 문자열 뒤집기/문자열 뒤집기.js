function solution(my_string, s, e) {
    let ar_str = [...my_string];
    let ar_rev = ar_str.slice(s,e+1).reverse().join('');
    let str1 = my_string.slice(0,s)
    let str2 = my_string.slice(e+1)
    return str1 + ar_rev + str2
}