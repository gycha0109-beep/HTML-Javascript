if (!undefined) {
    console.log("undefined는 falsy한 값입니다.");
}
if (!null) {
    console.log("null은 falsy한 값입니다.");
}
if (!0n) {
    console.log("0n은 falsy한 값입니다.");
}
if (!0) {
    console.log("0은 falsy한 값입니다.");
}
if (!NaN) {
    console.log("NaN은 falsy한 값입니다.");
}
if (!"") {
    console.log("빈 문자열은 falsy한 값입니다.");
}
