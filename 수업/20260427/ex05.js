const color = ['red', 'green', 'biue'];

// const r = color[0];
// const g = color[1];
// const b = color[2];
// 배열 구조분해
let [r, g, b] = color;
[b, b, r] = [r, g, b];
console.log(r); console.log(g); console.log(b);

let user = {
    id : 'jamsuham',
    pw : '1234',
    name : '잠수함',
    age : 30,
};
// const id = user.id;
// const pw = user.pw;
// const name = user.name;
// const age = user.age;
// 객체(오브젝트) 구조 분해
const { id, pw, name, age } = user;
console.log(id);console.log(pw);
console.log(name);console.log(age);