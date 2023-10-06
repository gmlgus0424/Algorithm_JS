function solution(num_list) {
    var answer = num_list;
    
    if(answer.length>=11){
       return answer.reduce((a,b)=>a+b,0)
    }else{
        return answer.reduce((a,b)=>a*b,1)
    }
   
}