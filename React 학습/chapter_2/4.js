let arr = [1, 2, 3, 4]

for (let idx = 0; idx < 4; idx++) {
    console.log(arr[idx]); // 인덱스 순회
}
//--------------------------------------------
let food = ["짜장면", "피자", "치킨"];

for(let idx = 0; i < food.length; i++) {
    console.log(food[idx])      // 일반적인 배열 탐색
}


for(let item of food) {
    console.log(item);    // for ~ of [배열이름}을 통해 탐색
}
//-------------------------------------------
let person = {
    name: "이정환",
    age: 25,
    location: "경기도"
};

const keyArr = Object.keys(person);

for (let key of keyArr) {       // 객체의 순회도 가능하다
    let value = person[key];
    console.log(key, value)
}

for (let key in person) {       // let [변수] in [객체]
    const value = person[key];  // [객체]의 키값이 [변수]에 할당된다.
    console.log(key, value);
}