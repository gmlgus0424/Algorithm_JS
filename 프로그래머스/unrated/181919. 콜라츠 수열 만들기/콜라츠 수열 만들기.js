function solution(n) {
    const result = []
    let abc = n
    //언젠가는 1에 도달할거 while로 
    while(abc !== 1) {
        
        result.push(abc)
        if(abc%2 === 0) {
            abc/=2
        } else {
            abc = 3 * abc + 1
        }
    }
    result.push(1)
    return result
}