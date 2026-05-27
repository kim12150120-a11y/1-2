function solution(money) {
    let count = 0;
    while (true) {
        if (money - 5500 * count >= 0) {
            count++;
        } else {
            count--;
            break;
        }
    }
    var answer = [count, money - 5500 * count];
    return answer;
}

console.log(solution('5,500'));
console.log(solution('15,000'));
