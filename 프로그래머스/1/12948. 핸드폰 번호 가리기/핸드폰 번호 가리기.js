function solution(phone_number) {
    let strLen = phone_number.length - 4;
    return '*'.repeat(strLen) + phone_number.slice(strLen);
}