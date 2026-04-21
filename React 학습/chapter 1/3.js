// 문자열 합성
let name = "차지환"
let welcomeText = "님 반가워요!";
let resultWelcomeText = name + welcomeText;
console.log(resultWelcomeText)

// 백틱을 이용해서 문자열 변수 넣기
let guestName = "이정환"
let greetingText=`welcome ${guestName}!`;
console.log(greetingText)

// f스트링과 비슷한 역할
let vName = "차지환"
let vStation = "암사"
let introduce = `${vName}는 ${vStation}역에 살고 있습니다.`
console.log(introduce)