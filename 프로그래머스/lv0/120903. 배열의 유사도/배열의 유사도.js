function solution(s1, s2) {
  return s1.filter((e)=>s2.includes(e)).length
}

//filter  주어진 함수 만족하는 모든 요소 모아 새 배열 반환
//includes  특정 요소 포함하고 있는지 판별