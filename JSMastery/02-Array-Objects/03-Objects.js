//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name:"Ruturaj",
    age:21,
    [mySym]:"mykey1",
    location:"kolhapur",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["mon","satu"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["age"]);

// console.log(Jsuser.mySym); //mykey1
// console.log(typeof Jsuser.mySym); //string

// console.log(Jsuser[mySym]); //mykey1
// console.log(typeof Jsuser[mySym]); //string

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
 console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());