let weight = 0;
let recommendation = "";

console.log(fitnesTrainer(1));
console.log(fitnesTrainer(3));
console.log(fitnesTrainer(4));
console.log(fitnesTrainer(5));
console.log(fitnesTrainer(10));

function fitnesTrainer(weight){

    if(weight < 4){
        
         return recommendation = "Пора перекусить";
    }
    else if(weight >=4 && weight <= 5.5){
    
        return recommendation = "Вес в норме";
    }
    
        return recommendation ="Пора на тренировку";  
    }