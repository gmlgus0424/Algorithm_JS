const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    
    //특수문자 처리방법 
    console.log('!@#$%^&*(\\\'"<>?:;')
});