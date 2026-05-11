// 선언부에서는 매게변수 3개
const aa = function (a, b = 20, c = 30) {
    console.log(`a ${a} b ${b} c ${c}`);
}

// 호출부에서는 매게변수 1개
aa(10);

let temp = "값을할당";

temp = temp ?? '앞에꺼 null, nudefined'

console.log(`temp ${temp}`);