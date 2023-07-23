console.log(10);

console.log(20);

/* here 1000 is the min time after which this will execute , but it may take longer to execute,
   depending upon when call stack is free */
setTimeout(()=>{
    console.log("timer 1");
},1000)

console.log(30);

setInterval(() => {
    console.log("interval");
}, 1000);