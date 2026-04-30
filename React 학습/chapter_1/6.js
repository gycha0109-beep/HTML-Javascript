let num = 11;

if (num > 10) {
    console.log("num은 10초과입니다.");
} else if (num < 10) {
    console.log("num은 10미만입니다.")
} else {
    console.log("num은 10입니다.")
}

let fruit = "apple";

switch (fruit) {
    case "apple": {
        console.log("사과")
        break // break를 안쓰면 밑에 실행문 전부 실행함
    }
    case "banana": {
        console.log("바나나")
        break
    }
    default: {             // else랑 같은 의미 
        console.log("과일이 아님")
    }
}