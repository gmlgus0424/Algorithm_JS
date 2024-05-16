function solution(a, d, included) {
    var answer = 0;
    for (i=0; i<included.length; i++){
        console.log(included[i] && (answer+=a+d*i))
    }
    return answer;
}