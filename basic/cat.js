let arr1= [{name:"giirsh"},{name:"jeeva"},{name:"amit"},{name:"avinash"}]

let arr2=[{name:"giirsh"},{name:"amit"},{name:"avinash"},{name:"shahshank"}]

let a=[]
// arr1.map((item)=>{
//    arr2.map((item2=>{
//      if(item.name==item2.name){
//       // console.log('yes');
//       a.push(item)
//      }
//   }))
// })

// console.log((a));

a= arr1.filter((item)=>{
 return arr2.find((item2)=>{
    return item.name==item2.name
  })
})

console.log(a);