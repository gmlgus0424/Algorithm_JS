function solution(num_str) {
// 문자열을 배열로 변환후 해당 문자를 숫자로 변환 후에 누적값 반환
  return [...num_str].map(Number).reduce((a,b)=>a+=b)
}