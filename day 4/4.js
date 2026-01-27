// var a = 10;
// console.log(a)
// function demo(){
//     let b =20;
//     console.log(b);
// }
// demo()

// let user ={
//     fullName : "Rohit Ranjan kumar",
//     address:"delhi",
//     moobileno : 12345678,
//     favcolor : ['blue','red','green']
// }
// console.log(user.favcolor[1])
// console.log(user.fullName)
// console.log(user)
// console.log(Object.keys(user))



const car ={
    make:"mahindra",
    model:"thar"
}
// Object.freeze(car);
Object.seal(car);
car.model ="XEV9E"
car.color ="blue"
console.log(car)
