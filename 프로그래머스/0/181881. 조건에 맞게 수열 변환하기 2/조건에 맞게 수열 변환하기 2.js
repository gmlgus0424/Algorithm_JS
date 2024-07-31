function solution(arr) {
    let idx = 0
    let prevArray = arr
    while(true) {
       
        const changeCurArr = prevArray.map(a => {
            if(a >= 50 && a%2 === 0) return a/2
            if(a < 50 && a%2 === 1) return a*2+1
            return a
        })

        const isAllSame = prevArray.every((a, i) => a === changeCurArr[i])
        if(isAllSame) break
        idx+=1
        
      
        prevArray = changeCurArr
    }
    
    return idx
}