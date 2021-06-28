class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    // apple=[];
     #courseList = [];
    getinfo()
    {
        return{name: this.name, email: this.email};
    }
    enrollCourse(name)
    {
        this.#courseList.push(name);
    }
    getCourseList()
    {
        return this.#courseList;
    }

    login(){
        return "yoy are logged in";
    }
}

class Subadmin extends User
{
    constructor(name,email)
    {
        super(name,email);
    }
    getAdminInfo()
    {
        return "I am sub admin";
    }
}

module.exports =User;

const rock= new User("rock","rock@wmail");
console.log(rock.getinfo());
rock.enrollCourse("angular");
rock.enrollCourse("maths");
console.log(rock.getCourseList());
console.log(rock.courseList);


const tom=new Subadmin("tom","tom.@email.om");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getinfo());
