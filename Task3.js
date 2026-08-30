let seconds = 5;

const timer = setInterval(() => {
    console.log("Time left:", seconds);

    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        console.log("Countdown finished");
    }
}, 1000);
