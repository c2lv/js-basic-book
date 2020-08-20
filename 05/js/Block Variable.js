/*
ES6 버전부터는 전역 변수와 지역 변수 말고도 '블록 변수(Block Variable)'가 추가되었습니다. 블록 변수
는 변수를 선언한 블록(중괄호({})로 묶은 부분)에서만 유효하고 블록을 벗어나면 사용할 수 없는 변수입니다.
ES6에서 let 예약어를 사용해 변수를 선언하면 블록 변수가 됩니다.
예를 들어 아래 소스에서 local 변수는 함수 안에서 사용할 수 있는 지역 변수이고, block 변수는 if문 안에서
let 예약어를 사용해 선언했기 때문에 if문 블록 안에서만 사용할 수 있습니다. 그래서 if문 블록을 벗어나서 사
용한 console.log(block); 문은 오류가 납니다. 만일 console.log(block); 문을 if문 블록 안에 사용하면
정상적으로 표시되겠죠? 
*/

add("abc", "123");

function add(a, b) {
    var local = a + b;
    if (b != null) {
        let block = b + a;
    }
    console.log(local);    // 지역 변수 local 값 표시됨
    console.log(block);    // 블록 변수 block 값 표시 안 됨
}