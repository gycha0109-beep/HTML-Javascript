const PI = 3.141592;

function getArea(radius) {
    return PI * radius * radius;
}

function getCircumferece(radius) {
    return 2 * PI * radius;
}

// export { PI, getArea, getCircumferece }; // 파일 수출
export default {
    PI,
    getArea,                // default 수출로 프로퍼티 기본값을 만든다
    getCircumferece
};