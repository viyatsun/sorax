// Прості типи даних
const   myNumber = 1331, 
        myString = 'Dratuty', 
        myBool = false, 
        myNull = null, 
        myUndefined = undefined;

// typeof вертає строку(string) яка показує тип операнда який стоїть після нього 
console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUndefined); 
// для null typeof вертає object  wtf?



//Складні типи даних
const   obj ={name:"Vitold"},
        array = [1,10,100]
        regexp = /w+/g,
        func = function(){};
    
console.log('');
console.log(typeof obj);
console.log(typeof array);
console.log(typeof regexp);
console.log(typeof func);
// typeof для об'єкта, масіва, regexp(конструктор який шукає текст по заданим параметрам) вертає об'єкт.Для function вертає function      
