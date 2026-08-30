let seconds = 5;

const timer = setInterval(() => {
    console.log("Time left:", seconds);

    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
    }
}, 1000);

setTimeout(() => {
    console.log("Time's up!");
}, 6000);
