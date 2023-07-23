let str='amrit pal'

let arr=str.split(' ')
let newArr= arr[0].split('').reverse().join('') +' ' + arr[1].split('').reverse().join('')
// let arr3= newArr.join()
console.log(newArr);