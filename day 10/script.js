let myPromise = new Promise((res,rej)=>{
    let data="this is my data";
    if(data){
        res(data);
    }else{
        rej("error:no data found");
    }
});

// console.log(myPromise);
// myPromise.then((d)=>{
//     console.log(d);
// },(e)=>{
//     console.log(e);
// });

myPromise
.then((d)=>{
    console.log(d);
})
.catch((e)=>{
    console.log(e);
});