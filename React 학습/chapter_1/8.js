function getArea(width, height) {
    let area = width * height;
    return area;
}

let result = getArea(10, 20);
console.log(result);
//----------------------------------------
function greeting() {
    function greetingWithName(name) {
        console.log(`hello! ${name}`)
    }
    let name = '차지환';
    greetingWithName(name);
}

greeting();
//----------------------------------------
function greetFunc() {
    console.log('hello');
}
let greeeeee = greetFunc; // 함수도 객체 취급. 변수에 대입 가능
greeeeee();
//-----------------------------------------
funcA();
funcB();

function funcA() {
    console.log("funcA");   // 호이스팅 됨
}
let funcB = function() {
    console.log("funcB");   // 아래에서 재정의 하면 호이스팅이 안됨
}
//----------------------------------------------------------
function parentFunc(callBack) {
    console.log("parent");
    callBack();
}

function childFunc() {
    console.log("child");
}

parentFunc(childFunc); // 함수를 매개변수로 입력이 가능하다
//--------------------------------------------------------
function repeat(count, callBack) {
    for (let idx = 0; idx < count; idx++){
    callBack(idx + 1);
    }
}

function origin(count) {
    console.log(count);
}

function double(count) {
    console.log(count*2);
}
repeat(5, origin);
//-------------------------------------------------
function repeat(count, callBack) {
  for (let idx = 0; idx < count; idx ++) {
    callBack(idx + 1);
    }
}

repeat(5, function(count) {
  console.log(count*2);     // 익명함수를 이용한 콜백 함수
});
//-----------------------------------------------------
let greeting2 = (name) => console.log(`hello ${name}`); // 화살표로 익명함수
greeting2("차지환")
//------------------------------------------------------
let isConfirm = true;
function confirm(onYes, onNo) {
    if (isConfirm) onYes();
    else onNo();
}

confirm(
    () => console.log("승인"), 
    () => console.log("거부")
);