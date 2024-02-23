function solution(balls, share) {
    var answer = 0;
    
    let allNumber =[];
    allNumber[0]=1;
    
    for(let i = 1; i<=30; i++){
        allNumber[i] = allNumber[i-1] *i;
    }
  return Math.round(allNumber[balls] / (allNumber[balls - share] * allNumber[share]));
}