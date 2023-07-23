console.log('first line');

let myFun = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let random = Math.random()

            if(random>0.5){
                resolve(random)
            }else{
                reject(random)
            }
        }, 3000);
    })
}

let secondFun = async() =>{
    try{
        let result = await myFun()
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

secondFun()