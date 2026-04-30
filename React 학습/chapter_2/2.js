function calcA() {
    console.log("a");
    return false;
}
function calcB() {
    console.log("b");   // and 연산때 좌항이 false면 아예 호출되지 않음
    return true;
}
console.log(calcA() && calcB());
//------------------------------------------
function getName(person) {
  return person && person.name
}

let person = { name: "이정환"}

let name1 = getName(undefined)
let name2 = getName(null)
let name3 = getName(person)

console.log(name1)
console.log(name2)
console.log(name3)
//----------------------------------
const name = "이정환" || undefined;
console.log(name);      // OR 연산도 좌항이 True면 뒤는 쳐다도 안본다.
//--------------------------------------------------
const varA = 0;
const varB = "이정환";

const resultA = varA || varB;
const resultB = varA ?? varB;

console.log(resultA);
console.log(resultB);