
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

// World Clock functionality
const updateWorldClocks = () => {
    document.querySelectorAll('.clock').forEach((clock, index) => {
        const timeZone = clock.getAttribute('data-timezone');
        const formatter = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: timeZone
        });
        const now = new Date();
        const formattedTime = formatter.format(now);
        clock.querySelector('.time').textContent = formattedTime;
    });
};
// Update world clocks every second
// run initially to avoid delay
setInterval(updateWorldClocks, 1000);
updateWorldClocks(); // Initial call to set clocks immediately
