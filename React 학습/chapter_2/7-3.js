let arr = [1, 2, 3, 4];
let newArr = arr.map((item) => item*3); // 각각의 요소에 곱하기 3을 한 결과를 모아 새로운 배열을 생성.

let objArr = [
    { name: "이종원", hobby: "축구"},
    { name: "이정환", hobby: "영화"},
    { name: "신다민", hobby: "축구"},
    { name: "김효빈", hobby: "노래"}
];
let newObjArr = objArr.map((item) => item.name);    // 객체의 name 프로퍼티만 따서 새로운 배열을 생성.
console.log(newObjArr)
//-------------------------------------------------------------------------------------------
let arr = ["b", "a", "c"];
arr.sort();
console.log(arr); // 사전순, 오름차순으로 정렬한다. ["a", "b", "c"]

let arrNum = [10, 5, 3];
function compare(a, b) {         // 요소를 기본적으로 문자열로 취급하기 때문에 숫자에서는 비교 함수가 필요하다.
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}
arrNum.sort(compare);
//---------------------------------------------------------------------------------------------------
let arr = ["안녕", "나는", "이정환"];
console.log(arr.join(" "));                 // 파이썬 join이랑 똑같은 역할.
//--------------------------------------------------------------------------------------------------
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((acc, item) => acc + item, 0);
console.log(result);