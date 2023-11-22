const arr1 = [ 1, 2 ,3, 4, 5]

const arr = new Array(1,2,3,4,5)
//console.log(arr[1])

// arr.push(6)
// console.log(arr)

// arr.push(7)
//console.log(arr)


// arr.pop()
// console.log(arr)

//arr.unshift(0)
//arr.shift()
//console.log(arr)
//console.log(arr.includes(2))


// const arr2 = arr.join()
// console.log(arr2)
// console.log(arr)

// console.log(typeof arr)
// console.log(typeof arr2)

// converts value to string


// console.log("A ",arr)

// const myone = arr.slice(1,3)
// console.log(myone)
// console.log("B" ,arr)

const marvel = ["thor","ironman", "strange"]
const dc = [ "superman" , "spiderman" , "batman"]

// marvel.push(dc)
// arrray will be inserted as an element array
// console.log(marvel)
// console.log(marvel[3][2])
//   const all = marvel.concat(dc)
//   console.log(all)

// const all = [...marvel , ...dc] 
// overcomes the limit to add only two var
// console.log(all)


const an_arr = [1,2,3,[4,5,6] , 6, [5 ,[7,8]]]
const arr_2 =an_arr.flat(3)
// flats the arr with depth provided in brakets
console.log(arr_2)
console.log(Array.isArray("rajat"))
console.log(Array.from("rajat"))
// converts provided datatype to array
console.log(Array.from({name:"rajat"})) // *** intrsting will return empty elemnt as no type of array is provided

// read about  from and of and various other methods