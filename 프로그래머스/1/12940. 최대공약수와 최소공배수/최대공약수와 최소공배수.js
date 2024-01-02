function solution(n, m) {
    const fvc =(a, b) => a % b === 0 ? b : fvc(b, a % b); 
    const omc = (a, b) => a * b / fvc(a, b); 
    return [fvc(n, m), omc(n, m)]
}

console.log(solution(3,12))