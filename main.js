let stopwatchInterval;
let stopwatchHours = 0;
let stopwatchMinutes = 0;
let stopwatchSeconds = 0;
let stopwatchMilliseconds = 0;
let timerInterval;
let timerHours = 0;
let timerMinutes = 0;
let timerSeconds = 0;

const stopwatchHourElem = document.getElementById('stopwatch-hour');
const stopwatchMinElem = document.getElementById('stopwatch-min');
const stopwatchSecElem = document.getElementById('stopwatch-sec');
const stopwatchMSElem = document.getElementById('stopwatch-ms');
const hourElem = document.getElementById('timer-hour');
const minElem = document.getElementById('timer-min');
const secElem = document.getElementById('timer-sec');

function startStopwatch() {
    stopwatchInterval = setInterval(updateStopwatch, 10);
}

function updateStopwatch() {
    stopwatchMilliseconds++;
    if (stopwatchMilliseconds === 100) {
        stopwatchSeconds++;
        stopwatchMilliseconds = 0;
    }
    if (stopwatchSeconds === 60) {
        stopwatchMinutes++;
        stopwatchSeconds = 0;
    }
    if (stopwatchMinutes === 60) {
        stopwatchHours++;
        stopwatchMinutes = 0;
    }
    displayStopwatch();
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchHours = 0;
    stopwatchMinutes = 0;
    stopwatchSeconds = 0;
    stopwatchMilliseconds = 0;
    displayStopwatch();
}

function displayStopwatch() {
    stopwatchHourElem.textContent = formatTime(stopwatchHours);
    stopwatchMinElem.textContent = formatTime(stopwatchMinutes);
    stopwatchSecElem.textContent = formatTime(stopwatchSeconds);
    stopwatchMSElem.textContent = formatTime(stopwatchMilliseconds);
}

// Helper function 
function formatTime(time) {
    return time.toString().padStart(2, '0');
}