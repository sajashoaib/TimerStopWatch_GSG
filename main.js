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