function solution(n) {
    var answer = [];

    for (let i = 1; i<=n; i+=2) answer.push(i)

    return answer;
}


//반복문 만든 후 2로 나눈 나머지가 0이 아닌 값 찾고 push 메소드로 배열에 담아 리턴 