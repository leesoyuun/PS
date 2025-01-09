function solution(ingredient) {
    var answer = 0;
    let ingre_stack = [];

    for(let i = 0 ; i < ingredient.length ; i++ ){
        ingre_stack.push(ingredient[i]);
        if(ingre_stack.length > 3 && ingre_stack.slice(-4).join('') === '1231'){
            ingre_stack.splice(-4);
            answer++;
        }
    }
    return answer;
}