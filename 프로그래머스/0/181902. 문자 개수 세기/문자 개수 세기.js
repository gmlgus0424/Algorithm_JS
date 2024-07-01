function solution(my_string) {
    const answer = Array(52).fill(0);
   
    my_string.split("").forEach((e) => {
        const codeP = e.codePointAt();
        if (codeP >= 97) {
            answer[codeP-71] += 1
        } else {
            answer[codeP-65] += 1
        }
    })
    return answer;
}