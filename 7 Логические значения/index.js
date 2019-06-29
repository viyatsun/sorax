// В типі булевому(логічному) тіпі данних є тільки два значення true and false
console.log(true);
console.log(false);
console.log(3===3);
console.log(5<2);

//У JS абсолютно кожне значення мже бути перетворене у логічне
// де буде true
console.log(Boolean(5));

//Крім
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));

//Логічні оператори
console.log("");
console.log(true&&false);
console.log(true&&true);
// Оператор && вертає true якщо два операнда true

console.log(true||false);
console.log(true||true);
// Оператор || вертає true якщо хоча б один операнд true

console.log('');
//Оператори отрицания(заперечення)
console.log(!true);
console.log(!false);
//Якщо true to false і навпаки*/

let z = 0;
    isTrue = true;
    isTrue && (z=10);
console.log(z);
/*Прікол в тому що, даний вираз міняє z тільки коли лівий 
операнд true. Якби був false, то z=0*/

//також  можна міняти значення змінних за допомогою||
let a = "Dobro";
let b = a||"zlo";
console.log(b);
/*Тут фішка в тому що в b записується значення a через те що
a true(Не пуста строка). Якби було б false то записалось "zlo" */
1



