const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let arr = [];

 for (let i=0; i<str.length; i++){
    
    if(str[i] === str[i].toUpperCase()){
        arr.push(str[i].toLowerCase())
    } else {
        arr.push(str[i].toUpperCase())
    }
   
}
console.log(arr.join(""))
});

//arr로 결과를 담을 빈 배열을 선언한 후 대문자는 소문자로 소문자는 대문자로 변환 후 join 사용해서 합체