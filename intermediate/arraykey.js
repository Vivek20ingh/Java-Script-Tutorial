
var isEven = (element) =>
{
   return element%2==0;
}
console.log(isEven("10"));

var a=[2,4,5,4];
var r=a.every(isEven);
console.log(r);
console.log(a.every(isEven));

console.log(a.every((e) => {
    return e%2==0;
}));

console.log(a.every((e) => 
    e%2==0
));