//lets assume there are 5 steps for a work to complete and each work require some amount of time , and all steps to be in a particular order

let order = ()=>{
    setTimeout(() => {
        console.log('order placed');
        production()
    }, 1000);

}

let production = () => {
    console.log('production started');
    setTimeout(() => {
        console.log('step 1 completed');
        setTimeout(() => {
            console.log('step 2 completed');
            setTimeout(() => {
                console.log('step 3 completed');
                setTimeout(() => {
                    console.log('step 4 completed');
                    console.log('production completed');
                }, 200);
            }, 3000);
        }, 1000);
    }, 2000);
}

order()