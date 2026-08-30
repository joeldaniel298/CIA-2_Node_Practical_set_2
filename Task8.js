function checkTimeLeftCallback(seconds, callback) {
    setTimeout(() => {
        callback(seconds);
    }, 2000);
}

checkTimeLeftCallback(5, (remaining) => {
    console.log("Remaining time:", remaining, "seconds");
});
