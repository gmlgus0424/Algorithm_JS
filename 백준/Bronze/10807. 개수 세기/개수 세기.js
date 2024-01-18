const fs = require('fs');



const input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

const numArray = input[1].split(' ').map(Number)
const num = Number(input[2])

const result = numArray.filter(n => n === num).length

console.log(result)