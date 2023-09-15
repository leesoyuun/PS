function solution(my_string, indices) {
    let len = my_string.length;
    let new_indices = [];
    for(let i = 0 ; i < my_string.length; i++){
        if(!indices.includes(i))
            new_indices.push(i)
    }
    return new_indices.map(x => my_string[x]).join('')
    
}