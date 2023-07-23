import fetch from "node-fetch";
let headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + "80f61ec9700beea49a3491b1a185db1c",
};

let url = "https://selfdrvn-qat-api-v2.azurewebsites.net/v3.1/badgescategories";
console.log("1");

const fetchData2 =async (data) => {

    console.log('1st',data);
    let resp = await fetch(url, { headers, method: "GET" });
  let data2 = await resp.json();
  return data2
}
const fetchData4 =async (data) => {

    console.log('2nd',data);
    let resp = await fetch("https://selfdrvn-qat-api-v2.azurewebsites.net/v3.1/badgescategorie", { headers, method: "GET" });
  let data2 = await resp.json();
  return data2
}
const fetchData5 =async (data) => {

    console.log('3rd',data);
    let resp = await fetch(url, { headers, method: "GET" });
  let data2 = await resp.json();
  return data2
}

const fetchData3 = (err) =>{
    console.log('err-->',err.message);
}

const fetchData = async () => {
  let resp = await fetch(url, { headers, method: "GET" });
  let data = await resp.json();
  return data
};
console.log("2");
fetchData().then(data=>fetchData2(data)).then((data)=>fetchData4(data)).then((data)=>fetchData5(data)).catch((err)=>fetchData3(err))
console.log("3");
setTimeout(() => {
    console.log('4');
}, 100);
