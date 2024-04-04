function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()


// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumber(3,4);
// addTwoNumber(3,"4");
// addTwoNumber(3,"a");
// addTwoNumber(3,null);

// const result=addTwoNumber(3,5)
// console.log("Result:",result);// undefine


function addTwoNumber(number1,number2){
    let result=number1+number2
    // console.log("hitesh");
    return result
    
}
const result=addTwoNumber(3,5)
// console.log(result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// loginUserMessage("hitesh")

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());



// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("please enter a username");
//         return 
//     }
//     return `${username} just logged in`
// }
console.log(loginUserMessage(""));




function loginUserMessage(username="shashi"){
    return `${username} just logged in`
}
// console.log(loginUserMessage());



// function calculatecartPrice(num1){
//     return num1
// }
// console.log(calculatecartPrice(200,300,400));




// function calculatecartPrice(...num1){
//     return num1
// }
// console.log(calculatecartPrice(200,300,400));



function calculatecartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculatecartPrice(200,300,400));


const user={
    username:"hitesh",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)



const myNewArray=[200,400,100,600]
function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray));