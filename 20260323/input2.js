const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('입력하세요\n', function (ans) {
    console.log(ans);
    if (ans >= 80) { 
        console.log('합격입니다.');
    }else{
        console.log('불합격입니다.');
    }

    rl.close();
});