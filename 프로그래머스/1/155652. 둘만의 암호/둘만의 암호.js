function solution(s, skip, index) {
    let alp = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
              'q','r','s','t','u','v','w','x','y','z'];
    alp = alp.filter((val) => !skip.includes(val));
    
    return s.split('').map((a)=>alp[(alp.indexOf(a) + index) % alp.length]).join('');
}