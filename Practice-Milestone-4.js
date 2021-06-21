// first part, array with changes
let humanNamesArrayOne = ['Саша', 'Петя', 'Оксана'];
humanNamesArrayOne = ['Оксанa', 'Олег', 'Саша'];

// array were replaced with a new names on it
console.log("First Array: " + humanNamesArrayOne);

// second part, array without changes
let humanNamesArrayTwo = ['Саша', 'Петя', 'Оксана'];

// let's make a new array
let humanNamesArrayThree = ['','',''];

// third array can now become second 
humanNamesArrayThree = humanNamesArrayTwo;
humanNamesArrayThree = ['Оксанa', 'Олег', 'Саша'];

// third array names now replaced by new names on it
console.log("Second unchanged Array: " + humanNamesArrayTwo);
console.log("Third Array, replaced to second Array: " + humanNamesArrayThree);