let a= 'amrit pal'
function fun(str){
    let b=[]
    b=a.split(" ")
    console.log(b);
    b=b.map((item)=>{
        return item.split("").reverse().join("")
    })
   
   console.log(b);
    b=b.join(' ')
    return b
}

console.log( fun(a))

// let arr=[1,2,3]

// let b= arr.join("")
// console.log(b);