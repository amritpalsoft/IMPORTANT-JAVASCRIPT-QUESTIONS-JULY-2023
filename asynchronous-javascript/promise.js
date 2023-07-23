let x;

let onFullFill=(result)=>{
    console.log(`${result} is greater than 0.5`);
}

let onUnFullFill=(result)=>{
    console.log(`${result} is less than 0.5`);
}

const promise = new Promise((resolve,reject)=>{
    x=Math.random()
    if(x>0.5){
        resolve(x)
    }else{
        reject(x)
    }
})

promise.then(onFullFill).catch(onUnFullFill)