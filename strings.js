//Strings are iterable , i.e we can iterate it using a for loop
// difference between toLowerCase & toLocaleLowerCase is later takes care of local language , while former only thiks of English
// string.length will tells about length of string
// string.replace('amr','Amr')
// str.slice(1,3)

let str='amrit pal'

//if we dont pass second option , then it will goes upto end of string
console.log(str.slice(2,4));    // prints 'ri'

console.log(str.replace('amr','Amr'));  // prints 'Amrit pal'

// split will convert string into an array
console.log(str.split(' '));  // prints  [ 'amrit', 'pal' ]

console.log(str.charAt(2));  // prints  'r'

console.log(str.charCodeAt(3));  // prints '105'

console.log(str[0].toUpperCase() + str.slice(1));    // prints 'Amrit pal'

console.log(str.endsWith('pal'));  // prints 'true'

console.log(str.indexOf('r'));  // prints '2'