let myDate =new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocalString());

// console.log(typeOf myDate);

// let myCreatedDate=new Date(2023 ,0,23)
// console.log(myCreatedDate.toDateString());


let myCreatedDate=new Date(2023 ,0,23,5,3)
// console.log(myCreatedDate.toLocaleDateString());

// let myCreatedDate=new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Date.now());

// console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

newDate.toLocaleString('dafault',{
    weekday:"long"
})
