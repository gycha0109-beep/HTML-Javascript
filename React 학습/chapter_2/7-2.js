let arr = [1, 3, 5, 7, 1];
console.log(arr.indexOf(1, 0)); // indexOf(찾으려는 값, 탐색을 시작할 인덱스 값)
console.log(arr.indexOf(3)); // 찾으려는 값을 생략하면 0부터 시작
console.log(arr.indexOf(1, -1)) // 인덱스가 음수면 거꾸로 탐색한다.
console.log(arr.indexOf(99, 99)) // 찾으려는 값이 없거나 인덱스의 값이 없으면 -1을 반환한다.

let arr2 = [{name: "이정환"}, 1, 2, 3];
console.log(arr.indexOf({ name: "이정환"})); // 에러, '==='로 비교하므로 객체 자료형을 탐색할 수 없다.
//----------------------------------------------------------------------
let arr = [1, 3, 5, 7, 9];
console.log(arr.includes(3)); // true, 값을 포함하는지 찾는다.
console.log(arr.includes("생선")); // false
//----------------------------------------------------------------
function determine(item, idx, arr) {
    if (item % 2 === 0) {         // 판별함수를 필요로 한다.
        return true;
    }   else {                  // 조건에 맞는 값을 인덱스해서 찾는다.
        return false;
    }
}
let arr2 = [1, 3, 5, 6, 8];
let index = arr2.findIndex(determine);
console.log(index);

let index = arr.findIndex((item) =>     // 이 역시 화살표 함수를 쓸 수 있다.
    item % 2 === 0 ? true : false
);                                  
console.log(index);
//----------------------------------------------------------------------------------------
let objArr = [
    { name: "이종원"},
    { name: "이정환"},
    { name: "신다민"},
    { name: "김효빈"}
];
let element = arr.find((item) => item.name === "이정환"); // find는 '값'을 반환한다.
//--------------------------------------------------------------------------------
let objArr2 = [
    { name: "이종원", hobby: "축구"},
    { name: "이정환", hobby: "영화"},
    { name: "신다민", hobby: "축구"},
    { name: "김효빈", hobby: "노래"}
];
let filteredArr = objArr2.filter((item) => item.hobby === "축구");
console.log(filteredArr)
