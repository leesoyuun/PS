function solution(myString, pat) {
    let arr_st = myString.lastIndexOf(pat);
    let pat_length = pat.length;
    return myString.slice(0,arr_st+pat_length)
}