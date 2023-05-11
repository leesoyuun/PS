function selectSort(arr){
    let indexMin = 0;
    let temp = 0;
    for(let i = 0 ; i < arr.length -1 ; i++){
        indexMin = i;
        for(let j = i+1 ; j < arr.length ; j++){
            if(arr[j] < arr[indexMin]){
                indexMin = j;
            }
        }
        temp = arr[indexMin];
        arr[indexMin] = arr[i];
        arr[i] = temp;
    }
    return arr;
}