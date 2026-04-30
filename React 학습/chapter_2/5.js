let arr = [1, 2, 3];
let[one, two, three] = arr; // 구조 분해 할당

console.log(arr)
//----------------------------------------------
let person = {
    name: "이정환",
    age: 25,
    location: "경기도"
};

let { name, age, location } = person;   // 객체의 구조 분해 할당

console.log(name, age, location);
//---------------------------------------------------
function func({ name: n, age: a, location: l }) {   // 함수 매개변수 객체에 alias도 지칭 가능
    console.log(n, a, l);
}

func(person);