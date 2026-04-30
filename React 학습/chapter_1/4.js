// 숫자변수+문자변수는 문자열 연결로 묵시적 변환
let number = 10;
let string = "20";
const result = number + string;
console.log(result);

// 명시적 형 변환
let strA = "10";
let strB = "10개";

let numA = Number(strA); // 래퍼 클래스
let numB = Number(strB);

console.log(numA); // 10
console.log(numB); // NaN

let strA2 = "10";
let strB2 = "10개";

let numA2 = parseInt(strA2, 10); // 변환할 값, 진수
let numB2 = parseInt(strB2, 10);

console.log(numA2); // 10
console.log(numB2); // 10