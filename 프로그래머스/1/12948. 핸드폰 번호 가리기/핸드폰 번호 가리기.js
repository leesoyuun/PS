function solution(phone_number) {
    const phoneNumberLen = phone_number.length - 4;
    return '*'.repeat(phoneNumberLen) + phone_number.slice(-4);
}