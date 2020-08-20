var firstDay = new Date("2020-08-19");
var now = new Date();
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var PassedDay = Math.round((toNow - toFirst)/(24 * 60 * 60 * 1000));
document.querySelector("#accent").innerText = PassedDay + "일";

calcDate(100);
calcDate(200);

function calcDate(days) {
    var future = toFirst + days * (24 * 60 * 60 * 1000);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();
    document.querySelector("#date"+days).innerText = year + "년 " + month + "월 " + date + "일"; 
}