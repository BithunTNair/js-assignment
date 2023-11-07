var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter  first number '));
let b=parseInt(readlineSync.question('enter second number'));
let v=a-b
v=b--
console.log(v,b--)

b-=a
console.log(a,b)

