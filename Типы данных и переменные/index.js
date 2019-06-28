// Прості типи даних
const   myNumber = 1331, 
        myString = 'Dratuty Ebat', 
        myBool = false, 
        myNull = null, 
        myUndefined = undefined;

// typeof вертає строку(рядок/string) яка показує тип операнда який стоїть після нього 
console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUndefined); 
// для null typeof вертає object  wtf?



//Складні типи даних
const   obj ={},
        array = [],
        regexp = /w+/g,
        func = function(){};
    
console.log('');
console.log(typeof obj);
console.log(typeof array);
console.log(typeof regexp);
console.log(typeof func);
// typeof для об'єкта, масіва, regexp вертає об'єкт.Для func вертає function      


//Також є поділ на  два типа данних: змінні(складні) і незміннні(прості)
//Приклад змінних типів данних:
array[0] = 12;
console.log(array);

//для незмінних
console.log(myString.toUpperCase());
console.log(myString);
//Функція toUpperCase() не змінює повністю рядок myString, а повертає новий

let a,b,c,d;
a = b = c = d = 10;
//Змінні записуються з права на ліво