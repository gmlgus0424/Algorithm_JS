function solution(s) {
    var answer = ''; 
      if (s.length %2 == 0) { //s 의 길이가 짝수일 때 
      answer = s[s.length / 2 - 1] + s[s.length / 2]
       
    } else { //s 의 길이가 홀수일 때
      answer = s[Math.floor(s.length/2)] 
    }
    return answer;
}