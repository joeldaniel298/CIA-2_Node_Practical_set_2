let start = new Date();
let end = new Date(start.getTime() + 5000);

let secondsRemaining = Math.floor((end - start) / 1000);

console.log("Seconds Remaining:", secondsRemaining);
