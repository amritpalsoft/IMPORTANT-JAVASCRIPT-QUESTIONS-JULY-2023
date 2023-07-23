console.log('abc');

let timeDiv = document.getElementsByClassName("time")

 setInterval(() => {
   console.log(Date.now); 
}, 1000);


document.addEventListener('click',()=>{
    console.log(timeDiv);
    console.log('clicked');
    timeDiv.innerText="red"
})
