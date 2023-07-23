let str='  amrit            pal' 

function reverse(str){
    // return str.split(" ").reverse().join(" ")
    // return str.trim()
    let str2="";
    for(let i=str.length-1;i>=0;i--){
        str2+=str[i]
    }
    return str2
}

// console.log(reverse(str));
// console.log(str.length);
// console.log(str.trim().replace(/ +(?= )/g, ""));

let a= str.split("")
// console.log(a);
let b= str.split(" ").filter((item)=>item)

console.log(b);

// let c= b.join("")

// console.log(b);

let d= str.split(" ").filter((item)=>{
    return item!==" "
}).join(' ')

console.log(d);