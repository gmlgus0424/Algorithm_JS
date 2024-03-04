function solution(n) {
  let answer = [];

  // 2부터 n까지의 수 중에서 소수를 판별하여 나누기
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      if (!answer.includes(i)) {
        answer.push(i); // 중복된 소인수가 아니라면 배열에 추가
      }
      n /= i; // n을 i로 나눈 몫으로 갱신
    }
  }

  answer.sort((a, b) => a - b); // 소인수를 오름차순으로 정렬

  return answer;
}

console.log(solution(12)); // [2, 3]