console.log("1번!");
console.log("2번!");
console.log("3번!"); // 코드는 위에서 아래로 순서대로 실행된다. 이게 동기/

setTimeout(() => {console.log("1번!");
}, 3000);               // setTimeout을 사용하면 오래걸리는 작업을 뒤로 미룰 수 있다.
console.log("2번!");
//-------------------------------------------------------------------------
function orderCoffee(coffee, time) {
    setTimeout(() => {
        console.log(`${coffee} 제조 완료`);
    }, time);
}
orderCoffee("스위트 아메리카노", 4000) // 시간을 설정해서 작업 우선순위를 둘 수 있다
orderCoffee("레몬 티", 2000)
orderCoffee("시원한 커피", 3000)
//--------------------------------------------------------------------------------
function double(num, cb) {
    return setTimeout(() => {
        const doubleNum = num * 2;
        cb(doubleNum);              // 콜백함수를 이용한 setTimeout
    }, 1000);
}
double(10, (res) => {
    console.log(res);
});
console.log(마지막);
