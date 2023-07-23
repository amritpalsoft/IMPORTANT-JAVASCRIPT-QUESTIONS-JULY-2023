let sucess= () => {
    console.log('sucess');
}

let failure = () => {
    console.log('failure');
}

let call = (cb1,cb2) => {
    let num = Math.random()
    if(num>0.5){
        cb1()
    }else{
        cb2()
    }
}

call(sucess,failure)