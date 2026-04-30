let person = {
    name : "이정환",
    age : 25,
    age : 30,   // 키가 중복되면 밑의값으로 결정된다.
    "like cat" : true   // 키가 복수의 단어면 ""로 묶어야 한다.
}
const personName = person.name; // 점 표기법
const personAge = person["age"]; // 괄호 표기법
person.gender = "male"; // 점 표기법을 이용한 프로퍼티 추가
person["nickname"] = "winterlood" // 괄호 표기법을 이용한 프로퍼티 추가
console.log(personName);
console.log(personAge);
console.log(person.gender);
console.log(person["nickname"]);
//---------------------------------------------------
function addProperty(obj, key, value) {
    obj[key] = value;
}
let obj = {}

addProperty(obj, "a", 1);
addProperty(obj, "b", 2);
addProperty(obj, "c", 3);

console.log(obj);
//------------------------------------------
let cat = {
    name : "치삼이",
    age : 4
};
cat.name = "치삼";
cat["age"] = 5;         // 프로퍼티 수정. 그냥 재정의 하면 된다.
delete cat.name;
delete cat["age"];      // 프로퍼티 삭제. delete를 쓴다.
console.log(cat)
// -------------------------------------------------
let person = {
    age : 10
};

let isNameExist = "name" in person; // in 연산자로 포함 여부 확인

console.log(isNameExist);
