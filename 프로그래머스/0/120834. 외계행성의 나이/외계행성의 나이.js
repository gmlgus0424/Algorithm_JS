function solution(age) {
  const answer= age.toString().split("")
    
    const alphabet= "abcdefghij"
    
    return answer.map((num)=>alphabet[num]).join("")
}
   
    //split은 숫자를 분리할 수 없기 때문에 문자열로 변환하고 split으로 문자열을 문자 단위로 분리해서 배열 만든다 ['2','3'] 이런식으로 그 후 map을 통해 매핑하고 join으로 결합한다 
  


