// //sync - seqence wise run instructions
// //async - execute next instructions immmediatly and donesn't block flow.


// //callback

// function getData(dataId, getNextData) {
//     //2
//     setTimeout(() => {                       // setTimeout
//         console.log("data", dataId);

//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, () => {          // callback hell - nested callback
//     getData(2, () => {          // callback hell - nested callback
//         getData(3);
//     });
// });



//promises      /// to solve callback hell

// let promise = new Promise((resolve, reject) => {
//     console.log("i am promise");                       //resolve() and reject()
//     resolve(123);
// });


//  promise.then((res)=>{});
//  promise.catch((err)=>{});


// async - await

// async function hello(){         // async - give already promise
//     console.log("hello");
// }

// function api() {
//     return new promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("get weather data");
//             resolve(200);
//         }, 2000)
//     })
// }

// async function getweatherdata() {
//     await api(); //1st
//     await api(); //2nd
// }


// IIEF - immediatly invoked function expression

//function api() {
//     return new promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("get weather data");
//             resolve(200);
//         }, 2000)
//     })
// } ();