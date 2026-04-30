const promise = new Promise(
    function (resolve, reject) {
        setTimeout(() => {
            resolve("성공");
        }, 400);
    }
);
promise.then(function (res) {   // then으로 resolve의 성공 값을 저장해서 출력
    console.log(res);
});
//----------------------------------------------------------------------------------
const promise = new Promise(
    function (resolve, reject) {
        setTimeout(() => {
            //resolve("성공");
            reject("실패");
        }, 400);
    }
);
promise.then(function (res) {   // then으로 resolve의 성공값을 저장해서 출력
    console.log(res);
});
promise.catch(function (err) {  // catch로 reject의 실패값을 저장해서 출력
    console.log(err);
});