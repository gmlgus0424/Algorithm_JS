function solution(a, b) {
    
    if(a%2==1 && b%2==1){
      return a**2 + b**2
    }else if((a%2==1&&b%2 ==0)||(a%2==0 && b%2==1)){
        return 2*(a+b)
        
    }else {
        // 절대값 함수 - Math.abs
       return Math.abs(a-b)
    }
}