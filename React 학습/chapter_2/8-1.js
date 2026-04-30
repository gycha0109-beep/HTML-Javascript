let date = new Date();
console.log(date);

let date1 = new Date("2000-10-10/00:00:00");
let date2 = new Date("2000-10-10/00:00:00");
let date3 = new Date(2000, 10, 10, 0, 0, 0, 0); // 년, 월(내부 동작이 배열로 하는지 0부터 시작한다!), 일, 시, 분, 초, 밀리초
let date4 = new Date(2000, 9, 10);              // 나머지는 0으로 출력된다.

console.log(date.getFullYear());    // 값 조회
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.setFullYear());    // 값 수정
//-----------------------------------------------------------------------------
const today = new date(2000, 9, 10, 22);
console.log(today.toString());