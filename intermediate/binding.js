const vivek ={
    firstName : "Vivek",
    lastname :  "Singh",
    role: "Admin",
    courseCount: 3,
    getInfo: function()
    {
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastname}
        his role is ${this.lastname}
        and he is studying ${this.courseCount} courses
        `);
    }
}

const dj ={
    firstName: "Rock",
    lastname: "DG",
    role: "Sub -Admin",
    courseCount: 4,
};
vivek.getInfo();
//dj.getInfo();
vivek.getInfo.bind(dj)();
vivek.getInfo.call(dj);
