var name ="vivek"

function sayname1()
{
    console.log(name);
}
function sayname2()
{
    var name ="ankit";
    console.log(name);
    sayname3();

    function sayname3()
    {
        var name ="pra";
        console.log(name);
    }
    sayname3();
}

sayname1();

sayname2();


