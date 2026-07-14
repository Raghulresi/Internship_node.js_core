const EventEmmiter = require("events");
const emmiter = new EventEmmiter();
emmiter.on("greet",(err)=>{
    if(err)
    {
        console.log(err.message);
    }
    else
    {
        console.log("no error");
    }
})
emmiter.emit("greet",new Error("failed"));