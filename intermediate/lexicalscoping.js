function init()
{
    var firstName ="vivek"
    function sayFirstName()
    {
        console.log(firstName);
    }
    return sayFirstName;
}

var nnn= init();

///closure


nnn();

// exam

function add(x)
{
    console.log("yes");
    return function(y)
    {
        return x+y;
    }
}

var add5 = add(4);
var z=add5(50);
console.log(z);

z=add(4)(5);//curring

console.log(z);

