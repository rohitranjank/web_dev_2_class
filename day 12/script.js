// function print(num){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(num);
//             res();
//         },1000)
//     })
// }

// print(1)
// .then(()=>print(2))
// .then(()=>print(3))
// .then(()=>print(4))
// .then(()=>print(5))

// why async and await exist?

// 1. to avoid promise chaining
// 2. to execute the asyncronus code properly without confusion 
// 3. to handle the promise in the better WebAssembly

// important!
// async function always return a promise

// const pro = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("promise resolved");
//     },1000)
// })

// async function demo(){
//     return"async Intro"
// }
// console.log(demo());

// await
// it will pause the async function until the promise return a result


// async function getData(){
//     const value=await pro;
//     console.log(value);
//     // logic of async function code 
//     console.log("after promise");
// }
// getData()

async function fetchData(){
    try{
        const API_key ="7f45d9f973f4a7b3581f9dcdf2f238bb";
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
        const data = await response.json();
        console.log(city);
        console.log(data.main.temp);
        console.log(data.main.humidity);
    } catch (err){
        console.error(err);
    }
}
fetchData("london")