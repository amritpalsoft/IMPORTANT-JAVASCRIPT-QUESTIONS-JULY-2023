let a = 'amrit pal'

// console.log(a.toUpperCase());

// let b = a.split(" ")

// b = b.map((item) => {
//     let str = ""
//     for (let i = 0; i < item.length; i++) {
//         if (i === 0) {
//             str += item[0].toUpperCase()
//         } else {

//             str += item[i]
//         }
//     }
//     return str
// })

// console.log(b.join(" "));

let d= a.split(" ")

for(let i=0;i<d.length;i++){
    d[i] = d[i].charAt(0).toUpperCase() + d[i].slice(1)
}

console.log(d.join(" "));