const myArr=[0,1,2,3,5,true,"hitesh"]
// console.log(myArr[4]);
const myHero=["shaktiman","naagraj"]
// const myArr2=new Array(1,2,3,4);


//  ********************** Array Method ****************************************

// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(2);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(5));

// const newArr=myArr.join();
// console.log(typeof newArr);


// ******************** slice and splice ***************************************
console.log("A" ,myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);

console.log("B",myArr);
const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);
console.log(myn2);