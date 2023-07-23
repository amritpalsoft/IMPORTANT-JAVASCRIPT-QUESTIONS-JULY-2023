/*in javascript we can take function inside a function as a argument , and this is called 
as a Callback function*/

/* A function which takes another function as a argument is called higher order function*/

/* Callbacks can be both Synchronous or asynchronous , but we mainly use callbacks for asynchronous nature 
so that we can delay the code execution , in that time we can fetch our data , or do any heavy computation task

A callback is asynchronous when its execution depends upon time , or some event or some data ftching

settimeout(hello,3000) --> here settimeout is a Higher Order function & hello is a Callback function(asynchronous)

Main problem with callback is callback-hell , like if result depends upon several callbacks */

function hello(name){
    console.log(`Hello ${name}`);
}

function helloAmrit(callback){
    let name="Amrit"
    callback(name)
}

helloAmrit(hello)