function solution(numbers) {
    const Num=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    
   Num.forEach((item,i)=>{
       numbers = numbers.split(item).join(String(i))
   })
    return Number(numbers);
}