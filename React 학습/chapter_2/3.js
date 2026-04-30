const arr1 = [1, 2, 3];
console.log(arr1.length); // length 프로퍼티

const arr = [1, 2, 3];
arr.push(4); // push 메서드
// 프로퍼티 = 조회 -- 메서드 = 동작
//--------------------------------------------------
let person = {
    name: "이정환"
};
let man = person;
man.age = 25;       // 같은 주소를 바라보고 있기에 레퍼런스 변수로도 수정이 가능하다 ????
//------------------------------------------------------
let person = {
    name : "이정환"
};
let man = {
    name : "이정환"
};
console.log(person === man) // 값은 같지만 참조값이 다르므로 false
