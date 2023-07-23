for(let i=0;i<=100;i++){
    if((i%3===0) && (i%5===0)){
        console.log('fizzbuzz', i);
    }else if(i%5===0){
        console.log('buzz', i);
    }else if(i%3===0){
        console.log('fizz', i);
    }else{
        console.log(i);
    }
}

/* ************************************* */

(function fun(){
    var a=b=5
})()

console.log(b); // prints 5
// even though it looks b is defined inside function , so not accessible outside , but we can access it bcz
// compiler will see it as
// var a = b 
// b=5 , so compiler will assign b to the global scope


/************************************************************************* */


function fun(a){
    return function fun2(b){
        return function fun3(c){
            return a+b+c
        }
    }
}

let res = fun(1.6)(2)(3)
console.log(res,'d');