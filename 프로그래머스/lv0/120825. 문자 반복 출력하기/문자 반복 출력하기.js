function solution(my_string, n) {
    return [...my_string].map(a=>a.repeat(n)).join('');
}
   
    //1. 배열 만들기
    //2. 배열 변환 map
    //3. repeat 사용해서 n번씩 반복 
    //4. join 사용해서 배열 문자열로 바꾸기