function checkTimeLeftPromise(seconds) {
    return new Promise((resolve, reject) => {
        if (seconds < 0) {
            reject("Invalid time");
        } else {
            setTimeout(() => {
                resolve(seconds);
            }, 2000);
        }
    });
}

checkTimeLeftPromise(5)
    .then((remaining) => {
        console.log("Remaining time:", remaining, "seconds");
    })
    .catch((error) => {
        console.log("Error:", error);
    });
