const User = require("./class")

// console.log(User);

const vivek= new User("vivek","vs2357766@gmail.com");

console.log(vivek.getinfo().email);

vivek.enrollCourse("React");
console.log(vivek.getCourseList());
let courses= vivek.getCourseList();