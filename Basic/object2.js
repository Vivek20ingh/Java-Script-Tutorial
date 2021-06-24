var User = {
    name:"",
    getUserName: function(){
        console.log(`User name is : ${this.name}`);
    }
};
var vivek=Object.create(User);
console.log(vivek);
vivek.name="Vivek"
vivek.getUserName();

var sam = Object.create(User,{
    name:{value: "samay"},
    courseCount:{value:3},
});
console.log(sam.name);