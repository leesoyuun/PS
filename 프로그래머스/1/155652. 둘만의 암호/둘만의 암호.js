function solution(s, skip, index) {
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
              'q','r','s','t','u','v','w','x','y','z'];
    alpha = alpha.filter((val) => !skip.includes(val));
    
    return  s.split('').map((val) => alpha[(alpha.indexOf(val) + index) % alpha.length]).join('');
}