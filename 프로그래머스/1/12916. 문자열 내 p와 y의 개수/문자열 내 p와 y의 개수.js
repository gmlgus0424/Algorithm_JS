function solution(s){
    let change = s.toLowerCase();

    let ace_p = change.split("p").length;
    let ace_y = change.split("y").length;
    
    return ace_p == ace_y ? true : false;
}