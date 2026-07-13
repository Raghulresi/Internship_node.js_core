function step1(callback)
{
    console.log("step 1");
    callback();
}
function step2(callback)
{
    console.log("step 2");
    callback();
}
function step3(callback)
{
    console.log("step 3");
}
step1(()=>{
    step2(()=>{
        step3();
    })
})