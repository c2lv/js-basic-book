var r = prompt("원의 반지름은? (cm)");
var circle = new Circle(r);
document.write("<p>반지름이 "+ circle.radius + "cm일 때<br>원의 둘레 : 약 "+ circle.calculateCircumference() + "cm<br>원의 넓이 : 약 "+ circle.calculateArea() + "cm<sup>2</sup></p>");

function Circle (radius) {
    this.radius = radius;
    this.calculateCircumference = function() {
        return Math.floor(2*Math.PI*this.radius)
    };
    this.calculateArea = function() {
        return Math.floor(Math.PI*Math.pow(this.radius, 2))
    };
};
// Math.floor()는 소수점 뒤로 버림, Math.round()는 소수점 뒤로 반올림