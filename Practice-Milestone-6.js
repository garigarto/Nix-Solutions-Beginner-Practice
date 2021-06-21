// let arrayOfNumbers = [10,20,30,50,235,3000];
// let arrayOfNumbers1 = [];

// for(i = 0; i < arrayOfNumbers.length; i++){
    
//     if(String(arrayOfNumbers[i])[0] == 1 || String(arrayOfNumbers[i])[0] == 2 || String(arrayOfNumbers[i])[0] == 5){
    
//     arrayOfNumbers1.push(arrayOfNumbers[i]);

//     }
// }
// console.log(arrayOfNumbers1);

let arrayOfNumbers = [20,30,50,235,10,10,800,200,3000];

let filterOfNumbers = arrayOfNumbers.filter(item => String(item)[0] == 1 || String(item)[0] == 2 || String(item)[0] == 5  );
alert(filterOfNumbers.sort());


