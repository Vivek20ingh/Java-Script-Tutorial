var user = function(firstName, courseCount)
{
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    }
}

user.prototype.getFirstname = function()
{
    console.log(`Your firstname is : ${this.firstName}`)
}

var vivek = new user("Vivek",2);
var ankit = new user("Ankit",2);


vivek.getFirstname()

if(vivek.hasOwnProperty("firstNamee"))
{
    vivek.getFirstname()
}

console.log(vivek)
console.log(ankit)