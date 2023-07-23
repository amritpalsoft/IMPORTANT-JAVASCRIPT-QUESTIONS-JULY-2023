let str = "my name is amrit pal"

function fun(str){
    let arr = str.split(' ')
    let arr2= arr.map((i)=>{
        return i.split('').reverse().join('')
    })
    console.log( arr2.join(' '))
}

fun(str)

