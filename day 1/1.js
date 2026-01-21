// Q1

// let arr =[1,2,3,4,5]
// let rev =[]
// while(arr.length>0){
//     rev.push(arr.pop())
// }
// console.log(rev)

// Q2

// let arr=[1,-2,3,-4,5,6,-7]
// let res =[]

// while(arr.length>0){
//     let val = arr.shift();
//     if(val>0){
//         res.push(val);
//     }
// }
// console.log(res)

// Q3
function palindrome(){
let arr =[1,2,3,3,2,1]
let original=[]
let reverse=[]

for(let i = 0; i<arr.length;i++){
    original.push(arr[i])
 }

 while(arr.length>0){
    reverse.push(arr.pop())
 }

 for(let i =0 ;i<original.length;i++){
    if(original[i]!== reverse[i]){
        return"not a palindrome"
    }
    
 }
  return"palindrome"
}

console.log(palindrome())