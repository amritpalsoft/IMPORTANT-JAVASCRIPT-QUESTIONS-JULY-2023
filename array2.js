// for calculating max and min values

console.log(Math.min(1, 3, 2, 4, 5)); //1
console.log(Math.max(1, 3, 2, 4, 5)); // 5

let arr = [1, 4, 3, 2, 555, 0];

console.log(Math.max.apply(null, arr)); // 5
console.log(Math.min.apply(null, arr)); // 0
console.log(Math.max());

/* ****************************************************** */

//using for loop

let fun = () => {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let a = fun();

console.log(a, "for loop");

/* ********************************************************** */

//reduce 

arr=[2,1,5,4]

let total = arr.reduce((i,j)=>{
    return i + j
},10)

console.log(total);

/* ************************************************************* */

//map 

arr=[2,4,8,16]

let newArr2=arr.map((i)=>{
    return i*i
})
console.log(newArr2);

/* **************************************************************** */
// check if an object is array or not
let myarr=[]

console.log(typeof myarr);
console.log(Array.isArray(myarr));  // false

/* ************************************************************** */
//empty an array
let fullArr=[1,3,4,6,7,8]

fullArr.splice(0,fullArr.length)
console.log(fullArr);

/* **********************************************************************8 */
// check if a number is integer 
let num=12.2

console.log(Number.isInteger(num));

// or

function check(num){
    return num%1 === 0
}

console.log( check(num))

/* ************************************************************************ */

let duplicate = (arr) =>{
    let arr2= [...arr,...arr]
    return arr2
}
let q= [1,2,3,4,5]
let result = duplicate(q)
console.log(result);

/* ****************************************************************** */

let close = () =>{
    let a=6
    function newFun(b){
        return a+b
    }
    return newFun
}

let res= close()

console.log(res(10));

/* *************************************************************************** */
//count the frequency of items in an array

let count= ['amrit','shahshank','girish','jeeva','anand','girish','jeeva',"amrit"]


let countFun = () =>{
    let obj={}
    for(let i=0;i<count.length;i++){
        if(obj[count[i]]){
            obj[count[i]]++
        }else{
            obj[count[i]]=1
        }
    }
    return obj
}

let totalCount =countFun()

console.log(totalCount);

/* ************************************************************* */
// remove duplicate elements from array 
let duplicateItems= ['amrit','pal','amrit','jeeva','jeeva','girish']

let noDuplicate = [...new Set(duplicateItems)]
console.log(noDuplicate);

/******************************************************************* */
// it also removes duplicate elements manually function

let secondDuplicate = ['amrit','pal','amrit','jeeva','jeeva','girish']

function dupFun(){

let obj=[]

for(let i=0 ;i<secondDuplicate.length;i++){
    if(obj.includes(secondDuplicate[i])){
        secondDuplicate.splice(i,1)
        
    }else{
        obj.push(secondDuplicate[i])

    }
}
}

dupFun()

console.log(secondDuplicate);