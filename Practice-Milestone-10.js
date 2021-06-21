let arrayOfNames1 = ['Никита', 'aaaa', 'Анастасия', 'Дима', 'Саныч', 'Ольга'];
let arrayOfNames2 = ['Алексей', 'Семён', 'Василиса', 'Дима', 'Максим', 'Ольга'];
let arrayOfNames3 = ['Алишер', 'Ольга'];


console.log(wantedNames(arrayOfNames1));
console.log(wantedNames(arrayOfNames2));
console.log(wantedNames(arrayOfNames3));


function wantedNames(namesArr){
    const UNWANTEDNAMES = ['Дима', 'Саша', 'Ольга', 'Никита'];

    let tempArr = '';
    
    namesArr.forEach(function(item, index, array) {

        for(i = 0; i<unWantedNames.length; i++){

           if(namesArr[index] == unWantedNames[i]){
                namesArr.sort();
                tempArr = namesArr.pop();    
               delete namesArr[index] ; 
                tempArr ='';
           };
        }
    
})

return namesArr;

}
