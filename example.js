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


// console.log(myObject.myNumFromTop, "myObject");



var varVariable = "my string";
var varVariable = "myOtherString";

// console.log(varVariable);

// let varVariable = "my string";
// let varVariable = "myOtherString";

// console.log(varVariable);  -> error

// let exNum = 123;
// let exStr = "123";

// console.log(exNum == exStr);
// console.log(exNum === exStr);

// exStr = parseInt(exStr);

// console.log(exNum === exStr);

// console.log(undefined === null);

const myArray = [4443,2,32,-1,100];
const numString = "4443"

// console.log(myArray[0].toString().length);
// console.log(numString.length);

let color = "blue";

const dragon1 = {
    color: "red",
    roar(){
        // console.log(`GAhhh ${color}`);
        console.log(this.color);

    }
}

// dragon1.roar();


for(let i=0; i<10;i++){
    var myVar = 12;
}

// console.log(myVar);

var myVar1 = 0;

function myFun319(){
    let myVar1 = 1;
    if(true){
        const myVar1 = 2;
        console.log(myVar1);
    }
}

// myFun319();

// console.log(this);


const items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53, 2];

function mergeSort(data){

    if(data.length>1){

        let mid = Math.round(data.length/2);
        
        let leftItems = data.slice(0,mid);
        let rightItems = data.slice(mid);
       
        //     # TODO: recursively break down the arrays
        mergeSort(leftItems);
        mergeSort(rightItems);

        //     # TODO: now perform the merging
        let i=0; //index into the left array
        let j=0; //index into the right array
        let k=0; //index into merged array

        //     # TODO: while both arrays have content

        while(i<leftItems.length && j<rightItems.length){
            if(leftItems[i]>rightItems[j]){
                data[k]=rightItems[j];
                j++;
            }else{
                data[k]=leftItems[i];
                i++;
            }
            k++;
        }

        //     # TODO: if the left array still has values, add them

        while(i<leftItems.length){
            data[k]=leftItems[i];
            i++;
            k++;
        }

        //     # TODO: if the right array still has values, add them

        while(j<rightItems.length){
            data[k]=rightItems[j];
            j++;
            k++;
        }

        // console.log("end of func");
        // console.log(data);

    }
}

// console.log(items);
// mergeSort(items);
// console.log(items);


let myStr = [1,2,3];

function modStr(str){
    str[0]=4;
}


modStr(myStr);
// console.log(myStr);   prints out [4,2,3]


// sorting-----------------------------------------

function findIndex(data,target){
    console.log(data);
    data.sort();
    console.log(data);
    let currentLeng = data.length;
    let lIndex = 0;
    let rIndex = currentLeng-1;

    while(lIndex<=rIndex){
        midIndex = Math.round(currentLeng/2);
        let midItem = items[midIndex];
        if(midItem===target){
            return midIndex;
        }else if(midItem<target){
            lIndex = midIndex+1;
        }else{
            rIndex = midIndex-1;
        }
    }

    return -1;
}

// console.log(findIndex(items,87));


// insertion sort

const insArray = [9,2,1,12,7];

function insSort(arr){
    for(let i=0; i<arr.length;i++){     //[2,9,1]
        let current = arr[i];           //1
        j=i-1;                          //1
        while(j>=0 && arr[j]>current){  //2>1       2>1
            arr[j+1]=arr[j]             //[2,9,9]   [2,2,9]
            j--;                        //j=0       j=-1
        }                               //
        arr[j+1] = current;             //          [1,2,9]


        // if(arr[i+1]<current){
        //     arr[i]=arr[i+1];
        //     arr[i+1]=current;
        // }
        

        // j=i+1;  //1 //0
        // while (j>=0 && current>arr[j]){  //
        //     arr[i] = arr[j]; // [2,2]  // []
        //     j--;
        // }
        // arr[j+1]=current;
    }
}

console.log(insArray);

insSort(insArray);

console.log(insArray);

