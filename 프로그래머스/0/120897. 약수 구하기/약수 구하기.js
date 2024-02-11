function solution(n) {  
    let abc = 1
    let arr =[]
    
    while(abc<=n){
        if(n%abc === 0){
            arr.push(abc)
        }
         abc++
    } 
     return arr
}