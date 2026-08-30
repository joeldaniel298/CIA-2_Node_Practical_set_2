console.log("Synchronous message");

Promise.resolve().then(() => {
    console.log("Promise message");
});

setTimeout(() => {
    console.log("setTimeout message");
}, 0);
