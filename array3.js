// group all according to age

let arr=[{name:'amrit',age:28},{name:'anand',age:25},{name:'avinash',age:28},{name:'girish',age:25},{name:'jeeva',age:28}]

let arr2={}
function fun(arr){
    arr.forEach(element => {
        console.log(arr2[element.age]);
        if(arr2[element.age]){
            arr2[element.age] = [...arr2[element.age] ,element]
        }else{
            arr2[element.age]= [element]
        }
    });
}

fun(arr)
console.log(arr2);
/****************************************************************************** */
//two sum problem 

let sum =[ 1,7,2,3,4,6,5,]

function check(arr,total) {
    let finalArr=[]
       for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === total){
                finalArr.push([arr[i],arr[j]])
            }
        }
       }
       return finalArr
}

let res = check(sum,5)
console.log(res);

/********************************************************************************* */

// missing number

let missedArr=[1,3,4,5,7,8,9]

function checkMiss(){
    let num=[]
    for(let i =0 ;i<missedArr.length;i++){
        if(missedArr[i+1]-missedArr[i]>1){
            num.push(missedArr[i+1]-1)
        }
    }
    return num
}

let missNum = checkMiss()

console.log(missNum);

/*************************************************************************************** */

// n'th largest number

let largest=[1,65,66,77,4,88,6,8]

function large(arr,n){
    let num =''
    let sorted = arr.sort((a,b)=>a-b)
    for(let i=sorted.length-1;i>sorted.length-n;i--){
        num = sorted[i-1]
    }
    return num
}

let a= large(largest,6)
console.log(a);


/************************************************************** */
// sorting in ascending / descending order this object
let obj ={
    a:10,
    b:14,
    c:2,
    d:66
}


let arrr=Object.entries(obj)
arr.sort((a,b)=>a[1]-b[1])
console.log(arrr);
let my= Object.fromEntries(arrr)

console.log(my);

/************************************************************ */

// sorting an array without using built in sort() function

let arrWithout= [33,1,5,4,6,0,0.6,-2,0,9]

let fun44 = (arr) => {
    for( let i=0 ; i<arr.length ;i++){
        for(let j=0 ;j<arr.length ;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

// let result = fun(arrWithout)
console.log(result);

/************************************************************************* */

// sort an array of objects without in-built sort()

let arrObj= [{name:'amrit',roll:20},{name:'amrit',roll:23},{name:'amrit',roll:10}]

let sort = (arr) =>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            console.log(arr[j],arr[j+1]);
            if(arr[j]?.roll>arr[j+1]?.roll){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

let res2= sort(arrObj)

console.log(res2);

// if we have to sort by name 

let arr4= [{name:'shhash',roll:20},{name:'amrit',roll:23},{name:'zzz',roll:10}]

let sort2 = (arr) =>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            console.log(arr[j],arr[j+1]);
            if(arr[j]?.name<arr[j+1]?.name){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

let res3= sort2(arr4)

console.log(res3);

/*************************************************** */
// remove duplicate elements fromman array of objects
 
 
let arr5=[{name:"amrit",roll:21},{name:"pal",roll:21},{name:"shahshank",roll:22}]
function isObjectEqual(obj1, obj2) {
    // Assuming the objects have the same properties
    return obj1.roll === obj2.roll
  }

  const uniqueArray = arr5.filter((item, index, self) => {
    console.log(self,'slef');
    return self.findIndex(obj => isObjectEqual(obj, item)) === index;
  });


  
  console.log(uniqueArray);