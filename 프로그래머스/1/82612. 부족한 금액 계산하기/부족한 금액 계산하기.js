function solution(price, money, count) {
    let result = "";
    let sumPrice = 0;
    
    for(let i = 1; i <= count; i++) {
        sumPrice += price * i;   
    }
    if(sumPrice <= money) {
        result = 0;
    } else if(sumPrice > money) {
        result = sumPrice - money;
    }
    return result;
}