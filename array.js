let arr=[1,3,4,5,3,3]

//there are severeal methods like push,pop, shift, unshift

//splice
arr.splice(2,1)  // remove from second index , 1 element
arr.splice(2,0,10,20,20)  // its actually adds 10,20,30 to second index
console.log(arr);
//splice returns the element removed in an arary
arr=[1,3,4,5,6]
let splicedElement= arr.splice(2,1)
console.log(splicedElement);   // prints [4]
arr=[1,3,4,5,3,4,5]
splicedElement=arr.splice(2,0,10,30)
console.log(splicedElement);  // it prints [] , because we didnt removed any element, only added 

//concatenation
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
let arr3=arr1.concat(arr2)  
console.log(arr3);   // it prints [1,2,3,4,5,6,7,8,9,10]

let arr4=[1,5,4,7,8]



let arr5=arr4.slice(undefined,3)

console.log(arr5);  // it prints [1,5,4]

console.log( arr5.join());  // it converts array into string

console.log(arr5.indexOf(5));  // prints 1
arr5=[1,4,5,6,7,83,1]

console.log(arr5.lastIndexOf(1));  // prints 6

console.log(arr5.includes(83));  // prints 'true'

let arr6=arr5.sort()  // prints [ 1, 1, 4, 5, 6, 7, 83]
let arr7= arr6.reverse()

console.log(arr6);


// some method 
// it returns true if atleast 1 element will satisfy the condition
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some((number) => {
  return number % 2 === 0;
});

console.log(hasEvenNumber); // Output: true

//every method
//it return true , if every element satify the condition
const numbers1 = [2, 4, 6, 8, 10];

const allEven = numbers1.every((number) => {
  return number % 2 === 0;
});

console.log(allEven); // Output: true


