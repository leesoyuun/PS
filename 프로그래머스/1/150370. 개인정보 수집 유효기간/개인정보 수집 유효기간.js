function calcDate(privacie, month) {
    const [year, monthStr, day] = privacie.split(".").map(Number);
    let newYear = year;
    let newMonth = monthStr + month;

    while (newMonth > 12) {
        newYear += 1;
        newMonth -= 12;
    }

    const formattedMonth = String(newMonth).padStart(2, "0");
    const formattedDay = String(day).padStart(2, "0");

    return `${newYear}${formattedMonth}${formattedDay}`;
}

function solution(today, terms, privacies) {
    let answer = [];
    
    const MapTerms = new Map(terms.map((item) => {
        const [key, value] = item.split(" ");
        return [key, Number(value)];
    }));
    
    const PrivaciesDate = privacies.map((val) => val.split(" ")[0]);
    for(let i = 0 ; i < privacies.length ; i++){
        const getTerms = MapTerms.get(privacies[i].split(" ")[1]);
        const totalCalc = calcDate(privacies[i].split(" ")[0],Number(getTerms));
        
        if(totalCalc <= Number(today.split(".").join(""))){
            answer.push(i+1);   
        }   
    }
    return answer;
}