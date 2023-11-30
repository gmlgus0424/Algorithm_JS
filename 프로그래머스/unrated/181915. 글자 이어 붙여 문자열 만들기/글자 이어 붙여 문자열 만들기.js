function solution(my_string, index_list) {
    var abc = '';
  for(let x of index_list){
      
      abc+=my_string.slice(x,x+1);
  }
    
    return abc
}

console.log(solution("cvsgiorszzzmrpaqpe",[16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]))