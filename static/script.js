
// Define Stopwatch variables
let timer;
let startTime;
let elapsedTime = 0;
let running = false;

// Convert milliseconds to HH:MM:SS format
function timeToString(time) {
    const hrs = Math.floor(time / 3600000);
    const mins = Math.floor((time % 3600000) / 60000);
    const secs = Math.floor((time % 60000) / 1000);
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Update the display every second
function updateDisplay() {
    const now = Date.now();
    const diff = now - startTime + elapsedTime;
    document.getElementById('display').innerText = timeToString(diff);
}

function start() {
    if (!running) {
        running = true;
        startTime = Date.now();
        timer = setInterval(updateDisplay, 1000);
    }
}

function stop() {
    if (running) {
        running = false;
        clearInterval(timer);
        elapsedTime += Date.now() - startTime;
    }
}

function reset() {
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    document.getElementById('display').innerText = "00:00:00";
}