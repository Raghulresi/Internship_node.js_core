let id = setTimeout(() => {
    console.log("Hello");
}, 3000);
clearTimeout(id);
console.log("Cancelled");