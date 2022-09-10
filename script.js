// var p1= new Promise ((resolve,reject)=>{})
// console.log(p1); 

// var p2= new Promise ((resolve,reject)=>resolve("this is a resolved state"))
// console.log(p2); 

// var p3= new Promise ((resolve,reject)=>reject("this is a rejected state"))
// console.log(p3);

// var age = parseInt(prompt("Enter the age!!"))

// var p4= new Promise ((resolve,reject)=>{
//     if(age>=18) {
//         resolve("you are eligible for vote!!")
//     }else{
//         reject("you are not eligible for vote!!")
//     }
// });
// console.log(p4)

// var p5= new Promise ((resolve,reject)=>resolve("this is a resolved state"))
// // console.log(p5);

// p5.then((data)=>console.log(data)).catch((error)=>console.log(error))

// var p6= new Promise ((resolve,reject)=>reject("this is a rejected state"))
// // console.log(p6);

// p6.then((data)=>console.log(data)).catch((error)=>console.log(error))

// function foo (){
// return new Promise((resolve,reject)=>setTimeout(()=>resolve(["Guvi","Geek"]),1000))
// }
// // console.log(foo());
// foo().then((data)=>console.log(data)).catch((error)=>console.log(error))

// function calculate (num){
//     return new Promise((resolve,reject)=>setTimeout(()=>resolve(2*num),1000))
// }
// // console.log(calculate(5))
// calculate(10).then((data)=>{console.log(data)
// return calculate(data)}).then((data1)=>{console.log(data1)
//     return calculate(data1)}).then((data2)=>console.log(data2))

var p7=new Promise((resolve,reject)=>{
    if(false){
        setTimeout(()=>resolve("p7 is resolved"),2000);
    }else{
        setTimeout(()=>reject("p7 is rejected"),2000)
    }
});


var p8=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("p8 is resolved"),6000);
    }else{
        setTimeout(()=>reject("p8 is rejected"),6000)
    }
});


var p9=new Promise((resolve,reject)=>{
    if(false){
        setTimeout(()=>resolve("p9 is resolved"),4000);
    }else{
        setTimeout(()=>reject("p9 is rejected"),4000)
    }
});

// p7.then((data)=>console.log(data)).catch((error)=>console.log(error))
// p8.then((data)=>console.log(data)).catch((error)=>console.log(error))
// p9.then((data)=>console.log(data)).catch((error)=>console.log(error))
Promise.all([p7,p8,p9]).then((data)=>console.log(data)).catch((error)=>console.log(error))

Promise.allSettled([p7,p8,p9]).then((data)=>console.log(data)).catch((error)=>console.log(error))

Promise.allSettled([p7,p8,p9]).then((data)=>data.forEach((res)=>console.log(res)))