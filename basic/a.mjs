let url='https://selfdrvn-qat-api-v2.azurewebsites.net/v3.1/badgescategories'
import axios from 'axios';
import fetch from 'node-fetch';
let headers={
    "Content-Type":"application/json",
    "Authorization":"Bearer "+ "80f61ec9700beea49a3491b1a185db1c"
}
let data;
const fetchUser= async() => {
    let data= await fetch(url,{
        method:"GET",
        headers})
        let resp=await data.json()
        console.log(resp);
     }

fetchUser()



// let a=await fetchUser()

// const fetchUser = () =>{
//       axios(url,{
//         method:"GET",
//         headers
//     }).then((data)=>{
//         console.log(data.data);
//     })
// }
fetchUser()