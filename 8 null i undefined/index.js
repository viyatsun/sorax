console.log(typeof null);
console.log(typeof undefined);

//Приклади undefined
let a; 
//не ініціалізована змінна
console.log(a);

let obj = {};
console.log(obj.property);
// об'єкт без властивостей

let z = [1,2,3,4,5];
console.log(z[5]);
// елемент масиву якого немає

//Якщо функція не повертає якесь значення, тоді вона повертає
//undefined


//тут просто над смиритись що на == true
console.log(undefined==null);
console.log(undefined===null);
