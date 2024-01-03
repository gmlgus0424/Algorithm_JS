function solution(arr) {
    var answer = []; // 새로운 배열
    
    for(var i = 0; i < arr.length; i++) { 
        arr[i] == arr[i+1] ? '' : answer.push(arr[i]); 
    
    }
    
    return answer;
}