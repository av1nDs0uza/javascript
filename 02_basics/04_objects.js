// const tinderuser = new Object()
const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname : {
        userfullname:{
            firstname: "Avin",
            lastname: "Dsouza"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "Avin"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor)

