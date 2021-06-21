let numberOfProjects = 0;
let examGrade = 0;

console.log( finalGrade(100, 12));
console.log( finalGrade(99, 0));ц
console.log( finalGrade(10, 15));
console.log( finalGrade(85, 5));
console.log( finalGrade(55, 3));
console.log( finalGrade(55, 0));
console.log( finalGrade(20, 2));
//Ваши примеры тестов мне не понятны.
// finalGrade(100, 12) => 100
// finalGrade(99, 0) => 100
// finalGrade(10, 15) => 100
// finalGrade(85, 5) => 90
// finalGrade(55, 3) => 75                                         
// finalGrade(55, 0) => 0 ... ??? 75, если оценка за экзамен больше 50 или количество выполненных проектов не менее 2.
// finalGrade(20, 2) => 0 ... ??? 

function finalGrade(examGrade,numberOfProjects){

    if(examGrade > 90 || numberOfProjects > 10){
        return 100;
    }
    else if(examGrade > 75 || numberOfProjects >= 5){
        return 90;
    }
    else if(examGrade > 50 || numberOfProjects >= 2){
        return 75;
    }
        return "0";
}