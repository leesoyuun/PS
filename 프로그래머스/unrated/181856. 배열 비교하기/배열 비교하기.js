function solution(arr1, arr2) {
    let ar1_length = arr1.length;
    let ar2_length = arr2.length;
    let ar1_sum = arr1.reduce((acc,cur)=>acc + cur ,0)
    let ar2_sum = arr2.reduce((acc,cur)=>acc + cur ,0)
    
    if(ar1_length > ar2_length)
        return 1;
    else if (ar1_length < ar2_length)
        return -1;
    else{
        if(ar1_sum > ar2_sum)
            return 1;
        else if (ar1_sum < ar2_sum)
            return -1;
        else
            return 0;
    }
    
}