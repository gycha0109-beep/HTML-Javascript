let food = ["짜장면", "피자", "치킨"];
const newLength = food.push("탕수육", "라자냐"); // push 메서드를 통한 요소 추가
//-------------------------------------------
const removedItem = food.pop(); // 지정하지 않으면 맨 끝 요소를 추출한다.

let blank = [];
const noOne = blank.pop();  // 빈 배열에서 팝하면 Undefined
//----------------------------------------------------------
let animal = [개, 고양이, 토끼];
const removedAnimal = animal.shift(); // pop이랑 반대로 맨 앞 요소를 추출
const newAnimal = animal.unshift("돼지"); // 맨 앞에 요소를 추가한다.
//------------------------------------------------------------
const arr = [1, 2, 3, 4, 5];      
const sliced = arr.slice(0, 2); // slice(start, end) : start 인덱스부터 end-1 인덱스까지 변수에 저장한다.
const sliced2 = arr.slice(2); // 파라미터 하나만 넣으면 그 인덱스부터 배열의 끝까지 가져온다

console.log(arr.slice(-1)); // 파이썬처럼 음수로 마지막부터도 접근 가능.
//---------------------------------------------------------
let arrA = [1, 2];
let arrB = [3, 4];
let arrC = arrA.concat(arrB); // 배열을 통째로 붙인다.

let obj = { a: 1, b: 2 };
let comp = arr.concat(obj); // 배열에 객체를 넣을 수도 있지만, 객체 자체가 하나의 요소로 취급된다.
//------------------------------------------------
function cb(item, idx) {
    console.log(`${idx}번째 요소: ${item}`);
}
const arr = [1, 2, 3];
arr.forEach(cb)             // 인덱스와 값을 동시에 순회하는 forEach. 콜백함수가 반드시 대동되어야 한다.

arr.forEach((item, idx) => {
    console.log(`${idx}번째 요소: ${item}`);
});                         // 화살표 함수로도 호출 가능