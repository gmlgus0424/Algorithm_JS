function solution(arr1, arr2) {
 
    let answer = [];
  //answer 이라는 배열을 선언
    
    for(let i=0; i<arr1.length; i++){ 
      //arr1 의 마지막까지 반복
        let sum = [];
      //sum이라는 배열을 선언
        for(let j=0; j<arr1[i].length; j++){ 
          
            sum.push(arr1[i][j] + arr2[i][j])
          //push 로 sum 배열의 끝에 값을 하나씩 더함
        }
        answer.push(sum) 
      // answer 배열에 sum의 값을 모두 넣어줌
    }
    return answer;

}