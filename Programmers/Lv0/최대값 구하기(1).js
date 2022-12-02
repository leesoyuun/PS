function solution(numbers) {
    numbers.sort(function (a,v){
        if(a > v) return 1;
        if(a == v )return 0;
        if(a < v) return -1;
    });
    var max = numbers[numbers.length-1];
    var small_max = numbers[numbers.length-2];
    return max*small_max;
}
solution([1,3,2,5,39,2]);