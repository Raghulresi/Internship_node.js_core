let id = setImmediate(() => {
    console.log("Hello");
});
clearImmediate(id);
console.log("Cancelled");