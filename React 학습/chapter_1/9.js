function foo() {
    console.log("foo"); // 전역 함수
}
function bar() {
    foo();              // 전역 함수 사용
    console.log("bar");
}
bar();
//-----------------------------------------------------
function boo() {
    console.log("boo");

    function ber() {
        console.log("ber");
    }
}
ber();          // 함수 내부의 함수는 *지역변수* 취급이므로 호출이 안된다.
//------------------------------------------------------
if (true) {
    let a = 1;
}
console.log(a);  // *조건문*의 지역변수를 호출했으므로 에러

if (true) {
    var b = 1;
}
console.log(b);  // 근데 *조건문*의 var는 된다..

function check() {
    var c = 1;
}
console.log(c);   // 근데 *함수*의 var는 안된다..