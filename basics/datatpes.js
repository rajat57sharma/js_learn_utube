"use strict"// treat the code as new version or new js

//alert("hi") will be used in browser not js

// remeber two docs MDN tc39

// premitve datatypes :: number, string , bool , null , undefined , symbol , bigInt
// nothing special as float in c++, c

const value = 1.2
//console.log(value)

const id = Symbol('123')
const anId = Symbol('123')



console.log(id == anId)// answ will be false



// non premetive datatypes: arra, enum, funstions object

const heros = ["a" , "b" , "c"]
let myObject = {
     name: "rajat",
     age : 22
}

const myfunction = function(){
    console.log("hello world ")
}


// go through and check the datatypes of diff 


// ++++++++++
 
// stack and heap memory
// primitive->stack , non primitive->heap
//when memory created in stack it provides the copy of the variable while ehen created in heap its by the refreence of variable

let name1 = "rajat"
let name2 = name1
name2 = "hi"

console.log(name1)
console.log(name2)

let user1 ={
    email:"user@1",
    name: "rajat"
}

console.log(user1.email)
let user2 = user1
user2.email="user@2"
console.log(user1.email)
console.log(user2.email)