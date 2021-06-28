var returned=Math.max(2,3,4,5,7)
console.log(returned);

var obj={};
Object.assign(obj,{a:1,b:"jdj",c:78,d:false},{a:4,a:78,d:true,k:9});
console.log(obj);

function sum(a,b)
{
    return a+b;
}
var a=[5,4,5]
console .log(sum(5,400,5));
console.log(sum(...a));

function sumtwo(...args)
{
    let sum=0;
    for(const arg of args)
    {
        sum+=arg;
    }
    return sum;
}

console.log(sumtwo(2,3,1,4.7));
console.log(sumtwo(...a));