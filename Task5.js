let seconds = parseInt(process.argv[2]);

if (isNaN(seconds) || seconds < 0) {
    console.log("Please provide a valid duration in seconds.");
    process.exit();
}

console.log("Countdown started for", seconds, "seconds.");

const timer = setInterval(() => {
    console.log("Time left:", seconds);
    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        console.log("Time's up!");
        process.exit();
    }
}, 1000);

process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {
    if (input.trim().toLowerCase() === "cancel") {
        clearInterval(timer);
        console.log("Countdown cancelled.");
        process.exit();
    }
});
