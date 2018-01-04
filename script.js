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
var min = breakTimeInt;
var sec = 0;

var breakOrgTime = document.querySelector('#breakOrgTime');
var breakOrgTimeInt = Number.parseInt(breakOrgTime.textContent);

var time = document.querySelector('.time');
var minutes = breakOrgTimeInt;
var seconds = 0;

var x, y, timer;

// Statements values
var isStart = false;
var canChangeValues = true;
var isBreakStarted = false;

// ------- C o d e --------

minusBreakTime.addEventListener("click", function () {
    if (canChangeValues) {
        if (breakTimeInt > 1) {
            breakTimeInt--;
            breakTime.textContent = breakTimeInt;
        }
    }
});
plusBreakTime.addEventListener("click", function () {
    if (canChangeValues) {
        breakTimeInt++;
        breakTime.textContent = breakTimeInt;
    }
});

minusOrgTime.addEventListener("click", function () {
    if (canChangeValues) {
        if (breakOrgTimeInt > 1) {
            breakOrgTimeInt--;
            breakOrgTime.textContent = breakOrgTimeInt;

            minutes = parseInt(breakOrgTimeInt * 60 / 60, 10)
            seconds = parseInt(breakOrgTimeInt * 60 % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            time.textContent = minutes + ":" + seconds;
        }
    }
});

plusOrgTime.addEventListener("click", function () {
    if (canChangeValues) {
        breakOrgTimeInt++;
        breakOrgTime.textContent = breakOrgTimeInt;

        minutes = parseInt(breakOrgTimeInt * 60 / 60, 10)
        seconds = parseInt(breakOrgTimeInt * 60 % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        time.textContent = minutes + ":" + seconds;
    }
});

startButton.addEventListener("click", function () {
    if (!isStart) {
        isStart = true;
        canChangeValues = false;
        startClock(Number.parseInt(minutes) * 60 + Number.parseInt(seconds));
        startButton.textContent = "Pause";
    } else {
        clearInterval(x);
        startButton.textContent = "Start";
        isStart = false;
        canChangeValues = true;
    }
});

resetButton.addEventListener("click", function () {
    isStart = false;
    canChangeValues = true;
    isBreakStarted = false;
    startButton.textContent = "Start";
    if (minutes < 10) {
        time.textContent = "0" + breakOrgTimeInt + ":00";
    } else {
        time.textContent = breakOrgTimeInt + ":00";
    }
    document.body.style.backgroundColor = "#64B5F6";
    clearInterval(x);
    clearInterval(y);
});

function startClock(duration) {
    timer = Number.parseInt(duration);
    x = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (timer-- < 0) {
            timer = duration;
        }

        if (timer === -1) {
            document.body.style.backgroundColor = "#EF5350";
            clearInterval(x);
            isBreakStarted = true;
            breakClock(Number.parseInt(min) * 60 + Number.parseInt(sec));
        }

        time.textContent = minutes + ":" + seconds;
    }, 1000);
}

function breakClock(duration) {
    let timer1 = Number.parseInt(duration);
    y = setInterval(function () {
        minutes = parseInt(timer1 / 60, 10)
        seconds = parseInt(timer1 % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        time.textContent = minutes + ":" + seconds;

        if (timer1-- < 0) {
            timer1 = duration;
        }

        if (timer1 === -1) {
            time.textContent = "Finished";
            clearInterval(y);

        }
    }, 1000);
}