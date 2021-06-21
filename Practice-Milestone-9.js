// let arrayOfNumbers = [1,2,3,4];
// let finalVariable = arrayOfNumbers[0];

// arrayOfNumbers.forEach(function(item,index,array){
//     finalVariable *= arrayOfNumbers[index];
// });

// console.log(finalVariable);

var someArray = [1, 2, 3, 4];
let finalVar = someArray[0];

function changeArray(arr) {
    arr.forEach(function(item,index,array){
            finalVar *= arr[index];
        });
    return finalVar;
}

alert(changeArray(someArray));