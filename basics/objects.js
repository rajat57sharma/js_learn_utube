// two types of defining an object : literal and constructor only diff is singleton

// const mysym = Symbol("key 1")
// const obj = {
//     name:"rajat",
//     age: 26,
//     email: "rajat@google",
//     location:"delhi",
//     isloggedIN:false,
//     lastlogindays:["monday","saturday"],
//     [mysym] :"key 1",
//     "full name": "rajat sharma"// thats why use []
// }

// console.log(obj["full name"])
// console.log(typeof obj[mysym])

// Object.freeze(obj)
// console.log(obj)

// obj.greeting = function(){
//     console.log("hello user")
// }

// obj.greeting2 = function(){
//     console.log(`how are you ${this["full name"]}`)
// }

// console.log(obj.greeting())
// console.log(obj.greeting2())


// describing using constructor and singleton

//const obj = new Object()

const obj = {
    name: "rajat",
    age: 26
 }
//console.log(obj)

const obj2 = {
    name: "rajat",
    fullname:
    {
        first:"rajat",
        second:"sharma"
    }
}

// console.log(obj2.fullname.second)

const obj_a = {
    1:"a",
    2:"b"
}
const obj_b ={
    3:"c",
    4:"d"
}

// const obj_c = Object.assign({}, obj_a,obj_b)
// {} optional as it make sure the return will be {}\

const obj_c = {...obj_a,...obj_b}

//console.log(obj_c)

//objects in array


const tinder_user ={
    name:"ayush",
    age:12,
    loggedin:false
}

const users =[
    {
        name:"abc",
        id:1
    },
    {
        name:"efg",
        id:2
    },
    {
        name:"ijk",
        id:3
    },
    {
        name:"lmn",
        id:4
    }

]

//console.log(users[3].id)

//console.log(Object.keys(tinder_user))
//return key
//console.log(Object.values(tinder_user))
//return value
//console.log(Object.entries(tinder_user))
//returns all entries as array
//console.log(tinder_user.hasOwnProperty("loggedin"))
// returns bool

const course ={
    name : "javscript",
    teacher:"hitesh",
    timeperiod:3
}

const { name } = course
console.log(name)
// to have small name instead of having calling everytime by. we can go like this n u can also rename like {name: n1}
// this is called as destructuring

//in react there are some methids used for destructing

// use api https://api.github.com/users/hiteshchoudhary for further understanding