// let str= 'aaabbbsssddddddd'


// let arr= str.split("")

// let newArr= [...new Set(arr)]

// str= newArr.join("")

// console.log(str);

const map ={};
const string = "Hello World";
const array = string.split("");
array.forEach(i => map[i] ? map[i] = map[i] + 1 : map[i] = 1);
console.log(map)