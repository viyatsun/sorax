//клас Date  потрібен для роботи з датами!!!
let date = new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getFullYear());

//Дата в JS зберігається у вигляді мілісекунд які беруть відлік  від початку 1 січня 1970
console.log(date.getTime());
//Якщо дата буле раніша ніж 1 січня 1970 результат getTime буде від'ємним
let year = new Date(1945,3,10);
console.log(year);
console.log(year.getTime());



console.log(Date.now());
//виводить актуальний час