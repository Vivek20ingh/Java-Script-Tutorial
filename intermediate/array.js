var a =["india", "usa",  "russia"];
var b=["up", "rj", "uk"];
var c=new Array(1,2,3,4,5);

console.log(a[2]);
console.log(a.length+b.length);
console.log(c[3]);
console.log(c);

var d=new Array("a",12,true,"hello");
console.log(d);

d.pop();
console.log(d);

d.unshift("new abc");
console.log(d);

d.shift();
d.shift();
console.log(d);

console.log(d.indexOf(12));
console.log(Array.from("Vivek"));