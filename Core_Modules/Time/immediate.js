//immediate execute based on the event loop in a time module
setImmediate(() => {
    console.log("Hello");
}, 3000);