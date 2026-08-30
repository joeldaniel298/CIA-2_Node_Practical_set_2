function checkTimeLeftPromise(seconds) {
    return new Promise((resolve, reject) => {
        if (seconds < 0) {
            reject("Invalid duration");
        } else {
            setTimeout(() => {
                resolve(seconds);
            }, 1000);
        }
    });
}

async function runCountdownAsync(seconds) {
    try {
        let result = await checkTimeLeftPromise(seconds);
        console.log("Remaining time:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

runCountdownAsync(-5);
