//in class 3/5

let myNumber = 9;

let myString = "hello";

let myBool = false;

let myUndifined;

let myNull = null;



let myObject = {
    myNumFromTop : myNumber ,
    myStringFromTop : myString ,
}

myNumber = 10;
myObject.myNumFromTop = 11;


console.log(myObject.myNumFromTop, "myObject");



var varVariable = "my string";
var varVariable = "myOtherString";

console.log(varVariable);

// let varVariable = "my string";
// let varVariable = "myOtherString";

// console.log(varVariable);  -> error

let exNum = 123;
let exStr = "123";

console.log(exNum == exStr);
console.log(exNum === exStr);

exStr = parseInt(exStr);

console.log(exNum === exStr);

console.log(undefined === null);


