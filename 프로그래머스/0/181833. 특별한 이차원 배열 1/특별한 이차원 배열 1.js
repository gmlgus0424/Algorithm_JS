function solution(an) {
    const arr= Array(an).fill(Array(an).fill(0))
    
    return arr.map((an,i)=>{
        return an.map((b,bi)=>bi ===i ? 1: b)
    })
}