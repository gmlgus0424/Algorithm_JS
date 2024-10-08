function solution(arr) {
    let pra = true
    for(let i= 0 ; i < arr.length ; i ++) {
        for(let j = 0 ; j < arr[i].length ; j ++) {
            if(arr[i][j] !== arr[j][i]) {
                pra = false
            }
        }
    }
    
    return ~~pra
}