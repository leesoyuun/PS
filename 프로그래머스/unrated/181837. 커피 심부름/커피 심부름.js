function solution(order) {
    let price = 0;
    for(let i of order){
        i.includes('cafelatte') ? price += 5000 : price +=4500
    }
    return price;
}