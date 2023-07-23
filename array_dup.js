let arr=[]

for(let i=1;i<=100;i++){
    arr.push(i)
}

// let num=""
// for (let i=1;i<arr.length;i++){
//     let start=arr[i-1]
//     if(arr[i]-start>1){
//         num=arr[i-1]+1
//     }
    
// }

// console.log(num);



// console.log(arr);

arr=[1,1,1,31,4,0,6,5,-4]


// let num=""
// let result=[]

// for(let i=0;i<arr.length;i++){
//     num=arr[i]

//     for(let j=i+1;j<arr.length;j++){
//         if(num===arr[j]){
//             result.push(arr[j])
//         }
 
//     }
// }

// console.log(result);


let largest=-Infinity
let smallest=Infinity


for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
    if(arr[i]<smallest){
        smallest=arr[i]
    }
}

console.log(largest,smallest);