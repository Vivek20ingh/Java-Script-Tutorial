var mymap = new Map()

mymap.set(1,"Uno")
mymap.set(2,'dos')
mymap.set(3,'Tres')

console.log(mymap)

for(let key of mymap.keys())
{
    console.log(key);
}
for(let key of mymap.values())
{
    console.log(key);
}
for(let [key,value] of mymap)
{
    console.log(key, value);
}

mymap.forEach((key) => console.log(key));

mymap.delete(2);
console.log(mymap);