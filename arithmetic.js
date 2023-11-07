var readlineSync = require('readline-sync');
let a=parseInt(readlineSync.question('Enter a number '));
let b=parseInt(readlineSync.question('Enter a number '));
let c=parseInt(readlineSync.question('Enter a number '));
let d=parseInt(readlineSync.question('Enter a number '));
let result=a+b-c*d
c+=a
a++
b=--d
console.log("you got",result)
console.log(result,c)
console.log(a,b)
let name=readlineSync.question('Enter your name ');
let birth =parseInt(readlineSync.question('Enter your birth year '));
let year=parseInt(readlineSync.question('Enter current year'));
let age=year-birth
console.log("Your age is :",age)

let fc=2
let cb=5
fc=--cb
cb=fc++
console.log("fc is",fc,"cb is",cb)








