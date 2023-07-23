let open=true
let raw_material=true

let order= () =>{
    return new Promise((resolve,reject)=>{
        if(open){
            console.log('Order placed');
            resolve()
        }else{
            reject()
        }
    })
}

let production= () => {
    return new Promise((resolve,reject)=>{
        if(raw_material){
            console.log('production started');
            resolve()
        }else{
            reject()
        }
    })
}

order().then(production()).then(()=>{
    setTimeout(() => {
        console.log('step 1 started');
    }, 1000);
}).then(()=>{
    setTimeout(() => {
        console.log('step 2 started');
    }, 3000);
})