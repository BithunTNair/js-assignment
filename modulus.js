var readlineSync = require('readline-sync');
let first= parseInt(readlineSync.question('Enter an integer '));
let second=parseInt(readlineSync.question('Enter an integer '));
let result= first%second
console.log("remainder is :",result)

let a=10
let b=5
b%=a
console.log(a,b)