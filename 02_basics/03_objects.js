// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name:"Avin",
    "full name": "Avin Dsouza",
    [mySym]: "mykey1",
    age: 18,
    location: "Mumbai",
    email: "avin@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.greeting = function(){
    console.log(" Hello Js User");
}
JsUser.greeting = function(){
    console.log( ` Hello Js User,${this.name}`);
}
console.log(JsUser.greeting());
