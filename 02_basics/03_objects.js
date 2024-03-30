// const jsUser={}

// const mysym=Symbol("key1")
// const jsUser={
//     name:"hitesh",
//     age:22,
//     [mysym]:"key1",
//     location:"bihar",
//     email:"hitesh@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["monday","saturday"]
// }

// console.log(jsUser);
// console.log(jsUser["email"]);
// console.log(jsUser[mysym]);

// jsUser.email="shashi@gmail.com"
// console.log(jsUser["email"]);

// Object.freeze(jsUser);

// jsUser.greeting=function(){
//     console.log("hello js user");
// }
// console.log(jsUser.greeting());

// jsUser.greetingTwo=function(){
//     console.log(`hello js user, ${this.name}`);
// }
// console.log(jsUser.greetingTwo());


// const tinderUser=new Object()
// console.log(tinderUser);

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLogged=false

// console.log(tinderUser);


// const regularUser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"hitesh",
//             lastname:"yadav"
//         }
//     }
// }

// console.log(regularUser.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2};
// console.log(obj3);

// const obj3=Object.assign(obj1,obj2)
// console.log(obj3);

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com"

    },
    {
        id:1,
        email:"h@gmail.com"

    },
    {
        id:1,
        email:"h@gmail.com"

    },
]
//user[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ******************************** object de-structure and JSON API ****************************

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// const{courseInstructor}=course
// console.log(courseInstructor);

const{courseInstructor:instruct}=course
console.log(instruct);