let firstArray = [3, 2, 5];
let secondArray = [1, 4, 4];
let thirdArray = [9, 7, 2];
let fourthArray = [5, 2, 2];

console.log(arrayDiff(firstArray,secondArray));
console.log(arrayDiff(thirdArray,fourthArray));


function arrayDiff(arrOne,arrTwo){
   let firstTempNum = 1;
   let secondTempNum = 1;
   let finalNum = 0;
    arrOne.forEach(function(firstItem,firstIndex,firstArray) {
     firstTempNum *= arrOne[firstIndex];
    });
    arrTwo.forEach(function(secondItem,secondIndex,secondArray){
        secondTempNum *= arrTwo[secondIndex];
    });
    return finalNum = firstTempNum - secondTempNum;
}

// Upgraded function

console.log(arrayDiffUpgraded(firstArray,secondArray));
console.log(arrayDiffUpgraded(thirdArray,fourthArray));


function arrayDiffUpgraded(arrFirst,arrSecond){
 let firstTempNum = arrFirst.reduce((firstNum, secondNum) => firstNum * secondNum) - arrSecond.reduce((firstNum, secondNum) => firstNum * secondNum);
 return firstTempNum;
}