var num1 = parseInt(prompt("비교할 첫 번째 숫자:"));
var num2 = parseInt(prompt("비교할 두 번째 숫자: "));
compare(num1, num2);

function compare(x, y) {
    if (x > y) {
        return alert(x + "(이)가 " + y + "보다 큽니다.");
    } else if (y > x) {
        return alert(y + "(이)가 " + x + "보다 큽니다.");
    } else {
        return alert("두 숫자는 똑같습니다.");
    }
}