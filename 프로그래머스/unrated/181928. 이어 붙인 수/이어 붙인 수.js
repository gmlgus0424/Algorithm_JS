function solution(num_list) {
    const a = num_list.filter(ab=>(ab%2===1))
    const b= num_list.filter(ab=>(ab%2===0))
    
    return Number(a.join(''))+Number(b.join(''))
}