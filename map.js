let arr=[{name:"amrit",roll:20},{name:"girish",roll:23},{name:"amit",roll:22},{name:"shahshank",roll:24}]

// map returns a new array by doing some operation over each element 
let newArr = arr.map((item)=>{
    return {
        ...item,
        class:Number(item.roll/2)
    }
})
console.log(newArr);


//filter returns all items that matches in an array

let arr1= [{name:"amrit",roll:20},{name:"girish",roll:23},{name:"amit",roll:22},{name:"shahshank",roll:24}]

let filterArray= arr1.filter((item)=>{
    return item.name=="amrit"
})

console.log(filterArray);

// find returns item that matches the condition, and it stops iteration after first match