
sayhello()

function sayhello()
{
    console.log("Hello");
}

// in inspect

// var myname ="vivek"
// undefined
// myname
// "vivek"
// if(myname===myname){
//     console.log("a")
// }
// VM325:2 a
// undefined
// if(myname===window.myname){
//     console.log("a")
// }
// VM342:2 a
// undefined

var myname="vivek"
if(myname===myname)
{
    console.log("a")
}

// if(myname===window.myname)   give error as it is not global context of node
// {
//     console.log("a")
// }