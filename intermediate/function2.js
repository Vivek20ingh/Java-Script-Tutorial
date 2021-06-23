
function Admin(name,admin)
{
    switch(admin)
    {
        case "admin":
            return ` ${name} is admin`;
        case "subadmin":
            return ` ${name} is subadmin`;   
         default: return ;   
    }
}

console.log(Admin("Ankit","admin"));
console.log(Admin("Ankit","subadmin"));