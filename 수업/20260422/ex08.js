function solution(arr, delet_arr) {
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        let result = true;
        // console.log(arr[i]);
        for (let j = 0; j < delet_arr.length; j++) {
            if(arr[i]==delet_arr[j]){
                result = false;
                // console.log('같다')
                // console.log[i]
                // console.log(delet_arr[j])
            }
        }
        console.log(result);
        if (result){
            answer.push(arr[i]);
            result = true;
        }
    }
    return answer
}
const ret = solution([293, 1000, 395, 678, 94],
    [94, 777, 104, 1000, 1, 12])
console.log(ret)