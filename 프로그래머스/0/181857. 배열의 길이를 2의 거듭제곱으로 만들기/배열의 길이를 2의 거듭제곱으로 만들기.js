function solution(arr) {
   const abc= arr.length;
    let num=0
    
    // arr 배열의 길이가 큰 2의 거듭제곱 구하기
    while(Math.pow(2, num) <abc) num++;
    
    
    for (let i= 0; i<(Math.pow(2, num)-abc) ;i++){
        arr.push(0)
    }
   
    return arr;
}