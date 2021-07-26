const myPromise= new Promise(function(myResolve,myReject){
    setTimeout(functiob(){
        myResolve("I Love Cakes...");},3000);
    });
    myPromise.then(function(value){
        console.log(value);
    });