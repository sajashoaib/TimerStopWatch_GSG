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
document.getElementById('stopwatch-btn').addEventListener('click', function () {
    document.querySelector('.timer').classList.add('hidden');
    document.querySelector('.stopwatch').classList.remove('hidden');
});

document.getElementById('timer-btn').addEventListener('click', function () {
    document.querySelector('.stopwatch').classList.add('hidden');
    document.querySelector('.timer').classList.remove('hidden');
});

document.querySelector('.start-stopwatch').addEventListener('click', startStopwatch);
document.querySelector('.reset-stopwatch').addEventListener('click', resetStopwatch);
displayStopwatch();

function startTimer() {
    const input = prompt('Enter the duration for the timer in HH:MM:SS format:');
    const [hours, minutes, seconds] = input.split(':').map(Number);

    if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
        timerHours = hours;
        timerMinutes = minutes;
        timerSeconds = seconds;

        displayTimer();
        timerInterval = setInterval(updateTimer, 1000);
        document.querySelector('.start-timer').classList.add('hidden');
        document.querySelector('.stop-timer').classList.remove('hidden');
    } else {
        alert('Invalid input! Please enter a valid duration in HH:MM:SS format.');
    }
}

function updateTimer() {
    if (timerHours === 0 && timerMinutes === 0 && timerSeconds === 0) {
        stopTimer();
        return;
    }

    if (timerSeconds === 0) {
        if (timerMinutes === 0) {
            timerHours--;
            timerMinutes = 59;
            timerSeconds = 59;
        } else {
            timerMinutes--;
            timerSeconds = 59;
        }
    } else {
        timerSeconds--;
    }

    displayTimer();
}

function stopTimer() {
    clearInterval(timerInterval);
    document.querySelector('.start-timer').classList.remove('hidden');
    document.querySelector('.stop-timer').classList.add('hidden');
}

function resetTimer() {
    clearInterval(timerInterval);
    timerHours = 0;
    timerMinutes = 0;
    timerSeconds = 0;
    displayTimer();
    document.querySelector('.start-timer').classList.remove('hidden');
    document.querySelector('.stop-timer').classList.add('hidden');
}

function displayTimer() {
    hourElem.textContent = formatTime(timerHours);
    minElem.textContent = formatTime(timerMinutes);
    secElem.textContent = formatTime(timerSeconds);
}

document.querySelector('.start-timer').addEventListener('click', startTimer);
document.querySelector('.stop-timer').addEventListener('click', stopTimer);
document.querySelector('.reset-timer').addEventListener('click', resetTimer);
displayTimer();
