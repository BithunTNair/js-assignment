var readlineSync = require('readline-sync');
let primary= parseInt(readlineSync.question('enter  first number '));
let secondary=parseInt(readlineSync.question('enter second number'));
let result=primary**secondary
console.log("your result is :",result)

let x=2
let y=4
y**=x
let z=x**y
x**=y
console.log(z,y)
console.log(x)

