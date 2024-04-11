function solution(quizList) {
    let result = [];
    
    for(let quiz of quizList) {
        let [aaa, answer] = quiz.split('=');
        
        if(eval(aaa) === Number(answer)) result.push('O');
        else result.push('X');
    }
    
    return result;
}