// Buttons
var minusBreakTime = document.querySelector('#minusBreakTime');
var plusBreakTime = document.querySelector('#plusBreakTime');

var minusOrgTime = document.querySelector('#minusOrgTime');
var plusOrgTime = document.querySelector('#plusOrgTime');

var startButton = document.querySelector('#startButton');
var resetButton = document.querySelector('#resetButton');

// Values
var breakTime = document.querySelector('#breakTime');
var breakTimeInt = Number.parseInt(breakTime.textContent);

var breakOrgTime = document.querySelector('#breakOrgTime');
var breakOrgTimeInt = Number.parseInt(breakOrgTime.textContent);

var time = document.querySelector('.time');
var minutes = breakOrgTimeInt;
var seconds = 0;

// Statements values


// Code
// ----

minusBreakTime.addEventListener("click", function () {
    if (breakTimeInt > 1) {
        breakTimeInt--;
        breakTime.textContent = breakTimeInt;
    }
});

plusBreakTime.addEventListener("click", function () {
    breakTimeInt++;
    breakTime.textContent = breakTimeInt;
});

minusOrgTime.addEventListener("click", function () {
    if (breakOrgTimeInt > 1) {
        breakOrgTimeInt--;
        breakOrgTime.textContent = breakOrgTimeInt;

        minutes = parseInt(breakOrgTimeInt * 60 / 60, 10)
        seconds = parseInt(breakOrgTimeInt * 60 % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        time.textContent = minutes + ":" + seconds;
    }
});

plusOrgTime.addEventListener("click", function () {
    breakOrgTimeInt++;
    breakOrgTime.textContent = breakOrgTimeInt;

    minutes = parseInt(breakOrgTimeInt * 60 / 60, 10)
    seconds = parseInt(breakOrgTimeInt * 60 % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    time.textContent = minutes + ":" + seconds;
});