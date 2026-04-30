for (let idx = 1; idx <= 100; idx++) {
    if (idx > 10) {
        console.log("반복문 종료")
        break;
    }
    console.log(idx);
}

for (let idx = 1; idx <= 10; idx++) {
    if (idx % 2 === 0) {
        continue; // 짝수 무시
    }
    console.log(idx);
}