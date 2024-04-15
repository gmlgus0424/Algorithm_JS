function solution(id_pw, db) {
    var answer =db.filter(([id,pw])=>id===id_pw[0])
    return answer.length===0 ? "fail" : answer[0][1] ===id_pw[1 ] ? "login":"wrong pw"
}