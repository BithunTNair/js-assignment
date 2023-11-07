var readlineSync = require('readline-sync');
let first= parseInt(readlineSync.question('Enter an integer '));
let second=parseInt(readlineSync.question('Enter an integer '));
let result= first/second
console.log("Answer is :",result)
console.log("first/second = ",result)
console.log(first, "/", second," = ",result)

let a=5
let b=4
b/=a
console.log("a:",a, "b:",b)


