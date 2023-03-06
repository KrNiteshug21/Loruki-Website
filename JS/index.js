console.log("Hola Amigos!")

// strings
const Variable = "Mathematics"
// console.log(Variable.length)

// console.log("Nice weather out here! Bro!".length)

// console.log(Variable.charAt(7))
// console.log(Variable.indexOf("mat"))

// let subString = "Mth"
// if(Variable.includes(subString)){
//     console.log(subString+" found at "+Variable.indexOf(subString))
// }
// else{
//     console.log(subString+" not found")
// }

// console.log(Variable.slice(0,4))
// console.log(Variable.slice(5))
// const sentence = "Nice weather out here! Bro!"
// console.log(sentence.slice(" "))
// console.log(sentence.slice(5,12))

// const sentence = "Nice weather out here! Bro!"
// console.log(sentence.split(" "))
// console.log(sentence.split(""))
// console.log(Variable.split("e"))

// Numbers
// const var1 = 10
// const var2 = 20
// const var3 = 30
// const var4 = 40
// const var5 = var1 + var2
// const var6 = var4 - var3
// const finalResult = var5 * var6
// if(finalResult === 48){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// let myNumber = 42
// let myFloat = 42.01
// let myStr = "42.0123abc"

// console.log(myNumber === myFloat)
// console.log(myNumber === parseInt(myFloat))
// console.log(parseFloat(myStr))
// console.log(parseInt(myFloat))
// myStr = parseFloat(myStr)
// console.log(myStr.toFixed(2)) 

// Maths(trunc,round,ceil,floor)

// code challenge
// const myName = "Nitesh"
// let rand = Math.ceil((Math.random())*(myName.length-1))
// // let arr = myName.split("")
// // console.log(arr[rand])
// console.log(myName.charAt(Math.floor((Math.random())*(myName.length-1))))
// console.log(myName.charAt(Math.floor((Math.random())*(myName.length-1))))
// console.log(myName.charAt(Math.floor((Math.random())*(myName.length-1))))
// console.log(myName.charAt(Math.floor((Math.random())*(myName.length-1))))
// console.log(myName.charAt(Math.floor((Math.random())*(myName.length-1))))

// user input
// let bool = confirm("Ok === true\nCancel === false")
// console.log(bool)
// let name = prompt("Enter your name");
// if(name){
//     console.log(name);
// }else{
//     console.log("You didn't enter your name")
// }

// array 
// const arr = ["Nite",100,false];
// arr.push("Nigh")
// arr.unshift("End")
// console.log(arr)
// console.log(arr.length)

// const firstItem = arr.shift()
// const lastItem = arr.pop();
// console.log("last deletes item -> "+lastItem + "\n"+"First deleted item -> "+firstItem)
// console.log(arr)
// console.log(arr.length)

// arr.splice(1,0,42)
// console.log(arr)
// arr.splice(1,3,42,101,102)
// console.log(arr)

// const arrA = ["A","B","C"];
// const arrB = ["D","E","F"];
// let newArray = arrA.concat(arrB);

// console.log(arrA);
// console.log(arrB);
// console.log(newArray);

// newArray = [...arrA , ...arrB];
// console.log(newArray);

// newArray = [arrA , arrB];
// console.log(newArray);

const random = ['tree', 795, [0, 1, 2]];
console.log(random[2][2]);

