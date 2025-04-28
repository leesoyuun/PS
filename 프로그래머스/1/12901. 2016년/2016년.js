function solution(a, b) {
    const DayOfWeek = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    const Month = [31,29,31,30,31,30,31,31,30,31,30,31];
    let day = 0;
    
    for(let i = 0 ; i < a - 1 ; i++){
        day += Month[i];
    }
    day += b;
    return DayOfWeek[day%7];
    
    
}