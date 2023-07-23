console.log('started');

let a = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let random = Math.random()
        if(random>0.5){
            resolve(random)
        }else{
            reject(random)
        }
    }, 3000);
})

console.log('before promise');

a.then((val)=>{
    val++
    console.log(val,'promise resolved');
    return val
})
.then((val)=>{
    console.log('second promise');
    val++
    return val
})
.then((val)=>{
    console.log('promise 3 resolved',val);
})
.catch((data)=>{
    console.log(data,'promise rejected');
})

console.log('after promise');