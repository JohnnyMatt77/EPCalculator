var $screen = $("#screen");
var $number = $(".number");

var currentNumber = 1;
var num1 = null;
var num2 = null;
var click = 1;

$number.on('click', function() {
click++;
if (click > 12){
return;
}
   var numberPressed = $(this).html();
   $screen.append(numberPressed);
$("#clear").css('background-color', '#cc1423');

if (currentNumber == 1) {
if (num1 == null) {
num1 = numberPressed; 
} else {
num1 = num1 +numberPressed;
 }
}
if (currentNumber == 2) {
if (num2 == null) {
num2 = numberPressed; 
} else {
num2 = num2 + numberPressed;
}
$("#equal").css('background-color', '#cc1423');
}
});

function more(){
if (click > 8){
click = click - 5;
}
if (currentNumber == 2) {
findAnswer();
$screen.empty();
$screen.append(num1);
}
currentNumber = 2;
}

$("#times").on('click', function() 
 {
    more();
    $screen.append("x");
    op = "x";
})

$("#divide").on('click', function() 
 {
    more();
    $screen.append("/");
    op = "/";
})

$("#minus").on('click', function() 
 {
    more();
    $screen.append("-");
    op = "-";
})


$("#plus").on('click', function() 
 {
   more();
    $screen.append("+");
    op = "+";
})

$("#clear").on('click', function() 
 {
    $screen.empty();
num1 = null;
num2 = null;
currentNumber = 1;
click = 0;
$("#clear").css('background-color', 'gray');
$("#equal").css('background-color', 'gray');
});

function findAnswer() {
num1 = parseInt(num1);
num2 = parseInt(num2);
if (op == "+") {
answer = num1 + num2;
}
if (op == "-") {
answer = num1 - num2;
}
if (op == "x") {
answer = num1 * num2;
}
if (op == "/") {
answer = num1 / num2;
}
if (op == "+") {
answer = num1 + num2;
}
num1 = answer;
num2 = null;
currentNumber = 1;
}

$("#equal").on('click', function() 
{
var element = document.getElementById('equal');
var style = window.getComputedStyle(element);
var backgroundColor = "background-color";
var buttonColor = element.style.backgroundColor;
if(buttonColor == 'gray') {
return;
}
   $("#screen").append("=");
findAnswer();
if (click > 8){
$screen.empty();
var answerLength = answer.toString();
click = answerLength.length;
console.log(click);
}
$screen.append(answer);
$("#equal").css('background-color', 'gray');
})

