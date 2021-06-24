console.log(this);

var user ={
    first: "vivek",
    course: 4,
    getCourseCount: function()
    {
        console.log("Line 7",this);
        function sayHellow()
        {
            console.log("hellow")
            console.log("Line 12 0", this);
        }
        sayHellow();
    },
};

user.getCourseCount();