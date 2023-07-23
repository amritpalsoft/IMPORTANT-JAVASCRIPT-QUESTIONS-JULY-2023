console.log('start');
let sum=0;
let loopFun = async() =>{
    for(let i=0;i<100000;i++){
        for(let j=0;j<9999;j++){
          sum=j  
        }
    }
}

async function fun(){
    console.log('inside');
    await loopFun()
    console.log('inside 3',sum);
}
fun()
console.log('finish');