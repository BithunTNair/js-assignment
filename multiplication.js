var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('Enter  first number '));
let b=parseInt(readlineSync.question('Enter second number '));
b*=a
let c
c=a*b

console.log(c)
c=++a
console.log(c,a)
b*=a
console.log("a=",a, "b=",b)
