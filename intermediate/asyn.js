const  uno=() =>{
    return "i am  one";
}

// const  dos= async() =>{
//     setTimeout(()=>{
//     return "i am  two";
//     },3000)
// }

const  dos= () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am two");
        },3000)
    });
};


const tres =() =>{
    return "i am three";
}



const callMe = async() =>{
    let valOne = uno();
    console.log(valOne);


    let valOne1 = await dos();
    console.log(valOne1);

    let valOne2 = tres();
    console.log(valOne2);
}

callMe();