function solution(arr, flag) {
    var answer = [];
    for (let i = 0; i < flag.length; i++){
        if (flag[i] === true){
            answer.push(...Array(arr[i]).fill(arr[i]))
            answer.push(...Array(arr[i]).fill(arr[i]))
        }else{ 
            answer.splice(-arr[i]) 
        }
    }
    return answer;
}