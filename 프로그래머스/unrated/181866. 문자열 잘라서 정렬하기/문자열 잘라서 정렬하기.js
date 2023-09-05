function solution(myString) {
    let sub_arr = myString.split('x').sort();
    return sub_arr.filter(el => el);
}