function solution(babbling) {
    var answer = 0;
    const word = ["aya", "ye", "woo", "ma"];
    
    //문자열 돌기
    babbling.forEach(ba => {
        // 발음 가능한 문자열 순회
        word.forEach(word => {
            // 발음 할 수 있으면 
            if(ba.includes(word)) {
                // split을 통해 문자열을 쪼개고 공백을 포함시켜 합침
                ba = ba.split(word).join(' ');
            }
        })
        
      
            if(ba.trim().length === 0) answer++;
    })
    return answer;
}