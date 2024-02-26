function solution (num_list, n){
    
    const result = [];
    
    //범위 돌면서 
    for(let i= 0; i<num_list.length;){
        const slice2 =[];
        //n 만큼 배열 생성
        for(let j= 0; j<n; j++){
            slice2.push(num_list[i])
            i++
        }
        result.push(slice2)
    }
    
    return result
}