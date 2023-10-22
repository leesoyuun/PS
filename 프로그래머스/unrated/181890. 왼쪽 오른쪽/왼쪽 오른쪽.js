function solution(str_list) {
    let idx_l = str_list.indexOf('l');
    let idx_r = str_list.indexOf('r');
    let answer = [];

    if (idx_l === -1 && idx_r === -1) {
        // "l"과 "r"이 모두 없는 경우
        return answer;
    } else if (idx_l === -1) {
        // "l"이 없는 경우, "r"을 기준으로 오른쪽 문자열들을 반환
        answer = str_list.slice(idx_r + 1);
    } else if (idx_r === -1) {
        // "r"이 없는 경우, "l"을 기준으로 왼쪽 문자열들을 반환
        answer = str_list.slice(0, idx_l);
    } else {
        // "l"과 "r" 모두 있는 경우, 먼저 나오는 문자를 기준으로 반환
        answer = idx_l < idx_r ? str_list.slice(0, idx_l) : str_list.slice(idx_r + 1);
    }

    return answer;
}
