function solution(n, k) {
    var answer = [];
        //k의 배수 구하기 
    //i는 k부터 n까지 i+=k -> i=i+k
    for(let i = k ; i <= n; i+=k){
        //배열 추가 
        answer.push(i)
    }
    return answer;
}
    