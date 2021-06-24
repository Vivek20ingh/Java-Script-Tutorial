var user = {
    firstName : "Vivek",
    lastName : "Singh",
    logincount : 32,
    facebooklogin : true,
    courseList: [],
    buyCourse: function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
};

var courseList =true;

console.log(user.firstName);
console.log(user["lastName"]);
logincount=44;
console.log(logincount);
console.table(user);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
console.log(user.getCourseCount());

user.buyCourse("React JS course");
console.log(user.getCourseCount());
console.log(user.courseList)