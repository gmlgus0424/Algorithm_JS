function solution(myString) {
  return myString.split("x").filter(a=>a!=='').sort()
}

//filter(a =>a!=='') => 빈 문자열 제거