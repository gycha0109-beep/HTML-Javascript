function moneMonth(date, moveMonth) {
    const curTimestamp = date.getTime();
    const curMonth = date.getMonth();

    const resDate = new Date(curTimestamp)
    resDate.setMonth(curMonth + moveMonth);
    return resDate;
}

const dateA = new Date("2000-10-10");
console.log("A: ", dateA);
const dateB = moneMonth(dateA, 1);
console.log("B: ", dateB);              // 날짜를 n월씩 이동
const dateC = moneMonth(dateA, -1);
console.log("C: ", dateC);
//--------------------------------------------------------------------
function filterThisMonth(pivotDate, dateArray) {
    const year = pivotDate.getFullYear();
    const month = pivotDate.getMonth();
    const startDay = new Date(year, month, 1, 0, 0, 0, 0);
    const endDay = new Date(year, month + 1, 0, 23, 59, 59);
    const resArr = dateArray.filter(
        (it) =>
            startDay.getTime() <= it.getTime() &&
            it.getTime() <= endDay.getTime()
    )
    return resArr;
}
const dateArray = [
    new Date("2000-01-01"),
    new Date("2000-02-01"),
    new Date("2000-10-01"),
    new Date("2000-04-01"),
    new Date("2000-10-11"),
    new Date("1900-11-01"),
    new Date("1970-12-01"),
]
// 오늘은 2000년 10월 10일이라고 가정합니다
const today = new Date("2000-10-10/00:00:00");
const filteredArray = filterThisMonth(today, dateArray);
console.log(filteredArray);
