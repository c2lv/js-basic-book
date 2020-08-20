function add(a, b) {
    sum = a + b;
    return sum;
}
var num1 = Number(prompt("num1을 입력하세요: "));
var num2 = Number(prompt("num2를 입력하세요: "));
/*
parseInt( ) 함수는 프롬프트 창에 입력한 값을 정수로 바꾸는 함수입니다.
parseInt( ) 대신에 Number( ) 함수를 사용해도 됩니다.
*/
var result = add(num1, num2);
document.write("num1 + num2 = " + result);