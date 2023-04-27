function solution(num_list) {
    let odd = num_list.filter((odd)=>odd%2 !== 0);
    let even = num_list.filter((even)=>even%2 == 0);
    
    return Number(odd.join('')) + Number(even.join(''));
}