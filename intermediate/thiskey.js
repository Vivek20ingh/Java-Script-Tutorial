// part1
console.log(this);

var game ="basket";

function sayname()
{
    var name ="vivek";
    console.log(this)
}

var sayname = function()
{
    var name ="vivek";
    console.log(this)
}
sayname();