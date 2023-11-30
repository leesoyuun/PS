function solution(str, al) {
    let answer = "";
    let num = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        num++;
      } else {
        answer += str[i];
        if (num > 1) answer += num;
        num = 1;
      }
    }
    return answer;
  }
