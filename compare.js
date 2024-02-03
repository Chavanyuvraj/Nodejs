// Buffer.compare() node js program 
var a= Buffer.from('yuva');
var b=Buffer.from('yuva');
var c=Buffer.compare(a,b);
console.log("value return is"+c);
if(c<0){
    console.log(a+"is higher than"+b);


}else if(c==0){
    console.log(a+"is same"+b);
}
else{
    console.log(a+"lower than"+b);
}