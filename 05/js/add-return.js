var num1 = parseInt(prompt("첫 번째 숫자 : "));
var num2 = parseInt(prompt("두 번째 숫자 : "));
var result = addNumber(num1, num2);
alert("두 수를 더한 값은 " + result + "입니다.");

function addNumber(a, b) { 			
    var sum = a + b;
    return sum;
    // return a + b;
    /*
    위 소스에서 함수 선언 부분의 sum 변수는 단순히 결괏값을 저장했다가 반환하는 역할만 하기 때문에 중간 과
    정을 생략하고 즉시 반환할 수도 있습니다. 즉 간단한 식일 경우에는 위와 같이 return문에서 식을 반환하도
    록 소스를 작성할 수 있습니다.
    */
}
