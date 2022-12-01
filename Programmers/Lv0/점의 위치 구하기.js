// function solution(dot) {
//     if(dot[0] > 0 && dot[1] > 0 ){
//         return 1;
//     }
//     if(dot[0] >0 && dot[1] < 0){
//         return 4;
//     }
//     if(dot[0]<0 && dot[1] <0 ){
//         return 3;
//     }
//     if(dot[0]<0 && dot[1]>0){
//         return 2;
//     }
// }

function solution(dot){
    const [numx,numy] = dot;
    const check = numx * numy > 0;
    return numx > 0 ? (check ? 1 : 4) : (check? 3 : 2);
}
solution([2, 4]);