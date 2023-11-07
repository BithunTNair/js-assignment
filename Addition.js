var readlineSync = require('readline-sync');
let first= parseInt(readlineSync.question('Enter an integer '));
let second=parseInt(readlineSync.question('Enter an integer '));
let third=parseInt(readlineSync.question('Enter an integer '));
let r=first+second+third
console.log("sum of the numbers is :",r);
let f=6
f++
console.log("now the value of f :",f)
let g=10
f+=g
console.log("now value of f :",f)
g+=f
console.log("now value of g :",g)
g=--f
console.log(g,f)
f=++g
console.log(g,f)
f=g++
console.log(g,f)






