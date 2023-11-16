function solution(x) {
    let num = (x+'').split('').map(Number).reduce((a,b) => a + b);
    return x % num === 0 ;
}