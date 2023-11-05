function solution(my_string, overwrite_string, s) {
    let first = my_string.slice(0,s);
    let last = '';
    overwrite_string.length + s == my_string.length ? '' :
    last += my_string.slice(s+overwrite_string.length,my_string.length);
    return first + overwrite_string + last;
}