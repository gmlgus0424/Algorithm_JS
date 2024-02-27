function solution(numbers, k) {
    //첫번째 선수 공 가지고 있음
    let BallFirst= 1
    
    // 마지막 공 던질 사람 k-1번까지 반복하며 다음 사람 건너뛰도록 +2
    for(let i=0; i<k-1;i++){
        BallFirst +=2
        
        //마지막 번호 넘어가는 경우 처음 선수에게 전달
        if(BallFirst > numbers.length){
            BallFirst -= numbers.length
        }
    }
    return BallFirst;
}