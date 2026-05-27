// let 기본자료형 변경 가능 오브젝트 변경 가능
// const 기본 자료형 변경 불가 오브젝트 변경 가능

// const 로 선언하면 프로퍼티 추가 삭제 수정이가능하지만
// 새로운 객체(오브젝트)를 담는 것은 불가능하다.
let sum = 10;
const car = {
    // 객체 안에 들어있는 합수
    // 프로퍼티, 속성 
    name:"쏘나타",
    brand:"현대자통차"
}
car.doDriver = ()=>{
    console.log('쏘나타 부르릉')
}
car = { };
console.log(car);
car.doDriver();

// let answer = '$';
// answer += 'S'
// answer += 'S'
// answer += 'S'
// console.log(answer);