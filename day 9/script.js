console.log("starting..........");
function dowork(cb){
  setTimeout(()=>{ 
    cb('working.........');
    },3000); 
}
dowork((data)=>{
    console.log(data);
});
console.log("finished");    