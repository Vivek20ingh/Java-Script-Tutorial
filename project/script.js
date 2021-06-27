const courses =[
    {
        name: "Complete ReactJs courses",
        price: "21.3",
    },
    {
        name: "Complete Java courses",
        price: "2.7"
    },
    {
        name: "Complete Mern courses",
        price: "7.3"
    },
    {
        name: "Complete c++ courses",
        price: "214.5"
    },
    {
        name: "Complete java Script courses",
        price: "12.5"
    },
];

{/* <li class="list-group-item">
    <span class="flaot-right"></span>
</li> */}

function generateList()
{
   
    const ul = document.querySelector(".list-group");
    ul.innerHTML=""
    courses.forEach(courses=>{
        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(courses.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("flaot-right")
        const price = document.createTextNode("$ "+courses.price)
        span.appendChild(price)
        li.appendChild(span)
        ul.appendChild(li)

    });
}

// generateList()
window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn")

button.addEventListener("click", () =>{
    courses.sort( (a,b)=> a.price - b.price)
    generateList();
})