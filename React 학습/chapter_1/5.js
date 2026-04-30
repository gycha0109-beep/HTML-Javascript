let numA = 1;
let numB;
let numC;

numB = numC = numA; // 우항부터 좌항쪽으로 전염된다.
console.log(numA, numB, numC)

// 증감식
let a = 1;
console.log(a++); // 로그만 실행하고 더한 값을 저장
console.log(a);

let b = 1;
console.log(b--);
console.log(b);

// Null 병합 연산자
let varA = 10;
let varB = 20;
let varC;

console.log(varA ?? varB); // null 값이 없으면 좌항의 값 출력
console.log(varC ?? varB); // null 값이 있으면 null이 아닌 값 출력

// 삼항 연산자
const varA2 = "안녕하세요";

typeof varA2 === "string"
? console.log("문자 자료형")
: console.log("문자 자료형이 아님");