const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    //문자열 반복-> count는 0과 양의 무한대 사이의 정수  repeat(count)사용
console.log(str.repeat(n))
});