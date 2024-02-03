//concat method() in node js
var a=Buffer.from('Yuvraj');
var b=Buffer.from('chavan');
var c=Buffer.concat([a , b]);
console.log("Hi myself " +c.toString());